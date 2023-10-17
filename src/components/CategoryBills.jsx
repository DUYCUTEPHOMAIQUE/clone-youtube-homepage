import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Categories = ({ categories, selectedCategory, onSelect }) => {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const TRANSLATE_AMOUNT = 200;
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current === null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      //container = containerRef.current
      if (container === null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [translate, categories]);

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            variant={selectedCategory === category ? "dark" : "default"}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r  from-50% from-white to-transparent w-24 h-full">
          <Button
            size="icon"
            variant="ghost"
            className="h-full w-auto p-2 aspect-square "
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l  from-50% from-white to-transparent w-24 h-full flex justify-end">
          <Button
            size="icon"
            variant="ghost"
            className="h-full w-auto p-2 aspect-square "
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current === null) return translate;

                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;

                if (newTranslate + width > edge) return edge - width;
                // console.log(edge, width, newTranslate);
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Categories;

// @ts-nocheck
import PageHeader from "layouts/PageHeader";
import React, { useState } from "react";
import CategoryBills from "components/CategoryBills";
import { categories } from "data/home";
import VideoGridItem from "components/VideoGridItem";
import { videos } from "data/home";
import { SideBar } from "components/SideBar";
import { SidebarProvider } from "contexts/SidebarContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <SidebarProvider>
      <div>
        <div className="max-h-screen flex flex-col ">
          <PageHeader />
          <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
            <SideBar />

            <div className="overflow-x-hidden px-3 pb-4">
              <div className="sticky top-0 bg-white z-10 pb-4">
                <CategoryBills
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelect={setSelectedCategory}
                />
              </div>
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {videos.map((video) => {
                  return <VideoGridItem key={video.id} {...video} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;

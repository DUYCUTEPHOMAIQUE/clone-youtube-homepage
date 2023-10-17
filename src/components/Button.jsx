import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["trabsition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },

    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "justify-center",
        "p-2.5",
        "items-center",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function Button({ variant = "default", size = "default", ...props }) {
  return (
    <button
      {...props}
      // @ts-ignore
      className={twMerge(buttonStyles({ variant, size }), props.className)}
    />
  );
}

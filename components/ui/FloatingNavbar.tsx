"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "./style.css";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full fixed z-[5000] top-0 left-0 right-0 px-10 py-5 rounded-none border-b border-black/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        className
      )}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      {/* Main container to separate left (logo) and right (nav) */}
      <div className="flex w-full items-center justify-between mx-7">
        
        {/* LOGO LEFT SIDE */}
        <a href="/" className="logo flex items-center">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name" style={{ fontSize: "1.3em", fontWeight:'700' }}>
            Adarsh Kumar
          </span>
          <span className="grey-color">/&gt;</span>
          
        </a>

        {/* NAV ITEMS RIGHT SIDE */}
        <div className="flex items-center space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="!cursor-pointer" style={{  }}>
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

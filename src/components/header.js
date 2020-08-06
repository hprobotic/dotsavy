import React from "react";
import Navigation from "./navigation";
import Hero from "./hero";
export default function Header() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 ">
        <header className="flex justify-between items-center py-10 text-white">
          <div>
            <a href="/">
              <h1 className="text-2xl font-bold lg:text-2xl text-gray-300">
                .savy
              </h1>
            </a>
          </div>
          <div className="text-base leading-5">
            <Navigation />
          </div>
        </header>
      </div>
    </div>
  );
}

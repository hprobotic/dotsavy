import React from "react";
export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <footer className="md:flex justify-between items-center py-10 text-white ">
          <p>&copy;2020 | .savy</p>
          <ul className="flex">
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">
                Why .savy?
              </a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">
                Terms & Conditions
              </a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

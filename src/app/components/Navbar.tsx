"use client"; // Mark this as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for navigation in the App Directory
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname(); // Get the current path
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center  justify-center px-4 py-2 bg-gray-100 shadow-md">
      <div className="flex w-[80%] items-center  justify-between ">
        <div className="text-xl font-bold text-green-600">Logo</div>
        <div className=" space-x-4">
          <Link
            href="/"
            className={`relative pb-2 ${
              pathname === "/"
                ? "text-green-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-600"
                : "text-gray-600"
            }`}
          >
            Нүүр
          </Link>
          <Link
            href="/showcase"
            className={`relative pb-2 ${
              pathname === "/showcase"
                ? "text-green-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-600"
                : "text-gray-600"
            }`}
          >
            Бидний хийсэн ажил
          </Link>
          <Link
            href="/market"
            className={`relative pb-2 ${
              pathname === "/blogs"
                ? "text-green-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-600"
                : "text-gray-600"
            }`}
          >
            Бэлэн машин
          </Link>
          <Link
            href="/contact"
            className={`relative pb-2 ${
              pathname === "/contact"
                ? "text-green-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-600"
                : "text-gray-600"
            }`}
          >
            Холбоо барих
          </Link>
        </div>
        <div className="">
          <button className="p-2 text-gray-600 focus:outline-none" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
          {open && (
            <div className="absolute right-4 top-12 flex flex-col space-y-2 bg-white p-4 shadow-md">
              <Link href="/" className={`${pathname === "/" ? "text-green-600 font-bold" : "text-gray-600"}`}>
                Нүүр
              </Link>
              <Link href="/showcase" className={`${pathname === "/showcase" ? "text-green-600 font-bold" : "text-gray-600"}`}>
                Бидний хийсэн ажил
              </Link>
              <Link href="/blogs" className={`${pathname === "/blogs" ? "text-green-600 font-bold" : "text-gray-600"}`}>
                Бидний тухай
              </Link>
              <Link href="/contact" className={`${pathname === "/contact" ? "text-green-600 font-bold" : "text-gray-600"}`}>
                Холбоо барих
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

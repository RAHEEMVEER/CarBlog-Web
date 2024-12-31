"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isNav, setIsNav] = useState<boolean>(false);

  function isClick() {
    setIsNav(!isNav);
  }
  return (
    <header className="flex justify-between items-center px-3 md:px-14 py-5 h-[75px]">
      <Link href="/" className="text-base">
        <h1 className="text-2xl font-semibold">CarPoint.</h1>
      </Link>
      <div className="block sm:hidden"><i className="ri-menu-fold-fill text-xl font-bold" onClick={isClick}></i></div>
      <nav className={`${isNav ? "z-[10] absolute left-[-10px] w-[250px] top-[73px] h-max bg-blue-800 text-white flex flex-col items-center gap-6 py-10 rounded-md" : "hidden sm:flex gap-8"}`} onClick={()=> setIsNav(false)}>
        <Link href="/" className="text-lg sm:text-base">Home</Link>
        <Link href="/About"className="text-lg sm:text-base">About</Link>
        {/* <Link href="/Cars" className="text-lg sm:text-base">Cars</Link> */}
        <Link href="/Blog" className="text-lg sm:text-base">Blog</Link>
        {/* <Link href="/" className="text-lg sm:text-base">Contact</Link> */}
      </nav>
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [isNav, setIsNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isNav) {
      gsap.to(navRef.current, { left: "-10px", duration: 0.8, ease: "power2.out" });
    } else {
      gsap.to(navRef.current, { left: "-250px", duration: 0.8, ease: "power2.in" });
    }
  }, [isNav]);

  useEffect(() => {
    const handleScroll = () => {setIsNav(false)};
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-2 md:px-14 py-5 h-[75px]">
      <Link href="/" className="text-base"><h1 className="text-2xl font-semibold">CarPoint.</h1></Link>
      <div className="block sm:hidden cursor-pointer"><i className="ri-menu-fold-fill text-xl font-bold" onClick={() => setIsNav(true)}></i></div>
      <nav className={`${isNav ? "z-[10] fixed left-[-10px] w-[250px] top-[20%] min-h-[400px] bg-blue-800 text-white flex flex-col justify-center gap-3 sm:gap-6 py-10 rounded-md" : "hidden sm:flex gap-8"}`} onClick={() => setIsNav(false)} ref={navRef}>
        <div className="block sm:hidden absolute top-4 right-4 cursor-pointer" onClick={() => setIsNav(false)}><i className="ri-xrp-line text-white text-xl"></i></div>
        <Link href="/" className="text-lg sm:text-base py-[3px] sm:hover:text-blue-800 relative group">Home<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white sm:bg-blue-700 transition-all duration-300 group-hover:w-full"></span></Link>
        <Link href="/About" className="text-lg sm:text-base py-[3px] sm:hover:text-blue-800 relative group">About<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white sm:bg-blue-700 transition-all duration-300 group-hover:w-full"></span></Link>
        <Link href="/Cars" className="text-lg sm:text-base py-[3px] sm:hover:text-blue-800 relative group">Cars<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white sm:bg-blue-700 transition-all duration-300 group-hover:w-full"></span></Link>
        <Link href="/Blog" className="text-lg sm:text-base py-[3px] sm:hover:text-blue-800 relative group">Blog<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white sm:bg-blue-700 transition-all duration-300 group-hover:w-full"></span></Link>
        <Link href="/Contact" className="text-lg sm:text-base py-[3px] sm:hover:text-blue-800 relative group">Contact<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white sm:bg-blue-700 transition-all duration-300 group-hover:w-full"></span></Link>
      </nav>
    </header>
  );
}

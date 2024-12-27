import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between px-14 py-5 h-[75px]">
       <Link href="/" className="text-base"><h1 className="text-2xl font-semibold">CarPoint.</h1></Link>
      <nav className="flex gap-8">
        <Link href="/" className="text-base">Home</Link>
        <Link href="/" className="text-base">About</Link>
        <Link href="/Cars" className="text-base">Cars</Link>
        <Link href="/Blog" className="text-base">Blog</Link>
        <Link href="/" className="text-base">Contact</Link>
      </nav>
    </header>
  );
}

"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const blogCars = [
    { id: 1, img: "/images/audi.jpg", carName: "Audi", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 2, img: "/images/bmw-i8.jpg", carName: "BMW-I8", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 3, img: "/images/bmw-m5.png", carName: "BMW-M5", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 4, img: "/images/ferrari.png", carName: "FERRARI", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 5, img: "/images/g-wagon.png", carName: "G-WAGON", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 6, img: "/images/paul-walker.png", carName: "SUPRA-MK4", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 7, img: "/images/range-rover.png", carName: "RANGE-ROVER", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { id: 8, img: "/images/sian.png", carName: "LAMBORGHNI-SIAN", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
  ];

  useEffect(() => {
    const postData = async () => {
      try {
        const res = await fetch('/api/details', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogCars)
        });

        const data = await res.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    postData();
  }, []);

  return (
    <section className="py-8 px-4 md:px-14 min-h-[88vh]">
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-semibold">Cars Blog</h1>
        <div className="after:absolute bg-blue-800 w-[100px] h-[3px] mt-1 rounded-md"></div>
        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam,</p>
      </div>
      <div className="grid grid-cols-4 min-h-[72vh] gap-5 mt-10">
        {blogCars.map((e, index) => (
          <div key={index} className="rounded-md bg-slate-500">
            <h1>{e.carName}</h1>
            <div className="w-full flex justify-center">
              <Image src={e.img} alt="Car" width={170} height={170} />
            </div>
            <p>{e.descript}</p>
            <Link href={`/${e.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

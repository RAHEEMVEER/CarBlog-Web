"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Components/Button";

export default function Page() {
  const blogCars = [
    { id: 1, img: "/images/audi.png", carName: "Audi", descript: "Audi is a luxury car brand known for its high performance, stylish design, and advanced technology." },
    { id: 2, img: "/images/i8.png", carName: "Bmw-i8", descript: "The BMW i8 is a futuristic plug-in hybrid sports car, combining performance, style, and sustainability." },
    { id: 3, img: "/images/bugatti.png", carName: "Bugatti", descript: "Bugatti is a luxury car brand known for high-performance, speed, and exceptional craftsmanship in supercars." },
    { id: 4, img: "/images/ferrari.png", carName: "Ferrari", descript: "Ferrari is a prestigious Italian sports car brand, renowned for speed, luxury, and exceptional engineering excellence." },
    { id: 5, img: "/images/m5.png", carName: "Bmw-m5", descript: "The BMW M5 is a high-performance luxury sedan, blending power, precision, and advanced driving technology." },
    { id: 6, img: "/images/mk4.png", carName: "Supra Mk4", descript: "The Toyota Supra MK4 is a legendary sports car, known for its power, tuning potential, and style." },
    { id: 7, img: "/images/range.png", carName: "Range-Rover", descript: "Range Rover is a luxury SUV, renowned for its off-road capability, comfort, and refined design." },
    { id: 8, img: "/images/mercedes.png", carName: "Mercedes", descript: "Mercedes is a luxury car brand, known for its elegant design, advanced technology, and superior performance." },
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
        <p className="mt-5 text-base">"On our website, you'll find the latest car reviews, news, and tips to assist you in car buying and maintenance."</p>
      </div>
      <div className="grid grid-cols-4 min-h-[72vh] gap-3 mt-8">
        {blogCars.map((e, index) => (
          <div key={index} className="rounded-md bg-[#4869cc] py-3 px-3">
            <h1 className="text-white text-base">{e.carName}</h1>
            <div className="w-full h-[90px] flex items-center justify-center mt-5"><Image src={e.img} alt="Car" width={170} height={170}/></div>
            <p className="text-white mt-4 text-sm">{e.descript}</p>
            <Link href={`/${e.carName}`}><Button style="mt-5 bg-white px-2 py-2 rounded-md text-sm text-black" content="Read More"/></Link>
          </div>
        ))}
      </div>
    </section>
  );
}

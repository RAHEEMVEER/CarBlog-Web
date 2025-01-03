import React from "react";
import Link from "next/link";
import Button from "../Components/Button";
import Image from "next/image";

export default function page() {
  const cars = [
    {
      img: "/images/audi.png",
      carName: "Audi",
      price: "75,000",
      liter: "75",
      pCapacity: "4",
    },
    {
      img: "/images/i8.png",
      carName: "Bmw-i8",
      price: "140,000",
      liter: "42",
      pCapacity: "2",
    },
    {
      img: "/images/bugatti.png",
      carName: "Bugatti",
      price: "3,000,000",
      liter: "100",
      pCapacity: "2",
    },
    {
      img: "/images/ferrari.png",
      carName: "Ferrari",
      price: "320,000",
      liter: "72",
      pCapacity: "2",
    },
    {
      img: "/images/m5.png",
      carName: "Bmw-m5",
      price: "108,000",
      liter: "68",
      pCapacity: "4",
    },
    {
      img: "/images/mk4.png",
      carName: "Supra-Mk4",
      price: "105,000",
      liter: "70",
      pCapacity: "2",
    },
    {
      img: "/images/range.png",
      carName: "Range-Rover",
      price: "150,000",
      liter: "85",
      pCapacity: "5",
    },
    {
      img: "/images/mercedes.png",
      carName: "Mercedes",
      price: "145,000",
      liter: "76",
      pCapacity: "4",
    },
  ];

  return (
    <section className="pt-5 pb-6 sm:pb-10 px-2 md:px-14 min-h-[88vh]">
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-semibold">Cars Showroom</h1>
        <div className="after:absolute bg-blue-800 w-[100px] h-[3px] rounded-md"></div>
        <p className="mt-5 text-sm">"Browse a wide selection of high-quality cars for sale, with competitive prices, detailed specs, and easy buying options."</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[72vh] gap-3 mt-6">
        {cars.map((e: any, index) => (
          <div key={index} className="rounded-md bg-[#4869cc] py-3 px-3">
            <h1 className="text-white text-base">{e.carName}</h1>
            <div className="w-full h-[90px] flex items-center justify-center mt-5"><Image src={e.img} alt="Car" width={170} height={170} /></div>
            <div className="flex mt-12 justify-between">
              <div className="flex gap-1 items-center"><i className="ri-gas-station-fill text-xl text-white"></i><span className="text-sm text-white">{e.liter}L</span></div>
              <div className="flex gap-1 items-center"><i className="ri-steering-2-fill text-xl text-white"></i><span className="text-sm text-white">Manual</span></div>
              <div className="flex gap-1 items-center"><i className="ri-wheelchair-fill text-xl text-white"></i><span className="text-sm text-white">{e.pCapacity}People</span></div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center"><h1 className="text-lg font-semibold text-white">${e.price}</h1><span className="text-sm font-semibold text-white ml-1">/Only</span></div>
              <Link href={`/`}><Button style="bg-white py-1 px-2 rounded-md" content="Buy" /></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function page() {
  const blogCars = [
    { img: "/public/images/audi.jpg", carName: "Audi", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/bmw-i8.jpg", carName: "BMW-I8", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/bmw-m5.png", carName: "BMW-M5", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/ferrari.png", carName: "FERRARI", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/g-wagon.png", carName: "G-WAGON", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/paul-walker.png", carName: "SUPRA-MK4", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/range-rover.png", carName: "RANGE-ROVER", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
    { img: "/public/images/sian.png", carName: "LAMBORGHNI-SIAN", descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam," },
  ];

  return (
    <section className="pt-5 px-4 md:px-14 min-h-[88vh]">
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-semibold">Cars Blog</h1>
        <div className="after:absolute bg-blue-800 w-[100px] h-[3px] mt-1 rounded-md"></div>
        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam,</p>
      </div>
      <div className="grid grid-cols-4 min-h-[72vh] gap-5">
        {blogCars.map((e, index) => (
          <div key={index} className="rounded-md bg-slate-500">
            <h1>{e.carName}</h1>
            <div><Image src={e.img} alt="Car" /></div>
            <p>{e.descript}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

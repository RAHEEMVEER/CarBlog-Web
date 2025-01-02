"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Components/Button";

export default function Page() {
  const blogCars = [
    {
      id: 1,
      img: "/images/audi.png",
      carName: "Audi",
      descript: "Audi is a luxury car brand known for its high performance, stylish design, and advanced technology.",
      para1: "The Audi features a sleek, aerodynamic design with an elegant finish. The spacious interior is crafted with premium materials, ensuring comfort for every journey.",
      para2: "Whether you're conquering long highways or winding city streets, the Audi's innovative suspension system provides a seamless ride with unmatched precision.",
      para3: "With cutting-edge lane-keeping assist, blind-spot alerts, and automatic emergency braking, the Audi prioritizes the safety of you and your loved ones.",
      para4: ` "John D., a proud owner of the says: 'I’ve never driven a car that combines style and performance so seamlessly. It’s a joy to drive every day!'"`,
      para5: "Starting at just $30,000, the Audi offers an unbeatable combination of luxury and affordability. Choose from the standard, sport, and luxury trims to suit your needs.",
      para6: "Audi’s blend of sleek design, advanced tech, and performance makes it perfect for the modern driver. Sophistication meets power. Is it right for you? Only one way to find out!",
    },
    {
      id: 2,
      img: "/images/i8.png",
      carName: "Bmw-i8",
      descript: "The BMW i8 is a futuristic plug-in hybrid sports car, combining performance, style, and sustainability.",
      para1: "The BMW i8 boasts a futuristic design with aerodynamic curves and a sporty stance. Its luxurious interior is crafted with precision, offering a seamless blend of comfort and innovation.",
      para2: "Whether you're cruising on highways or tackling city roads, the BMW i8's cutting-edge suspension system ensures a smooth drive with precise handling.",
      para3: "With adaptive lane-keeping assist, blind-spot monitoring, and advanced emergency braking, the BMW i8 ensures top-notch safety for every journey.",
      para4: `"David S., a proud owner of the BMW i8, says: 'The BMW i8 is an absolute masterpiece. Its futuristic design and stunning performance never fail to impress. Every drive feels like an adventure.'"`,
      para5: "Starting at $150,000, the BMW i8 offers futuristic performance with hybrid technology and luxury trims for every driver.",
      para6: "The BMW i8’s sleek design and hybrid powertrain offer a futuristic driving experience. It’s perfect for eco-conscious performance seekers. Is it right for you? Only one way to find out!",
    },
    {
      id: 3,
      img: "/images/bugatti.png",
      carName: "Bugatti",
      descript: "Bugatti is a luxury car brand known for high-performance, speed, and exceptional craftsmanship in supercars.",
      para1: "The Bugatti exemplifies unmatched engineering with its aerodynamic silhouette and bold presence. Its plush interior is a sanctuary of elegance, ensuring an extraordinary driving experience.",
      para2: "Whether you're pushing limits on the track or gliding through the streets, the Bugatti's advanced suspension system guarantees unparalleled comfort and control.",
      para3: "Equipped with lane-keeping technology, blind-spot detection, and precision emergency braking, the Bugatti provides an unparalleled sense of security on the road.",
      para4: `"Sophia R.", a proud owner of the Bugatti, says: 'The Bugatti is beyond words—it's a blend of raw power and exquisite craftsmanship. I love how effortlessly it commands attention on the road.'`,
      para5: "Starting at $3 million, the Bugatti offers unparalleled speed and luxury with exclusive trims designed for ultimate performance.",
      para6: "With jaw-dropping speed and unparalleled luxury, the Bugatti stands out as the ultimate performance machine. Is it right for you? Only one way to find out!",
    },
    {
      id: 4,
      img: "/images/ferrari.png",
      carName: "Ferrari",
      descript: "Ferrari is a prestigious Italian sports car brand, renowned for speed, luxury, and exceptional engineering excellence.",
      para1: "The Ferrari combines iconic styling with cutting-edge performance in a sleek, aerodynamic frame. Inside, the premium cabin delivers unmatched luxury and driving pleasure.",
      para2: "Whether you're sprinting on open roads or maneuvering through tight turns, the Ferrari's suspension system delivers a refined and responsive driving experience.",
      para3: "With intuitive lane-keeping assist, blind-spot alert, and cutting-edge emergency braking, the Ferrari keeps you and your passengers safe in style.",
      para4: `"James T., a proud owner of the Ferrari, says: 'Owning a Ferrari has been a dream. The roar of the engine, the speed, and the precision—there's nothing quite like the feeling of driving a Ferrari.'"`,
      para5: "Starting at $250,000, the Ferrari combines speed and elegance, with various trims offering exceptional performance and luxurious design.",
      para6: "The Ferrari delivers heart-racing performance and timeless elegance. If you crave luxury and speed, this is your car. Is it right for you? Only one way to find out!",
    },
    {
      id: 5,
      img: "/images/m5.png",
      carName: "Bmw-m5",
      descript: "The BMW M5 is a high-performance luxury sedan, blending power, precision, and advanced driving technology.",
      para1: "The BMW M5 stands out with its commanding design and aggressive styling. The interior offers a blend of comfort and sophistication, tailored for every enthusiast.",
      para2: "Whether you're on a high-speed run or navigating urban streets, the BMW M5's dynamic suspension system provides a perfect balance of comfort and performance.",
      para3: "Featuring lane-keeping assist, blind-spot monitoring, and a robust emergency braking system, the BMW M5 is engineered to prioritize your safety.",
      para4: `"Rachel W., a proud owner of the BMW M5, says: 'The BMW M5 is the perfect balance of power and luxury. It’s aggressive yet refined, making it the ultimate driving experience for me every time I hit the road.'"`,
      para5: "Starting at $105,000, the BMW M5 blends luxury and performance, available in multiple trims for a personalized driving experience.",
      para6: "The BMW M5 blends exhilarating performance with refined luxury. Perfect for drivers who want both power and comfort. Is it right for you? Only one way to find out!",
    },
    {
      id: 6,
      img: "/images/mk4.png",
      carName: "Supra-Mk4",
      descript: "The Toyota Supra MK4 is a legendary sports car, known for its power, tuning potential, and style.",
      para1: "The Supra MK4 is a timeless classic, featuring a streamlined design and an iconic shape. Its interior blends sporty details with premium comfort, making every drive memorable.",
      para2: "Whether you're enjoying a spirited drive or cruising through the city, the Supra MK4's engineered suspension ensures a smooth ride and remarkable stability.",
      para3: "With advanced lane assistance, blind-spot alerts, and reliable emergency braking, the Supra MK4 offers peace of mind on every drive.",
      para4: `"Mark H., a proud owner of the Supra MK4, says: 'The Supra MK4 holds a special place in my heart. It’s a classic with modern performance that never fails to excite. Driving it always brings a smile to my face.'"`,
      para5: "Starting at $40,000 (used), the Supra MK4 delivers legendary performance with a sleek design and incredible customization options.",
      para6: "The Supra MK4 combines legendary performance and sharp styling. If you’re a driving enthusiast, it’s a dream come true. Is it right for you? Only one way to find out!",
    },
    {
      id: 7,
      img: "/images/range.png",
      carName: "Range-Rover",
      descript: "Range Rover is a luxury SUV, renowned for its off-road capability, comfort, and refined design.",
      para1: "The Range Rover combines a refined design with robust capability, exuding elegance and strength. Inside, the cabin is spacious and luxurious, ensuring a comfortable journey.",
      para2: "Whether you're exploring rugged terrains or city boulevards, the Range Rover's suspension system offers unmatched smoothness and control.",
      para3: "Designed with lane-keeping support, blind-spot monitoring, and intelligent emergency braking, the Range Rover delivers unmatched safety on any terrain.",
      para4: `"Olivia B., a proud owner of the Range Rover, says: 'The Range Rover is not just a car—it’s an experience. Whether I’m navigating city streets or exploring the countryside, it delivers unmatched comfort and capability.'"`,
      para5: "Starting at $95,000, the Range Rover offers luxurious off-road capability, available in multiple trims for refined performance.",
      para6: "The Range Rover is built for those who want adventure and luxury in one package. Ideal for exploring rough terrains in comfort. Is it right for you? Only one way to find out!",
    },
    {
      id: 8,
      img: "/images/mercedes.png",
      carName: "Mercedes",
      descript: "Mercedes is a luxury car brand, known for its elegant design, advanced technology, and superior performance.",
      para1: "The Mercedes embodies sophistication with its sleek design and polished aesthetics. Its interior is crafted with attention to detail, offering an unparalleled sense of luxury.",
      para2: "Whether you're gliding along highways or weaving through urban traffic, the Mercedes' advanced suspension ensures effortless comfort and superior handling.",
      para3: "Equipped with lane-keeping assist, blind-spot detection, and responsive emergency braking, the Mercedes ensures a secure and confident driving experience.",
      para4: `"Lucas P., a proud owner of the Mercedes, says: 'The Mercedes offers a truly luxurious driving experience. It’s a perfect blend of advanced technology, style, and comfort that makes every trip feel special.'"`,
      para5: "Starting at $55,000, the Mercedes combines advanced technology and luxury, with several trims tailored for comfort and performance.",
      para6: "The Mercedes offers unmatched luxury, cutting-edge technology, and smooth performance. A refined choice for those who seek class on every drive. Is it right for you? Only one way to find out!",
    },
  ];

  const postData = async () => {
    try {
      const res = await fetch("/api/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogCars),
      });

      const data = await res.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const postCarName = async () => {
    try{
      const req = await fetch("/api/car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogCars.map((name) => name.carName)),
      });

      const res =  await req.json();
      console.log(res);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    postData();
    postCarName();
  }, []);

  return (
    <section className="pt-5 pb-10 px-2 md:px-14 min-h-[88vh]">
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-semibold">Cars Blog</h1>
        <div className="after:absolute z-[-10] bg-blue-800 w-[100px] h-[3px] mt-1 rounded-md"></div>
        <p className="mt-5 text-base">"On our website, you'll find the latest car reviews, news, and tips to assist you in car buying and maintenance."</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[72vh] gap-3 mt-8">
        {blogCars.map((e, index) => (
          <div key={index} className="rounded-md bg-[#4869cc] py-3 px-3">
            <h1 className="text-white text-base">{e.carName}</h1>
            <div className="w-full h-[90px] flex items-center justify-center mt-5"><Image src={e.img} alt="Car" width={170} height={170} /></div>
            <p className="text-white mt-4 text-sm">{e.descript}</p>
            <Link href={`/${e.carName}`}><Button style="mt-5 bg-white px-2 py-2 rounded-md text-sm text-black" content="Read More"/></Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import HeroCar from "../../public/images/car.png";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-7 xl:gap-0 min-h-[88vh] items-center py-7 sm:py-20 px-2 md:px-14 overflow-hidden">
      <div className="w-full ]md:w-[75%] lg:w-[50%] h-max self-start lg:self-auto">
        <h1 className="text-2xl sm:text-4xl font-semibold">Car Dealing Experience.</h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-blue-800 mt-1">Redefined!</h2>
        <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis quia dolor, totam, libero laborum explicabo sunt id sed, quod nulla aliquam eum quas perspiciatis aperiam incidunt ipsa facilis impedit.</p>
        <Link href="/Cars"><Button style="bg-blue-800 text-white text-sm px-3 py-2 rounded-md mt-6" content="Explore Cars"/></Link>
      </div>

      <div className="relative flex items-center w-full sm:w-[50%] h-[300px] self-end sm:self-auto">
        <div className="flex items-center justify-center absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] border-[15px] sm:border-[20px] right-[-20px] border-blue-800 rotate-45">
          <Image src={HeroCar} alt="Car" className="absolute rotate-[-45deg] left-[-80px] top-[70px] sm:left-[-145px] md:left-[-180px] md:top-[110px] max-w-[280px] sm:max-w-[400px] md:max-w-[500px]"/>
        </div>
      </div>
    </section>
  );
}

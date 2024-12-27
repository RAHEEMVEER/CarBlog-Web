import React from "react";

export default function page() {

  const blogCars = [{}]

  return (
    <section className="pt-5 px-4 md:px-14 min-h-[88vh]">
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-semibold">Cars Showroom</h1>
        <div className="after:absolute bg-blue-800 w-[100px] h-[3px] rounded-md"></div>
        <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ab inventore possimus natus deleniti quibusdam aperiam,</p>
      </div>
      <div className="grid grid-cols-4 min-h-[72vh]">
        {blogCars.map((e:any)=>(<div></div>))}
      </div>
    </section>
  );
}

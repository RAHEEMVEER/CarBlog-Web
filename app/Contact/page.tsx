import React from "react";

export default function page() {
  return (
    <section className="flex flex-col justify-center items-center min-h-[80vh]">
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-semibold">Contact Us!</h1>
        <div className="after:absolute z-[-10] bg-blue-800 w-[70px] h-[3px] rounded-md"></div>
      </div>

      <form className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] h-max grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 mt-5">
        <input type="text" placeholder="First Name" className="p-2 rounded-md bg-gray-200 outline-blue-700" required/>
        <input type="text" placeholder="Last Name" className="p-2 rounded-md bg-gray-200 outline-blue-700" required/>
        <input type="number" placeholder="Mobile" className="p-2 rounded-md bg-gray-200 outline-blue-700" required/>
        <input type="email" placeholder="Email" className="p-2 rounded-md bg-gray-200 outline-blue-700" required/>
        <textarea className="sm:col-span-2 w-full h-[150px] p-2 bg-gray-200 resize-none rounded-md outline-blue-700" placeholder="Message..." required></textarea>
        <div className="sm:col-span-2 flex mt-1"><button type="submit" className="bg-blue-700 text-white py-2 px-3 rounded-md text-base">Submit</button></div>
      </form>
    </section>
  );
}

"use client";

import React from "react";
import { useEffect, useState } from "react";

interface Car {
  id: number;
  img: string;
  carName: string;
  descript: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  para5: string;
  para6: string;
}

const CarPage = ({ params }: any) => {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await fetch(`/api/details?name=${params.carName}`);
        const data = await res.json();
        setCar(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    getCar();
  }, []);

  if (!car)
    return (
      <div className="absolute left-[50%] top-[50%] text-xl min-h-[80vh]">Loading...</div>
    );

  return (
    <div className="py-5 pb-8 sm:pb-14 px-2 lg:px-14 min-h-[88vh]">
      <div className="w-full flex justify-center mt-5">
        <div className="w-full md:w-[75%]">
          {/* Introduction Section */}
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold text-start sm:text-center md:whitespace-nowrap text-gray-800">Discover the Ultimate Driving Experience with {car.carName}:</h1>

          {/* Features Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">Unveiling the Powerful Features of the {car.carName}:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Engine:</span> 2.0L Turbocharged</li>
              <li><span className="font-semibold">Horsepower:</span> 250 HP</li>
              <li><span className="font-semibold">Fuel Efficiency:</span> 30 MPG</li>
            </ul>
          </div>

          {/* Design Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">Aesthetic Design Meets Comfort:</h2>
            <p className="text-gray-600 text-sm sm:text-base">{car.para1}</p>
            <div className="flex justify-center mt-10"><img src={car.img} alt={car.carName} className="w-[60%]" /></div>
          </div>

          {/* Performance Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">Unmatched Performance for Every Road:</h2>
            <p className="text-gray-600 text-sm sm:text-base">{car.para2}</p>
          </div>

          {/* Technology Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">Innovative Technology at Your Fingertips:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Apple CarPlay</span></li>
              <li><span className="font-semibold">Android Auto</span></li>
              <li><span className="font-semibold">Touchscreen Navigation</span></li>
            </ul>
          </div>

          {/* Safety Features Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">Safety First: A Drive You Can Trust.</h2>
            <p className="text-gray-600 text-sm sm:text-base">{car.para3}</p>
          </div>

          {/* Customer Review Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">What Drivers Are Saying About the {car.carName}?</h2>
            <p className="italic text-gray-600 text-sm sm:text-base">{car.para4}</p>
          </div>

          {/* Price Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">The {car.carName}: Affordable Luxury</h2>
            <p className="text-gray-600 text-sm sm:text-base">{car.para5}</p>
          </div>

          {/* Conclusion Section */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-700 mb-3">Is the {car.carName} the Right Choice for You?</h2>
            <p className="text-gray-600 text-sm sm:text-base">{car.para6}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;

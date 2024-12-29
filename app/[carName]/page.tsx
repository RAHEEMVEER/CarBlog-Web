"use client";

import React from "react";
import { useEffect, useState } from "react";

interface Car {
  id: number;
  img: string;
  carName: string;
  descript: string;
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
      <div className="absolute left-[50%] top-[50%] text-xl">Loading...</div>
    );

  return (
    <div className="py-5 px-4 md:px-14 min-h-[88vh]">
      <div className="w-full flex justify-center mt-5">
        <div className="w-[75%]">
          {/* Introduction Section */}
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            Discover the Ultimate Driving Experience with {car.carName}
          </h1>

          {/* Features Section */}
          <div className="mt-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Unveiling the Powerful Features of the {car.carName}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Engine:</span> 2.0L Turbocharged
              </li>
              <li>
                <span className="font-semibold">Horsepower:</span> 250 HP
              </li>
              <li>
                <span className="font-semibold">Fuel Efficiency:</span> 30 MPG
              </li>
            </ul>
          </div>

          {/* Design Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Aesthetic Design Meets Comfort
            </h2>
            <p className="text-gray-600 mb-5">
              The {car.carName} features a sleek, aerodynamic design with an
              elegant finish. The spacious interior is crafted with premium
              materials, ensuring comfort for every journey.
            </p>
            <div className="flex justify-center">
              <img src={car.img} alt={car.carName} className="w-[60%]" />
            </div>
          </div>

          {/* Performance Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Unmatched Performance for Every Road
            </h2>
            <p className="text-gray-600">
              Whether you're on the highway or navigating through city streets,
              the {car.carName}'s advanced suspension system ensures a smooth
              ride while maintaining exceptional control.
            </p>
          </div>

          {/* Technology Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Innovative Technology at Your Fingertips
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Apple CarPlay</span>
              </li>
              <li>
                <span className="font-semibold">Android Auto</span>
              </li>
              <li>
                <span className="font-semibold">Touchscreen Navigation</span>
              </li>
            </ul>
          </div>

          {/* Safety Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Safety First: A Drive You Can Trust
            </h2>
            <p className="text-gray-600">
              With lane-keeping assist, blind-spot monitoring, and automatic
              emergency braking, the {car.carName} ensures you and your loved
              ones are always safe on the road.
            </p>
          </div>

          {/* Customer Review Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              What Drivers Are Saying About the {car.carName}
            </h2>
            <p className="italic text-gray-600">
              "John D., a proud owner of the {car.carName}, says: 'I’ve never
              driven a car that combines style and performance so seamlessly.
              It’s a joy to drive every day!'"
            </p>
          </div>

          {/* Price Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              The {car.carName}: Affordable Luxury
            </h2>
            <p className="text-gray-600">
              Starting at just $30,000, the {car.carName} offers an unbeatable
              combination of luxury and affordability. Choose from the standard,
              sport, and luxury trims to suit your needs.
            </p>
          </div>

          {/* Conclusion Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Is the {car.carName} the Right Choice for You?
            </h2>
            <p className="text-gray-600">
              With its powerful performance, cutting-edge technology, and
              elegant design, the {car.carName} is a perfect choice for anyone
              looking to make a statement on the road. Is it the right car for
              you? Only one way to find out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;

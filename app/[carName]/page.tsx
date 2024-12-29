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
        console.error('Error fetching car data:', error);
      }
    };
    getCar();
  }, []);

  if (!car) return <div className="absolute left-[50%] top-[50%] text-xl">Loading...</div>;

  return (
    <div>
      <h1>{car.carName}</h1>
      <img src={car.img} alt={car.carName} className="w-[300px]"/>
    </div>
  );
};

export default CarPage;

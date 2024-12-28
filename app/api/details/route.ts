import { NextRequest, NextResponse } from 'next/server';

interface CarDataBase {
  id: number;
  img: string;
  carName: string;
  descript: string;
}

let carsDatabase:CarDataBase[] = [];

export async function POST(request:NextRequest) {
  try {
    const data = await request.json();
    carsDatabase = data;
    return NextResponse.json({ message: "Data saved successfully!", carsDatabase });
  } catch (error) {
    return NextResponse.json({ message: "Failed to save data", error: error }, { status: 500 });
  }
}

export async function GET(request:NextRequest) {
  const { searchParams } = new URL(request.url);
  const carId = Number(searchParams.get("id"));
  const car = carsDatabase.find((car) => car.id === carId);

  if (!car) {
    return NextResponse.json({ message: "Car not found" }, { status: 404 });
  }

  return NextResponse.json(car);
}

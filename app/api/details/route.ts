import { NextRequest, NextResponse } from "next/server";

interface CarDataBase {
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

let carsDatabase: CarDataBase[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    carsDatabase = data;
    return NextResponse.json({ message: "Data saved successfully!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to save data", error: error },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const carName = searchParams.get("name");
  const car = carsDatabase.find((car) => car.carName === carName);

  if (!car) {
    return NextResponse.json({ message: "Car not found" }, { status: 404 });
  }

  return NextResponse.json(car);
}

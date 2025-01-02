import { NextResponse, NextRequest } from "next/server";

interface Names {
  carname: string;
}

let carNames: Names[] = [];

export async function GET() {
  return NextResponse.json(carNames);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  carNames = data.map((car:any) => ({ carname: car }));

  if (!carNames || carNames.length === 0) {
    return NextResponse.json({ message: "carName Not Received" });
  }
  return NextResponse.json({ message: "carName has Received", data: carNames });
}

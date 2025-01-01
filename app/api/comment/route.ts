import { NextResponse, NextRequest } from "next/server";

interface Comment {
  inputVal: string;
  carName: string;
}

const userComment: Comment[] = [];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const carName = searchParams.get("carName");
  const data = userComment.filter((car) => car.carName === carName);

  if (data.length === 0) {
    return NextResponse.json({ message: "No comments found" }, { status: 404 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  if (data.inputVal && data.carName) {
    userComment.push(data);
    return NextResponse.json(
      { message: "Comment successfully received" },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { message: "Invalid comment data" },
    { status: 400 }
  );
}

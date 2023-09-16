import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const url = request.nextUrl;
  const name = url.searchParams.get("name");
  const age = url.searchParams.get("age");
  const query = url.searchParams.has("name");

  //   if (query) {
  //     return NextResponse.json("Hello brother");
  //   }

  if (age == "25" || age == "26") {
    return NextResponse.json(`Hellow ${name}`);
  }

  return NextResponse.json({ url, name, age, query });
}

export async function POST(request: NextRequest) {
  const { name, age, id } = await request.json();

  return NextResponse.json(`User ${name} Created`);
}

export async function PUT(request: NextRequest) {
  const { name, age, id } = await request.json();

  return NextResponse.json(`User ${name} Updated`);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  return NextResponse.json(`User Deleted`);
}


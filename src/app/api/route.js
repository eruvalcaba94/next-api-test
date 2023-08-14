import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch('https://dummyjson.com/products')

  if (!res.ok)  {
    throw new Error ('invaild response')
  }

  return NextResponse.json()
}
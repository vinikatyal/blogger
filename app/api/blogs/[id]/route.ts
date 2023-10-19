import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blogs";
import { NextResponse } from "next/server";



export async function PUT(request: Request, { params }: any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Blog updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  const db  = await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}
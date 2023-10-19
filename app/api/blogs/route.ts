import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blogs";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const { title, description } = await request.json();
  await connectMongoDB();
  const slug = title?.replace(/\s+/g, '-').toLowerCase()
  await Blog.create({ title, description, slug });
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET(): Promise<Response> {
  const db = await connectMongoDB();
  const blogsNew = await db?.collection('blogs').find().sort({ date: -1 }).toArray()
  console.log('New blogs', blogsNew)
  const blogs = await Blog.find();
  console.log('Old blogs', blogs)
  return NextResponse.json({ blogs });
}

export async function DELETE(request: any): Promise<Response> {
  const id = request?.nextUrl?.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}

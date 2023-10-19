"use client";

import { Blog } from "@/types/blog"

export default function ViewBlog({ id, title, description, slug }: Blog) {

    return (
        <div>
            <h2>Title: {title}</h2>
            <div>{description}</div>
        </div>
    );
}
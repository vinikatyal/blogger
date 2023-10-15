"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Blog } from "@/types/blog"

export default function ViewBlog({ id, title, description }: Blog) {

    return (
        <div>
            <h2>Title: {title}</h2>
            <div>{description}</div>
        </div>
    );
}
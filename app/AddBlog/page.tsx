"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify"

export default function AddBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!title || !description) {
            toast.warning("Title and description are required.");
            return;
        }

        try {
            const res = await fetch(`/api/blogs`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.refresh();
                router.push("/");
            } else {
                throw new Error("Failed to create an article");
            }
        } catch (error) {
            return { message: error, success: false }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Blog Title"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Blog Description"
            />

            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
                Add Blog Article
            </button>
        </form>
    );
}
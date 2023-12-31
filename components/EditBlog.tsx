"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Blog } from "@/types/blog"

export default function EditTopicForm({ id, title, description }: Blog) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/blogs/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update blogs");
            }

            router.refresh();
            router.push("/");
        } catch (error) {
            return { message: error, success: false }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Blog Title"
            />

            <textarea
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2"
                placeholder="Topic Description"
            />

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Update Blog
            </button>
        </form>
    );
}
import Link from "next/link";
import RemoveBtn from "./Remove";

import { BASE_URL } from "@/libs/constants";

type BlogProps = {
    _id: string;
    title: string;
    description: string;
}

const getBlogs = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/blogs`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return res.json();
    } catch (error) {
        return {}
    }
};

export default async function BlogList() {
    const { blogs } = await getBlogs();

    return (
        <>
            {blogs && blogs.map((b: BlogProps) => (
                <div
                    key={b._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{b.title}</h2>
                        <div>{b.description}</div>
                        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={`/ViewBlog/${b._id}`}>
                            Read More
                        </Link>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={b._id} />
                        <Link href={`/EditBlog/${b._id}`}>
                            Edit
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
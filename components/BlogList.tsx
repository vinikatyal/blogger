import Link from "next/link";
import RemoveBtn from "./Remove";


type BlogProps = {
    _id: string;
    title: string;
    description: string;
}

const getBlogs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/blogs", {
            cache: "no-store",
        });

        console.log(res)

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

    console.log(blogs)

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
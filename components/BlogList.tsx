import Link from "next/link";
import RemoveBtn from "./Remove";


type BlogProps = {
    id: number;
    title: string;
    description: string;
}

const getBlogs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/blogs", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading blogs: ", error);
    }
};

export default async function BlogList() {
    const { blogs } = await getBlogs();

    return (
        <>
            {blogs.map((b: BlogProps) => (
                <div
                    key={b.id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{b.title}</h2>
                        <div>{b.description}</div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={b.id} />
                        <Link href={`/editTopic/${b.id}`}>
                            Edit
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
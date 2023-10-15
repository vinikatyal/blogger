import EditBlogForm from "@/components/EditBlog";

import { BASE_URL } from "@/libs/constants";

const getBlogById = async (id: any) => {
    try {
        const res = await fetch(`${BASE_URL}/api/blogs/${id}`, {
            cache: "no-store",
        });

        console.log(id)

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return res.json();
    } catch (error) {
        return { message: error, success: false }
    }
};

export default async function EditBlog({ params }: any) {
    const { id } = params;
    const { blog } = await getBlogById(id);
    const { title, description } = blog;


    return <>{id && <EditBlogForm id={id} title={title} description={description} />}
        {!id && <div>No Data available</div>}
    </>;
}
import ViewBlogForm from "@/components/ViewBlog";
import Head from 'next/head'

import { BASE_URL } from "@/libs/constants";

const getBlogById = async (slug: any) => {
    try {
        const res = await fetch(`${BASE_URL}/api/blogs/${slug}`, {
            cache: "no-store",
        });

        console.log(slug)

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return res.json();
    } catch (error) {
        return { message: error, success: false }
    }
};

export default async function ViewBlog({ params }: any) {
    const { id } = params;
    const { blog } = await getBlogById(id);
    const { title, description, slug } = blog;


    return <>{id && <div>  <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="desc"
        />
    </Head> <ViewBlogForm id={id} title={title} description={description} slug={slug} /> </div>}
        {!id && <div>No Data available</div>}
    </>;
}
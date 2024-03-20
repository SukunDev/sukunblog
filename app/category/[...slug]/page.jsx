import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function Categories({ params }) {
  const { posts, meta_paginator } = await getPosts({ params });

  return (
    <>
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>Category : {params.slug[0].replaceAll("-", " ")}</h2>
        </div>
        <AllArticle posts={posts} meta_paginator={meta_paginator} />
      </MainLayout>
    </>
  );
}

const getPosts = async ({ params }) => {
  try {
    const PAGE_SIZE = 6;

    const slug = params.slug[0];
    const page = params.slug[1] || 1;

    const offset = (page - 1) * PAGE_SIZE;

    const supabase = createClient();
    const {
      data: posts,
      count,
      error,
    } = await supabase
      .from("posts")
      .select(
        `
        id,
        title,
        slug,
        thumbnail,
        content,
        categories!inner (
          id,
          name,
          slug
        ),
        visibility,
        created_at
      `,
        { count: "exact" }
      )
      .eq("categories.slug", slug)
      .eq("visibility", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + PAGE_SIZE - 1);

    const lastPage = Math.ceil(count / PAGE_SIZE);

    if (error) {
      return notFound();
    }

    return {
      posts,
      meta_paginator: {
        current_page: 1,
        last_page: lastPage,
      },
    };
  } catch (error) {
    return notFound();
  }
};

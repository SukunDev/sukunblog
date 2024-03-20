import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function Home() {
  const { posts, meta_paginator } = await getPosts();

  return (
    <>
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>explore article</h2>
        </div>
        <AllArticle posts={posts} meta_paginator={meta_paginator} />
      </MainLayout>
    </>
  );
}

const getPosts = async () => {
  try {
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
        categories (
          id,
          name,
          slug
        ),
        visibility,
        created_at
      `,
        { count: "exact" }
      )
      .eq("visibility", true)
      .order("created_at", { ascending: false })
      .range(0, 6);

    const lastPage = Math.ceil(count / 6);

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

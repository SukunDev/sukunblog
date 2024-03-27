import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPostsCategories } from "@/utils/clientAction";

export default async function Categories({ params }) {
  const { posts, meta_paginator } = await getPostsCategories({ params });

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

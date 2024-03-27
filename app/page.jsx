import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPosts } from "@/utils/clientAction";

export default async function Home() {
  const { posts, meta_paginator } = await getPosts({ params: { page: 1 } });

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

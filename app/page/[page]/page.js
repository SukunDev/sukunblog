import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPosts } from "@/utils/clientAction";
import { redirect } from "next/navigation";
import React from "react";

export default async function PostsPage({ params }) {
  if (params.page == 1) redirect("/");
  const { posts, meta_paginator } = await getPosts({ params });

  return (
    <MainLayout>
      <div className="mx-auto text-3xl font-semibold capitalize w-fit">
        <h2>explore article</h2>
      </div>
      <AllArticle posts={posts} meta_paginator={meta_paginator} />
    </MainLayout>
  );
}

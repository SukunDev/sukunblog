import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPosts } from "@/utils/clientAction";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_TITLE} - ${process.env.NEXT_PUBLIC_DESCRIPTION}`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: process.env.NEXT_PUBLIC_TITLE,
    locale: "id_ID",
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/thumbnail.png`,
      },
    ],
  },
};

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

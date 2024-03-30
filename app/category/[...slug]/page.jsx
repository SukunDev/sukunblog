import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPostsCategories } from "@/utils/clientAction";
import { capitalize } from "@/utils/heper";

export async function generateMetadata({ params }) {
  return {
    title: `${capitalize(params.slug[0].replaceAll("-", " "))} Archives - ${
      process.env.NEXT_PUBLIC_TITLE
    }`,
    alternates: {
      canonical: `/category/${params.slug[0]}`,
    },
    openGraph: {
      title: `${capitalize(params.slug[0].replaceAll("-", " "))} - ${
        process.env.NEXT_PUBLIC_TITLE
      }`,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      url: `${process.env.NEXT_PUBLIC_URL}/category/${params.slug[0]}`,
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
}

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

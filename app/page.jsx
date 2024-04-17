import AllArticle from "@/components/allArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPosts } from "@/utils/clientAction";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_TITLE} - ${process.env.NEXT_PUBLIC_SHORT_DESCRIPTION}`,
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

const jsonLd = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": `${process.env.NEXT_PUBLIC_URL}/#webpage`,
    name: `${process.env.NEXT_PUBLIC_TITLE} - ${process.env.NEXT_PUBLIC_SHORT_DESCRIPTION}`,
    url: `${process.env.NEXT_PUBLIC_URL}/`,
    lastReviewed: "2024-03-27T15:49:31.176021+00:00",
    dateCreated: "2024-03-27T15:49:31.176021+00:00",
    inLanguage: "id",
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    mainEntity: {
      "@type": "Article",
      mainEntityOfPage: `${process.env.NEXT_PUBLIC_URL}/`,
      headline: `${process.env.NEXT_PUBLIC_TITLE} - ${process.env.NEXT_PUBLIC_SHORT_DESCRIPTION}`,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: "",
      datePublished: "2024-03-27T15:49:31.176021+00:00",
      dateModified: "2024-03-27T15:49:31.176021+00:00",
      author: {
        "@type": "Person",
        name: process.env.NEXT_PUBLIC_AUTHOR,
        description: "A passionate fullstack developer from Indonesia",
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
        sameAs: [process.env.NEXT_PUBLIC_URL],
        image: {
          "@type": "ImageObject",
          url: "https://avatars.githubusercontent.com/u/83165558?v=4",
          height: 460,
          width: 460,
        },
      },
      publisher: {
        "@type": "Organization",
        name: process.env.NEXT_PUBLIC_TITLE,
        url: process.env.NEXT_PUBLIC_URL,
        logo: {
          "@type": "ImageObject",
          url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
          width: 8504,
          height: 8504,
        },
      },
      image: {
        "@type": "ImageObject",
        "@id": `${process.env.NEXT_PUBLIC_URL}/#primaryimage`,
        url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
        width: 8504,
        height: 8504,
      },
    },
    reviewedBy: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_TITLE,
      url: process.env.NEXT_PUBLIC_URL,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
        width: 8504,
        height: 8504,
      },
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "NewsMediaOrganization",
    "@id": `${process.env.NEXT_PUBLIC_URL}#Organization`,
    name: process.env.NEXT_PUBLIC_TITLE,
    url: `${process.env.NEXT_PUBLIC_URL}`,
    sameAs: [],
    logo: {
      "@type": "ImageObject",
      url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
      width: 8504,
      height: 8504,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+62-853-3611-7892",
      url: `${process.env.NEXT_PUBLIC_URL}/contact/`,
    },
  },
];

export default async function Home() {
  const { posts, meta_paginator } = await getPosts({ params: { page: 1 } });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>explore article</h2>
        </div>
        <AllArticle posts={posts} meta_paginator={meta_paginator} />
      </MainLayout>
    </>
  );
}

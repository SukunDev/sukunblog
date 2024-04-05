"use server";

import SingleArticle from "@/components/singleArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPost } from "@/utils/clientAction";
import { formatDate } from "@/utils/heper";
import Link from "next/link";
import React from "react";
import {
  PiCalendarCheck,
  PiCaretRightBold,
  PiPencilSimple,
} from "react-icons/pi";

export async function generateMetadata({ params }) {
  const { post } = await getPost({ params });
  return {
    alternates: {
      canonical: `/${post.slug}`,
    },
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      url: `${process.env.NEXT_PUBLIC_URL}/${post.slug}`,
      siteName: process.env.NEXT_PUBLIC_TITLE,
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/${post.thumbnail}`,
        },
      ],
    },
  };
}

export default async function SinglePost({ params }) {
  const { post } = await getPost({ params });

  const jsonLd = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "@id": `${process.env.NEXT_PUBLIC_URL}/${post.slug}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": `${process.env.NEXT_PUBLIC_URL}`,
            name: process.env.NEXT_PUBLIC_TITLE,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `${process.env.NEXT_PUBLIC_URL}/category/${post.categories.slug}`,
            name: post.categories.name,
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": `${process.env.NEXT_PUBLIC_URL}/${post.slug}`,
            name: post.title,
          },
        },
      ],
    },
    {
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_URL}/${post.slug}/#webpage`,
      name: post.title,
      url: `${process.env.NEXT_PUBLIC_URL}/${post.slug}/`,
      lastReviewed: post.created_at,
      dateCreated: post.created_at,
      inLanguage: "id",
      description: post.meta_description,
      mainEntity: {
        "@type": "Article",
        mainEntityOfPage: `${process.env.NEXT_PUBLIC_URL}/${post.slug}/`,
        headline: post.title,
        description: post.meta_description,
        keywords: post.meta_keywords,
        datePublished: post.created_at,
        dateModified: post.created_at,
        author: {
          "@type": "Person",
          name: process.env.NEXT_PUBLIC_AUTHOR,
          description: "A passionate fullstack developer from Indonesia",
          url: `${process.env.NEXT_PUBLIC_URL}/about`,
          sameAs: [process.env.NEXT_PUBLIC_URL],
          image: {
            "@type": "ImageObject",
            url: "https://avatars.githubusercontent.com/u/83165558?v=4",
            height: 96,
            width: 96,
          },
        },
        publisher: {
          "@type": "Organization",
          name: process.env.NEXT_PUBLIC_TITLE,
          url: process.env.NEXT_PUBLIC_URL,
          logo: {
            "@type": "ImageObject",
            url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
            width: "500",
            height: "500",
          },
        },
        image: [
          {
            "@type": "ImageObject",
            "@id": `${process.env.NEXT_PUBLIC_URL}/${post.slug}/#primaryimage`,
            url: post.thumbnail,
            width: "2306",
            height: "1297",
            caption: post.title,
          },
        ],
      },
      reviewedBy: {
        "@type": "Organization",
        name: process.env.NEXT_PUBLIC_TITLE,
        url: process.env.NEXT_PUBLIC_URL,
        logo: {
          "@type": "ImageObject",
          url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
          width: "500",
          height: "500",
        },
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainLayout>
        <div className="flex flex-col overflow-hidden">
          <ul className="flex items-center gap-2 p-2 text-sm font-medium bg-gray-100 rounded-lg line-clamp-1 text-nowrap text-slate-700">
            <li>
              <Link href={process.env.NEXT_PUBLIC_URL}>Home</Link>
            </li>
            <li>
              <PiCaretRightBold className="text-gray-500" />
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/category/${post.categories.slug}`}
              >
                {post.categories.name}
              </Link>
            </li>
            <li>
              <PiCaretRightBold className="text-gray-500" />
            </li>
            <li className="font-normal text-slate-500">{post.title}</li>
          </ul>
          <div className="mt-8 text-3xl font-semibold">
            <h2>{post.title}</h2>
          </div>
          <ul className="flex items-center gap-2 mt-4 text-sm text-slate-500">
            <li>
              <PiPencilSimple className="inline -mt-0.5" /> Sukundev
            </li>
            <li>
              <PiCalendarCheck className="inline -mt-0.5" />{" "}
              {formatDate(post.created_at)}
            </li>
          </ul>
          <SingleArticle post={post} />
        </div>
      </MainLayout>
    </>
  );
}

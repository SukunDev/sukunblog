"use client";

import useImage from "@/hooks/useImage";
import Link from "next/link";
import React from "react";

export default function ArticleCard({ post }) {
  const { loaded } = useImage({ src: post.thumbnail });

  return (
    <>
      <div className="flex flex-col group">
        <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-3xl">
          {loaded ? (
            ""
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          )}
          <img
            src={post.thumbnail}
            className={
              (loaded
                ? "opacity-100 blur-0 scale-100 rotate-0"
                : "opacity-0 blur-xl scale-125 -rotate-6") +
              " transition duration-1000 w-full h-full object-cover hover:scale-110 hover:-rotate-3"
            }
            alt={post.title}
            loading="lazy"
          />
        </div>
        <Link
          className="block px-3 py-0.5 text-xs text-white hover:bg-indigo-600 transition duration-300 bg-indigo-700 rounded-full w-fit mt-4"
          href={`/category/${post.categories.slug}`}
        >
          {post.categories.name}
        </Link>
        <h2>
          <Link
            className="block mt-3 text-lg font-semibold transition duration-300 sm:text-xl md:text-lg line-clamp-2 hover:text-blue-500"
            href={post.slug}
          >
            {post.title}
          </Link>
        </h2>
        <div className="mt-3 text-sm text-gray-500 sm:text-base md:text-sm line-clamp-3">
          <p>{post.content.replace(/<[^>]*>?/gm, "").substring(0, 180)}</p>
        </div>
      </div>
    </>
  );
}

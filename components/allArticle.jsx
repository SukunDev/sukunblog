"use client";

import React from "react";
import ArticleCard from "./articleCard";
import Paginations from "./paginations";

export default function AllArticle({ posts, meta_paginator }) {
  return (
    <>
      {posts.length > 0 ? (
        <>
          <article className="grid grid-cols-1 gap-8 mt-16 sm:gap-16 md:gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </article>
          <Paginations meta_paginator={meta_paginator} />
        </>
      ) : (
        <h2>Empty</h2>
      )}
    </>
  );
}

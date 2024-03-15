import React from "react";
import ArticleCard from "./articleCard";
import { createClient } from "@/utils/supabase/server";

export default async function AllArticle() {
  const posts = await getPosts();
  return (
    <>
      {posts.length > 0 ? (
        <article className="grid grid-cols-1 gap-8 mt-16 sm:gap-16 md:gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </article>
      ) : (
        <h2>Empty</h2>
      )}
    </>
  );
}

const getPosts = async () => {
  try {
    const supabase = createClient();
    const { data: posts, error } = await supabase.from("posts").select(`
    id,
    title,
    slug,
    thumbnail,
    content,
    categories (
      id,
      name,
      slug
    )
  `);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

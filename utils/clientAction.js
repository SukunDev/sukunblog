import { notFound } from "next/navigation";
import { createClient } from "./supabase/client";

export async function getAllPosts() {
  try {
    const supabase = createClient();
    const { data: posts, error } = await supabase
      .from("posts")
      .select(
        `
          id,
          slug,
          visibility,
          created_at
        `
      )
      .eq("visibility", true)
      .order("created_at", { ascending: false });

    return {
      posts,
    };
  } catch (error) {
    return notFound();
  }
}

export async function getPosts({ params }) {
  try {
    const PAGE_SIZE = 6;

    const page = parseInt(params.page);
    const offset = (page - 1) * PAGE_SIZE;
    const supabase = createClient();
    const {
      data: posts,
      count,
      error,
    } = await supabase
      .from("posts")
      .select(
        `
          id,
          title,
          slug,
          thumbnail,
          content,
          categories (
            id,
            name,
            slug
          ),
          visibility,
          created_at
        `,
        { count: "exact" }
      )
      .eq("visibility", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + PAGE_SIZE - 1);

    const lastPage = Math.ceil(count / PAGE_SIZE);

    if (error) {
      return notFound();
    }

    return {
      posts,
      meta_paginator: {
        current_page: page,
        last_page: lastPage,
      },
    };
  } catch (error) {
    return notFound();
  }
}

export async function getPostsCategories({ params }) {
  try {
    const PAGE_SIZE = 6;

    const slug = params.slug[0];
    const page = params.slug[1] || 1;

    const offset = (page - 1) * PAGE_SIZE;

    const supabase = createClient();
    const {
      data: posts,
      count,
      error,
    } = await supabase
      .from("posts")
      .select(
        `
        id,
        title,
        slug,
        thumbnail,
        content,
        categories!inner (
          id,
          name,
          slug
        ),
        visibility,
        created_at
      `,
        { count: "exact" }
      )
      .eq("categories.slug", slug)
      .eq("visibility", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + PAGE_SIZE - 1);

    const lastPage = Math.ceil(count / PAGE_SIZE);

    if (error) {
      return notFound();
    }

    return {
      posts,
      meta_paginator: {
        current_page: 1,
        last_page: lastPage,
      },
    };
  } catch (error) {
    return notFound();
  }
}

export async function getPost({ params }) {
  try {
    const slug = params.slug;

    const supabase = createClient();
    const { data: post, error } = await supabase
      .from("posts")
      .select(
        `
      id,
      title,
      slug,
      thumbnail,
      content,
      categories (
        id,
        name,
        slug
      ),
      visibility,
      meta_description,
      meta_keywords,
      created_at
    `
      )
      .eq("slug", slug)
      .eq("visibility", true)
      .single();

    if (error) {
      return notFound();
    }
    return { post };
  } catch (error) {
    return notFound();
  }
}

export async function getProjects() {
  try {
    const supabase = createClient();
    const { data: projects, error } = await supabase
      .from("projects")
      .select(`*`)
      .order("created_at", { ascending: false })
      .limit(4);

    return {
      projects,
      error,
    };
  } catch (error) {
    return notFound();
  }
}

export async function getNewPosts() {
  try {
    const supabase = createClient();
    const { data: new_posts, error } = await supabase
      .from("posts")
      .select(`id, title, slug, visibility, created_at`)
      .order("created_at", { ascending: false })
      .eq("visibility", true)
      .limit(5);

    return {
      new_posts,
    };
  } catch (error) {
    return notFound();
  }
}

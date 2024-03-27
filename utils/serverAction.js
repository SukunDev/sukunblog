"use server";

import { notFound } from "next/navigation";
import { createClient } from "./supabase/server";

export async function login({ formData }) {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(formData);
  return { error };
}

export async function getUser() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  return { data, error };
}

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getPosts({ params }) {
  const PAGE_SIZE = 10;

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
    .order("created_at", { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (error) {
    return { data: { posts }, error };
  }

  return {
    data: {
      posts,
      meta_paginator: {
        current_page: page,
        last_page: Math.ceil(count / PAGE_SIZE),
      },
    },
    error,
  };
}

export async function getPost({ params }) {
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
      created_at
    `
    )
    .eq("slug", slug)
    .single();

  if (error) {
    return notFound();
  }
  return { post };
}

export async function getPages({ params }) {
  const PAGE_SIZE = 10;

  const page = parseInt(params.page);
  const offset = (page - 1) * PAGE_SIZE;
  const supabase = createClient();
  const {
    data: pages,
    count,
    error,
  } = await supabase
    .from("pages")
    .select(
      `
          id,
          title,
          slug,
          visibility,
          created_at
        `,
      { count: "exact" }
    )
    .order("created_at", { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (error) {
    return { data: { pages }, error };
  }

  return {
    data: {
      pages,
      meta_paginator: {
        current_page: page,
        last_page: Math.ceil(count / PAGE_SIZE),
      },
    },
    error,
  };
}

export async function getPage({ params }) {
  const slug = params.slug;

  const supabase = createClient();
  const { data: page, error } = await supabase
    .from("pages")
    .select(
      `
      id,
      title,
      slug,
      content,
      visibility,
      created_at
    `
    )
    .eq("slug", slug)
    .single();

  if (error) {
    return notFound();
  }
  return { page };
}

export async function getCategories() {
  const supabase = createClient();
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  return { categories, error };
}

export async function insertPost({ formData }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .insert([formData])
    .select();
  return { data, error };
}

export async function updatePost({ formData, post_id }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .update([formData])
    .eq("id", post_id)
    .select();
  return { data, error };
}

export async function deletePost({ id }) {
  const supabase = createClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);
  return { error };
}

export async function insertPages({ formData }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("pages")
    .insert([formData])
    .select();
  return { data, error };
}

export async function updatePages({ formData, page_id }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("pages")
    .update([formData])
    .eq("id", page_id)
    .select();
  return { data, error };
}

export async function deletePages({ id }) {
  const supabase = createClient();
  const { error } = await supabase.from("pages").delete().eq("id", id);
  return { error };
}

export async function insertCategories({ formData }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("categories")
    .insert([formData])
    .select();
  return { data, error };
}

export async function updateCategories({ formData, updateId }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("categories")
    .update([formData])
    .eq("id", updateId)
    .select();
  return { data, error };
}

export async function deleteCategories({ id }) {
  const supabase = createClient();
  const { error } = await supabase.from("categories").delete().eq("id", id);
  return { error };
}

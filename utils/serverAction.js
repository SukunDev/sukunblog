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

"use server";

import { createClient } from "@/utils/supabase/server";

export async function getPosts() {
  try {
    const supabase = createClient();
    const { data: posts, error } = await supabase.from("posts").select(`
        id,
        title,
        slug,
        thumbnail,
        visibility,
        categories (
          id,
          name,
          slug
        ),
        created_at
      `);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

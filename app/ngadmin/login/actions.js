"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(formData);

  return { error };
}

export async function getUsers() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    revalidatePath("/ngadmin", "layout");
    redirect("/ngadmin");
  }
}

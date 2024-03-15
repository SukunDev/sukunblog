"use server";

import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout failed:", error);
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
}

export async function getUsers() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  const { data: profiles } = await supabase.from("profiles").select().single();
  if (error || !data?.user) {
    return notFound();
  }
  return { data, profiles };
}

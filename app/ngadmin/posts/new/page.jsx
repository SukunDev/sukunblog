import PostsForm from "@/components/admin/postsForm";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import { getCategories } from "@/utils/serverAction";
import React from "react";

export default async function CreatePosts() {
  const { categories, error } = await getCategories();
  return (
    <AdminLayout>
      <div className="flex flex-col mx-4 mt-4">
        <div className="text-2xl font-medium">
          <h2>Tambah Article</h2>
        </div>
        <PostsForm categories={categories} />
      </div>
    </AdminLayout>
  );
}

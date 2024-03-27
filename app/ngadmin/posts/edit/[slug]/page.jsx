import PostsForm from "@/components/admin/postsForm";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import { getCategories, getPost } from "@/utils/serverAction";
import React from "react";

export default async function ChangePosts({ params }) {
  const { categories } = await getCategories();
  const { post, error } = await getPost({ params });

  return (
    <AdminLayout>
      <div className="flex flex-col mx-4 mt-4">
        <div className="text-2xl font-medium">
          <h2>Rubah Article</h2>
        </div>
        <PostsForm post={post} categories={categories} />
      </div>
    </AdminLayout>
  );
}

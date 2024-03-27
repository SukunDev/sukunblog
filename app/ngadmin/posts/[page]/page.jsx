import AllArticleAdmin from "@/components/admin/allArticleAdmin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import { getPosts } from "@/utils/serverAction";
import Link from "next/link";
import React from "react";
import { PiPlus } from "react-icons/pi";

export default async function PostsPage({ params }) {
  const { data, error } = await getPosts({ params });

  return (
    <AdminLayout>
      <div className="flex flex-col mx-4 mt-4">
        <div className="text-2xl font-medium">
          <h2>Article</h2>
        </div>
        <div className="mt-8">
          <Link
            className="px-8 py-2 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 active:scale-105"
            href={"/ngadmin/posts/new"}
          >
            <PiPlus className="inline mr-1 -mt-1 text-xl" />
            Tambah Article
          </Link>
        </div>
        <AllArticleAdmin data={data} />
      </div>
    </AdminLayout>
  );
}

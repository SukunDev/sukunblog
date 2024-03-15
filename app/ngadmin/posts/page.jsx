import AdminLayouts from "@/components/layouts/adminLayouts";
import Link from "next/link";
import React from "react";
import { PiEye, PiPencilSimple, PiPlus, PiTrash } from "react-icons/pi";
import { getPosts } from "./actions";
import { formatDate } from "@/utils/heper";

export default async function PostsAdmin() {
  const posts = await getPosts();

  return (
    <AdminLayouts>
      <div className="flex flex-col w-full">
        <div className="text-2xl font-semibold">
          <h2>Posts</h2>
        </div>
        <div className="mt-8 capitalize">
          <Link
            className="block px-8 py-2 text-sm font-semibold text-white transition duration-300 bg-green-400 rounded-md w-fit hover:bg-green-500"
            href={"/ngadmin/posts/new"}
          >
            <PiPlus className="inline mr-2 -mt-1 text-xl" />
            new articles
          </Link>
        </div>

        <div class="relative overflow-x-auto mt-16 w-full">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" class="px-6 py-3">
                  title
                </th>
                <th scope="col" class="px-6 py-3">
                  categories
                </th>
                <th scope="col" class="px-6 py-3">
                  visibilty
                </th>
                <th scope="col" class="px-6 py-3">
                  created at
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0
                ? posts.map((post) => (
                    <tr key={post.id} class="border-b group">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {post.title}
                        <ul className="flex items-center transition duration-300 opacity-0 group-hover:opacity-100">
                          <li>
                            <Link
                              className="block px-2 transition duration-300 hover:underline hover:text-blue-400"
                              href={"/" + post.slug}
                            >
                              <PiEye className="inline mr-1 -mt-0.5" />
                              view
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block px-2 text-blue-400 transition duration-300 hover:underline hover:text-blue-500"
                              href={"/ngadmin/posts/edit/" + post.slug}
                            >
                              <PiPencilSimple className="inline mr-1 -mt-0.5" />
                              edit
                            </Link>
                          </li>
                          <li>
                            <form>
                              <button
                                className="block px-2 text-red-500 transition duration-300 hov hover:underline hover:text-red-400"
                                type="submit"
                              >
                                <PiTrash className="inline mr-1 -mt-0.5" />
                                delete
                              </button>
                            </form>
                          </li>
                        </ul>
                      </th>
                      <td class="px-6 py-4">{post.categories.name}</td>
                      <td class="px-6 py-4">
                        {post.visibility ? "Public" : "Draft"}
                      </td>
                      <td class="px-6 py-4">{formatDate(post.created_at)}</td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayouts>
  );
}

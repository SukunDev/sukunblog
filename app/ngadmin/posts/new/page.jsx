import AdminLayouts from "@/components/layouts/adminLayouts";
import React from "react";

export default function NewArticle() {
  return (
    <AdminLayouts>
      <div className="flex flex-col w-full">
        <div className="text-2xl font-semibold">
          <h2>New Article</h2>
        </div>
        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-8">
          <main className="col-span-1 p-4 mx-2 mt-16 bg-white lg:col-span-6 rounded-xl">
            <div className="flex flex-col">
              <label
                className="text-sm font-medium capitalize text-slate-500"
                htmlFor="title"
              >
                title
              </label>
              <input
                className="px-4 py-2 transition duration-200 bg-gray-100 rounded-md outline-none hover:bg-gray-200 focus:bg-gray-200"
                type="text"
                name="title"
                id="title"
              />
            </div>
          </main>
          <aside className="sticky top-0 self-start col-span-1 mt-16 lg:col-span-2">
            anjay
          </aside>
        </div>
      </div>
    </AdminLayouts>
  );
}

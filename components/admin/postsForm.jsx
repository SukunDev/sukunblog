"use client";

import React from "react";
import Editor from "./editor";
import usePostsForm from "@/hooks/admin/usePostsForm";
import Thumbnail from "./thumbnails";

export default function PostsForm({ post, categories }) {
  const { handleInput, handleSubmit, formData, metaCharacterCount } =
    usePostsForm({ post });

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid grid-cols-1 gap-4 mt-8 lg:grid-cols-7"
    >
      <main className="col-span-1 px-2 py-4 bg-white lg:col-span-5 md:px-4 rounded-xl">
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium capitalize" htmlFor="title">
            title
          </label>
          <input
            className="px-4 py-2 transition duration-300 bg-gray-100 rounded-lg outline-none hover:bg-gray-50 focus:bg-gray-50"
            onChange={handleInput}
            value={formData.title}
            type="text"
            name="title"
            id="title"
            required
          />
        </div>
        {formData.slug ? (
          <div className="flex flex-col mt-8">
            <p className="text-lg font-medium capitalize">
              Permalink :{" "}
              <span className="font-normal text-blue-500 lowercase">
                {process.env.NEXT_PUBLIC_URL}/{formData.slug}
              </span>
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col mt-8 space-y-2">
          <label className="text-lg font-medium capitalize" htmlFor="content">
            Content
          </label>
          <Editor
            name="content"
            value={formData.content}
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col mt-8 space-y-2">
          <label
            className="text-lg font-medium capitalize"
            htmlFor="metaDescription"
          >
            meta description
          </label>
          <textarea
            className="px-4 py-2 transition duration-300 bg-gray-100 rounded-lg outline-none hover:bg-gray-50 focus:bg-gray-50"
            onChange={handleInput}
            defaultValue={formData.meta_description}
            name="meta_description"
            id="metaDescription"
            rows={6}
          />
          <div className="flex justify-end gap-4 mr-2">
            <p>{metaCharacterCount} Characters</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label
            className="text-lg font-medium capitalize"
            htmlFor="meta_keywords"
          >
            meta keywords
          </label>
          <input
            className="px-4 py-2 transition duration-300 bg-gray-100 rounded-lg outline-none hover:bg-gray-50 focus:bg-gray-50"
            onChange={handleInput}
            value={formData.meta_keywords}
            type="text"
            name="meta_keywords"
            id="meta_keywords"
            required
          />
        </div>
      </main>
      <aside className="sticky top-0 self-start col-span-1 lg:col-span-2">
        <div className="flex flex-col w-full p-4 bg-white rounded-xl">
          <div className="flex items-end gap-4">
            <div className="flex flex-col flex-grow space-y-1">
              <label
                className="font-medium text-gray-600 capitalize"
                htmlFor="status"
              >
                status
              </label>
              <select
                className="px-4 py-2 capitalize transition duration-300 bg-gray-100 border rounded-lg focus:outline-none hover:bg-gray-200 focus:bg-gray-100"
                name="visibility"
                id="status"
                onChange={handleInput}
                value={formData.visibility}
                required
              >
                <option className="capitalize" value={false}>
                  draft
                </option>
                <option className="capitalize" value={true}>
                  publish
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 active:bg-green-500"
            >
              submit
            </button>
          </div>
          <div className="flex flex-col mt-8 space-y-1">
            <label
              className="font-medium text-gray-600 capitalize"
              htmlFor="category"
            >
              category
            </label>
            <select
              className="px-4 py-2 capitalize transition duration-300 bg-gray-100 border rounded-lg focus:outline-none hover:bg-gray-200 focus:bg-gray-100"
              name="categories_id"
              id="category"
              onChange={handleInput}
              value={formData.categories_id}
              required
            >
              <option className="capitalize" value="">
                choose category
              </option>
              {categories
                ? categories.map((category) => (
                    <option
                      key={category.id}
                      className="capitalize"
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div className="flex flex-col mt-8 space-y-1">
            <p className="font-medium capitalize">thumbnail</p>
            <Thumbnail value={formData.thumbnail} onChange={handleInput} />
          </div>
        </div>
      </aside>
    </form>
  );
}

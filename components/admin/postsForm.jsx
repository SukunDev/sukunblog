"use client";

import React from "react";

export default function PostsForm({ type }) {
  return (
    <form className="relative grid grid-cols-1 gap-16 mt-8 xl:gap-16 lg:gap-14 lg:grid-cols-7">
      <main className="col-span-1 mx-2 lg:col-span-5 md:mx-4">
        <div className="flex flex-col">
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="flex flex-col"></div>
      </main>
      <aside className="sticky top-0 self-start col-span-1 lg:col-span-2">
        sidebar
      </aside>
    </form>
  );
}

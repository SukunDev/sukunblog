"use client";

import Link from "next/link";
import React from "react";
import { useThemeContext } from "@/hooks/providers";

export default function Sidebar({ new_article }) {
  const { data } = useThemeContext();

  return (
    <aside className="sticky self-start col-span-1 lg:col-span-2 top-24">
      <div className="flex flex-col w-full mx-2 space-y-8 md:mx-4">
        {/* <div className="relative w-full h-[600px] bg-gray-300 rounded-3xl">
          <p className="absolute inset-0 m-auto text-lg font-bold text-gray-400 h-fit w-fit">
            Ads Will Here
          </p>
        </div> */}
        {data.categories.length > 0 ? (
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Category</h3>
            <ul className="flex flex-col space-y-3">
              {data.categories.map((item, idx) => (
                <li key={idx}>
                  <Link
                    className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500"
                    href={`${process.env.NEXT_PUBLIC_URL}/${item.href}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        {new_article.length > 0 ? (
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-slate-800">New Articles</h3>
            <ul className="flex flex-col space-y-3">
              {new_article.map((article) => (
                <li key={article.id}>
                  <Link
                    className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500 line-clamp-2"
                    href={`${process.env.NEXT_PUBLIC_URL}/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </aside>
  );
}

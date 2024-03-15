"use client";

import Link from "next/link";
import React from "react";
import { useThemeContext } from "@/hooks/providers";

export default function Sidebar() {
  const { data } = useThemeContext();

  return (
    <aside className="sticky self-start col-span-1 lg:col-span-2 top-24">
      <div className="flex flex-col w-full mx-2 space-y-8 md:mx-4">
        <div className="relative w-full h-[600px] bg-gray-300 rounded-3xl">
          <p className="absolute inset-0 m-auto text-lg font-bold text-gray-400 h-fit w-fit">
            Ads Will Here
          </p>
        </div>
        {data.categories.length > 0 ? (
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Category</h3>
            <ul className="flex flex-col space-y-3">
              {data.categories.map((item, idx) => (
                <li key={idx}>
                  <Link
                    className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500"
                    href={item.href}
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

        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-slate-800">New Articles</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <Link
                className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500 line-clamp-2"
                href={"/"}
              >
                Lorem ipsum dolor sit amet consectetur.
              </Link>
            </li>
            <li>
              <Link
                className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500 line-clamp-2"
                href={"/"}
              >
                Lorem ipsum dolor sit amet.
              </Link>
            </li>
            <li>
              <Link
                className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500 line-clamp-2"
                href={"/"}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Link>
            </li>
            <li>
              <Link
                className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500 line-clamp-2"
                href={"/"}
              >
                Lorem ipsum dolor sit amet.
              </Link>
            </li>
            <li>
              <Link
                className="capitalize transition duration-300 text-slate-600 hover:text-indigo-500 line-clamp-2"
                href={"/"}
              >
                Lorem, ipsum dolor.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

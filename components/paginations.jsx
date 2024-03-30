import usePaginations from "@/hooks/usePaginations";
import Link from "next/link";
import React from "react";
import { PiCaretLeft } from "react-icons/pi";

export default function Paginations({ meta_paginator }) {
  const { current_page, last_page, pages } = usePaginations({ meta_paginator });

  if (last_page <= 1) return "";

  return (
    <div className="mt-16">
      <ul className="flex items-center justify-center text-gray-500">
        {current_page > 1 ? (
          <li>
            <Link
              className="block p-2 mx-1 transition duration-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl active:scale-110"
              href={`${process.env.NEXT_PUBLIC_URL}${
                current_page - 1 === 1 ? "/" : "/page/" + current_page - 1
              }`}
              aria-label="Previous Button"
            >
              <PiCaretLeft className="text-xl" />
            </Link>
          </li>
        ) : (
          ""
        )}
        {pages.length > 0
          ? pages.map((page) => (
              <li key={page}>
                <Link
                  className={`block px-3.5 py-1.5 mx-1 transition duration-300 border-2 ${
                    current_page === page
                      ? "text-white bg-gray-600 border-gray-600"
                      : "border-gray-500 hover:bg-gray-600 hover:border-gray-600"
                  } hover:text-white rounded-xl active:scale-110`}
                  href={
                    process.env.NEXT_PUBLIC_URL +
                    (page === 1 ? "/" : `/page/${page}`)
                  }
                >
                  {page}
                </Link>
              </li>
            ))
          : ""}
        {current_page < last_page ? (
          <li>
            <Link
              className="block p-2 mx-1 transition duration-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl active:scale-110"
              href={`${process.env.NEXT_PUBLIC_URL}/page/${current_page + 1}`}
              aria-label="Next Button"
            >
              <PiCaretLeft className="text-xl rotate-180" />
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

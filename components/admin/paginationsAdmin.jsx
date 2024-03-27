import usePaginationsAdmin from "@/hooks/admin/usePaginationsAdmin";
import React from "react";
import { PiCaretLeft } from "react-icons/pi";

export default function PaginationsAdmin({ meta_paginator, onChange }) {
  const { current_page, last_page, pages } = usePaginationsAdmin({
    meta_paginator,
  });

  if (last_page <= 1) return "";

  return (
    <div className="mt-16">
      <ul className="flex items-center justify-center text-gray-500">
        {current_page > 1 ? (
          <li>
            <button
              className="block p-2 mx-1 transition duration-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl active:scale-110"
              onClick={() => onChange(current_page - 1)}
            >
              <PiCaretLeft className="text-xl" />
            </button>
          </li>
        ) : (
          ""
        )}
        {pages.length > 0
          ? pages.map((page) => (
              <li key={page}>
                <button
                  className={`block px-3.5 py-1.5 mx-1 transition duration-300 border-2 ${
                    current_page === page
                      ? "text-white bg-gray-600 border-gray-600"
                      : "border-gray-500 hover:bg-gray-600 hover:border-gray-600 active:scale-110"
                  } hover:text-white rounded-xl`}
                  onClick={() => onChange(page)}
                  disabled={current_page === page}
                >
                  {page}
                </button>
              </li>
            ))
          : ""}
        {current_page < last_page ? (
          <li>
            <button
              className="block p-2 mx-1 transition duration-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl active:scale-110"
              onClick={() => onChange(current_page + 1)}
            >
              <PiCaretLeft className="text-xl rotate-180" />
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

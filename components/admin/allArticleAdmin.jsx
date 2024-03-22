"use client";

import React from "react";
import Table from "./table";
import Link from "next/link";
import { PiPencilSimple, PiTrashSimple } from "react-icons/pi";

export default function AllArticleAdmin({ data }) {
  return (
    <div className="mt-8">
      <Table
        head={["#", "title", "category", "status"]}
        body={makeTableBody(data.posts || [])}
      />
    </div>
  );
}

const makeTableBody = (rawData) => {
  let body = [];
  rawData.map((item) => {
    body.push([
      item.id,
      <>
        <div className="group">
          <Link href={"/"}>
            <p className="capitalize cursor-pointer line-clamp-1">
              {item.title}
            </p>
          </Link>
          <ul
            className={
              "flex items-center gap-2 transition duration-200 opacity-0 group-hover:opacity-100 "
            }
          >
            <li>
              <Link
                href={"/ngadmin/posts/edit/" + item.slug}
                className="text-xs text-gray-600 transition duration-300 hover:text-blue-500"
              >
                <PiPencilSimple className="inline -mt-1" /> Edit
              </Link>
            </li>
            <li>
              <button className="text-xs text-red-400 transition duration-300 hover:text-red-600">
                <PiTrashSimple className="inline -mt-1" />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </>,
      <>
        <span className="capitalize">{item.categories.name}</span>
      </>,
      item.visibility ? (
        <span className="px-3 py-1.5 rounded-lg bg-blue-500 text-white capitalize text-xs">
          publish
        </span>
      ) : (
        <span className="px-5 py-1.5 rounded-lg bg-yellow-600 text-white capitalize text-xs">
          draft
        </span>
      ),
    ]);
  });
  return body;
};

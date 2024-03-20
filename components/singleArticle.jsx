"use client";

import useImage from "@/hooks/useImage";
import useSingleArticle from "@/hooks/useSingleArticle";
import { addIdToHeadings } from "@/utils/heper";
import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";
import {
  PiCaretRightBold,
  PiListBullets,
  PiMinus,
  PiPlus,
} from "react-icons/pi";

export default function SingleArticle({ post }) {
  const { loaded } = useImage({ src: post.thumbnail });
  const { handleTableOfContent, tableContent, tableOfContentStatus } =
    useSingleArticle({ post });

  return (
    <>
      <div className="relative mt-8 overflow-hidden aspect-w-16 aspect-h-9 rounded-3xl">
        {loaded ? (
          ""
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={post.thumbnail}
          className={
            (loaded
              ? "opacity-100 blur-0 scale-100 rotate-0"
              : "opacity-0 blur-xl scale-125 -rotate-6") +
            " transition duration-1000 w-full h-full object-cover hover:scale-110 hover:-rotate-3"
          }
          alt={post.title}
          loading="lazy"
        />
      </div>

      {tableContent.length > 0 ? (
        <div className="p-4 mt-8 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <button
              onClick={handleTableOfContent}
              className="text-lg font-semibold"
            >
              <PiListBullets className="inline mr-2 -mt-1 text-2xl" /> Table of
              Contents
            </button>
            <button onClick={handleTableOfContent}>
              {tableOfContentStatus ? <PiMinus /> : <PiPlus />}
            </button>
          </div>
          <motion.ul
            animate={tableOfContentStatus ? "open" : "closed"}
            variants={{
              open: { opacity: 1, display: "block" },
              closed: { opacity: 0, transitionEnd: { display: "none" } },
            }}
            className="mt-6"
          >
            {tableContent.map((item, idx) => (
              <li className={`${item.tag === "h3" ? "ml-8" : ""}`} key={idx}>
                <PiCaretRightBold className="inline mr-1 -mt-4 text-gray-700" />{" "}
                <Link
                  className="inline-block font-medium text-blue-600 transition duration-300 hover:text-blue-400 hover:translate-x-1 line-clamp-1 whitespace-nowrap"
                  href={`#${item.text.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
      ) : (
        ""
      )}

      <article
        className="mt-8 article"
        dangerouslySetInnerHTML={{
          __html: `${addIdToHeadings(post.content)}`,
        }}
      />
    </>
  );
}

"use client";

import useHeader from "@/hooks/useHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function SideMenu({ links }) {
  const { handleButtonMenu, data, pathname } = useHeader();
  return (
    <>
      <motion.div
        onClick={handleButtonMenu}
        animate={data.menuOpened ? "open" : "closed"}
        variants={{
          open: { opacity: 1, display: "block" },
          closed: { opacity: 0, transitionEnd: { display: "none" } },
        }}
        className="fixed inset-0 z-50 bg-black/75"
        style={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        animate={data.menuOpened ? "open" : "closed"}
        variants={{
          open: { transform: "translateX(0%)", display: "block" },
          closed: {
            transform: "translateX(-100%)",
            transitionEnd: { display: "none" },
          },
        }}
        className="fixed inset-y-0 left-0 z-50 w-full max-w-[90%] xs:max-w-80"
        style={{ transform: "translateX(-100%)" }}
      >
        <div className="flex flex-col h-full px-2 bg-white">
          <div className="p-6 mx-auto">
            <Link
              className="text-2xl font-bold"
              href={process.env.NEXT_PUBLIC_URL}
            >
              Sukun<span className="font-normal">Dev</span>
            </Link>
          </div>
          <hr />
          <div className="flex flex-col flex-wrap h-full mx-2 mt-4 capitalize">
            {links.map((link, idx) => (
              <Link
                className={`px-4 py-2 text-lg ${
                  pathname === link.href
                    ? "scale-y-105 font-semibold text-indigo-600 bg-gray-100 rounded-xl"
                    : "text-slate-800 font-medium hover:font-semibold rounded-lg hover:text-indigo-600 hover:scale-y-105 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300"
                }`}
                key={idx}
                href={`${process.env.NEXT_PUBLIC_URL}/${link.href}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mx-2 my-4 text-xs text-center">
            <p>
              Copyright © 2024{" "}
              <Link
                className="text-indigo-500 underline"
                href={process.env.NEXT_PUBLIC_URL}
              >
                SukunDev Blog
              </Link>
              . All Right Reserved
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

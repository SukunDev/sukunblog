"use client";

import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { useThemeContext } from "@/hooks/providers";

export default function Footer() {
  const { data } = useThemeContext();

  return (
    <footer className="mb-16 bg-gray-100 xs:mb-0">
      <div className="container hidden px-2 mx-auto mt-16 mb-8 md:px-4 xs:block">
        <div className="flex flex-col-reverse items-center justify-between gap-6 md:gap-0 md:flex-row">
          <div className="flex flex-col space-y-4">
            {data.pages.length > 0 ? (
              <ul className="flex flex-col items-center gap-2 text-lg font-semibold sm:gap-6 sm:flex-row text-slate-800">
                {data.pages.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      className="block capitalize transition duration-300 hover:text-indigo-600 hover:scale-x-105"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
            <p className="text-sm text-center md:text-start">
              Copyright © 2024{" "}
              <Link className="text-indigo-600 underline" href="/">
                sukunblog.com
              </Link>
              . All Right Reserved.
            </p>
          </div>
          <div className="flex flex-col space-y-1 text-center">
            <p className="text-lg font-bold capitalize text-slate-800">
              Social Media
            </p>
            {data.socialMedia.length > 0 ? (
              <ul className="flex items-center">
                {data.socialMedia.map((item, idx) => (
                  <li key={idx}>
                    <SocialIcon
                      className="transition duration-300 text-slate-800 hover:scale-110 hover:text-slate-700"
                      style={{ width: "40px", height: "40px" }}
                      bgColor="transparent"
                      fgColor="currentColor"
                      url={item}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

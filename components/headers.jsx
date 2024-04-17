"use client";

import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import {
  PiBookOpenText,
  PiFire,
  PiHouseSimple,
  PiList,
  PiPhone,
  PiSquaresFour,
  PiUser,
} from "react-icons/pi";
import NavLink from "./navLink";
import SideMenu from "./sideMenu";
import useHeader from "@/hooks/useHeader";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Headers() {
  const scrollY = useScroll();
  const {
    data,
    handleButtonMenu,
    handleSearchButton,
    menuOpened,
    searchOpened,
  } = useHeader();

  return (
    <>
      <div
        className={`py-3 relative xs:fixed inset-x-0 z-50 top-0 transition duration-300 ${
          scrollY > 30 ? "xs:bg-white xs:shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between mx-2 md:mx-4">
            <button
              onClick={handleButtonMenu}
              className="hidden p-2 transition duration-300 rounded-lg xs:block md:hidden hover:bg-gray-100 active:bg-gray-200"
            >
              <PiList className="text-3xl transition duration-300 text-slate-500 hover:text-slate-700 active:text-slate-500a" />
            </button>
            <h1 className="py-4 mx-auto xs:mx-0 xs:py-0">
              <Link
                className="text-2xl font-bold"
                href={process.env.NEXT_PUBLIC_URL}
              >
                <Image
                  className="inline mb-1 mr-2"
                  src={"/uploads/lutfi-cartoon.png"}
                  width={38}
                  height={38}
                  alt="Logo"
                />
                Sukun<span className="font-normal">Dev</span>
              </Link>
            </h1>
            <NavLink links={data.categories} />
            <button
              onClick={handleSearchButton}
              className="hidden p-4 xs:block"
              aria-label="Search Button"
            >
              <IoIosSearch className="text-3xl transition duration-300 text-slate-500 hover:text-slate-700 active:text-slate-500" />
            </button>
          </div>
        </div>
      </div>
      <SideMenu
        handleButtonMenu={handleButtonMenu}
        menuOpened={menuOpened}
        links={data.categories}
      />
      <div className="fixed inset-x-0 bottom-0 z-40 block xs:hidden">
        <div className="px-4 py-2 bg-white shadow-lg">
          <ul className="flex items-center justify-between text-slate-600">
            <li>
              <Link
                className="text-xs capitalize"
                href={process.env.NEXT_PUBLIC_URL}
              >
                <PiHouseSimple className="ml-1 text-3xl" />
                home
              </Link>
            </li>
            <li>
              <Link
                className="text-xs capitalize"
                href={`${process.env.NEXT_PUBLIC_URL}/contact`}
              >
                <PiPhone className="ml-2 text-3xl" />
                Contact
              </Link>
            </li>
            <li className="relative max-w-[62px] w-full">
              <Link
                className="absolute p-3 text-3xl text-white bg-indigo-500 rounded-full insetx-0 mx-auto -top-[3.8rem] -left-1 border-[6px] border-gray-50"
                href={`${process.env.NEXT_PUBLIC_URL}/about`}
              >
                <PiUser />
              </Link>
              <span className="absolute inset-x-0 m-auto mr-1 text-xs capitalize text-slate-600 w-fit -bottom-6 whitespace-nowrap">
                about me
              </span>
            </li>
            <li>
              <button onClick={handleSearchButton} className="text-xs">
                <IoIosSearch className="ml-1 text-3xl" />
                search
              </button>
            </li>
            <li>
              <button className="text-xs" onClick={handleButtonMenu}>
                <PiSquaresFour className="ml-1 text-3xl" />
                menu
              </button>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        animate={searchOpened ? "open" : "closed"}
        variants={{
          open: { opacity: 1, display: "block" },
          closed: { opacity: 0, transitionEnd: { display: "none" } },
        }}
        onClick={handleSearchButton}
        className="fixed inset-0 z-50 backdrop-blur-sm bg-black/20"
        style={{ display: "none" }}
      ></motion.div>
      <motion.div
        animate={searchOpened ? "open" : "closed"}
        variants={{
          open: { scale: 1, display: "block" },
          closed: { scale: 0, transitionEnd: { display: "none" } },
        }}
        className="fixed inset-0 w-full max-w-xl h-fit m-auto z-[60]"
        style={{ display: "none" }}
      >
        <form className="flex items-center" action="/" method="GET">
          <input
            className="w-full p-3 text-lg bg-white rounded-l-lg outline-none md:p-4"
            type="text"
            name="search"
            id="search"
            placeholder="Search ..."
          />
          <button
            className="p-[14px] md:p-[18px] bg-white rounded-r-lg"
            type="submit"
          >
            <IoIosSearch className="text-2xl" />
          </button>
        </form>
      </motion.div>
    </>
  );
}

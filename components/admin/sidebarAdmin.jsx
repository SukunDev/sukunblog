"use client";

import { signOut } from "@/app/ngadmin/actions";
import useSidebarAdmin from "@/hooks/admin/useSidebarAdmin";
import Link from "next/link";
import React from "react";
import {
  PiFile,
  PiFileText,
  PiGear,
  PiHouseSimple,
  PiSignOut,
  PiTag,
  PiUser,
} from "react-icons/pi";

export default function SidebarAdmin({ data, profiles }) {
  const { pathname } = useSidebarAdmin();

  return (
    <div className="fixed inset-y-0 left-0 w-full max-w-80">
      <div className="relative flex flex-col h-full overflow-hidden text-white bg-slate-950">
        <div className="mx-8 my-4 text-3xl font-medium">
          <h1>
            Sukun<span className="font-light">Dev</span>
          </h1>
        </div>
        <hr className="mx-4" />
        <ul className="flex flex-col flex-wrap flex-1 mx-4 mt-6 capitalize">
          <li>
            <Link
              className={`block px-4 py-2 text-lg font-medium transition duration-300 rounded-md ${
                pathname === "/ngadmin" ? "bg-white/5" : "hover:bg-white/5"
              }`}
              href={"/ngadmin"}
            >
              <PiHouseSimple className="inline mr-2 -mt-1 text-2xl" />
              dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 text-lg font-medium transition duration-300 rounded-md ${
                pathname === "/ngadmin/posts"
                  ? "bg-white/5"
                  : "hover:bg-white/5"
              }`}
              href={"/ngadmin/posts"}
            >
              <PiFileText className="inline mr-2 -mt-1 text-2xl" />
              posts
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 text-lg font-medium transition duration-300 rounded-md ${
                pathname === "/ngadmin/pages"
                  ? "bg-white/5"
                  : "hover:bg-white/5"
              }`}
              href={"/ngadmin/pages"}
            >
              <PiFile className="inline mr-2 -mt-1 text-2xl" />
              pages
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 text-lg font-medium transition duration-300 rounded-md ${
                pathname === "/ngadmin/categories"
                  ? "bg-white/5"
                  : "hover:bg-white/5"
              }`}
              href={"/ngadmin/categories"}
            >
              <PiTag className="inline mr-2 -mt-1 text-2xl" />
              categories
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 text-lg font-medium transition duration-300 rounded-md ${
                pathname === "/ngadmin/settings"
                  ? "bg-white/5"
                  : "hover:bg-white/5"
              }`}
              href={"/ngadmin/settings"}
            >
              <PiGear className="inline mr-2 -mt-1 text-2xl" />
              settings
            </Link>
          </li>
        </ul>
        <div className="mx-4 my-2">
          <div className="flex items-center gap-3">
            <div className="relative p-4 rounded-full bg-white/80">
              <PiUser className="absolute inset-0 m-auto text-xl text-black" />
            </div>
            <div className="flex flex-col flex-wrap w-full text-sm font-light">
              <p className="font-medium">{profiles.username}</p>
              <p>{data?.user.email}</p>
            </div>
            <form>
              <button type="submit" formAction={signOut}>
                <PiSignOut className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

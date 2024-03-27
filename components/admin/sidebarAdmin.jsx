"use client";

import useSidebarAdmin from "@/hooks/admin/useSidebarAdmin";
import Link from "next/link";
import React from "react";
import {
  PiFileText,
  PiHouseSimple,
  PiSignOut,
  PiSpinnerGap,
  PiUser,
} from "react-icons/pi";

export default function SidebarAdmin() {
  const { handleLogOut, isLoading, pathname } = useSidebarAdmin();

  return (
    <div className="fixed inset-y-0 w-full h-full max-w-80 bg-slate-900">
      <div className="flex flex-col h-full overflow-hidden text-white">
        <div className="mx-auto my-6 text-2xl font-medium">
          <h2>
            Sukun<span className="font-light">Dev</span>
          </h2>
        </div>
        <div className="mx-4">
          <hr />
        </div>
        <ul className="flex flex-col flex-1">
          <li>
            <Link
              className={`block px-4 py-2 text-lg capitalize transition duration-300 rounded-md text-slate-300 ${
                pathname === "/ngadmin"
                  ? "bg-white/5 font-medium"
                  : "hover:bg-white/5"
              }`}
              href={"/ngadmin"}
            >
              <PiHouseSimple className="inline mr-2 -mt-1 text-2xl" />
              dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`block px-4 py-2 text-lg capitalize transition duration-300 rounded-md text-slate-300 ${
                pathname === "/ngadmin/posts"
                  ? "bg-white/5 font-medium"
                  : "hover:bg-white/5"
              }`}
              href={"/ngadmin/posts"}
            >
              <PiFileText className="inline mr-2 -mt-1 text-2xl" />
              posts
            </Link>
          </li>
        </ul>
        <div className="mx-4">
          <hr />
        </div>
        <div className="flex items-center gap-2 mx-4 my-4">
          <div className="p-2 rounded-full bg-white/10">
            <PiUser className="text-xl" />
          </div>
          <div className="flex flex-col w-full font-medium">
            <h3>sukundev</h3>
            <p className="text-sm font-light">sukundev32@gmail.com</p>
          </div>
          <button onClick={handleLogOut} disabled={isLoading}>
            {isLoading ? (
              <PiSpinnerGap className="text-2xl animate-spin" />
            ) : (
              <PiSignOut className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

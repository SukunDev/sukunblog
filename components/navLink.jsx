import useHeader from "@/hooks/useHeader";
import Link from "next/link";
import React from "react";

function NavLink({ links }) {
  const { pathname } = useHeader();

  return (
    <nav className="items-center justify-center hidden md:flex">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          className={`px-4 capitalize text-lg  ${
            pathname == link.href
              ? "font-bold text-indigo-600 scale-x-105"
              : "font-medium text-slate-900 hover:text-indigo-600 hover:scale-x-105 transition duration-300"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavLink;

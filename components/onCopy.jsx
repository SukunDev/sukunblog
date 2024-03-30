"use client";

import useOnCopy from "@/hooks/useOnCopy";
import React from "react";
import { PiCopySimple } from "react-icons/pi";

export default function OnCopy({ name, content }) {
  const { onCopy, handleClick } = useOnCopy({ content });
  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center gap-1.5 px-3 py-1.5 font-normal rounded-md bg-white ring-[2px] ring-gray-100 text-slate-700`}
    >
      <PiCopySimple />
      {onCopy ? "Copied" : name}
    </button>
  );
}

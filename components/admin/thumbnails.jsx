import useThumbnail from "@/hooks/admin/useThumbnail";
import React from "react";

export default function Thumbnail({ onChange, value }) {
  const { imageFiles, handleOnChange } = useThumbnail({ onChange, value });

  return (
    <label className="border-2 border-blue-200 border-dashed aspect-w-16 aspect-h-10 hover:bg-gray-100 hover:border-gray-300">
      <div
        className={
          (imageFiles ? "hidden" : "") + " absolute inset-0 m-auto h-fit w-fit"
        }
      >
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
            Attach a file
          </p>
        </div>
      </div>
      <img
        src={imageFiles}
        className={
          imageFiles
            ? "w-full object-contain absolute inset-0 m-auto"
            : "hidden"
        }
        id="output"
      />
      <input
        type="file"
        className="opacity-0"
        name="thumbnail"
        onChange={handleOnChange}
      />
    </label>
  );
}

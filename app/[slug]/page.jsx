"use server";

import SingleArticle from "@/components/singleArticle";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getPosts } from "@/utils/clientAction";
import { formatDate } from "@/utils/heper";
import Link from "next/link";
import React from "react";
import {
  PiCalendarCheck,
  PiCaretRightBold,
  PiPencilSimple,
} from "react-icons/pi";

export async function generateMetadata({ params }) {
  const { post } = await getPosts({ params });
  return {
    title: post.title,
  };
}

export default async function SinglePost({ params }) {
  const { post } = await getPost({ params });

  return (
    <MainLayout>
      <div className="flex flex-col overflow-hidden">
        <ul className="flex items-center gap-2 p-2 text-sm font-medium bg-gray-100 rounded-lg line-clamp-1 text-nowrap text-slate-700">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <PiCaretRightBold className="text-gray-500" />
          </li>
          <li>
            <Link href={"/"}>Info</Link>
          </li>
          <li>
            <PiCaretRightBold className="text-gray-500" />
          </li>
          <li className="font-normal text-slate-500">{post.title}</li>
        </ul>
        <div className="mt-8 text-3xl font-semibold">
          <h2>{post.title}</h2>
        </div>
        <ul className="flex items-center gap-2 mt-4 text-sm text-slate-500">
          <li>
            <PiPencilSimple className="inline -mt-0.5" /> Sukundev
          </li>
          <li>
            <PiCalendarCheck className="inline -mt-0.5" />{" "}
            {formatDate(post.created_at)}
          </li>
        </ul>
        <SingleArticle post={post} />
      </div>
    </MainLayout>
  );
}

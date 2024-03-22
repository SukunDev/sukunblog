import SidebarAdmin from "@/components/admin/sidebarAdmin";
import { getUser } from "@/utils/serverAction";
import { notFound } from "next/navigation";
import React from "react";

export default async function AdminLayout({ children }) {
  const { data, error } = await getUser();

  if (error || !data?.user) {
    return notFound();
  }
  return (
    <div className="flex flex-col h-screen">
      <SidebarAdmin />
      <main className="ml-80">
        <div className="relative flex flex-col">{children}</div>
      </main>
    </div>
  );
}

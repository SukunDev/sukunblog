import { getUsers } from "@/app/ngadmin/actions";
import React from "react";
import SidebarAdmin from "../admin/sidebarAdmin";

export default async function AdminLayouts({ children }) {
  const { data, profiles } = await getUsers();
  return (
    <div className="relative flex flex-col h-screen overflow-hidden text-slate-900">
      <SidebarAdmin data={data} profiles={profiles} />
      <div className="w-full mt-4 mx-4 overflow-y-auto translate-x-80 max-w-[calc(100vw-21rem)]">
        {children}
      </div>
    </div>
  );
}

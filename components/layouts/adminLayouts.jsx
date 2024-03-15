import { getUsers } from "@/app/ngadmin/actions";
import React from "react";
import SidebarAdmin from "../admin/sidebarAdmin";

export default async function AdminLayouts({ children }) {
  const { data, profiles } = await getUsers();
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex items-start">
        <SidebarAdmin data={data} profiles={profiles} />
        <div>{children}</div>
      </div>
    </div>
  );
}

import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import React from "react";

export default function Admin() {
  return (
    <AdminLayout>
      <div className="flex flex-col mx-4 mt-4">
        <div className="text-2xl font-medium">
          <h2>Dashboard</h2>
        </div>
      </div>
    </AdminLayout>
  );
}

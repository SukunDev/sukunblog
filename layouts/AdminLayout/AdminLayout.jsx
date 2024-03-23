import "react-toastify/dist/ReactToastify.css";

import SidebarAdmin from "@/components/admin/sidebarAdmin";
import { getUser } from "@/utils/serverAction";
import { notFound } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";
import { AdminThemeContextProvider } from "@/components/admin/adminProviders";

export default async function AdminLayout({ children }) {
  const { data, error } = await getUser();

  if (error || !data?.user) {
    return notFound();
  }
  return (
    <AdminThemeContextProvider user={data?.user}>
      <div className="flex flex-col h-screen">
        <SidebarAdmin />
        <main className="ml-80">
          <div className="relative flex flex-col">{children}</div>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </AdminThemeContextProvider>
  );
}

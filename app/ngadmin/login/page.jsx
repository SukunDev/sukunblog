import LoginForm from "@/components/admin/loginForm";
import { getUser } from "@/utils/serverAction";
import { redirect } from "next/navigation";
import React from "react";

export default async function Login() {
  const { data, error } = await getUser();

  if (data.user) {
    redirect("/ngadmin");
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden items-center justify-center bg-[#121212]">
      <div className="w-full max-w-2xl p-4 bg-white rounded-xl">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-medium">
            <h2>Login</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

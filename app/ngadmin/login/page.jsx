import LoginForm from "@/components/admin/loginForm";
import React from "react";
import { getUsers } from "./actions";

export default async function Login() {
  await getUsers();

  return (
    <>
      <div className="fixed inset-0 bg-[#121212] z-10"></div>
      <div className="fixed inset-0 z-50 max-w-2xl m-auto h-fit">
        <div className="w-full p-4 bg-white rounded-xl">
          <div className="mb-4 text-lg font-semibold text-slate-600">
            <h2>Login</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

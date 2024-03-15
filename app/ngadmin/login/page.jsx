import React from "react";
import { getUsers, login } from "./actions";

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
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label
                className="text-sm font-medium capitalize text-slate-500"
                htmlFor="email"
              >
                email
              </label>
              <input
                className="px-4 py-2 transition duration-200 bg-gray-100 rounded-md outline-none hover:bg-gray-200 focus:bg-gray-200"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm font-medium capitalize text-slate-500"
                htmlFor="password"
              >
                password
              </label>
              <input
                className="px-4 py-2 transition duration-200 bg-gray-100 rounded-md outline-none hover:bg-gray-200 focus:bg-gray-200"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              className="py-2 mx-8 font-semibold text-white transition duration-300 bg-green-400 hover:bg-green-500 rounded-xl"
              type="submit"
              formAction={login}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

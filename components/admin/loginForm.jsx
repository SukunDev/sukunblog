"use client";

import useLoginForm from "@/hooks/admin/useLoginForm";
import React from "react";
import { PiSpinnerGap } from "react-icons/pi";

export default function LoginForm() {
  const { handleLoginSubmit, handleInput, isLoading, formData, formError } =
    useLoginForm();

  return (
    <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-4">
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
          onChange={handleInput}
          value={formData.email}
          required
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
          onChange={handleInput}
          value={formData.password}
          required
        />
      </div>
      <button
        className="py-2 mx-8 font-semibold text-white transition duration-300 bg-green-400 hover:bg-green-500 rounded-xl"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <PiSpinnerGap className="inline mr-1 -mt-0.5 text-xl animate-spin" />{" "}
            Loading
          </>
        ) : (
          "Log in"
        )}
      </button>
      {formError ? (
        <p className="mx-auto text-sm text-red-500">{`${formError.name} : ${formError.message}`}</p>
      ) : (
        ""
      )}
    </form>
  );
}

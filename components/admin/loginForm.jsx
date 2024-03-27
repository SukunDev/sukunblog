"use client";

import useLoginForm from "@/hooks/admin/useLoginForm";
import React from "react";
import { PiSpinnerGap } from "react-icons/pi";

export default function LoginForm() {
  const { handleInput, handleSubmit, formData, isLoading, formError } =
    useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label
          className="text-lg font-light capitalize text-slate-500"
          htmlFor="email"
        >
          email
        </label>
        <input
          className="px-4 py-2 rounded-md outline-none bg-gray-50 hover:bg-gray-100 focus:bg-gray-50"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-lg font-light capitalize text-slate-500"
          htmlFor="password"
        >
          password
        </label>
        <input
          className="px-4 py-2 rounded-md outline-none bg-gray-50 hover:bg-gray-100 focus:bg-gray-50"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInput}
          required
        />
      </div>
      <button
        type="submit"
        className="py-2 mx-4 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 active:scale-105 disabled:opacity-70 disabled:hover:bg-green-500"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <PiSpinnerGap className="inline text-lg animate-spin" /> Loading
          </>
        ) : (
          "Login"
        )}
      </button>
      {formError ? (
        <p className="text-sm text-center text-red-500">{`${formError.name}: ${formError.message}`}</p>
      ) : (
        ""
      )}
    </form>
  );
}

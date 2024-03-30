"use client";

import useContactForm from "@/hooks/useContactForm";
import { PiCheck, PiSpinnerGap } from "react-icons/pi";

export default function ContactForm() {
  const { isLoading, isSubmited, formData, handleInput, onSubmit } =
    useContactForm();
  return (
    <>
      {!isSubmited && !isLoading ? (
        <div className="mx-2 my-6 sm:mx-4">
          <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="relative z-0 flex flex-col w-full sm:w-1/2 group">
                <div className="absolute inset-0 bg-gray-200 rounded-md group-hover:-inset-0.5 transition-all duration-300 -z-10"></div>
                <input
                  className="px-4 py-2 transition duration-300 bg-gray-100 border border-gray-200 rounded-md outline-none"
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleInput}
                  value={formData.name}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="relative z-0 flex flex-col w-full sm:w-1/2 group">
                <div className="absolute inset-0 bg-gray-200 rounded-md group-hover:-inset-0.5 transition-all duration-300 -z-10"></div>
                <input
                  className="px-4 py-2 transition duration-300 bg-gray-100 border border-gray-200 rounded-md outline-none"
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInput}
                  value={formData.email}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="relative z-0 flex flex-col group">
              <div className="absolute inset-0 bg-gray-200 rounded-md group-hover:-inset-0.5 transition-all duration-300 -z-10"></div>
              <textarea
                className="px-4 py-2 transition duration-300 bg-gray-100 border border-gray-200 rounded-md outline-none"
                name="message"
                id="message"
                rows={10}
                onChange={handleInput}
                value={formData.message}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="flex flex-col mt-4">
              <button
                className="w-full py-2 text-lg font-normal text-white transition duration-300 rounded-md bg-slate-900 hover:bg-slate-800 active:bg-slate-900"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative min-h-96">
          <div className="absolute inset-0 m-auto w-fit h-fit">
            <div className="p-4 text-3xl text-white rounded-full bg-slate-900">
              {isLoading ? (
                <PiSpinnerGap className="animate-spin" />
              ) : (
                <PiCheck />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

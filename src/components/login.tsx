"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">LuxeCart</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">Log in to view your saved pieces and orders.</p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <p className="text-sm font-medium text-green-700" role="status">Login details submitted.</p>
            <button className="mt-5 text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-700" onClick={() => setIsSubmitted(false)} type="button">
              Try again
            </button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="login-email">Email address</label>
              <input autoComplete="email" className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100" id="login-email" name="email" placeholder="alex@example.com" required type="email" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label className="block text-sm font-medium text-slate-700" htmlFor="login-password">Password</label>
                <button className="text-xs font-medium text-slate-500 hover:text-amber-700" type="button">Forgot password?</button>
              </div>
              <input autoComplete="current-password" className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100" id="login-password" name="password" placeholder="Enter your password" required type="password" />
            </div>
            <button className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2" type="submit">
              Log in
            </button>
          </form>
        )}

        <p className="mt-7 border-t border-stone-200 pt-6 text-center text-sm text-slate-600">
          New to LuxeCart?{" "}
          <Link className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-700" href="/">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}
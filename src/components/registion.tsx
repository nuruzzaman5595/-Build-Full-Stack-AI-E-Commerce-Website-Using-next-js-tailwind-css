"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            LuxeCart
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Join us to save your favorites and enjoy a smoother checkout.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
              Full name
            </label>
            <input
              required
              autoComplete="name"
              className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              id="name"
              name="name"
              placeholder="Alex Morgan"
              type="text"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
              Email address
            </label>
            <input
              required
              autoComplete="email"
              className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              id="email"
              name="email"
              placeholder="alex@example.com"
              type="email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              id="password"
              name="password"
              placeholder="At least 8 characters"
              type="password"
            />
          </div>

          <button
            className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            type="submit"
          >
            {isSubmitted ? "Account created" : "Create account"}
          </button>
        </form>

        {isSubmitted ? (
          <p className="mt-6 text-center text-sm font-medium text-green-700" role="status">
            Thanks for registering. Your account is ready.
          </p>
        ) : (
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            By creating an account, you agree to our terms and privacy policy.
          </p>
        )}

        <p className="mt-5 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-700" href="/login">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
}
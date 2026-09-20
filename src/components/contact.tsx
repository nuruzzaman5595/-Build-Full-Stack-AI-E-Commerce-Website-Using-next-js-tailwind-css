"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSent(true);
  }

  return (
    <main className="flex-1 bg-[#f8f5f0]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24 lg:px-8 lg:py-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Get in touch</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            We&apos;re here to help.
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
            Have a question about an order, a product, or finding the right gift? Send us a note and our team will get back to you within one business day.
          </p>

          <div className="mt-10 space-y-6 border-t border-stone-300 pt-7 text-sm">
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <a className="mt-1 inline-block text-slate-600 hover:text-amber-700" href="mailto:hello@luxecart.example">
                hello@luxecart.example
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Hours</p>
              <p className="mt-1 text-slate-600">Monday - Friday, 9:00 - 17:00</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
          {isSent ? (
            <div className="flex min-h-96 flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Message received</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Thanks for reaching out.</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">We&apos;ll read your note and be in touch soon.</p>
              <button className="mt-8 text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-700" onClick={() => setIsSent(false)} type="button">
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="contact-name">Name</label>
                <input autoComplete="name" className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100" id="contact-name" name="name" placeholder="Alex Morgan" required type="text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="contact-email">Email address</label>
                <input autoComplete="email" className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100" id="contact-email" name="email" placeholder="alex@example.com" required type="email" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="contact-message">Message</label>
                <textarea className="min-h-36 w-full resize-y rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100" id="contact-message" name="message" placeholder="How can we help?" required />
              </div>
              <button className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2" type="submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
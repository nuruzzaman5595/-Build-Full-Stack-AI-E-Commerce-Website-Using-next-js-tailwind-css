import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | LuxeCart",
  description: "Learn about LuxeCart, our story, values, and commitment to quality shopping.",
};

const stats = [
  { value: "120K+", label: "happy shoppers" },
  { value: "4.9/5", label: "average rating" },
  { value: "48h", label: "average dispatch" },
  { value: "18", label: "design categories" },
];

const values = [
  {
    title: "Curated quality",
    description:
      "Every product is handpicked for style, durability, and everyday usefulness.",
  },
  {
    title: "Transparent pricing",
    description:
      "No hidden fees, no confusing markups — just fair pricing and value you can trust.",
  },
  {
    title: "Fast, reliable delivery",
    description:
      "We partner with premium logistics so your essentials arrive quickly and safely.",
  },
];

const promise = [
  "Ethically sourced partners",
  "Secure checkout and data protection",
  "Easy 30-day returns",
  "Responsive support from real people",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Since 2018
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              We designed a smarter way to shop beautifully.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              LuxeCart brings together design-led essentials, everyday favorites, and luxury upgrades
              for homes, wardrobes, and routines that deserve better.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/products"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Shop collection
              </a>
              <a
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Contact us
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                  <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber-300/40 blur-3xl" />
            <div className="absolute -right-6 bottom-4 h-36 w-36 rounded-full bg-rose-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-amber-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-amber-200">LuxeCart</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
                    New arrival
                  </span>
                </div>

                <div className="mt-12 h-64 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_40%),linear-gradient(135deg,_rgba(255,255,255,0.15),_rgba(255,255,255,0.02))] p-5">
                  <div className="flex h-full items-end justify-between">
                    <div className="space-y-3">
                      <div className="h-14 w-14 rounded-2xl bg-amber-300/80" />
                      <div className="h-20 w-20 rounded-[1.5rem] bg-white/20" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-32 w-20 rounded-[2rem] bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 shadow-2xl" />
                      <div className="h-10 w-32 rounded-full bg-white/15" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Avg. order</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">$148</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Repeat buyers</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">72%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((item, index) => (
            <div key={item.title} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-slate-900 to-amber-500 text-lg font-bold text-white">
                0{index + 1}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Our story</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Built by people who wanted shopping to feel personal again.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              LuxeCart began with a simple idea: the best shopping experiences should combine quality,
              accessibility, and genuine care. We launched as a boutique storefront focused on modern,
              useful products that enrich everyday life.
            </p>
            <p>
              Today, we serve customers across the country with a fast-growing collection of home,
              lifestyle, and gifting essentials — all selected with the same attention to taste,
              value, and trust that inspired our first order.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-amber-100 via-white to-rose-100 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Why shoppers stay</p>
            <h3 className="mt-4 text-3xl font-black text-slate-900">A retail experience designed around trust.</h3>
            <ul className="mt-8 space-y-4">
              {promise.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Mission</p>
              <h4 className="mt-4 text-2xl font-bold text-slate-900">Helpful shopping, not overwhelming choices.</h4>
              <p className="mt-4 text-slate-600">
                We simplify discovery with standout products and clear guidance that helps people buy with confidence.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Vision</p>
              <h4 className="mt-4 text-2xl font-bold text-slate-900">A store that feels as good as the products it sells.</h4>
              <p className="mt-4 text-slate-600">
                We aim to set a new standard for online retail by combining beauty, utility, and service.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Community</p>
              <h4 className="mt-4 text-2xl font-bold text-slate-900">Made for real homes, real routines, and real moments.</h4>
              <p className="mt-4 text-slate-600">
                From gifting to daily essentials, we create a shopping experience that supports the life customers are already living.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2.5rem] bg-slate-900 px-8 py-12 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Let’s build better habits</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Discover products that fit your life beautifully.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Explore now
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

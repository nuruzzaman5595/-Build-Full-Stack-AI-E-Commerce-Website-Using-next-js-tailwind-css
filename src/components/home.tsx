import Link from "next/link";

const categories = [
  { name: "Quiet essentials", detail: "For everyday rituals", tone: "bg-[#e7dfd3]" },
  { name: "Statement pieces", detail: "Made to be noticed", tone: "bg-[#d8dfe0]" },
  { name: "Gifts with meaning", detail: "Worth giving", tone: "bg-[#e4d8d2]" },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f0]">
      <section className="mx-auto grid min-h-155px max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            The considered collection
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-7xl">
            Make room for things that matter.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
            Discover useful, beautiful pieces selected for modern living. Thoughtful
            design, honest materials, and a little more joy in the everyday.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              href="/card"
            >
              Explore the collection
            </Link>
            <Link
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              href="/about"
            >
              Our story
            </Link>
          </div>
          <div className="mt-12 flex gap-8 border-t border-stone-200 pt-6 text-sm text-slate-600">
            <span><strong className="block text-lg text-slate-900">Curated</strong>with intention</span>
            <span><strong className="block text-lg text-slate-900">Simple</strong>from start to finish</span>
          </div>
        </div>

        <div className="relative min-h-105px overflow-hidden rounded-4xl bg-slate-900 p-6 text-white sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-32px border-amber-600/80" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-48px border-stone-200/20" />
          <div className="relative flex h-full min-h-92.5px flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              New perspective
            </span>
            <div>
              <p className="max-w-sm text-4xl font-medium leading-tight sm:text-5xl">
                Less noise. More of what feels like you.
              </p>
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
                A slower, more personal way to find the pieces that belong in your space.
              </p>
            </div>
            <div className="flex items-end justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-[0.2em] text-slate-400">
              <span>Edition 01</span>
              <span>LuxeCart</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-8">
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Start here</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Find your kind of beautiful</h2>
            </div>
            <Link className="hidden text-sm font-semibold text-slate-700 underline decoration-stone-300 underline-offset-4 hover:text-amber-700 sm:block" href="/projects">
              View all collections
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <Link className={`${category.tone} group rounded-2xl p-6 transition hover:-translate-y-1`} href="/card" key={category.name}>
                <div className="flex min-h-32 flex-col justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Collection</span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                    <p className="mt-1 text-sm text-slate-600 transition group-hover:text-slate-900">{category.detail} &rarr;</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
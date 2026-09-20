import Link from "next/link";

const collections = [
  {
    number: "01",
    name: "Everyday objects",
    description: "Useful pieces that make daily routines feel a little more considered.",
    className: "bg-[#e7dfd3]",
  },
  {
    number: "02",
    name: "Warm minimalism",
    description: "Quiet forms, natural textures, and a softer approach to modern living.",
    className: "bg-[#d8dfe0]",
  },
  {
    number: "03",
    name: "Gifts with meaning",
    description: "Thoughtful finds for celebrations, new chapters, and just because.",
    className: "bg-[#e4d8d2]",
  },
  {
    number: "04",
    name: "The new classics",
    description: "Timeless pieces selected to keep their place as your life changes.",
    className: "bg-[#dedbd0]",
  },
];

export default function Collections() {
  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-stone-200 pb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">The collections</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Find the pieces that fit your life.
            </h1>
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-600">
            Explore our edits by mood, moment, and the way you want your space to feel.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {collections.map((collection) => (
            <article className={`${collection.className} group min-h-80 rounded-2xl p-7 transition hover:-translate-y-1 sm:p-9`} key={collection.number}>
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-500">{collection.number}</span>
                  <span className="rounded-full border border-slate-900/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                    Collection
                  </span>
                </div>
                <div className="mt-16">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{collection.name}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{collection.description}</p>
                  <Link className="mt-6 inline-block text-sm font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 transition group-hover:text-amber-700" href="/card">
                    Shop this edit &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-stone-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm leading-6 text-slate-600">Can&apos;t decide where to start? Browse everything in one place.</p>
          <Link className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700" href="/card">
            Shop all pieces
          </Link>
        </div>
      </section>
    </main>
  );
}
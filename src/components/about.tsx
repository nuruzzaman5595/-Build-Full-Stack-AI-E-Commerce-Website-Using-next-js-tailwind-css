export default function About() {
  return (
    <main className="flex-1 bg-[#f8f5f0]">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            About LuxeCart
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Thoughtful shopping, beautifully simplified.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            LuxeCart brings together carefully selected pieces for people who value
            quality, character, and a better everyday experience. Every collection is
            chosen to feel useful today and worth keeping for years.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            From discovery to delivery, we keep the experience personal, clear, and
            easy to enjoy.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
            <p className="text-4xl font-semibold">24h</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Fast, attentive support when you need it.</p>
          </div>
          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-4xl font-semibold text-amber-700">100%</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">Curated with intention, never by accident.</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Our promise
            </p>
            <p className="mt-4 max-w-lg text-xl font-medium leading-8 text-slate-900">
              Make every purchase feel considered, from the first click to the moment it arrives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
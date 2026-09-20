import Link from "next/link";

const articles = [
  {
    category: "The edit",
    title: "How to build a home that feels like your own",
    summary: "A few practical principles for choosing pieces with personality and staying clear of clutter.",
    readTime: "4 min read",
  },
  {
    category: "Materials",
    title: "The quiet beauty of things made well",
    summary: "Why honest materials, considered details, and care over time make a difference.",
    readTime: "6 min read",
  },
  {
    category: "Everyday",
    title: "Small rituals, better mornings",
    summary: "Simple upgrades that bring a little more intention to the start of your day.",
    readTime: "3 min read",
  },
];

export default function Blog() {
  return (
    <main className="bg-[#f8f5f0]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">The journal</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Ideas for living with intention.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Notes on design, materials, and the everyday choices that make a space feel personal.
          </p>
        </div>

        <article className="mt-14 grid overflow-hidden rounded-2xl bg-slate-900 text-white lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-80 flex-col justify-between p-8 sm:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Featured story</p>
              <h2 className="mt-8 max-w-xl text-3xl font-medium leading-tight sm:text-5xl">
                The art of choosing less, and choosing better.
              </h2>
            </div>
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/20 pt-5 text-sm text-slate-300">
              <span>By the LuxeCart team</span>
              <span>8 min read</span>
            </div>
          </div>
          <div className="flex min-h-64 items-center justify-center bg-amber-700 p-8">
            <div className="max-w-xs text-center">
              <p className="text-7xl font-semibold tracking-tight text-amber-100">01</p>
              <p className="mt-4 text-sm leading-6 text-amber-100/80">A slower approach to finding objects with staying power.</p>
            </div>
          </div>
        </article>

        <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-3">
          {articles.map((article) => (
            <article className="flex flex-col border-t border-stone-300 pt-5" key={article.title}>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                <span>{article.category}</span>
                <span className="text-slate-400">{article.readTime}</span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold leading-tight text-slate-900">{article.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{article.summary}</p>
              <Link className="mt-6 text-sm font-semibold text-slate-900 underline decoration-stone-300 underline-offset-4 hover:text-amber-700" href="/projects">
                Read the story &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
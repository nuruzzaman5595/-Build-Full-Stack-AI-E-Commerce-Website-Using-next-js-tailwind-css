const products = [
  {
    name: "Aster Leather Tote",
    category: "Accessories",
    price: "$128",
    originalPrice: "$164",
    rating: 4.9,
    badge: "Best seller",
    colors: ["bg-stone-900", "bg-amber-500", "bg-rose-300"],
  },
  {
    name: "Nova Wireless Speaker",
    category: "Audio",
    price: "$89",
    originalPrice: "$119",
    rating: 4.8,
    badge: "New",
    colors: ["bg-sky-500", "bg-slate-700", "bg-neutral-300"],
  },
  {
    name: "Luma Desk Lamp",
    category: "Home",
    price: "$74",
    originalPrice: "$96",
    rating: 4.7,
    badge: "Popular",
    colors: ["bg-amber-200", "bg-zinc-800", "bg-stone-500"],
  },
  {
    name: "Cove Knit Set",
    category: "Fashion",
    price: "$142",
    originalPrice: "$188",
    rating: 5.0,
    badge: "Limited",
    colors: ["bg-rose-200", "bg-slate-900", "bg-orange-300"],
  },
  {
    name: "Terra Ceramic Vase",
    category: "Decor",
    price: "$54",
    originalPrice: "$72",
    rating: 4.6,
    badge: "Gift pick",
    colors: ["bg-emerald-500", "bg-stone-700", "bg-yellow-200"],
  },
  {
    name: "Orbit Smart Watch",
    category: "Tech",
    price: "$199",
    originalPrice: "$249",
    rating: 4.9,
    badge: "Trending",
    colors: ["bg-slate-800", "bg-cyan-400", "bg-gray-200"],
  },
];

const filters = ["All", "New In", "Best Sellers", "Home", "Tech", "Fashion"];

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-10 text-slate-900 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 px-6 py-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Shop now</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Featured essentials</h1>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            1200+ products available
          </div>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-sm">
                    {product.badge}
                  </span>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:bg-slate-100">
                    ♡
                  </button>
                </div>

                <div className="mt-4 flex h-56 items-end justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-stone-200 p-4">
                  <div className="flex items-end gap-3">
                    <div className={`h-20 w-12 rounded-t-2xl ${product.colors[0]} shadow-lg`} />
                    <div className={`h-28 w-16 rounded-t-2xl ${product.colors[1]} shadow-lg`} />
                    <div className={`h-16 w-10 rounded-t-2xl ${product.colors[2]} shadow-lg`} />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{product.category}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
                    <span>★</span>
                    <span>{product.rating}</span>
                  </div>
                </div>

                <h2 className="mt-3 text-xl font-bold text-slate-900">{product.name}</h2>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-black text-slate-900">{product.price}</span>
                  <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                </div>

                <button className="mt-6 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

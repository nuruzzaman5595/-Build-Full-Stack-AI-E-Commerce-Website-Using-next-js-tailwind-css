const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/card" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

const Navber = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
            L
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">LuxeCart</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Modern living</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
           </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 sm:inline-flex">
            Search
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            Cart (2)
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navber
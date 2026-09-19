const footerLinks = {
  Shop: ["New arrivals", "Best sellers", "Gift cards", "Sale"],
  Company: ["About us", "Stories", "Journal", "Careers"],
  Support: ["Shipping", "Returns", "FAQs", "Contact"],
};

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-slate-900">
                L
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-white">LuxeCart</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Modern living</div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Curated essentials for a more beautiful everyday life — from home accents to statement pieces and daily favorites.
            </p>

            <div className="mt-6 flex gap-3">
              {['Instagram', 'Pinterest', 'X', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{title}</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-300 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Newsletter</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Get early access to new arrivals and exclusive offers.
            </p>
            <div className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
              />
              <button className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 LuxeCart. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
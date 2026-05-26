import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router-dom';

const navItems = [
  { to: '/terms', label: 'Términos' },
  { to: '/privacy', label: 'Privacidad' },
  { to: '/support', label: 'Soporte' },
];

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-rentia-ink-900 text-rentia-cloud">
      <ScrollRestoration />
      <header className="sticky top-0 z-10 border-b border-white/5 bg-rentia-ink-900/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/icon.png"
              alt="Rentia"
              className="size-8 rounded-lg ring-1 ring-white/10 transition group-hover:ring-rentia-teal/60"
            />
            <span className="font-serif text-lg tracking-tight">Rentia</span>
            <span className="hidden text-xs uppercase tracking-widest text-rentia-slate-300 sm:inline">
              Información legal
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-md px-3 py-1.5 transition',
                    isActive
                      ? 'bg-rentia-teal/15 text-rentia-teal'
                      : 'text-rentia-slate-200 hover:text-rentia-cloud hover:bg-white/5',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/5 bg-rentia-ink-950/60">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-rentia-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rentia · Operado por{' '}
            <span className="text-rentia-cloud">Deveco IT</span>
          </p>
          <p className="text-xs">
            <Link to="/terms" className="hover:text-rentia-teal">
              Términos
            </Link>
            <span className="mx-2 text-rentia-slate-400">·</span>
            <Link to="/privacy" className="hover:text-rentia-teal">
              Privacidad
            </Link>
            <span className="mx-2 text-rentia-slate-400">·</span>
            <Link to="/support" className="hover:text-rentia-teal">
              Soporte
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

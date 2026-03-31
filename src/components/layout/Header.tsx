import { useState } from "react";

const NAV_LINKS = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <nav
        className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Ana navigasyon"
      >
        <a
          href="#hero"
          className="text-xl font-bold text-blue-800 dark:text-blue-400"
          aria-label="Seher Akyel kişisel portföy sitesi"
        >
          <span className="text-gray-400">&lt;</span>
          Seher<span className="text-blue-600 dark:text-blue-300">Akyel</span>
          <span className="text-gray-400">/&gt;</span>
        </a>

        <ul className="hidden md:flex flex-wrap gap-2 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/uikit"
              className="px-3 py-2 rounded-md font-medium text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 border border-purple-200 dark:border-purple-800 transition-colors"
            >
              UI Kit
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-md border border-gray-200 dark:border-gray-700"
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pb-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/uikit"
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-medium text-purple-700 dark:text-purple-400"
            >
              UI Kit
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

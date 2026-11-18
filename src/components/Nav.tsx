import type { NavLink, Theme } from "@app-types/typesPortfolio";
import "@styles/nav.css";

interface NavProps {
  brand: string;
  links: NavLink[];
  theme: Theme;
  onToggleTheme: () => void;
}

export function Nav({ brand, links, theme, onToggleTheme }: NavProps) {
  const next = theme === "dark" ? "claro" : "oscuro";
  return (
    <header className="nav">
      <p className="nav__brand">{brand}</p>
      <nav className="nav__links" aria-label="Principal">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <button
        type="button"
        className="nav__toggle"
        onClick={onToggleTheme}
        aria-label={`Cambiar a tema ${next}`}
      >
        {theme === "dark" ? "Claro" : "Oscuro"}
      </button>
    </header>
  );
}


export default Nav
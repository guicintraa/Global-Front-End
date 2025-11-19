import { Link, NavLink } from "react-router-dom";

const navLinkClass =
  "px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-100";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌐</span>
          <span className="font-bold text-lg">FutureSkills</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/usuarios" className={navLinkClass}>
            Usuários
          </NavLink>
          <NavLink to="/integrantes" className={navLinkClass}>
            Integrantes
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            Sobre
          </NavLink>
          <NavLink to="/faq" className={navLinkClass}>
            FAQ
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

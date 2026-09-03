import { Link } from "react-router";
export default function Menu() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6"
        aria-label="Navegação principal"
      >
        <Link className="font-black text-cyan-400" to="/">
          TechStore
        </Link>
        <div className="flex gap-4 font-semibold text-slate-300">
          <Link className="hover:text-white" to="/">
            Home
          </Link>
          <Link className="hover:text-white" to="/produtos">
            Produtos
          </Link>
        </div>
      </nav>
    </header>
  );
}

import { Link } from "react-router";
import { listaProdutos } from "../../lsitaprodutos";
export default function Produtos() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-black text-white">Produtos</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {listaProdutos.map((produto) => (
          <article
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            key={produto.id}
          >
            <h2 className="text-xl font-bold">{produto.nome}</h2>
            <p className="mt-3">R$ {produto.preco}</p>
            <Link
              className="mt-5 inline-flex font-bold text-cyan-400"
              to={`/produtos/${produto.id}`}
            >
              Visualizar produto
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

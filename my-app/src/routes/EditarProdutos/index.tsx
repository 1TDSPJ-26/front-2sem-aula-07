import { useNavigate, useParams } from "react-router";
import { listaProdutos } from "../../lsitaprodutos";
export default function EditarProduto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const produto = listaProdutos.find((item) => item.id === Number(id));
  if (!produto) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-black text-white">
          Produto não encontrado
        </h1>
        <button
          className="mt-8 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
          type="button"
          onClick={() => navigate("/produtos")}
        >
          Voltar aos produtos
        </button>
      </section>
    );
  }
  return (
    <article className="py-16">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
        EditarProduto - ID {produto.id}
      </p>
      <h1 className="mt-3 text-4xl font-black text-white">{produto.nome}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {produto.descricao}
      </p>
      <strong className="mt-8 block text-3xl text-cyan-300">
        R$ {produto.preco.toFixed(2).replace(".", ",")}
      </strong>
      <button
        className="mt-10 rounded-xl border border-slate-700 px-5 py-3 font-bold"
        type="button"
        onClick={() => navigate("/produtos")}
      >
        Voltar aos produtos
      </button>
    </article>
  );
}

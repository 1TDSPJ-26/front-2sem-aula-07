import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
  return (
    <main>
    <section>
      <h2>Conteúdo principal</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga impedit adipisci cupiditate soluta voluptatum perspiciatis! Molestiae eos excepturi corporis, laborum eum consectetur quis rem amet fuga laudantium facere ducimus.</p>
      <figure>
        <img src="/quadrado-b.png"
          alt="Imagem ilustrativa do conteúdo" />

          <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>

      </figure>
      </section>
      <section>
      <h2>Imagem interna</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga impedit adipisci cupiditate soluta voluptatum perspiciatis! Molestiae eos excepturi corporis, laborum eum consectetur quis rem amet fuga laudantium facere ducimus.</p>
      <figure>
        <img src={imgQuadrado}
          alt="Imagem ilustrativa do conteúdo" />

          <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>

      </figure>
      </section>
    </main>
  )
}
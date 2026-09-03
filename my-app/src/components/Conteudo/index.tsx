import imgQuadrado from "../../img/quadrado.png";
export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo principal</h2>

      <figure>
        <img
          src="https://placehold.co/300x200/000000/FFFFFF/png"
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusantium quos debitis. Quo amet dolorem aperiam enim asperiores quam magni exercitationem ratione, suscipit officia porro tenetur esse id, perferendis recusandae tempore ullam accusantium ex assumenda officiis blanditiis eius quibusdam. Impedit quibusdam labore rem accusamus, ducimus consectetur perspiciatis ipsum dolor tempore.</p>
      </figure>
      </section>
      <section>
        <h2>Imagem Interna</h2>

      <figure>
        <img
          src={imgQuadrado}
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusantium quos debitis. Quo amet dolorem aperiam enim asperiores quam magni exercitationem ratione, suscipit officia porro tenetur esse id, perferendis recusandae tempore ullam accusantium ex assumenda officiis blanditiis eius quibusdam. Impedit quibusdam labore rem accusamus, ducimus consectetur perspiciatis ipsum dolor tempore.</p>
      </figure>
      </section>
      <section>
        <h2>Imagem Estatica</h2>

      <figure>
        <img
          src="/quadrado-b.png"
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusantium quos debitis. Quo amet dolorem aperiam enim asperiores quam magni exercitationem ratione, suscipit officia porro tenetur esse id, perferendis recusandae tempore ullam accusantium ex assumenda officiis blanditiis eius quibusdam. Impedit quibusdam labore rem accusamus, ducimus consectetur perspiciatis ipsum dolor tempore.</p>
      </figure>
      </section>
    </main>
  )
}
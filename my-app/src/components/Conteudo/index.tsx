import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
  return (
    <main>
        <section>
            <h2>Conteúdo</h2>
            <figure>
              <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />
              <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
        </section>
         <section>
            <h2>Imagem Interna</h2>
            <figure>
              <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" />
              <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
        </section>
         <section>
            <h2>Imagem Estática</h2>
            <figure>
              <img src="/quadrado-b.png" alt="Imagem ilustrativa do conteúdo" />
              <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
        </section>
    </main>
  )
}

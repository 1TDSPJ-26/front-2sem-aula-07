import imgQuadrado from "../../img/quadrado.png"

export default function Conteudo() {
  return (
    <main>
        <section>
      <h2>Conteúdo principal</h2>
      <figure>
        <img src="https://placehold.co/300x200/000000/FFFFFF/png"
          alt="Imagem ilustrativa do conteúdo" />
        <figcaption>Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus odio non corrupti illum odit cupiditate, nemo sit, velit voluptates unde culpa quam sequi minus magnam ipsum mollitia maiores doloremque hic! Consequatur dolores corporis qui quidem nihil minus rerum dicta adipisci ad. Sunt possimus quos sequi accusamus vitae dolorum commodi esse, quidem dicta facere ut dolor nihil iste sit laboriosam unde similique ipsam repellat. Blanditiis voluptatum quo at illo voluptas quisquam, obcaecati eum rerum, dolore quod officiis debitis earum sint. Minus blanditiis, iusto id, sapiente exercitationem ipsa deleniti expedita corporis obcaecati sed molestias molestiae sint odit eligendi odio libero maxime.</p>
    </section>

      <section>
      <h2>Imagem Interna</h2>
      <figure>
        <img src={imgQuadrado}
          alt="Imagem ilustrativa do conteúdo" />
        <figcaption>Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus odio non corrupti illum odit cupiditate, nemo sit, velit voluptates unde culpa quam sequi minus magnam ipsum mollitia maiores doloremque hic! Consequatur dolores corporis qui quidem nihil minus rerum dicta adipisci ad. Sunt possimus quos sequi accusamus vitae dolorum commodi esse, quidem dicta facere ut dolor nihil iste sit laboriosam unde similique ipsam repellat. Blanditiis voluptatum quo at illo voluptas quisquam, obcaecati eum rerum, dolore quod officiis debitis earum sint. Minus blanditiis, iusto id, sapiente exercitationem ipsa deleniti expedita corporis obcaecati sed molestias molestiae sint odit eligendi odio libero maxime.</p>
    </section>

      <section>
      <h2>Imagem estática</h2>
      <figure>
        <img src="/quadrado-b.png"
          alt="Imagem ilustrativa do conteúdo" />
        <figcaption>Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus odio non corrupti illum odit cupiditate, nemo sit, velit voluptates unde culpa quam sequi minus magnam ipsum mollitia maiores doloremque hic! Consequatur dolores corporis qui quidem nihil minus rerum dicta adipisci ad. Sunt possimus quos sequi accusamus vitae dolorum commodi esse, quidem dicta facere ut dolor nihil iste sit laboriosam unde similique ipsam repellat. Blanditiis voluptatum quo at illo voluptas quisquam, obcaecati eum rerum, dolore quod officiis debitis earum sint. Minus blanditiis, iusto id, sapiente exercitationem ipsa deleniti expedita corporis obcaecati sed molestias molestiae sint odit eligendi odio libero maxime.</p>
    </section>
    </main>
    
  )
}

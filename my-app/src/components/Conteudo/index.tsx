import imgQuadrado from '../../img/quadrado.png'

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>COnteudo</h2>
        <figure>
          <img src="https://placehold.co/600x400/FF0000/FFFFFF/png" alt="Imagem ilustrativa do conteudo" />
          <figcaption>Imagem utilizada para repreesentar o conteúdo da aplicação</figcaption>
        </figure>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur nam beatae aperiam odit maxime doloremque quod repellat veniam consequuntur hic laudantium fugiat, iure reprehenderit perspiciatis distinctio, laborum ab repellendus.
        Ex ipsum voluptatibus minus inventore natus, assumenda quibusdam iste repudiandae dolores, dolor officia similique. Nostrum culpa quis harum. Culpa sed error ipsam libero optio porro corrupti ducimus quos iure repudiandae.
        Voluptatem dicta rem sit inventore accusantium blanditiis quia, placeat alias dolorem saepe obcaecati veniam. Tempore a inventore quis itaque veritatis, nesciunt quasi amet repellendus voluptates minima id mollitia, excepturi earum.
      </section>
      <section>
        <h2>Imagem Interna</h2>
        <figure>
          <img src={imgQuadrado} alt="Imagem ilustrativa do conteudo" />
          <figcaption>Imagem utilizada para repreesentar o conteúdo da aplicação</figcaption>
        </figure>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur nam beatae aperiam odit maxime doloremque quod repellat veniam consequuntur hic laudantium fugiat, iure reprehenderit perspiciatis distinctio, laborum ab repellendus.
        Ex ipsum voluptatibus minus inventore natus, assumenda quibusdam iste repudiandae dolores, dolor officia similique. Nostrum culpa quis harum. Culpa sed error ipsam libero optio porro corrupti ducimus quos iure repudiandae.
        Voluptatem dicta rem sit inventore accusantium blanditiis quia, placeat alias dolorem saepe obcaecati veniam. Tempore a inventore quis itaque veritatis, nesciunt quasi amet repellendus voluptates minima id mollitia, excepturi earum.
      </section>
    </main>
  );
}
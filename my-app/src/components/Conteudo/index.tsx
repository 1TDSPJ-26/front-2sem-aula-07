import imgQuadrado from "../../img/quadrado.png";

export function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo</h2>
        <figure>
          <img
            src="https://placehold.co/600x400/FFFFF0/FFFFFF/png"
            alt="Imagem ilustrativa do conteúdo" />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium id ipsa recusandae? Fugit vel perspiciatis neque sint magnam eveniet, voluptatum nemo non atque doloremque voluptates magni labore qui reprehenderit expedita, velit nisi tempore asperiores quia, natus amet a adipisci consequatur? Distinctio in maiores nobis repellendus, dolorem magni tenetur. Architecto?</p>
      </section>
      <section>
        <h2>Imagem interna</h2>
        <figure>
          <img
            src={imgQuadrado}
            alt="Imagem ilustrativa do conteúdo" />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus perferendis enim reiciendis numquam aliquam labore veritatis amet architecto incidunt porro quaerat beatae quas harum doloremque, magni dolore! Possimus, quidem, ratione odio ipsam eveniet fugiat molestiae quos doloribus dolores voluptatum quo, tenetur excepturi? Eaque, earum atque illo impedit fugiat tenetur sequi.</p>
      </section>
       <section>
        <h2>Imagem Estática</h2>
        <figure>
          <img
            src="/quadrado-b.png"
            alt="Imagem ilustrativa do conteúdo" />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia pariatur repellendus at quo velit, iure laborum, provident quaerat doloremque, exercitationem molestiae aspernatur ea quibusdam ipsum unde quidem mollitia nulla! Et odit eius dolorum pariatur atque hic ratione, id quae accusantium, debitis tempore quas ipsum itaque aut, veniam vel. Doloremque.</p>
      </section>
    </main>
  );
}

import betigerImg from '../../img/Gira-gira.jpg'

export default function Produtos() {
    return (
        <main>
            <section>
                <h2>Produtos</h2>
                <figure>
                    <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo"/>
                    <figcaption>Imagem ilustrativa do conteúdo</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum voluptate est error optio porro, repellat labore reprehenderit vitae vero voluptas delectus deserunt nisi ipsam expedita hic laborum eaque alias minima sunt aspernatur officiis nemo in. Corporis corrupti porro veniam?</p>
            </section>
            <section>
                <h2>Betiger</h2>
                <figure>
                    <img src={betigerImg} width="600" height="400" alt="Imagem ilustrativa de Betiger"/>
                    <figcaption>Pessoal do Betiger</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum voluptate est error optio porro, repellat labore reprehenderit vitae vero voluptas delectus deserunt nisi ipsam expedita hic laborum eaque alias minima sunt aspernatur officiis nemo in. Corporis corrupti porro veniam?</p>
            </section>
        </main>
    )
}
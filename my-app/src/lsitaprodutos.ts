export type Produto = {
 id: number
 nome: string
 preco: number
 descricao: string
}
export const listaProdutos: Produto[] = [
 {
 id: 1,
 nome: 'Notebook Tech One',
 preco: 4299.9,
 descricao: '16 GB de memória, SSD de 512 GB e tela de 15,6 polegadas.',
 },
 {
 id: 2,
 nome: 'Notebook Tech Air',
 preco: 5199.9,
 descricao: 'Estrutura leve, 16 GB de memória e bateria para o dia inteiro.',
 },
 {
 id: 3,
 nome: 'Teclado Tech Keys',
 preco: 349.9,
 descricao: 'Teclado mecânico compacto com iluminação e conexão USB-C.',
 },
]
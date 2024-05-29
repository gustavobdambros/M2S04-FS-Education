//[M2S04] Ex 1 - Soma de Elementos
const numeros = [4, 9, 7, 12, 21];

const numerosSomados = numeros.reduce((somaAtual, numero) => {
  return somaAtual + numero;
}, 0);

console.log(`A soma dos elementos do array é: ${numerosSomados}`);
// -----------------------------------------------------------------------------------------
//[M2S04] Ex 2 - Filtragem de Elementos

const pares = numeros.filter((n) => {
  return n % 2 === 0;
});

console.log(pares);
//-----------------------------------------------------------------------------------------
//[M2S04] Ex 3 - Mapeamento de Elementos
const quadrados = numeros.map((n) => {
  return Math.pow(n, 2);
});

console.log(quadrados);
//-----------------------------------------------------------------------------------------
// [M2S04] Ex 4 - Criando classe Produto
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  // [M2S04] Ex 5 - Criando método Vender
  Vender(quantidadeVendida) {
    if (quantidadeVendida > this.quantidade) {
      console.log("Estoque insuficiente.");
    } else {
      this.quantidade -= quantidadeVendida;
      console.log(
        `Venda de ${quantidadeVendida} unidades de ${this.nome} realizada.`
      );
    }
  }

  // [M2S04] Ex 6 - Criando método Repor
  Repor(quantidadeReposta) {
    this.quantidade += quantidadeReposta;
    console.log(`Quantidade reposta de ${this.nome}: ${quantidadeReposta}`);
  }

  // [M2S04] Ex 7 - Criando método MostrarEstoque
  MostrarEstoque() {
    console.log(
      `O produto ${this.nome} possui ${this.quantidade} unidades disponíveis.`
    );
  }
}

// Chamando o método Vender
const produto = new Produto("Bermuda", 59.9, 20);
produto.Vender(5);
// Mostrando o saldo insuficiente após a venda
produto.Vender(20);
// Chamando o método Repor
produto.Repor(10);
// Chamando o método MostrarEstoque
produto.MostrarEstoque();
//-----------------------------------------------------------------------------------------

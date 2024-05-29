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
}

const bermuda = new Produto("Bermuda", 59.9, 20);
bermuda.Vender(5);
console.log(`Estoque atual de ${bermuda.quantidade} bermudas.`);
bermuda.Vender(20);
//-----------------------------------------------------------------------------------------

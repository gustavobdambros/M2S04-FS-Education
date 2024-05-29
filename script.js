//[M2S04] Ex 1 - Soma de Elementos
const numeros = [4, 9, 7, 12, 21];

const numerosSomados = numeros.reduce((somaAtual, numero) => {
  return somaAtual + numero;
}, 0);

console.log(`A soma dos elementos do array é: ${numerosSomados}`);
// -----------------------------------------------------------------------------------------

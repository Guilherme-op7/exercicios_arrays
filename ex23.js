import prompt from 'prompt-sync'
let ler = prompt();

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log("Digite um número de 1 a 12 para o mês:");
let numero = Number(ler());

if (numero >= 1 && numero <= 12) {
  console.log(`O mês é: ${meses[numero - 1]}`);
} else {
  console.log("Número inválido. Digite de 1 a 12.");
}
import prompt from 'prompt-sync'
let ler = prompt();

let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log("Digite um número de 0 a 6 para o dia da semana:");
let numero = Number(ler());

if (numero >= 0 && numero <= 6) {
  console.log(`O dia da semana é: ${dias[numero]}`);
} else {
  console.log("Número inválido. Digite de 0 a 6.");
}
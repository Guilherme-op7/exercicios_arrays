import prompt from 'prompt-sync'
let ler = prompt();

console.log("Quantas notas deseja inserir?");
let qtd = Number(ler())
let notas = [];

for (let i = 0; i < qtd; i++) {
  console.log(`Digite a nota ${i + 1}:`);
  let nota = Number(ler())
  notas.push(nota);
}

console.log("Notas digitadas:");
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

let maior = notas[0];
for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maior) {
    maior = notas[i];
  }
}
console.log("A maior nota é", maior);


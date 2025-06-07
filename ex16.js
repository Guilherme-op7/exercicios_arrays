import prompt from 'prompt-sync'
let ler = prompt();

console.log("Quantas notas deseja inserir?");
let qtd = Number(ler());

let notas = [];
let soma = 0;

for (let i = 0; i < qtd; i++) {
    let nota = Number(ler(`Digite a nota ${i + 1}: `));
  notas.push(nota);
  soma += nota;
}

console.log("Notas digitadas:");
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

let media = soma / qtd;
console.log('A media é ', media);
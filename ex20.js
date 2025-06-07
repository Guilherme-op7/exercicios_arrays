import prompt from 'prompt-sync';
let ler = prompt();

let qtd = Number(ler("Quantos alunos tem na turma? "));
let medias = [];

for (let i = 0; i < qtd; i++) {
  let nota = Number(ler(`Digite a média FINAL do aluno ${i + 1}: `));
  medias.push(nota);
}

console.log("Notas digitadas:");
for (let i = 0; i < medias.length; i++) {
  console.log(medias[i]);
}

let reprovados = 0;

for (let i = 0; i < medias.length; i++) {
  if (medias[i] < 6) {
    reprovados++;
    console.log(`Aluno ${i + 1} com nota ${medias[i]} foi reprovado`);
  }
}

if (reprovados === 0) {
  console.log("Todos os alunos foram aprovados!");
} else {
  console.log("Não foram todos que passaram!");
}

import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite o nome do projeto de caridade: ");
let projeto = ler()
console.log("Quantas doações foram recebidas? ");
let qtd = Number(ler())

console.log("Qual a meta do projeto? ");
let meta = Number(ler());

let doacoes = [];
let total = 0;

for (let i = 0; i < qtd; i++) {
    console.log(`Digite o valor da doação ${i + 1}: `);
    let valor = Number(ler())
  doacoes.push(valor);
  total += valor;
}

let maior = doacoes[0];
for (let i = 1; i < doacoes.length; i++) {
  if (doacoes[i] > maior) {
    maior = doacoes[i];
  }
}

console.log(`O projeto ${projeto} recebeu ${qtd} doações, totalizando ${total} reais.`);
console.log("As doações recebidas foram:");
for (let i = 0; i < doacoes.length; i++) {
  console.log(doacoes[i]);
}
console.log(`A maior doação foi ${maior} reais.`);
if (total >= meta) {
  console.log("A meta foi atingida!");
} else {
  console.log("A meta não foi atingida.");
}
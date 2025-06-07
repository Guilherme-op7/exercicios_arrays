import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite o nome do projeto de caridade: ");
let projeto = ler();
console.log("Quantas doações deseja registrar? ");
let qtd = Number(ler())
let doacoes = [];

for (let i = 0; i < qtd; i++) {
    console.log(`Digite o valor da doação ${i + 1}: `);
    let valor = Number(ler())
    doacoes.push(valor);
}

let total = 0;
for (let i = 0; i < doacoes.length; i++) {
  total += doacoes[i];
}

console.log(`O projeto "${projeto}" recebeu ${doacoes.length} doações, totalizando ${total} reais.`);
console.log("As doações recebidas foram:");
for (let i = 0; i < doacoes.length; i++) {
  console.log(doacoes[i]);
}
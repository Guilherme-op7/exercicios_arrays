import prompt from 'prompt-sync';
let ler = prompt();


console.log("Quantos números deseja inserir?");
let qtd = Number(ler());

let numeros = [];

for (let i = 0; i < qtd; i++) {
    console.log(`Digite o ${i + 1}º número:`);
    let num = Number(ler())
    numeros.push(num);
}

console.log("Você digitou os números:");

for (let num of numeros) {
  console.log(num);
}

console.log("Os números pares são:");

for (let num of numeros) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

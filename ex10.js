import prompt from 'prompt-sync'
let ler = prompt();

console.log('Digite a quantidade de numeros a serem armazenados: ');
let qtd = Number(ler());

let quantidade = [];

for (let c = 0; c < qtd; c++) {
    let numero = Number(ler());

    quantidade.push(numero)
}

for(let numero of quantidade) {
    let item = numero * 2;

    console.log(`O dobro de ${numero} é igual a: ${item}`)
}
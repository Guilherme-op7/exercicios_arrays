import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa do vetor: ');

console.log('Digite 5 nomes a serem armazenados: ');


let nomes = [];

for(let c = 0; c < 5; c++) {
    let n = ler();

    nomes.push(n)
}

console.log('Os nomes armazenados foram: ')

for(let item of nomes) {
    console.log(item)
}
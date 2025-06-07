import prompt from 'prompt-sync'
let ler = prompt();

console.log('Seja bem vindo ao programa do Vetor!');


console.log('Digite 5 números a serem armazenados: ');
let num = Number(ler());

let numeros = [];

for(let c = 0; c < 5; c++) {
    let numm = Number(ler());

    numeros.push(numm)
}

console.log('Os numeros digitados foram: ')

for(let item of numeros) {
    console.log(item)    
}
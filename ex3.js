import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite quantos numeros voce quer armazenar: ');
let num = Number(ler())
let numeros = [];

for(let c = 1; c <= num; c++) {
    let numm = Number(ler());

    numeros.push(numm);
}

console.log('Os numeros aramazenados foram: ')

for(let item of numeros) {
    console.log(item)
}
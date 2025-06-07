import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite uma quantidade de numeros a serem armazenados e apos isso vamos calcular o dobro deles: ');
let numero = Number(ler());

let quantidade = [];

for(let c = 0; c < numero; c++) {
    let num = Number(ler());

    quantidade.push(num)
}

console.log('Os numeros armazenados são: ');

for(let item of quantidade) {
    console.log(item)
}

console.log('E o dobro dos numeros armazenados são: ')

for(let num of quantidade) {
    let dobro = num * 2;

    console.log(dobro)
}
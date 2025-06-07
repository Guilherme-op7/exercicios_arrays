import prompt from 'prompt-sync'
let ler = prompt();

console.log('Digite um numero para calcularmos a tabuada dele: ');
let num = Number(ler());

let numeros = [];

for(let c = 1; c <= 10; c++) {
    let res = num * c;

    numeros.push(res)
}

console.log('A tabuada do seguinte numero é igual a: ');

for(let item of numeros ) {
    console.log(item)
}
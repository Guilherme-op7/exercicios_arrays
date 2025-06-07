import prompt from 'prompt-sync'; 
let ler = prompt();              

console.log('Programa de vetores');

console.log('Digite quantos números você quer armazenar para contar inversamente:');
let num = Number(ler());       

let numeros = [];              


for (let c = 0; c < num; c++) {
    let numero = Number(ler(`Digite o número ${c + 1}: `));
    numeros.push(numero);
}


console.log('Os números inversamente são:');

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}
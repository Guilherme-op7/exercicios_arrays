import prompt from 'prompt-sync';
let ler = prompt();

console.log('Soma de Arrays');

console.log('Digite a quantidade de numeros a serem armazenados no Array: ');
let a1 = Number(ler());

let soma1 = [];
let soma2 = [];
let soma = [];

for(let c = 0; c < a1 ; c++) {
    let vetor1 = Number(ler(`Digite o numero ${c} do vetor 1: `));
    soma1.push(vetor1)
    let vetor2 = Number(ler(`Digite o numero ${c} do vetor 2: `));
    soma2.push(vetor2)
    soma.push(vetor1 + vetor2)
}


console.log('Primeiro vetor: ')

for(let item of soma1) {
    console.log(item)
}

console.log('Segundo vetor: ')

for(let i of soma2) {
    console.log(i)
}

console.log('Soma dos vetores')

for(let it of soma) {
    console.log(it)

}

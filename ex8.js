import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a quantidade de numeros aleatorios que voce deseja gerar: ');
let qtd = Number(ler());

let quantidade = [];

for(let c = 0; c < qtd; c++) {
    let num = parseInt(Math.random()*100);

    quantidade.push(num)

}

console.log('Os numeros gerados de forma aleatoria são: ')

for(let item of quantidade) {
    console.log(item)
}

console.log(quantidade)
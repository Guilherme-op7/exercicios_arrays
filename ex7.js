import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo a blheteria do show!');

console.log('Digite a quantidade de ingressos que voce deseja: ');
let qtd = Number(ler());

let ingressos = [];

console.log('Digite a sigla do seu ingresso: ');
let sigla = ler();

for(let c = 1; c <= qtd; c++) {
    let si = sigla + c;

    ingressos.push(si)
}

console.log('Ingresso gerado com sucesso: ')

for(let item of ingressos) {
    console.log(item)
}
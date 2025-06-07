import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a qtd de números:');
let qtd = Number(ler());
 
let notas = [];
let soma = 0;

for(let cont = 0; cont < qtd; cont++){
    let num = Number(ler());
    notas.push(num)
    soma += num;
}
console.log("As Notas digitadas são")
for(let cont1 = 0;cont1 < notas.length;cont1++){
    console.log(notas[cont1])
}
let media = soma / qtd;
console.log("sua media é ")
console.log(media)
let nota = notas[0];
console.log("A maior nota é ")
for(let cont2 = 0; cont2 <= notas.length ; cont2++){
    if(notas[cont2] > nota ){
        nota = notas[cont2]
    }
    
}
console.log(nota)

console.log("A menor nota é ")
for(let cont2 = 0; cont2 <= notas.length ; cont2++){
    if(notas[cont2] < nota){
        nota = notas[cont2]
    }
}
console.log(nota)
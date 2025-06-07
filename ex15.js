import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a qtd de números:');
let qtd = Number(ler());
 
let nomes = [];

for(let cont = 0; cont < qtd; cont++){
    let num = ler();
    nomes.push(num)
}
console.log("Os nomes com L ou H são")
for(let cont1 = 0; cont1 < nomes.length; cont1++){
    if(nomes[cont1][0] === "L" || nomes[cont1][0] === "H"){
        console.log(nomes[cont1])
    }
    
}

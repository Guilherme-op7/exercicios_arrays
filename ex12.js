import prompt from 'prompt-sync';
let ler = prompt();

let qtd = parseInt(ler("Quantos pilotos competiram? "));

let largada = [];
let chegada = [];

console.log("Digite as posições de largada:");
for (let i = 0; i < qtd; i++) {
  console.log(`Piloto ${i + 1} largou em qual posição? `);
  let pos = Number(ler())
  largada.push(pos);
}

console.log("Digite as posições de chegada:");
for (let i = 0; i < qtd; i++) {
  console.log(`Piloto ${i + 1} chegou em qual posição? `);
  let pos = Number(ler())
  chegada.push(pos);
}

for (let i = 0; i < qtd; i++) {
  let desempenho = largada[i] - chegada[i];

  if (desempenho > 0) {
    console.log(`O piloto ${i + 1} avançou ${desempenho} posições`);
  } else if (desempenho < 0) {
    console.log(`O piloto ${i + 1} retrocedeu ${desempenho * -1} posições`);
  } else {
    console.log(`O piloto ${i + 1} manteve a posição`);
  }
}

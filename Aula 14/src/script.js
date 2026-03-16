// Definindo uma array Global
const times = ["Palmeiras","Flamengo", "Vasco","Bahia"];

// Utilizando o método indexOf()
let posicaoItem = times.indexOf("Vasco");

console.log(times);
console.log(posicaoItem);

// Utilizando o método lastIndexOf()
const time2 = ["Barcelona", "Real Madrid","Barcelona", "Barcelona"];

let posicaoItem2 = time2.lastIndexOf("Barcelona");

console.log(time2);
console.log(posicaoItem2);

// Utilizando o método includes()
let verificaExistenciaItem = times.includes("Psg");

console.log(verificaExistenciaItem);

// Utilizando o método find()
const number = [4, 6, 83, 64, 2, 17]
let encontarMaior = number.find(verificaValor);

function verificaValor(valor) {
    return valor > 50;
}

console.log(encontarMaior);

// Utilizando o método findIndex()
let encontrarIndice = number.findIndex(verificaValor);
console.log(encontrarIndice);

// Utilizando o método findLast()
let encontrarMaiorFinal = number.findLast((x) => x > 50);
console.log(encontrarMaiorFinal);

// Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);
console.log(encontrarIndiceMaiorFinal);






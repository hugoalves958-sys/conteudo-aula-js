// Exercicío 8: Escreva um algoritmo para ler as dimensões de um Trapézio (base maior, base menor e altura), calcular e escrever a área do Trapézio.

alert("Trapézio");

let baseMaior = parseFloat(prompt("Informe um valor da base maior: "));

let baseMenor = parseFloat(prompt("Informe o valor da base menor: "));

let altura = parseFloat(prompt("Informe o valor da altura: "));

let resultado = ((baseMaior + baseMenor)*altura) /2;

alert(`O resultado da operação é: ${resultado}`);




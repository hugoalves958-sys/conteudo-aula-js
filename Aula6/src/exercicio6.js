// Exercicío 6: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

alert("Área de Retângulo");

let base = parseFloat(prompt("Informe o valor da base do retângulo:"));
let altura = parseFloat(prompt("Informe o valor da altura do Retângulo: "));

let areaRetangulo = (base * altura);

alert(`O valor da área do Retângulo da base: ${base} e altura: ${altura} é: ${areaRetangulo}`)
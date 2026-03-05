//Exercício 2: O usuário vai informar valores e será efetuado sua Divisão.

alert("Divisão");

let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
let valor2 = parseFloat(prompt("Informe o segundo valor: "));

let resultado;

if (valor2 ===0){
    alert ("Não é possivel dividir por zero! Tente Novamente.");
} else {
    resultado = (valor1 / valor2);
}
alert("O resultado da Divisão é: " + resultado);
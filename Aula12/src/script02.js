// Primeiro array
const frutas = ["Banana", "Melão", "Melancia", "Manga"];

console.log(frutas);

//Adicionando items ao Array

const carros = [];

carros[0] = "Fiat";
carros[1] = "Ferrari";
carros[2] = "Byd";

console.log(carros[2]);

// Criando array com new Array()
const cores = new Array ("Azul", "Verde", "Roxo");

console.log(cores);

console.log(cores[0]);

// Alterando elementos de Array

// const frutas1 = ["Banana", "Melão", "Melancia", "Manga"];

// frutas1[3] = "Abacaxi";

// console.log(frutas1[3]);

// Convertendo Array em String
// let stringFrutas = frutas1.toString();

// console.log(stringFrutas);
// console.log(typeof frutas);

// Exemplo de elementos em Array
const pessoa = {
  primeiroNome: "Richard",
  ultimoNome: "Oliveira",
  idade: 19,
  pais: "Brasil",
}

function minhaFuncao() {
    return "Olá";
}

const meuArray = [];


meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao;

console.log(meuArray);

// Acessando a propriedade length
const material = ['Caderno', 'Lapís', 'Caneta', 'Borracha'];

let materia = material[material.length - 1];

console.log(material.length);

// Usando forEach em Array
const elemento = document.querySelector('.ex1');
const comida = ["Hamburguer", "Pizza", "Sushi", "Macarrão", "Frango"];

// Adicionando item no Array 
comida.push("Coxinha");
comida.push("Kibe");
comida.push("Miojo");

let texto = "<ul>";

comida.forEach(retornaItem);

texto = texto + "</ul>"

elemento.innerHTML = texto;

function retornaItem(item) {
    texto = texto + "<li>" + item + "</li>";
}


console.log(comida);

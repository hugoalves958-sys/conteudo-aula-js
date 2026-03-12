// Utilizando o operador in
const pessoa = {
    primeiroNome: "Hugo",
    ultimoNome: "Silva",
    idade: 21,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objetos aninhados

const pessoa2 = {
    primeiroNome: "Gustavo",
    segundoNome: "Gomez",
    carros: {
        carro1: "BMW",
        carro2: "Audi",
        carro3: "BYD",
    },
    motos: {
        moto1:"Ducati",
        moto2:"Royal Enfield",
    },
}

let moto1 = "moto1";

console.log(pessoa2.carros.carro2);
console.log(pessoa2.carros["carro3"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos[moto1]);



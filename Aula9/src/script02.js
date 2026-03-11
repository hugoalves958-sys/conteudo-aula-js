// Criando meu primeiro objeto
const carro = {marca: "Byd", Modelo: "King", Ano: "2026", cor: "cinza"}

console.log(carro.Modelo);

// Exemplo 2 de criação de objeto
const carro2 = {
    marca:"BMW",
    modelo:"X6",
    ano:"2025",
    cor:"verde",
}

console.log(carro2);

// Exemplo 3 de criação de objeto

const carro3 = {}

carro3.marca = "Chevrolet";
carro3.modelo = "Camaro";
carro3.ano = "2017";
carro3.cor = "Amarelo";

console.log(carro3);

// Exemplo 4 de criação de objeto

const carro4 = new Object({
    marca:"Hyundai",
    modelo:"Elantra",
    ano: 2026,
    cor: "Marrom",
    acelerar: function(){
        return this.modelo + " acelerou";
    },
});

let marcaCarro = "marca";

console.log(carro4[marcaCarro]);





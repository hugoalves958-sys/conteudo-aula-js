// Definição padrão de função
function soma(a,b) {
    return (a + b);
}

let a = soma(50,30);
console.log(a);

// Função armazenada em variável
const multiplicar = function (a, b){
    return (a * b);
}

let b = multiplicar(7, 3);
console.log(b);

// Arrow Function (Função de Seta)
let subtracao = (a, b) => (a - b);

let c = subtracao(7, 2);
console.log(c);

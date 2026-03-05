// Exemplo de utilização do length em string 

let texto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

elemento.innerHTML =

    // <style>
    //     .container{
    //     display: flex;
    //     gap: 30px;
    //     background-color: purple;
    //     }

    //     .container div {
    //     width: 100px;
    //     height: 100px;
    //     background-color: orange;
    // }

    //     <h1>ESSE É UM NOVO H1</h1>

    //     <div class="container">
    //         <div>Item 1</div>
    //         <div>Item 2</div>
    //         <div>Item 3</div>
    //     </div>
    // </style>

console.log(tamanho);

// Exemplo de utilização do caractere de escape

let texto2 = 'Somente a dor \'coletiva\' gera a união.';

let texto3 = "Somente a dor \"coletiva\" gera a união.";

let texto4 = "Somente a dor \\coletiva gera a união.";

// console.log(texto2);
// console.log(texto3);
// console.log(texto4);

// Exemplo de template string

let nome = "Hugo Alves"
let idade = 21;
let frase = `Meu nome é ${nome} e tenho ${idade} anos`;

let frase2
console.log(frase)

//Exemplo de adição de HTML com template string em JS

const elemento2  = document.querySelector('.ex2');

elemento2.innerHTML = `
<style>
    .container {
        background-color: darkgreen;
        display:flex;
        gap: 20px;
        justify-content: center;
    } 

    .container div{
        text-align: center;
        align-items: center;
        color: black;
        align-content: center;
        width: 100px;
        height: 100px;
        background-color: yellow;
    }
</style>

<h2>Exemplo de adição de conteúdo</h2>
 <div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
 </div>
`;
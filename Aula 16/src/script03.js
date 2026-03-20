//Validação de Formulário 
const formalurio = document.forms["novoForm"]["texto"].value;

function validarForm() {
    if (formalurio == "") {
        alert("Por Favor, insira um valor para o campo!");
        return false;
    }
}

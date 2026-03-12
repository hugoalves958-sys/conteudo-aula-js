// Criação de métodos
const casa = {
    portas: 7,
    janelas: 5,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Rabito",
            raca: "Vira-Lata",
            latir: function (){
                return this.nome + " Latiu: Au Au";
            }
        },
    },
}

console.log(casa.pets.cachorro.latir());

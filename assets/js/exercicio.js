/* Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).

let colaboradores = [
    {
        "nome": "João Silva",
        "data_nascimento": "1985-03-15",
        "cargo": "Gerente de Marketing"
    },
    {
        "nome": "Pedro Santos",
        "data_nascimento": "1982-11-10",
        "cargo": "Coordenador de Vendas"
    }
] */

let carros = [
{
    "marca" : "Ford",
    "placa" : "IPO3F89",
    "modelo" : "Fiesta",
    "data_emplacamento" : "2023-06-24",
    "cor" : "Vermelho"
},
{
    "marca" : "Fiat",
    "placa" : "MSX5P56",
    "modelo" : "Siena",
    "data_emplacamento" : "2010-05-29",
    "cor" : "Cinza"
},
{
    "marca" : "Fiat",
    "placa" : "POI4D34",
    "modelo" : "Touro",
    "data_emplacamento" : "2022-02-13",
    "cor" : "Branco"
},
{
    "marca" : "Toyota",
    "placa" : "SXS2L24",
    "modelo" : "Corolla",
    "data_emplacamento" : "2024-07-26",
    "cor" : "Prata"
},
{
    "marca" : "BMW",
    "placa" : "LPM1K20",
    "modelo" : "X3",
    "data_emplacamento" : "2021-05-06",
    "cor" : "Azul"
},
{
    "marca" : "Mercedes",
    "placa" : "SAL3K28",
    "modelo" : "GLA",
    "data_emplacamento" : "2025-01-27",
    "cor" : "Preto"
},
{
    "marca" : "Honda",
    "placa" : "sxs3b09",
    "modelo" : "Civic",
    "data_emplacamento" : "2010-08-17",
    "cor" : "Preto"
}


]

/* Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).

a) Criar uma lista de string com as marcas a partir da lista de carros (utilizar map)
b) Criar uma lista de objetos com placa, modelo da lista de carros (utilizar map)
c) Criar uma lista de string com os modelos filtrando por marca Fiat (lista de string)
d) Criar uma lista de (marca, modelo) filtrando por Azul
e) Criar uma lista filtrando por ano de emplacamento 2025 */

/* let colaboradoresNomes = colaboradores.map(colaborador => {
    return colaborador.nome;
});
console.log(colaboradoresNomes.sort());
 */

let carrosMarcas = carros.map(carros => {
    return carros.marca;
} );
console.log(carrosMarcas.sort());

/* let colaboradoresSalarioBrutos = colaboradores.map(colaborador => {
    let salarioBruto= colaborador.valor_hora * colaborador.quantidade_horas;

    return{salarioBruto: salarioBruto, nome: colaborador.nome}
}); */

let carrosPlacasModelos = carros.map( carros => {
    return{placa : carros.placa, modelo : carros.modelo}
});
console.log(carrosPlacasModelos);

/* let colaboradoresDescontosAbaixos100 = colaboradores.filter(colaborador => colaborador.valor_descontos < 100);

console.log(colaboradoresDescontosAbaixos100); */

let carroFiat = carros.filter(carros => 
     carros.marca === "Fiat" );
     console.log(carroFiat);

let carroazul = carros
    .filter(carros => carros.cor === "Azul")
    .map(carros => {
        return{
        modelo: carros.modelo, marca : carros.marca
        }
    });
console.log(carroazul);


let anoDesejadoCarros = 2025;
let anoPlacamento2025 = carros
.filter(carros => {
    let anoCarro  = new Date(carros.data_emplacamento).getFullYear();
    return anoCarro === anoDesejadoCarros
});

console.log(anoPlacamento2025);

     







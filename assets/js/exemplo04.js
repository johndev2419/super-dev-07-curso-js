function exemplo01Paciente() {
    //ultilizando multiplas variaveis 
    let tipoSanguineio = "A+"
    let cpf = "102.123.129-20"
    let idade = 20;
    let nome = "Maria";

    console.log(`nome: ${nome}
        tipo sanguineo: ${tipoSanguineio}
        idade: ${idade}
        cpf: ${cpf}`);

    //criando um objeto para armazenar varias caracteristicas

    let pacienteMaria = {
        tipoSanguineio: "A+",
        cpf: "102.230.456-90",
        idade: 20,
        nome: "maria",
    };
    //alterando idade 
    pacienteMaria.idade = 21;
    console.log(`nome: ${pacienteMaria.nome}
    tipo sanguineo: ${pacienteMaria.tipoSanguineio}
    idade: ${pacienteMaria.idade}
    cpf: ${pacienteMaria.cpf}`);

}


/*
 Criar uma função exercicioDadosJogo
    Criar as seguintes variáveis: nome, genero, dataLancamento (string)
    Apresentar as variáveis
    Criar um objeto chamado jogo com os atributos (nome, genero, dataLancamento)
    Apresentar o objeto por completo
    Adicionar os seguintes atributos no objeto do jogo (categoria, preco)
    Apresentar o objeto por completo
*/

function exercicioDadosJogo() {
    let nome = "naruto storm"
    let genero = "luta"
    let dataLancamento = "2013"

    console.log(`nome: ${nome}
        genero: ${genero}
        data Lançamento: ${dataLancamento}`);

    let jogos = {
        nome: "naruto storm",
        genero: "luta",
        dataLancamento: "2013",
        publisher: "bandai",
        preço: 225,
    };


    console.log(`nome: ${jogos.nome}
        genero: ${jogos.genero}
        data lançamento: ${jogos.dataLancamento}
        publisher: ${jogos.publisher}
        preço: ${jogos.preço}`);
}

function exemploObjetosVetores() {
    let alunos = [];

    let aluno1 = {};
    aluno1.nome = prompt("Digite o nome do aluno 1");
    aluno1.nota1 = parseFloat(prompt("ditie a nota 1"));
    aluno1.nota2 = parseFloat(prompt("ditie a nota 2"));
    aluno1.nota3 = parseFloat(prompt("ditie a nota 3"));
    //aluno.media = (aluno1.nota1 +  aluno1.nota2 + aluno1.nota3) / 3;
    aluno1.media = calcularMedia(aluno1)
    alunos.push(aluno1);

    let aluno2 = {};
    aluno2.nome = prompt("Digite o nome do aluno 1");
    aluno2.nota1 = parseFloat(prompt("ditie a nota 1"));
    aluno2.nota2 = parseFloat(prompt("ditie a nota 2"));
    aluno2.nota3 = parseFloat(prompt("ditie a nota 3"));
    aluno2.media = calcularMedia(aluno2)
    alunos.push(aluno2);


    console.table(alunos);

}

function calcularMedia(aluno) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media
}

/* Ex. 2: Criar uma lista de colaboradores
    Solicitar os dados armazenando em objetos
    Atributos: nome, valor hroa, quantidade de horas
    Criar uma função para calcular o salario Bruto, armazenando no objeto
    Apresentar os objetos com o console.table
 */

function listarColaboradores() {
    let colaboradores = [];

    let colaborador1 = {};
    colaborador1.nome = prompt("Digite o nome do colaborador 1");
    colaborador1.valorHora = parseFloat(prompt("digite o valor horas"));
    colaborador1.quantidadesHoras = parseFloat(prompt("digite a quantidades de horas"));
    colaboradores.push(colaborador1);
    colaborador1.soma = calcularSalarioBruto(colaborador1);


     let colaborador2 = {};
    colaborador2.nome = prompt("Digite o nome do colaborador 2");
    colaborador2.valorHora = parseFloat(prompt("digite o valor horas"));
    colaborador2.quantidadesHoras = parseFloat(prompt("digite a quantidades de horas"));
    colaboradores.push(colaborador2);
    colaborador2.soma = calcularSalarioBruto(colaborador2);


    console.table(colaboradores);
    

}

function calcularSalarioBruto(colaboradores){
    const soma = (colaboradores.valorHora + colaboradores.quantidadesHoras)
    return soma
}



let colaboradores = [
    {
        "nome": "Lucas",
        "sobrenome": "Ferreira",
        "valor_hora": 32.5,
        "quantidade_horas": 160,
        "valor_auxilio": 300.0,
        "valor_descontos": 120.0,
        "data_nascimento": "1998-07-14"
    },
    {
        "nome": "Ana",
        "sobrenome": "Silva",
        "valor_hora": 28.0,
        "quantidade_horas": 150,
        "valor_auxilio": 250.0,
        "valor_descontos": 100.0,
        "data_nascimento": "1992-05-21"
    },
    {
        "nome": "Bruno",
        "sobrenome": "Oliveira",
        "valor_hora": 35.0,
        "quantidade_horas": 170,
        "valor_auxilio": 320.0,
        "valor_descontos": 150.0,
        "data_nascimento": "1995-11-30"
    },
    {
        "nome": "Juliana",
        "sobrenome": "Santos",
        "valor_hora": 30.0,
        "quantidade_horas": 155,
        "valor_auxilio": 280.0,
        "valor_descontos": 110.0,
        "data_nascimento": "2001-03-08"
    },
    {
        "nome": "Rafael",
        "sobrenome": "Souza",
        "valor_hora": 33.5,
        "quantidade_horas": 165,
        "valor_auxilio": 310.0,
        "valor_descontos": 140.0,
        "data_nascimento": "1990-09-19"
    },
    {
        "nome": "Camila",
        "sobrenome": "Almeida",
        "valor_hora": 29.0,
        "quantidade_horas": 148,
        "valor_auxilio": 260.0,
        "valor_descontos": 95.0,
        "data_nascimento": "1999-12-02"
    },
    {
        "nome": "Felipe",
        "sobrenome": "Gomes",
        "valor_hora": 31.0,
        "quantidade_horas": 160,
        "valor_auxilio": 295.0,
        "valor_descontos": 125.0,
        "data_nascimento": "1997-06-10"
    },
    {
        "nome": "Marina",
        "sobrenome": "Lima",
        "valor_hora": 34.0,
        "quantidade_horas": 162,
        "valor_auxilio": 305.0,
        "valor_descontos": 135.0,
        "data_nascimento": "2003-01-27"
    },
    {
        "nome": "Diego",
        "sobrenome": "Moura",
        "valor_hora": 27.5,
        "quantidade_horas": 145,
        "valor_auxilio": 240.0,
        "valor_descontos": 90.0,
        "data_nascimento": "2005-10-15"
    },
    {
        "nome": "Tatiane",
        "sobrenome": "Carvalho",
        "valor_hora": 30.5,
        "quantidade_horas": 158,
        "valor_auxilio": 290.0,
        "valor_descontos": 115.0,
        "data_nascimento": "2000-08-05"
    }
]

/*
gerar uma lista de colaboradores no formato json com nome, sobrenome, valor hora, quantidade de horas, valor auxilio, valor descontos, data de nascimento.
Gerar um JSON com 10 colaboradores com idades entre 18 e 35 anos
*/

//criar uma nova lista de string com os nomes dos colaboradores 
let colaboradoresNomes = colaboradores.map(colaborador => {
    return colaborador.nome;
});
console.log(colaboradoresNomes.sort());

// Criar uma nova lista com os nomes completos dos colaboradores
//tenho uma lista de ojetos, gerar uma lista de string

let colaboradoresNomesCompletos = colaboradores.map(colaborador => {
    return{"nome" : colaborador.nome + " " + colaborador.sobrenome};
});

//criar uma nova lista com o nome e salario bruto dos colaboradores
let colaboradoresSalarioBrutos = colaboradores.map(colaborador => {
    let salarioBruto= colaborador.valor_hora * colaborador.quantidade_horas;

    return{salarioBruto: salarioBruto, nome: colaborador.nome}
});

//criar uma lista com nome e calcular a idade do colaborador 
let colaboradoresIdades = colaboradores.map(colaborador => {
    //pegando a data e hora atual do navegador
    let dataHoje = new Date ();
    //pegar o ano atual
    let anoAtual = dataHoje.getFullYear();
    // colaborador.data_nascimento => "1997-02-03" string
    let dataNascimento = new Date (colaborador.data_nascimento);

    let idade = anoAtual - dataNascimento.getFullYear();

    return{
        "nome" : colaborador.nome,
        "idade" : idade,
        "dataNascimento" : dataNascimento
    };
});

// Descobrir colaboradores desconto abaixo de R$ 100

let colaboradoresDescontosAbaixos100 = colaboradores.filter(colaborador => colaborador.valor_descontos < 100);

console.log(colaboradoresDescontosAbaixos100);





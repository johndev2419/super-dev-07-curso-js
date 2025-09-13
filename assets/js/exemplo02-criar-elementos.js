

let body = document.getElementsByTagName("body")[0];
let ul = document.createElement("ul");
ul.id = "lista-produtos";

// h1
// imagem
// p
// pegar o valor de um campo e add item <li> na lista
// botão de limpar a lista
function criarH1(){
    let h1 = document.createElement("h1");
    h1.innerText = "Supermercado";
    h1.classList.add("titulo");

    body.appendChild(h1);
}

function criarCampo(){
    // <label for="campo-nome">Nome</label>
    // 🐱‍🐉 <input type="text" id="campo-nome">
    
    let input = document.createElement("input"); // <input>
    input.id = "campo-nome"; // <input id="campo-nome">
    input.setAttribute("type", "text"); // <input type="text" id="campo-nome">
    input.addEventListener("keyup", processarEventoTecla);
    
    let label = document.createElement("label"); // <label></label>
    label.setAttribute("for", "campo-nome"); // <label for="campo-nome"></label>
    label.innerText = "Nome"; // <label for="campo-nome">Nome</label>
    
    body.appendChild(label);
    body.appendChild(input);
}

function criarBotaoCadastrar(){
    // <button type="button" onclick="cadastrar()">Cadastrar</button>
    let botao = document.createElement("button");
    botao.setAttribute("type", "button");
    botao.innerText = "Cadastrar";
    // Adicionar o evento de click que executará a função cadastrar
    botao.addEventListener("click", cadastrar);

    body.appendChild(botao);
}

function criarListaNaoOrdenada(){       
    body.appendChild(ul);
}

function cadastrar(){
    let input = document.getElementById("campo-nome");
    let nome = input.value;
    criarItemNaUl(nome);    w

    // Limpar o campo
    input.value = "";
    input.focus();
}

function criarItemNaUl(nomeProduto){
    // <li>Tomate</li>
    let li = document.createElement("li");
    li.innerText = nomeProduto;
    ul.appendChild(li);
}

function processarEventoTecla(evento){
    if (evento.key === "Enter"){
        cadastrar();
    }
}

function criarBotaoLimparLista(){
    let botaoLimparLista = document.createElement("button");
    botaoLimparLista.setAttribute("type", "button");
    botaoLimparLista.innerText = "Limpar Lista";
    botaoLimparLista.addEventListener("click", limparLista);
    body.appendChild(botaoLimparLista);
}

function limparLista(){
    ul.innerHTML = "";
}


criarH1()
criarCampo();
criarBotaoCadastrar();
criarListaNaoOrdenada();
criarBotaoLimparLista();
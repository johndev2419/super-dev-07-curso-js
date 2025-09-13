let body = document.getElementsByTagName("body")[0];
let ol = document.createElement("ol");
ol.id = "Lista"

function criarH1(){
    let h1 = document.createElement ("h1");
    h1.innerText = "Minhas tarefas do Curso SuperDev"
    h1.classList.add("Titulo");
    body.appendChild(h1);
}

function criarP(){
    let P = document.createElement ("p");
    P.innerText = "Curso Dev é dms"
    P.classList.add("paragrafo");
    body.appendChild(P);
}

function criarListaOrdenada(){
 body.appendChild(ol);
}

function criarItemOdernado(tarefa){
  let li = document.createElement ("li");
  li.innerText = tarefa;
  body.appendChild(li);
}

function criarCampoTarefa(){
    let input = document.createElement("input");
    input.id = "campo-tarefa";
    input.setAttribute = ("type" , "text");
    

    let label = document.createElement("label");
    label.setAttribute("for" , "campo-tarefa");
    label.innerText = "Tarefa"

    body.appendChild(input);
    body.appendChild(label);
}

function criarBotaoRegistar(){
    let botao = document.createElement("button");
    botao.setAttribute("type" , "button");
    botao.innerText = "Registrar"; 
    botao.addEventListener("click", registar);

    body.appendChild(botao);
}

function registar(){
    let input = document.getElementById("campo-tarefa");
    let tarefa = input.value 

    criarItemOdernado(tarefa);
}

function campoDataPlanejada(){
    let input = document.createElement("input");
    input.setAttribute("type" , "date");
    input.id = "campo-data";

    let label = document.createElement("label");
    label.setAttribute("for" , "campo-data");
    label.innerText = "Data planejada";

    body.appendChild(input);
    body.appendChild(label);

 }




criarH1();
criarP();   
criarCampoTarefa();
criarBotaoRegistar();
campoDataPlanejada()
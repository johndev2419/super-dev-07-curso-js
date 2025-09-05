function somar(){
    //pegar um elemento de tela do id
    //<elemento id= "numero1">
//     let campoNumero1 = document.getElementById("numero1");
//     console.log(campoNumero1);

//      let campoNumero2 = document.getElementById("numero2");
//     console.log(campoNumero2);

//     let numero1 = parseFloat(campoNumero1.value);
//     console.log(numero1);

//     let numero2 = parseFloat(campoNumero2.value);
//     console.log(numero2);

//     let soma = numero1 + numero2;

//     alert("soma: " + soma);
    
// }

// function subtrair(){
//     let campoNumero1 = document.getElementById("numero1");
//     console.log(campoNumero1);
    
//     let campoNumero2 = document.getElementById("numero2");
//     console.log(campoNumero2);

//     let numero1 = parseFloat(campoNumero1.value);
//     console.log(numero1);

//      let numero2 = parseFloat(campoNumero2.value);
//     console.log(numero2);

//     let subtrair = numero1 - numero2;

//     alert("subtrair: " + subtrair);
    
    
// }
// function multiplicar(){

// let campoNumero1 = document.getElementById("numero1");
//     console.log(campoNumero1);
    
//     let campoNumero2 = document.getElementById("numero2");
//     console.log(campoNumero2);

//     let numero1 = parseFloat(campoNumero1.value);
//     console.log(numero1);

//      let numero2 = parseFloat(campoNumero2.value);
//     console.log(numero2);

//     let multiplicar = numero1 * numero2;

//     alert("multiplicar: " + multiplicar);
    
// }

// function dividir(){

// let campoNumero1 = document.getElementById("numero1");
//     console.log(campoNumero1);
    
//     let campoNumero2 = document.getElementById("numero2");
//     console.log(campoNumero2);

//     let numero1 = parseFloat(campoNumero1.value);
//     console.log(numero1);

//      let numero2 = parseFloat(campoNumero2.value);
//     console.log(numero2);

//     let multiplicar = numero1 * numero2;

//     alert("multiplicar: " + multiplicar);
    
// }

// function definircorazul(){
//     let itens = document.getElementsByClassName("item");
//     for(let i =0; i< itens.length; i = i + 1){
//         let item = itens[i];
//          itens.style.backgroundcolor = "#34b4de";
//     }
 
   
    
// }

function definircor(nomecor){
    let itens = document = getElementsByClassName("item");
    let cor = "";
    if(nomecor === "azul") {
        cor = "#34b4de";
    } else if (nomecor === "roxo") {
        cor = "#a034deff"
    } else if (nomecor === "verde") {
        cor = "#34de64ff"
    }

    for(let i = 0; i<itens.length; i = i + 1) {
        let item = itens[i];
        item.style.backgroundcolor = cor
    }
}
}



// function definircorverde(){
//     let itens = document.getElementsByClassName("item");
//     itens[0] .style.backgroundcolor = "#34b4de"
//     console.log(itens);
// }
// function definircorvermelho(){
//     let itens = document.getElementsByClassName("item");
//     itens[0] .style.backgroundcolor = "#34b4de"
//     console.log(itens);
// }


function alterarVisibilidade(){
    let iframes = document.getElementsbyTagName("iframe");
    //sei que na nossa tela só tem um iframe, nvou faze for
    // porém se tiver mais do que é necessario cultilizar 
    if(iframes[0].style.display === "inline"){
        iframes[0].style.display ="none";
    }else {
        iframes[0].style.display = "inline"
    }
}

function limparCampo(){
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = "";
    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = "";
}

function apresentarNomeCompleto(){
    let campoNome = document.getElementsByName("nome")[0];
    let campoSobrenome = document.getElementsByName("sobrenome")[0];

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;

    let resultado = document.getElementById("resultadosNomes");
    resultado.innerText = `Nome Completo: ${nomeCompleto}`;
}

function sexemploQuerySelector(){
    let paragrafo = document.querySelector("div#jogos p")
    //Adicionar uma classe ao elemento
    paragrafo.classList.add("alternativo");
}


function exemploQuerySeletorAll(){
    let paragrafos = document.querySelectorAll("div#jogos p");

    for(let i = 0; i< paragrafos.length; i += 1){
        let paragrafo = paragrafos[i];
        if(i % 2 == 0){
            //adicionar uma classe "destaque" ao elemento 
            paragrafo.classList.add("destaque");
        } else {
           paragrafo.classList.add("elegante");
        }
    }
}

function resert() {
    let paragrafos = document.querySelectorAll("div#jogos p");
    for(let i = 0; i < paragrafos.length; i += 1){
        let paragrafo = paragrafos[i];
        //Aqui, o ... (spread) expande todas as classes atuais de elementos, removendo todas de uma vez 
        paragrafo.classList.remove(...paragrafo.classList);
    }
}




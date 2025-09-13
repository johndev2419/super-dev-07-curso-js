// Pegando os elementos do formulário pela ID para manipular depois
let campoNome = document.getElementById("nome"); // Campo de input para o nome do jogo
let campoCategoria = document.getElementById("categoria"); // Campo de input para a categoria do jogo
let campoPreco = document.getElementById("preco"); // Campo de input para o preço do jogo
let tbody = document.getElementById("tbody-jogos"); // Corpo da tabela onde os jogos serão listados

// Variável usada para controlar se estamos criando uma nova linha ou editando uma existente
let indiceLinhaParaAlterar = -1; // -1 significa que nenhuma linha está sendo editada no momento

// Função que é chamada quando clicamos no botão de salvar
function salvarJogo() {
    // Pegando os valores digitados nos campos
    let nome = campoNome.value;
    let categoria = campoCategoria.value;
    let preco = parseFloat(campoPreco.value); // Convertendo o preço de string para número decimal

    // Verificando se é para criar uma nova linha ou editar uma existente
    if (indiceLinhaParaAlterar === -1) {
        criarLinha(nome, categoria, preco); // Se for -1, criamos uma nova linha
    } else {
        editarLinha(nome, categoria, preco); // Senão, editamos a linha existente
    }

    // Limpando os campos após salvar
    campoNome.value = "";
    campoCategoria.value = "";
    campoPreco.value = "";

    // Resetando o índice, voltamos ao modo de "criar novo"
    indiceLinhaParaAlterar = -1;

    // Coloca o cursor no campo de nome para facilitar a próxima entrada
    campoNome.focus();
}

// Função que cria uma nova linha na tabela
function criarLinha(nome, categoria, preco) {
    // Gera uma classe CSS com base na categoria (ex: "ação" vira "acao")
    const categoriaClasse = categoria.toLowerCase().replace(" ", "-");

    // Criando a estrutura da linha com HTML dinâmico
    let linha = `<tr>
        <td>${nome}</td> <!-- Nome do jogo -->
        <td>
            <!-- Span com a categoria e uma classe para aplicar estilo -->
            <span class="chip ${categoriaClasse}">${categoria}</span>
        </td>
        <td class="price">R$ ${preco.toFixed(2)}</td> <!-- Preço formatado com duas casas decimais -->
        <td class="table-actions">
            <!-- Botão de editar, chama a função preencherCampos -->
            <button class="btn-edit" type="button" title="Editar" onclick="preencherCampos(event)">
                <i class="fas fa-pencil"></i>
                Editar
            </button>
            <!-- Botão de apagar, chama a função apagarLinha -->
            <button class="btn-danger" type="button" title="Apagar" onclick="apagarLinha(event)">
                <i class="fas fa-trash"></i>
                Apagar
            </button>
        </td>
    </tr>`;

    // Adiciona a nova linha ao final do tbody
    tbody.innerHTML += linha;
}

// Função que edita os dados de uma linha existente
function editarLinha(nome, categoria, preco) {
    const categoriaClasse = categoria.toLowerCase().replace(" ", "-");

    // Pega a linha que será editada com base no índice salvo
    let trLinhaQueSeraEditada = tbody.rows[indiceLinhaParaAlterar];
    let tds = trLinhaQueSeraEditada.getElementsByTagName("td"); // Pega todas as células (td) da linha

    // Atualiza o conteúdo de cada célula
    let tdNome = tds[0];
    tdNome.innerHTML = nome;

    let tdCategoria = tds[1];
    tdCategoria.innerHTML = `<span class="chip ${categoriaClasse}">${categoria}</span>`;

    let tdPreco = tds[2];
    tdPreco.innerHTML = `R$ ${preco.toFixed(2)}`; // Formata o preço com duas casas decimais
}

// Função chamada quando clicamos no botão de editar
function preencherCampos($event) {
    let botaoDoClick = $event.target; // Pega o botão que foi clicado
    let td = botaoDoClick.parentElement; // Sobe para o td (célula)
    let trDoBotaoDoClick = td.parentElement; // Sobe para a linha da tabela

    // Converte as linhas da tabela em array e acha o índice da linha clicada
    const todasLinhas = Array.from(tbody.rows);
    indiceLinhaParaAlterar = todasLinhas.indexOf(trDoBotaoDoClick);

    // Pega os dados da linha clicada
    let tds = trDoBotaoDoClick.getElementsByTagName("td");

    let tdNome = tds[0];
    let nome = tdNome.innerHTML;

    let tdCategoria = tds[1];
    let spanCategoria = tdCategoria.getElementsByTagName("span")[0];
    let categoria = spanCategoria.innerHTML;

    let tdPreco = tds[2];
    let preco = parseFloat(tdPreco.innerHTML.replaceAll("R$", "").trim()); // Remove o "R$" e converte para número

    // Preenche os campos com os dados extraídos da linha
    preencherCamposParaEditar(nome, categoria, preco);
    console.log(indiceLinhaParaAlterar); // Mostra no console qual linha será editada
}

// Função auxiliar que coloca os valores nos campos de input
function preencherCamposParaEditar(nome, categoria, preco) {
    campoNome.value = nome;
    campoCategoria.value = categoria;
    campoPreco.value = preco;
}

// Função que remove uma linha da tabela
function apagarLinha($event) {
    let botaoDoClick = $event.target; // Botão que foi clicado
    let td = botaoDoClick.parentElement; // Célula
    let tr = td.parentElement; // Linha

    // Remove a linha inteira do tbody
    tbody.removeChild(tr);
}

// Função que preenche a tabela automaticamente com uma lista de jogos
function popularTabela() {
    // Lista de jogos com nome, categoria e preço
    const jogos = [
        { nome: "Elden Ring", categoria: "RPG", preco: 299.90 },
        { nome: "God of War Ragnarök", categoria: "Ação", preco: 349.90 },
        { nome: "FIFA 24", categoria: "Esportes", preco: 319.00 },
        { nome: "The Legend of Zelda: Tears of the Kingdom", categoria: "Aventura", preco: 357.99 },
        { nome: "Forza Horizon 5", categoria: "Corrida", preco: 249.00 },
        { nome: "Hollow Knight", categoria: "Indie", preco: 59.99 },
        { nome: "The Sims 4", categoria: "Simulação", preco: 99.00 },
        { nome: "Resident Evil Village", categoria: "Horror", preco: 229.90 },
        { nome: "Minecraft", categoria: "Sandbox", preco: 99.90 },
        { nome: "It Takes Two", categoria: "Plataforma", preco: 179.90 },
        { nome: "Civilization VI", categoria: "Estratégia", preco: 89.99 },
        { nome: "Tetris Effect", categoria: "Puzzle", preco: 149.90 },
        { nome: "Fortnite", categoria: "Battle Royale", preco: 0.00 }
    ];

    // Percorre a lista e chama a função para criar cada linha na tabela
    for (let i = 0; i < jogos.length; i++) {
        let jogo = jogos[i];
        criarLinha(jogo.nome, jogo.categoria, jogo.preco);
    }
}

// Chama a função para preencher a tabela assim que o script for executado
popularTabela();

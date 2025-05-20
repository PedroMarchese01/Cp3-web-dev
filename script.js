const botaoFiltro = document.getElementById("botaoFiltrar");
const soamenteDisponiveis = document.getElementById("somenteDisponiveis");
const tipoDoProduto = document.getElementById("tiposDoProduto");
const main = document.getElementById("conteudo-principal");
let isFirstTime = true;

let produtos = [
    {
        nome:"SmartPhone XIV",
        preco:9000,
        categoria:"Eletronicos",
        disponibilidade:true,
    },
    {
        nome:"Camiseta Básica",
        preco:20,
        categoria:"Roupas",
        disponibilidade:true,
    },
    {
        nome:"Arroz 5 kg",
        preco:20,
        categoria:"Alimentos",
        disponibilidade:false,
    },
    {
        nome:"Notebook Gamer i9 xyz",
        preco:10000,
        categoria:"Eletronicos",
        disponibilidade:true,
    },
    {
        nome: "Calça Jeans Slim",
        preco:125,
        categoria:"roupas",
        disponibilidade:false,
    },
    {
        nome:"Leite Condensado",
        preco:5,
        categoria:"Alimentos",
        disponibilidade:true,
    },
    {
        nome:"Fone de Ouvido bluetooth",
        preco:250,
        categoria: "Eletronicos",
        disponibilidade: false,
    },
    {
        nome: "jaqueta de couro feminina",
        preco:500,
        categoria:"Roupas",
        disponibilidade:true,
    },
    {
        nome: "Costela de Porco",
        preco:55,
        categoria:"Alimentos",
        disponibilidade: true,
    },
    {
        nome:"SmartWatch",
        preco:590,
        categoria:"Eletronicos",
        disponibilidade: true,
    },
];

//---------------------------------------------------------------
//aqui vai iniciar pela primeira vez

function iniciar(){
    if (isFirstTime){
        for(i = 0; i < produtos.length; i++){
            criarProduto(produtos[i]);
        }
        isFirstTime = false;
    }
}
//---------------------------------------------------------------
//opção de criar os produtos
function criarProduto(produto){
    const cardProduto = document.createElement("div"); //cria uma div
    cardProduto.classList.add("card-produto"); //adiciona a classe card-produto para o css
    cardProduto.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Disponibilidade: ${produto.disponibilidade ? "Sim" : "Não"}</p>`;
    main.appendChild(cardProduto); //adiciona o cardProduto dentro do conteudo-principal
}
//---------------------------------------------------------------
//Limpar os produtos para aplicar os filtros

function limparCard(){
    main.innerHTML = "";
}

//---------------------------------------------------------------

function filtro() {
    let categoria = tipoDoProduto.value
    let disponivel = soamenteDisponiveis.checked

    if(categoria == "Todos" && disponivel == true){
        
    }
    
    else if(categoria == "Todos" && disponivel == false){

    }
    
    else if(categoria == "Eletronicos" && disponivel == true){

    }

    else if (categoria == "Eletronicos" && disponivel == false){

    }

    else if (categoria == "Roupas" && disponivel == true){

    }

    else if (categoria == "Roupas" && disponivel == false){

    }

    else if(categoria == "Alimentos" && disponivel == true){

    }
    
    else if(categoria == "Alimentos" && disponivel == false){
        
    }
}
botaoFiltro.addEventListener("click", filtro);

iniciar();

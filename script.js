const btnFiltro = document.getElementById("btnFiltrar");
const soamenteDisponiveis = document.getElementById("somenteDisponiveis");
const tipoDoProduto = document.getElementById("tiposDeProduto");
const main = document.getElementById("conteudo-principal");
let isFirstTime = true;

let produtos = [
    {
        nome:"SmartPhone XIV",
        preco:9000,
        categoria:"Eletronicos",
        disponibilidade:false,
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
        categoria:"Roupas",
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
iniciar() //irá começar (entrar e já aparecer)
//---------------------------------------------------------------
//opção de criar os produtos
function criarProduto(produto){
    const cardProduto = document.createElement("div"); // criou div
    cardProduto.classList.add("card-produto"); //é o css
    cardProduto.innerHTML = `    
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Disponibilidade: ${produto.disponibilidade ? "Sim" : "Não"}</p>`;
    main.appendChild(cardProduto); //coloca a div (card) na main 
}
//---------------------------------------------------------------
//Limpar os produtos para aplicar os filtros

function limparCard(){
    main.innerHTML = "";
}

//---------------------------------------------------------------
// filtragem


btnFiltro.addEventListener("click", function(event){
        event.preventDefault()
        let categoria = tipoDoProduto.value
        let disponivel = soamenteDisponiveis.checked
        if(categoria == "Todos" && disponivel == true){
            
            const produtosDisponiveis = produtos.filter(pegaProdutos => 
                pegaProdutos.disponibilidade === true 
            )
            filtro(produtosDisponiveis);
        }
        
        else if(categoria == "Todos" && disponivel == false){

            filtro(produtos)

        }
        
        else if(categoria == "Eletronicos" && disponivel == true){

            const eletronicosDisponiveis = produtos.filter(pegaProdutos => 
                pegaProdutos.disponibilidade === true &&  pegaProdutos.categoria === "Eletronicos"
            )
            filtro(eletronicosDisponiveis)
        }
    
        else if (categoria == "Eletronicos" && disponivel == false){
    
            const eletronicos = produtos.filter(pegaProdutos => 
                pegaProdutos.categoria === "Eletronicos"
            )
            filtro(eletronicos)

        }
    
        else if (categoria == "Roupas" && disponivel == true){
            
            const roupasDisponiveis = produtos.filter(pegaProdutos => 
                pegaProdutos.disponibilidade === true && pegaProdutos.categoria === "Roupas"
            )
            filtro(roupasDisponiveis)

        }
    
        else if (categoria == "Roupas" && disponivel == false){
            
            const roupas = produtos.filter(pegaProdutos => 
                pegaProdutos.categoria === "Roupas"
            )
            filtro(roupas)

        }
    
        else if(categoria == "Alimentos" && disponivel == true){
            
            const alimentosDisp = produtos.filter(pegaProdutos => 
                 pegaProdutos.disponibilidade == true && pegaProdutos.categoria === "Alimentos"
            )
            filtro(alimentosDisp)

        }
        
        else if(categoria == "Alimentos" && disponivel == false){

            const alimentos = produtos.filter(pegaProdutos => 
                pegaProdutos.categoria === "Alimentos"
            )
            filtro(alimentos)

        }
    });

//----------------------
//criar produtos por filtragem

function filtro(lista){
    let list = lista.slice() // [1 , 7 , 2]
    limparCard()
    for(i = 0 ; i<list.length;i++){
        criarProduto(list[i])
    }
}




const botãoFiltro = document.getElementById("botaoFiltrar");
const soamenteDisponiveis = document.getElementById("somenteDisponiveis");
const tipodDoProduto = document.getElementById("tipoDoProduto");

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
        categoria:Roupas,
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
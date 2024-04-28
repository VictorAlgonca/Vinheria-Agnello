let imgProdutoHMTL = document.getElementById('img-produto')
let nomeProdutoHMTL = document.getElementById('nome-produto')
let precoProdutoHMTL = document.getElementById('preco-produto')

let quantidadeHTML = document.getElementById('quantidade')
let valorTotalHTML = document.getElementById('valor-total')

let imgProduto = ""
let nomeProduto = ""
let precoProduto = 0

let quantidade = 1 // Valor padrão inicial de quantidade do produto
let valorTotal = 0

window.onload = function() {
    imgProduto = localStorage.getItem('imgProdutoSelecionado')
    nomeProduto = localStorage.getItem('nomeProdutoSelecionado')
    precoProduto = parseFloat(localStorage.getItem('precoProdutoSelecionado'))

    imgProdutoHMTL.src = imgProduto
    nomeProdutoHMTL.textContent = nomeProduto
    precoProdutoHMTL.textContent = `R$${precoProduto.toFixed(2)}`

    valorTotal = precoProduto.toFixed(2)

    quantidadeHTML.innerText = `${quantidade}`
    valorTotalHTML.innerText = `R$${valorTotal}`
};

function comprar() {
     alert('Produto adicionado ao carrinho com sucesso')
}

function aumentarQuantidade() {
    quantidade++

    valorTotal = quantidade * precoProduto

    quantidadeHTML.innerText = `${quantidade}`
    valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)}`
}

function diminuirQuantidade() {
    if(quantidade > 1) {
        quantidade--

        valorTotal = quantidade * precoProduto

        quantidadeHTML.innerText = `${quantidade}`
        valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)}`
    }
}
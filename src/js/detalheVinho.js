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

let cupomAplicado = false

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

    document.getElementById("sugestao-titulo").innerText = ""
    if (nomeProduto === "Château Carbonnieux Grand Cru Classé de Graves Pessac-Léognan AOC - 2019 750mL") {
        document.getElementById("sugestao-titulo").innerText = "Sugestão de Acompanhamentos"
        document.getElementById("sugestao-1").innerText = "Frutos do mar grelhados, como camarões ou vieiras."
        document.getElementById("sugestao-2").innerText = "Canapés de queijo de cabra com figos trescos."
        document.getElementById("sugestao-3").innerText = "Salmão defumado com torradas de pão integral."
    }

    else if (nomeProduto === "Noia Rosé - 2017 750mL") {
        document.getElementById("sugestao-titulo").innerText = "Sugestão de Acompanhamentos"
        document.getElementById("sugestao-1").innerText = "Bruschettas de tomate fresco e manjericão."
        document.getElementById("sugestao-2").innerText = "Tapenade de azeitonas pretas com torradas."
        document.getElementById("sugestao-3").innerText = "Espetinhos de frutas frescas, como morangos, uvas e melão."
    }

    else if (nomeProduto === "Bertoletti Bordô suave - 2020 750mL") {
        document.getElementById("sugestao-titulo").innerText = "Sugestão de Acompanhamentos"
        document.getElementById("sugestao-1").innerText = "Queijos suaves, como queijo brie ou queijo camembert."
        document.getElementById("sugestao-2").innerText = "Patês de frutas, como patê de figo ou patê de pêssego."
        document.getElementById("sugestao-3").innerText = "Frutas frescas, como uvas, morangos e fatias de maçã."
    }

    else if (nomeProduto === "Casal Mendes Vinho verde - 2014 750mL") {
        document.getElementById("sugestao-titulo").innerText = "Sugestão de Acompanhamentos"
        document.getElementById("sugestao-1").innerText = "Salada de frutos do mar com camarões, mexilhões e lulas."
        document.getElementById("sugestao-2").innerText = "Salada de verão com tomate, pepino, pimentão e queijo feta."
        document.getElementById("sugestao-3").innerText = "Amêijoas à Bulhão Pato (amêijoas cozidas em azeite, alho e coentro)."
    }

};

function comprar() {
     alert('Produto adicionado ao carrinho com sucesso')
}

function aumentarQuantidade() {
    quantidade++

    valorTotal = quantidade * precoProduto

    quantidadeHTML.innerText = `${quantidade}`
    valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)}`

    cupomAplicado = false
}

function diminuirQuantidade() {
    if(quantidade > 1) {
        quantidade--

        valorTotal = quantidade * precoProduto

        quantidadeHTML.innerText = `${quantidade}`
        valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)}`

        cupomAplicado = false
    }
}

function aplicarCupom() {
    let cupom = document.getElementById("cupom").value

    if (cupom.trim().toUpperCase() === "FIAP2024" && !cupomAplicado) {
        valorTotal -= valorTotal * 0.1
        valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)} - 10% de desconto com cupom ${cupom.toUpperCase()}`

        cupomAplicado = true
    }
}
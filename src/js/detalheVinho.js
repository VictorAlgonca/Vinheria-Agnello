let quantidadeHTML = document.getElementById('quantidade')
let valorTotalHTML = document.getElementById('valor-total')

let quantidade = 1 // Valor padrão inicial de quantidade do produto
let valorTotal = 0

function comprar() {
     alert('Produto adicionado ao carrinho com sucesso')
}

function aumentarQuantidade() {
    quantidade++

    valorTotal = quantidade * 109.9

    quantidadeHTML.innerText = `${quantidade}`
    valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)}`
}

function diminuirQuantidade() {
    if(quantidade > 1) {
        quantidade--

        valorTotal = quantidade * 109.9

        quantidadeHTML.innerText = `${quantidade}`
        valorTotalHTML.innerText = `R$${valorTotal.toFixed(2)}`
    }
}
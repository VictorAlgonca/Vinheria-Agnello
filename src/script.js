// ENTRADA
let quantidade = 1

function comprar() {
    // let carrinho = document.getElementById('')

// PROCESSAMENTO


// SAÍDA
     alert('Produto adicionado ao carrinho com sucesso')
}


function soma() {
    let qtdStr = document.getElementById('quantidade')
    let resultado = document.getElementById('resultado')
    qtdStr.innerText = `${++quantidade}`
    let preco = quantidade * 109.9

    resultado.innerText = `R$${preco.toFixed(2)}`

}

function subtracao() {
    let qtdStr = document.getElementById('quantidade')
    let resultado = document.getElementById('resultado')

    if(quantidade > 1) {
        qtdStr.innerText = `${--quantidade}`
        let preco = quantidade * 109.9

        resultado.innerText = `R$${preco.toFixed(2)}`
    }
}


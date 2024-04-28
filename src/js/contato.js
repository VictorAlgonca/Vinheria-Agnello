let nomeClienteHTML = document.getElementById('nome-cliente')
let emailClienteHTML = document.getElementById('email-cliente')
let numeroClienteHTML = document.getElementById('numero-cliente')
let mensagemClienteHTML = document.getElementById('mensagem-cliente')


// Para não dar refresh na página caso esteja faltando algo no formulário
document.getElementById('formulario').addEventListener('submit', 
function(e){
    e.preventDefault()
})

function enviar() {
    let nomeCliente = nomeClienteHTML.value
    let emailCliente = emailClienteHTML.value
    let numeroCliente = numeroClienteHTML.value
    let mensagemCliente = mensagemClienteHTML.value

    // Para testar se o formulário não foi preenchido com espaço (ou seja, vazio)
    if(nomeCliente.trim().length > 0 && emailCliente.trim().length > 0 && numeroCliente.trim().length > 0 && mensagemCliente.length > 0) {
        
        alert('Dados e mensagem enviados com sucesso.')

        // Para dar refresh quando enviar o formulário
        window.location.reload()
        
    }
        
}
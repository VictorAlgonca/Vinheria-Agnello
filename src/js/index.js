window.onload = function() {
    if(!sessionStorage.getItem('visited')) {
        window.location.href = "maioridade.html";
        sessionStorage.setItem('visited', 'true');
    }
};

document.querySelectorAll('.produto-box button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        var produtoBox = e.target.parentElement;

        var imgProduto = produtoBox.querySelector('img').src
        var nomeProduto = produtoBox.querySelector('p').textContent
        var precoProdutoTxt = produtoBox.querySelectorAll('p')[1].textContent

        var precoPartes = precoProdutoTxt.split(" ")
        var precoValor = precoPartes[3]

        var preco = precoValor.replace('R$', '').replace(',', '.');

        localStorage.setItem('imgProdutoSelecionado', imgProduto)
        localStorage.setItem('nomeProdutoSelecionado', nomeProduto)
        localStorage.setItem('precoProdutoSelecionado', preco)

        window.location.href = '../html/detalheVinho.html'
    });
});
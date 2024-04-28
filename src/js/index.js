window.onload = function() {
    if(!sessionStorage.getItem('visited')) {
        window.location.href = "maioridade.html";
        sessionStorage.setItem('visited', 'true');
    }
};
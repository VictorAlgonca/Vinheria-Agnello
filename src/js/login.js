document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[type="submit"]').addEventListener('click', function(event) {

        var usuario = document.getElementById("txtUsuario").value;
        var senha = document.getElementById("txtSenha").value;

        if (usuario === "1234" && senha === "1234") {

            alert("Login feito com sucesso!");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    })
})
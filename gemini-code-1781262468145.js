// Aguarda a página carregar para ativar as funções dos botões
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão de alerta e adiciona a função de clique
    const botaoAlerta = document.getElementById("btn-alerta");
    botaoAlerta.addEventListener("click", function() {
        alert("Funciona perfeitamente!");
    });

    // Seleciona o botão de tema e adiciona a função de alternar o Modo Escuro
    const botaoTema = document.getElementById("btn-tema");
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark");
    });

});
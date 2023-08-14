// Popup do início
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var showPopupAgainButton = document.getElementById("show-popup-again");
    var noShowAgainButton = document.getElementById("no-show-again");

    var popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        popup.style.display = "block"; // Exibe o pop-up na primeira visita
    }

    showPopupAgainButton.addEventListener("click", function () {
        popup.style.display = "none"; // Esconde o pop-up quando "OK" é clicado
        localStorage.removeItem("popupShown"); // Remove o item de armazenamento para mostrar o pop-up novamente
    });

    noShowAgainButton.addEventListener("click", function () {
        popup.style.display = "none";
        localStorage.setItem("popupShown", "true"); // Define o item de armazenamento para não mostrar novamente
    });
});

// Botão para rolar para baixo
document.getElementById('botao-descer').addEventListener('click', function () {
    document.querySelector('.right-content').scrollIntoView({
        behavior: 'smooth'
    });
});
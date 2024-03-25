// Adicione um ouvinte de evento para o evento de tecla pressionada
window.addEventListener("keydown", function(event) {
    // Verifique se a tecla pressionada é a seta para baixo
    if (event.key === "ArrowDown") {
        // Previne o comportamento padrão da tecla de seta para baixo, que é rolar a página para baixo
        event.preventDefault();

        // Calcule a posição para rolar (100vh)
        var scrollPosition = window.scrollY + window.innerHeight;

        // Rola a página para baixo
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth" // Adiciona um efeito de rolagem suave
        });
    }
});

// Adicione um ouvinte de evento para o evento de tecla pressionada
window.addEventListener("keydown", function(event) {
    // Verifique se a tecla pressionada é a seta para cima
    if (event.key === "ArrowUp") {
        // Previne o comportamento padrão da tecla de seta para cima, que é rolar a página para cima
        event.preventDefault();

        // Calcule a posição para rolar para cima (100vh)
        var scrollPosition = window.scrollY - window.innerHeight;

        // Rola a página para cima
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth" // Adiciona um efeito de rolagem suave
        });
    }
});

// // Adicione um ouvinte de evento para o evento de rolagem
// window.addEventListener("wheel", function(event) {
//     // Previne o comportamento padrão da rolagem
//     event.preventDefault();
// }, { passive: false });




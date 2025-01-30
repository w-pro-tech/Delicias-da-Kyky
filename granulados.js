document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as seções que você quer adicionar os pontos
    const sections = document.querySelectorAll('.services-section, .video-section, .gallery-section');
    const numPoints = 50; // Número de pontos aleatórios a serem gerados

    sections.forEach(function(section) {
        // Garantir que a seção tenha posição relativa para os pontos ficarem dentro dela
        section.classList.add('granulado');

        // Pega a largura e altura da seção
        const sectionWidth = section.offsetWidth;
        const sectionHeight = section.offsetHeight;

        // Gera os pontos
        for (let i = 0; i < numPoints; i++) {
            const point = document.createElement('div');
            point.classList.add('granulo'); // Adiciona a classe de estilo

            // Posições aleatórias
            const randomX = Math.random() * sectionWidth;
            const randomY = Math.random() * sectionHeight;

            point.style.left = `${randomX}px`;
            point.style.top = `${randomY}px`;

            // Adiciona o ponto à seção
            section.appendChild(point);
        }
    });
});

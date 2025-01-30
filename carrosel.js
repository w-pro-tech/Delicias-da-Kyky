let currentSlide = 0;

        function moveCarousel(direction) {
            const images = document.querySelector('.carousel-images');
            const totalImages = document.querySelectorAll('.carousel-images img').length;
            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = totalImages - 1;
            } else if (currentSlide >= totalImages) {
                currentSlide = 0;
            }

            images.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Função de seleção de quantidade nos cards de serviço
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceName = card.getAttribute('data-service');
                const servicePrice = card.getAttribute('data-price');

                let quantity = prompt(`Quantos kits de ${serviceName} você deseja? (Preço: ${servicePrice}$)`);
                quantity = parseInt(quantity);

                if (!isNaN(quantity) && quantity > 0) {
                    alert(`Você pediu ${quantity} kits de ${serviceName}. Total: ${servicePrice * quantity}$`);
                } else {
                    alert('Por favor, insira um número válido.');
                }
            });
        });
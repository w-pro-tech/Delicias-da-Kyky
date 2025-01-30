// Função para rolagem suave
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mostrar/ocultar botão "Voltar ao topo"
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆ Topo';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.display = 'none'; // Inicialmente escondido
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 20px';
scrollToTopBtn.style.backgroundColor = '#84d9d0';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.zIndex = '1000';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Ação do botão "Voltar ao topo"
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Alerta no botão "Fazer Pedido"
const orderBtns = document.querySelectorAll('.btn[href^="https://www.instagram.com"]');
orderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const confirmed = confirm("Você será redirecionado para o Instagram para fazer seu pedido. Deseja continuar?");
        if (!confirmed) {
            e.preventDefault(); // Evita o redirecionamento
        }
    });
});

// Seleciona o botão do menu hambúrguer e a lista de links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona um evento de clique no botão de menu hambúrguer
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar ou ocultar o menu
    navLinks.classList.toggle('active');
});

// Adiciona um evento de clique ao documento para fechar o menu se o usuário clicar fora
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

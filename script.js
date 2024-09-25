// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exibir submenu lateral em dispositivos móveis
document.addEventListener('DOMContentLoaded', function () {
    const submenuToggle = document.createElement('button');
    submenuToggle.innerText = 'Menu';
    submenuToggle.classList.add('submenu-toggle');
    const submenu = document.querySelector('aside.submenu');

    if (submenu) {
        submenu.prepend(submenuToggle);

        submenuToggle.addEventListener('click', function () {
            const submenuList = document.querySelector('aside.submenu ul');
            if (submenuList.style.display === 'block') {
                submenuList.style.display = 'none';
            } else {
                submenuList.style.display = 'block';
            }
        });
    }
});

// Ajusta o estilo do submenu ao redimensionar a janela
window.addEventListener('resize', function () {
    const submenuList = document.querySelector('aside.submenu ul');
    if (submenuList) {
        if (window.innerWidth > 768) {
            submenuList.style.display = 'block';
        } else {
            submenuList.style.display = 'none';
        }
    }
});

// Carrossel automático
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].style.display = 'none'; // Oculta o item atual
    currentIndex = (currentIndex + 1) % totalItems; // Atualiza o índice
    items[currentIndex].style.display = 'flex'; // Exibe o próximo item
}

if (totalItems > 0) {
    setInterval(showNextItem, 3000); // Troca de item a cada 3 segundos

    // Inicializa o primeiro item
    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'flex' : 'none';
    });
}

// Função para o botão de voltar à página anterior
document.addEventListener('DOMContentLoaded', function () {
    const voltarBtn = document.querySelector('.botão-voltar-pag-anterior');

    if (voltarBtn) {
        voltarBtn.addEventListener('click', function () {
            window.history.back(); // Volta à página anterior
        });
    }
});

// Adiciona efeito hover e border-radius nos ícones clicáveis das tecnologias e do rodapé
document.querySelectorAll('footer a, #tecnologias a').forEach(link => {
    link.style.transition = 'transform 0.3s ease, background-color 0.3s';
    link.style.borderRadius = '15px'; // Aplica border-radius diretamente

    link.addEventListener('mouseover', function () {
        link.style.transform = 'scale(1.1)'; // Aumenta o tamanho ao passar o mouse
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // Aplica o background-color no hover
    });

    link.addEventListener('mouseout', function () {
        link.style.transform = 'scale(1.0)'; // Volta ao tamanho original
        link.style.backgroundColor = 'transparent'; // Remove o background-color após hover
    });
});

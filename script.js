// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// função para expandir o restante do conteudo
function expandText(spanId, btnId) {
    const moreText = document.getElementById(spanId);
    const btn = document.getElementById(btnId);

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btn.textContent = "Ler menos";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Ler mais";
    }
  }

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

const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide a');
let counter = 0;
const totalImages = images.length - 1; // Desconsidera o clone
const imageWidth = images[0].clientWidth;

// Função para mover o carrossel
function moveCarousel(direction) {
    if (direction === 'next') {
        if (counter >= totalImages) {
            counter++;
            carouselSlide.style.transform = `translateX(${-counter * imageWidth}px)`;
            // Remover transição para pular de volta ao início
            setTimeout(() => {
                carouselSlide.style.transition = 'none';
                counter = 0;
                carouselSlide.style.transform = `translateX(0)`;
            }, 1000); // Tempo igual à duração da transição
        } else {
            counter++;
            carouselSlide.style.transform = `translateX(${-counter * imageWidth}px)`;
            carouselSlide.style.transition = 'transform 1s ease-in-out';
        }
    } else if (direction === 'prev') {
        if (counter <= 0) {
            counter = totalImages;
            carouselSlide.style.transition = 'none';
            carouselSlide.style.transform = `translateX(${-counter * imageWidth}px)`;
            setTimeout(() => {
                carouselSlide.style.transition = 'transform 1s ease-in-out';
                counter--;
                carouselSlide.style.transform = `translateX(${-counter * imageWidth}px)`;
            }, 20);
        } else {
            counter--;
            carouselSlide.style.transform = `translateX(${-counter * imageWidth}px)`;
        }
    }
}

// Função para movimentar automaticamente
function autoMoveCarousel() {
    moveCarousel('next'); // Move para a próxima imagem automaticamente
}

// Definindo o intervalo de tempo para o carrossel automático (3000ms = 3 segundos)
setInterval(autoMoveCarousel, 3000);

// Event listeners para os botões de navegação manual
document.querySelector('.next').addEventListener('click', () => moveCarousel('next'));
document.querySelector('.prev').addEventListener('click', () => moveCarousel('prev'));


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

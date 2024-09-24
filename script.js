// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exibir submenu lateral em dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    const submenuToggle = document.createElement('button');
    submenuToggle.innerText = 'Menu';
    submenuToggle.classList.add('submenu-toggle');
    document.querySelector('aside.submenu').prepend(submenuToggle);

    submenuToggle.addEventListener('click', function() {
        const submenu = document.querySelector('aside.submenu ul');
if (submenu.style.display === 'block') {
submenu.style.display = 'none';
        } else {
submenu.style.display = 'block';
        }
    });
});

// Ajusta o estilo do submenu ao redimensionar a janela
window.addEventListener('resize', function() {
    const submenu = document.querySelector('aside.submenu ul');
    if (window.innerWidth > 768) {
submenu.style.display = 'block';
    } else {
submenu.style.display = 'none';
    }
});

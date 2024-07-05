// Scroll suave nos links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animação ao rolar
function animateOnScroll() {
    const sections = document.querySelectorAll('.service, .faq, .contact');
    
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // ajuste conforme necessário
        
        if (sectionPosition < screenPosition) {
            if (!section.classList.contains('animate')) {
                section.classList.add('animate');
            }
        } else {
            section.classList.remove('animate'); // remova a classe se a seção não estiver visível
        }
    });
}

// Aciona animações ao carregar a página e ao rolar
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Efeito de hover suave nos links de navegação usando CSS para o estilo
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('mouseenter', function() {
        this.style.color = '#ff7f50'; // cor de destaque ao passar o mouse
    });
    
    anchor.addEventListener('mouseleave', function() {
        this.style.color = ''; // cor padrão ao remover o mouse, permite que o CSS defina
    });
});

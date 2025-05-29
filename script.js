// Para index.html
document.addEventListener("DOMContentLoaded", function() {
    // Sistema de navegación entre secciones
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === sectionId) {
                section.classList.add("active");
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });
    
    // Mostrar sección de cursos por defecto
    showSection("cursos");
    
    // Efecto hover para las tarjetas de curso
    const cursoCards = document.querySelectorAll(".curso-card");
    cursoCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.querySelector(".curso-overlay").style.bottom = "0";
        });
        
        card.addEventListener("mouseleave", function() {
            this.querySelector(".curso-overlay").style.bottom = "-50px";
        });
    });
});
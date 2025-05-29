document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".content-btn");
    const sections = document.querySelectorAll(".content-section");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Quitar clases activas previas
            buttons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            // Activar el botón y sección correspondiente
            this.classList.add("active");
            const target = this.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });
});

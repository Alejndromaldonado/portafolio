document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar ul");
    const menuItems = document.querySelectorAll(".navbar ul li a");

    // Función para alternar la clase "active"
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });

    // Cerrar el menú cuando se hace clic en un enlace
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            navbarMenu.classList.remove("active");
        });
    });
});


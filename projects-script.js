document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionar el elemento header
    const header = document.querySelector('header');
    
    // Si no se encuentra el header, la función termina
    if (!header) {
        console.warn("No se encontró el elemento <header>. El script de scroll no funcionará.");
        return;
    }

    // Almacenar la última posición de scroll conocida
    let lastScrollY = window.scrollY;

    // Clase CSS que se agrega al header cuando está oculto o minimizado
    const SCROLLED_CLASS = 'scrolled'; // Basado en tu CSS: header.scrolled

    /**
     * Función que se ejecuta en cada evento de scroll.
     */
    function handleScroll() {
        // Obtener la posición de scroll actual
        const currentScrollY = window.scrollY;

        // Comprobar si el usuario ha hecho scroll hacia abajo (ocultar/minimizar)
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // El usuario está bajando y ha pasado el umbral de 50px
            if (!header.classList.contains(SCROLLED_CLASS)) {
                header.classList.add(SCROLLED_CLASS);
            }
        } 
        // Comprobar si el usuario ha hecho scroll hacia arriba (mostrar)
        else if (currentScrollY < lastScrollY) {
            // El usuario está subiendo
            if (header.classList.contains(SCROLLED_CLASS)) {
                header.classList.remove(SCROLLED_CLASS);
            }
        }
        
        // Comprobar si está en la parte superior de la página (resetear el estilo)
        if (currentScrollY <= 50) {
            header.classList.remove(SCROLLED_CLASS);
        }

        // Actualizar la última posición de scroll
        lastScrollY = currentScrollY;
    }

    // 2. Adjuntar el controlador de eventos al scroll de la ventana
    window.addEventListener('scroll', handleScroll);

    // Opcional: Ejecutar una vez al cargar la página por si se carga a mitad de camino
    handleScroll();
});
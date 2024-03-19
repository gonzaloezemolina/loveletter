document.addEventListener('DOMContentLoaded', function() {
    const letter = document.getElementById('letter');

    // Agrega un evento de clic al icono de la carta
    letter.addEventListener('click', function() {
        // Cambia el icono de la carta a otro icono
        this.classList.toggle('bi-envelope-heart');
        this.classList.toggle('bi-envelope-open-heart');
        // Agrega una clase para activar la transición de opacidad
        this.classList.add('opacity-transition');
    });

    // Escucha el evento de transición y elimina la clase de transición de opacidad cuando termina
    letter.addEventListener('transitionend', function() {
        this.classList.remove('opacity-transition');
    });
});

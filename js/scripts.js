// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar código JavaScript personalizado
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí se simula el envío del formulario
        alert('Mensaje enviado correctamente');
        contactForm.reset();
    });
});

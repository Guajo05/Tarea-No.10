document.addEventListener('DOMContentLoaded', function() {
    // Publicar comentario
    const commentBtn = document.querySelector('.comment-btn');
    if (commentBtn) {
        commentBtn.addEventListener('click', function() {
            const textarea = document.querySelector('.comment-form textarea');
            if (textarea.value.trim() === '') {
                alert('Por favor escribe un comentario.');
                return;
            }
            
            // Simular publicación
            alert('Comentario publicado. En un sistema real se guardaría en la base de datos.');
            textarea.value = '';
        });
    }
    
    // Enviar sugerencia de corrección
    const correctionForm = document.querySelector('.correction-form');
    if (correctionForm) {
        correctionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const field = document.getElementById('correction-field').value;
            const value = document.getElementById('correction-value').value;
            
            if (!value) {
                alert('Por favor ingresa el valor correcto.');
                return;
            }
            
            // Simular envío
            alert(`Sugerencia de corrección enviada para ${field}: ${value}. Será revisada por un validador.`);
            this.reset();
        });
    }
});
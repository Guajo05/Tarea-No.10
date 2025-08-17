document.addEventListener('DOMContentLoaded', function() {
    // Botones de revisar reporte
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Redirigiendo a la página de revisión de reporte...');
            // En un sistema real esto llevaría a un formulario de validación
        });
    });
    
    // Simular carga de datos estadísticos
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        setTimeout(() => {
            statsContainer.classList.add('loaded');
        }, 500);
    }
});
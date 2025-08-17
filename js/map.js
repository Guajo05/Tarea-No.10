// Simulación de clustering de marcadores
document.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.incident-marker');
    const mapContainer = document.querySelector('.map-placeholder');
    
    // Simular agrupamiento (clustering)
    function checkProximity() {
        markers.forEach(markerA => {
            const rectA = markerA.getBoundingClientRect();
            const x1 = rectA.left + rectA.width/2;
            const y1 = rectA.top + rectA.height/2;
            
            markers.forEach(markerB => {
                if (markerA !== markerB) {
                    const rectB = markerB.getBoundingClientRect();
                    const x2 = rectB.left + rectB.width/2;
                    const y2 = rectB.top + rectB.height/2;
                    
                    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    
                    if (distance < 50) { // Umbral de proximidad
                        markerA.classList.add('cluster');
                        markerB.classList.add('cluster');
                    }
                }
            });
        });
    }
    
    // Inicializar y recalcular al redimensionar
    checkProximity();
    window.addEventListener('resize', checkProximity);
    
    // Simular carga de datos
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        setTimeout(() => {
            statsContainer.classList.add('loaded');
        }, 500);
    }
});
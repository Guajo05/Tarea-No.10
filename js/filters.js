document.addEventListener('DOMContentLoaded', function() {
    // Filtros y búsqueda
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const province = document.getElementById('province-filter').value;
            const type = document.getElementById('type-filter').value;
            const dateFrom = document.getElementById('date-from').value;
            const dateTo = document.getElementById('date-to').value;
            const searchTerm = document.getElementById('search').value.toLowerCase();
            
            const table = document.querySelector('.incidents-table');
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const rowProvince = row.cells[2].textContent.toLowerCase();
                const rowType = row.querySelector('.incident-type').classList[1];
                const rowDate = row.cells[3].textContent;
                const rowTitle = row.cells[0].textContent.toLowerCase();
                
                let matches = true;
                
                // Filtro por provincia
                if (province !== 'all' && !rowProvince.includes(province)) {
                    matches = false;
                }
                
                // Filtro por tipo
                if (type !== 'all' && rowType !== type) {
                    matches = false;
                }
                
                // Filtro por fecha (simplificado)
                if (dateFrom && rowDate < dateFrom) {
                    matches = false;
                }
                
                if (dateTo && rowDate > dateTo) {
                    matches = false;
                }
                
                // Búsqueda
                if (searchTerm && !rowTitle.includes(searchTerm)) {
                    matches = false;
                }
                
                row.style.display = matches ? '' : 'none';
            });
        });
    }
    
    // Botones de ver detalle
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Redirigiendo a la página de detalle de la incidencia...');
            window.location.href = 'detail.html';
        });
    });
});
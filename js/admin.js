document.addEventListener('DOMContentLoaded', function() {
    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase activa de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Agregar clase activa al botón clickeado
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Modal
    const modal = document.getElementById('catalog-modal');
    const openModalBtns = document.querySelectorAll('.add-btn, .edit-btn');
    const closeModalBtn = document.querySelector('.close-btn');
    const cancelModalBtn = document.querySelector('.cancel-btn');
    
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const isEdit = this.classList.contains('edit-btn');
            const modalTitle = document.getElementById('modal-title');
            
            if (isEdit) {
                modalTitle.textContent = 'Editar Provincia';
                // Aquí se cargarían los datos existentes en el formulario
            } else {
                modalTitle.textContent = 'Agregar Provincia';
            }
            
            modal.style.display = 'flex';
        });
    });
    
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    cancelModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Enviar formulario modal
    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Datos guardados correctamente');
            modal.style.display = 'none';
            this.reset();
        });
    }
});
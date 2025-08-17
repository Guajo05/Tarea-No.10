document.addEventListener('DOMContentLoaded', function() {
    // Simular carga de provincias y municipios
    const provinceSelect = document.getElementById('province');
    const municipalitySelect = document.getElementById('municipality');
    
    // Habilitar municipios cuando se selecciona una provincia
    if (provinceSelect) {
        provinceSelect.addEventListener('change', function() {
            if (this.value) {
                municipalitySelect.disabled = false;
                
                // Simular carga de municipios
                municipalitySelect.innerHTML = '';
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'Seleccione un municipio';
                municipalitySelect.appendChild(option);
                
                // Simular municipios (en un sistema real esto vendría de una API)
                const municipalities = {
                    'santo-domingo': ['Santo Domingo Este', 'Santo Domingo Oeste', 'Santo Domingo Norte', 'Boca Chica'],
                    'santiago': ['Santiago', 'Tamboril', 'Villa Bisonó', 'Puerto Plata']
                };
                
                const selectedProvince = this.value;
                if (municipalities[selectedProvince]) {
                    municipalities[selectedProvince].forEach(mun => {
                        const option = document.createElement('option');
                        option.value = mun.toLowerCase().replace(/\s+/g, '-');
                        option.textContent = mun;
                        municipalitySelect.appendChild(option);
                    });
                }
            } else {
                municipalitySelect.disabled = true;
            }
        });
    }
    
    // Selector de ubicación en mapa
    const mapBtn = document.querySelector('.map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('click', function() {
            alert('Se abriría un modal con un mapa para seleccionar la ubicación. Las coordenadas se llenarían automáticamente.');
            // Simular selección de ubicación
            document.getElementById('latitude').value = '18.4861';
            document.getElementById('longitude').value = '-69.9312';
        });
    }
    
    // Vista previa de foto
    const photoInput = document.getElementById('incident-photo');
    const photoPreview = document.getElementById('photo-preview');
    
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            photoPreview.innerHTML = '';
            
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    photoPreview.appendChild(img);
                }
                
                reader.readAsDataURL(this.files[0]);
            }
        });
    }
    
    // Validación del formulario
    const incidentForm = document.getElementById('incident-form');
    if (incidentForm) {
        incidentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar que al menos un tipo esté seleccionado
            const types = document.querySelectorAll('input[name="incident-type"]:checked');
            if (types.length === 0) {
                alert('Por favor seleccione al menos un tipo de incidencia.');
                return;
            }
            
            // Simular envío exitoso
            alert('Reporte enviado con éxito. Será revisado por un validador antes de publicarse.');
            this.reset();
            photoPreview.innerHTML = '';
            municipalitySelect.disabled = true;
        });
    }
});
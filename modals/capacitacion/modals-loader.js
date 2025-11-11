// ============================================
// CARGADOR DE MODALES DINÁMICOS - CAPACITACIÓN
// ============================================

(function() {
    // Lista de modales a cargar
    const modalsToLoadCapacitacion = [
        'modals/capacitacion/ver-documento.html',
        'modals/capacitacion/gestionar-capacitacion.html',
        'modals/capacitacion/configurar-personal.html',
        'modals/capacitacion/ver-capacitacion-informada.html'
    ];

    // Función para cargar un modal
    function loadModalCapacitacion(modalPath) {
        const timestamp = new Date().getTime();
        return $.ajax({
            url: modalPath + '?v=' + timestamp,
            method: 'GET',
            dataType: 'html',
            cache: false
        });
    }

    // Cargar todos los modales al iniciar
    $(document).ready(function() {
        console.log('Cargando modales de capacitación...');
        
        // Contenedor para los modales
        if ($('#modals-container').length === 0) {
            $('body').append('<div id="modals-container"></div>');
        }
        
        // Cargar cada modal
        const promises = modalsToLoadCapacitacion.map(modalPath => {
            return loadModalCapacitacion(modalPath)
                .done(function(html) {
                    $('#modals-container').append(html);
                    console.log(`✓ Modal capacitación cargado: ${modalPath}`);
                })
                .fail(function(error) {
                    console.error(`✗ Error cargando modal capacitación: ${modalPath}`, error);
                });
        });
        
        // Cuando todos los modales estén cargados
        $.when.apply($, promises).done(function() {
            console.log('✓ Todos los modales de capacitación cargados correctamente');
        });
    });
})();

// ============================================
// CARGADOR DE MODALES DINÁMICOS - ADMINISTRADOR
// Versión: 15 - Modal gestionar actualizado con nuevos campos
// ============================================

(function() {
    // Lista de modales a cargar
    const modalsToLoadAdmin = [
        'modals/administrador/nueva-administrador.html',
        'modals/administrador/editar-administrador.html',
        'modals/administrador/ver-administrador.html',  // Modal unificado para todos los estados
        'modals/administrador/gestionar-administrador.html',
        'modals/administrador/clonar-administrador.html',
        'modals/bitacora.html'
    ];

    // Función para cargar un modal
    function loadModalAdmin(modalPath) {
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
        console.log('Cargando modales del administrador...');
        
        // Contenedor para los modales (usar el mismo que los demás)
        if ($('#modals-container').length === 0) {
            $('body').append('<div id="modals-container"></div>');
        }
        
        // Cargar cada modal
        const promises = modalsToLoadAdmin.map(modalPath => {
            return loadModalAdmin(modalPath)
                .done(function(html) {
                    $('#modals-container').append(html);
                    console.log(`✓ Modal administrador cargado: ${modalPath}`);
                })
                .fail(function(error) {
                    console.error(`✗ Error cargando modal administrador: ${modalPath}`, error);
                });
        });
        
        // Cuando todos los modales estén cargados
        $.when.apply($, promises).done(function() {
            console.log('✓ Todos los modales del administrador cargados correctamente');
        });
    });
})();

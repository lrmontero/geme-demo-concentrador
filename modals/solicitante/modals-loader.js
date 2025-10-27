// ============================================
// CARGADOR DE MODALES DINÁMICOS - SOLICITANTE
// ============================================

(function() {
    // Lista de modales a cargar
    const modalsToLoadSolic = [
        'modals/solicitante/nueva-solicitud-solic.html',
        'modals/solicitante/editar-solicitud-solic.html',
        'modals/solicitante/ver-pendiente-solic.html',
        'modals/solicitante/ver-devuelta-solic.html',
        'modals/solicitante/ver-en-analisis-solic.html',
        'modals/solicitante/ver-admin-gestionando-solic.html',
        'modals/solicitante/ver-programada-solic.html',
        'modals/solicitante/clonar-solicitud-solic.html',
        'modals/bitacora.html'
    ];

    // Función para cargar un modal
    function loadModalSolic(modalPath) {
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
        console.log('Cargando modales del solicitante...');
        
        // Contenedor para los modales
        if ($('#modals-container').length === 0) {
            $('body').append('<div id="modals-container"></div>');
        }
        
        // Cargar cada modal
        const promises = modalsToLoadSolic.map(modalPath => {
            return loadModalSolic(modalPath)
                .done(function(html) {
                    $('#modals-container').append(html);
                    console.log(`✓ Modal solicitante cargado: ${modalPath}`);
                })
                .fail(function(error) {
                    console.error(`✗ Error cargando modal solicitante: ${modalPath}`, error);
                });
        });
        
        // Cuando todos los modales estén cargados
        $.when.apply($, promises).done(function() {
            console.log('✓ Todos los modales del solicitante cargados correctamente');
        });
    });
})();

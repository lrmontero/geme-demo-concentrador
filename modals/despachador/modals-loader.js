// ============================================
// CARGADOR DE MODALES DINÁMICOS - DESPACHADOR
// ============================================

(function() {
    // Lista de modales a cargar
    const modalsToLoadDesp = [
        'modals/despachador/nueva-solicitud-desp.html',
        'modals/despachador/editar-solicitud-despachador.html',  // Modal de edición
        'modals/despachador/ver-despachador.html',  // Modal unificado para todos los estados
        'modals/despachador/gestionar-solicitud-despachador.html',  // Modal de gestión unificado
        'modals/despachador/gestionar-solicitud-programada-desp.html',
        'modals/despachador/clonar-solicitud-despachador.html',  // Modal de clonación
        'modals/bitacora.html'
    ];

    // Función para cargar un modal
    function loadModalDesp(modalPath) {
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
        console.log('Cargando modales del despachador...');
        
        // Contenedor para los modales
        if ($('#modals-container').length === 0) {
            $('body').append('<div id="modals-container"></div>');
        }
        
        // Cargar cada modal
        const promises = modalsToLoadDesp.map(modalPath => {
            return loadModalDesp(modalPath)
                .done(function(html) {
                    $('#modals-container').append(html);
                    console.log(`✓ Modal despachador cargado: ${modalPath}`);
                })
                .fail(function(error) {
                    console.error(`✗ Error cargando modal despachador: ${modalPath}`, error);
                });
        });
        
        // Cuando todos los modales estén cargados
        $.when.apply($, promises).done(function() {
            console.log('✓ Todos los modales del despachador cargados correctamente');
        });
    });
})();

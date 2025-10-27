// ============================================
// CARGADOR DE MODALES DINÁMICOS - ADMINISTRADOR
// ============================================

(function() {
    // Lista de modales a cargar
    const modalsToLoadAdmin = [
        'modals/administrador/nueva-solicitud-admin.html',
        'modals/administrador/editar-solicitud-admin.html',
        'modals/administrador/ver-pendiente-admin.html',
        'modals/administrador/ver-en-analisis-admin.html',
        'modals/administrador/ver-admin-gestionando-admin.html',
        'modals/administrador/ver-programada-admin.html',
        'modals/administrador/ver-vigente-admin.html',
        'modals/administrador/ver-extendida-admin.html',
        'modals/administrador/gestionar-solicitud-gestionando-admin.html',
        'modals/administrador/gestionar-solicitud-analisis-admin.html',
        'modals/administrador/clonar-solicitud-admin.html',
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

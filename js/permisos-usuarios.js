// ===== PERMISOS DE USUARIOS - FUNCIONES =====

// Función para buscar usuarios
function initPermisosUsuarios() {
    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#matrix-body tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    // Manejar cierre del modal al hacer click fuera
    $('#modalInstalaciones').on('hidden.bs.modal', function () {
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
        $('body').css({
            'overflow': '',
            'padding-right': ''
        });
    });
}

// Función para toggle de permisos
function togglePermiso(element, userId, permiso) {
    const icon = $(element).find('i');
    
    if (icon.hasClass('fa-check-circle')) {
        // Desactivar permiso
        icon.removeClass('fa-check-circle text-success');
        icon.addClass('fa-times-circle text-muted');
        console.log(`Permiso ${permiso} desactivado para usuario ${userId}`);
    } else {
        // Activar permiso
        icon.removeClass('fa-times-circle text-muted');
        icon.addClass('fa-check-circle text-success');
        console.log(`Permiso ${permiso} activado para usuario ${userId}`);
    }
    
    // Aquí puedes agregar la lógica para guardar en SharePoint
    // guardarPermiso(userId, permiso, icon.hasClass('fa-check-circle'));
}

// Función para editar usuario
function editarUsuario(userId, userName) {
    alert(`Editar usuario: ${userName} (ID: ${userId})`);
    // Aquí puedes abrir un modal para editar el usuario
}

// Función para desvincular usuario
function desvincularUsuario(userId, userName) {
    if (confirm(`¿Está seguro que desea desvincular al usuario ${userName}?`)) {
        console.log(`Desvinculando usuario ${userId}`);
        // Aquí puedes agregar la lógica para desvincular en SharePoint
        // Luego eliminar la fila de la tabla
        $(`tr td[data-userid="${userId}"]`).parent().fadeOut(300, function() {
            $(this).remove();
        });
    }
}

// Función para abrir modal de nuevo usuario
function abrirModalNuevoUsuario() {
    alert('Abrir modal para agregar nuevo usuario');
    // Aquí puedes abrir un modal para agregar un nuevo usuario
}

// Función para abrir modal de instalaciones
function abrirModalInstalaciones(userId, userName) {
    // Cargar instalaciones actuales del usuario
    const instalacionesActuales = obtenerInstalacionesUsuario(userId);
    
    // Marcar checkboxes según instalaciones del usuario
    $('.instalacion-checkbox').prop('checked', false);
    instalacionesActuales.forEach(inst => {
        $(`#inst-${inst.replace(/\s+/g, '-')}`).prop('checked', true);
    });
    
    // Guardar datos en el modal
    $('#modalInstalaciones').data('userId', userId);
    $('#modalInstalaciones').data('userName', userName);
    $('#modalInstalacionesLabel').text(`Instalaciones - ${userName}`);
    
    // Abrir modal (ahora funciona correctamente porque está fuera del contenido dinámico)
    $('#modalInstalaciones').modal('show');
}

// Función para obtener instalaciones del usuario (simulado)
function obtenerInstalacionesUsuario(userId) {
    // Aquí deberías obtener las instalaciones desde SharePoint
    // Por ahora retornamos datos de ejemplo
    const instalacionesPorUsuario = {
        1: ['Santiago Solar', 'Nueva Renca', 'CEME1'],
        2: ['Santiago Solar', 'Nueva Renca', 'Los Vientos', 'Santa Lidia', 'CEME1'],
        3: ['Santiago Solar', 'CEME1'],
        4: ['Nueva Renca'],
        5: ['Santiago Solar', 'Nueva Renca', 'Los Vientos', 'Santa Lidia', 'CEME1']
    };
    return instalacionesPorUsuario[userId] || [];
}

// Función para cerrar modal de instalaciones (ya no es necesaria, pero la dejamos por compatibilidad)
function cerrarModalInstalaciones() {
    $('#modalInstalaciones').modal('hide');
}

// Función para guardar instalaciones
function guardarInstalaciones() {
    const userId = $('#modalInstalaciones').data('userId');
    const userName = $('#modalInstalaciones').data('userName');
    const instalacionesSeleccionadas = [];
    
    $('.instalacion-checkbox:checked').each(function() {
        instalacionesSeleccionadas.push($(this).val());
    });
    
    console.log(`Guardando instalaciones para usuario ${userId}:`, instalacionesSeleccionadas);
    
    // Actualizar contador
    $(`#count-inst-${userId}`).text(instalacionesSeleccionadas.length);
    
    // Aquí deberías guardar en SharePoint
    // guardarEnSharePoint(userId, instalacionesSeleccionadas);
    
    // Cerrar modal
    $('#modalInstalaciones').modal('hide');
    
    // Mostrar mensaje de éxito
    alert(`Instalaciones actualizadas para ${userName}`);
}

// Inicializar cuando se carga la vista
$(document).ready(function() {
    // Solo inicializar si estamos en la vista de permisos
    if ($('#matrix').length > 0) {
        initPermisosUsuarios();
    }
});

// ============================================
// FUNCIONES PARA VISTA SOLICITANTE
// ============================================

// Función para cargar solicitudes en la tabla
function cargarSolicitudesSolicitante() {
    const tbody = $('#tablaSolicitudesSolicitante tbody');
    tbody.empty(); // Limpiar tabla
    
    // Filtrar solo solicitudes creadas por solicitante
    const solicitudes = solicitudesData.filter(sol => sol.creadoPor === 'Solicitante');
    
    solicitudes.forEach(solicitud => {
        const fila = generarFilaSolicitud(solicitud);
        tbody.append(fila);
    });
    
    console.log(`${solicitudes.length} solicitudes cargadas en la tabla`);
}

// Función para generar una fila de solicitud
function generarFilaSolicitud(sol) {
    // Determinar qué función de ver usar según el estado
    let funcionVer = '';
    switch(sol.ESTADO) {
        case 'Pendiente':
            funcionVer = `verSolicitudPendienteSolic(${sol.ID_REGISTRO})`;
            break;
        case 'En Análisis':
            funcionVer = `verSolicitudEnAnalisisSolic(${sol.ID_REGISTRO})`;
            break;
        case 'Administrador Gestionando':
            funcionVer = `verSolicitudAdminGestionandoSolic(${sol.ID_REGISTRO})`;
            break;
        case 'Programada':
            funcionVer = `verSolicitudProgramadaSolic(${sol.ID_REGISTRO})`;
            break;
        case 'Vigente':
            funcionVer = `verSolicitudVigenteSolic(${sol.ID_REGISTRO})`;
            break;
        case 'Extendida':
            funcionVer = `verSolicitudExtendidaSolic(${sol.ID_REGISTRO})`;
            break;
        default:
            funcionVer = `verSolicitudPendienteSolic(${sol.ID_REGISTRO})`;
    }
    
    // Determinar clase de badge para riesgo
    let badgeRiesgo = '';
    switch(sol.RIESGOS) {
        case 'Bajo':
            badgeRiesgo = 'badge-info';
            break;
        case 'Medio':
            badgeRiesgo = 'badge-warning';
            break;
        case 'Alto':
            badgeRiesgo = 'badge-danger';
            break;
        default:
            badgeRiesgo = 'badge-secondary';
    }
    
    // Determinar clase de badge para estado
    let badgeEstado = '';
    switch(sol.ESTADO) {
        case 'Pendiente':
            badgeEstado = 'badge-warning';
            break;
        case 'En Análisis':
            badgeEstado = 'badge-info';
            break;
        case 'Administrador Gestionando':
            badgeEstado = 'badge-warning text-dark';
            break;
        case 'Programada':
            badgeEstado = 'badge-success';
            break;
        case 'Vigente':
            badgeEstado = 'badge-primary';
            break;
        case 'Extendida':
            badgeEstado = 'badge-secondary';
            break;
        case 'Finalizada':
            badgeEstado = 'badge-dark';
            break;
        case 'Rechazada':
            badgeEstado = 'badge-danger';
            break;
        default:
            badgeEstado = 'badge-secondary';
    }
    
    return `
        <tr>
            <td class="text-center">
                <a href="javascript:;" onclick="abrirModalEditarSolic(${sol.ID_REGISTRO})" class="text-warning" title="Editar">
                    <i class="fas fa-edit"></i>
                </a>
                <a href="javascript:;" onclick="${funcionVer}" class="text-primary ml-2" title="Ver">
                    <i class="fas fa-eye"></i>
                </a>
                <a href="javascript:;" onclick="clonarSolicitudSolic(${sol.ID_REGISTRO})" class="text-info ml-2" title="Clonar">
                    <i class="fas fa-copy"></i>
                </a>
                <a href="javascript:;" onclick="abrirBitacora(${sol.ID_REGISTRO})" class="text-success ml-2" title="Bitácora">
                    <i class="fas fa-clipboard-list"></i>
                </a>
            </td>
            <td>${sol.ID_SOLICITUD}</td>
            <td>${sol.INICIO_PROGRAMADO}</td>
            <td>${sol.FIN_PROGRAMADO}</td>
            <td>${sol.INSTALACION_GM}</td>
            <td>${sol.EQUIPOS}</td>
            <td>${sol.TIPO_INTERVENCION}</td>
            <td><span class="badge ${badgeRiesgo}">${sol.RIESGOS}</span></td>
            <td>${sol.SODI}</td>
            <td><span class="badge ${badgeEstado}">${sol.ESTADO}</span></td>
        </tr>
    `;
}

// Cargar solicitudes cuando el documento esté listo
$(document).ready(function() {
    // Verificar si estamos en la vista de solicitante
    if ($('#tablaSolicitudesSolicitante').length > 0) {
        console.log('Tabla encontrada en document.ready, cargando solicitudes...');
        cargarSolicitudesSolicitante();
    }
});

// También intentar cargar después de un pequeño delay (para vistas cargadas dinámicamente)
setTimeout(function() {
    if ($('#tablaSolicitudesSolicitante').length > 0) {
        console.log('Tabla encontrada después de delay, cargando solicitudes...');
        cargarSolicitudesSolicitante();
    }
}, 500);

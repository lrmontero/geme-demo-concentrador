// ============================================
// HELPERS PARA CARGAR DATOS EN MODALES
// ============================================

// Función para poblar modal de ver solicitud pendiente
function poblarModalVerPendiente(solicitud, sufijo = '') {
    console.log('Poblando modal ver pendiente:', solicitud);
    $(`#verPendiente${sufijo}ID`).text(solicitud.ID_REGISTRO);
    $(`#verPendiente${sufijo}FechaInicio`).val(solicitud.INICIO_PROGRAMADO);
    $(`#verPendiente${sufijo}FechaFin`).val(solicitud.FIN_PROGRAMADO);
    $(`#verPendiente${sufijo}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#verPendiente${sufijo}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#verPendiente${sufijo}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#verPendiente${sufijo}Riesgo`).val(solicitud.RIESGOS);
    $(`#verPendiente${sufijo}SODI`).val(solicitud.SODI);
    $(`#verPendiente${sufijo}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#verPendiente${sufijo}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    $(`#verPendiente${sufijo}Afectaciones`).val(solicitud.AFECTACIONES);
    $(`#verPendiente${sufijo}Observaciones`).val(solicitud.OBSERVACIONES);
    $(`#verPendiente${sufijo}Solicitante`).text(solicitud.SOLICITANTE);
    $(`#verPendiente${sufijo}Administrador`).text(solicitud.ADMINISTRADOR);
}

// Función para poblar modal de ver solicitud en análisis
function poblarModalVerEnAnalisis(solicitud, sufijo = '') {
    console.log('Poblando modal ver en análisis:', solicitud);
    $(`#verEnAnalisis${sufijo}ID`).text(solicitud.ID_REGISTRO);
    $(`#verEnAnalisis${sufijo}FechaInicio`).val(solicitud.INICIO_PROGRAMADO);
    $(`#verEnAnalisis${sufijo}FechaFin`).val(solicitud.FIN_PROGRAMADO);
    $(`#verEnAnalisis${sufijo}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#verEnAnalisis${sufijo}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#verEnAnalisis${sufijo}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#verEnAnalisis${sufijo}Riesgo`).val(solicitud.RIESGOS);
    $(`#verEnAnalisis${sufijo}SODI`).val(solicitud.SODI);
    $(`#verEnAnalisis${sufijo}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#verEnAnalisis${sufijo}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    $(`#verEnAnalisis${sufijo}Afectaciones`).val(solicitud.AFECTACIONES);
    $(`#verEnAnalisis${sufijo}Observaciones`).val(solicitud.OBSERVACIONES);
    $(`#verEnAnalisis${sufijo}Solicitante`).text(solicitud.SOLICITANTE);
    $(`#verEnAnalisis${sufijo}Administrador`).text(solicitud.ADMINISTRADOR);
}

// Función para poblar modal de ver solicitud administrador gestionando
function poblarModalVerAdminGestionando(solicitud, sufijo = '') {
    console.log('Poblando modal ver admin gestionando:', solicitud);
    $(`#verAdmin${sufijo}ID`).text(solicitud.ID_REGISTRO);
    $(`#verAdmin${sufijo}FechaInicio`).val(solicitud.INICIO_PROGRAMADO);
    $(`#verAdmin${sufijo}FechaFin`).val(solicitud.FIN_PROGRAMADO);
    $(`#verAdmin${sufijo}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#verAdmin${sufijo}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#verAdmin${sufijo}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#verAdmin${sufijo}Riesgo`).val(solicitud.RIESGOS);
    $(`#verAdmin${sufijo}SODI`).val(solicitud.SODI);
    $(`#verAdmin${sufijo}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#verAdmin${sufijo}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    $(`#verAdmin${sufijo}Afectaciones`).val(solicitud.AFECTACIONES);
    $(`#verAdmin${sufijo}Observaciones`).val(solicitud.OBSERVACIONES);
    $(`#verAdmin${sufijo}Solicitante`).text(solicitud.SOLICITANTE);
    $(`#verAdmin${sufijo}Administrador`).text(solicitud.ADMINISTRADOR);
}

// Función para poblar modal de ver solicitud programada
function poblarModalVerProgramada(solicitud, sufijo = '') {
    $('#verProgramadaFechaInicio').val(solicitud.INICIO_PROGRAMADO);
    $('#verProgramadaFechaFin').val(solicitud.FIN_PROGRAMADO);
    $('#verProgramadaInstalacionGM').val(solicitud.INSTALACION_GM);
    $('#verProgramadaEquiposIntervenir').val(solicitud.EQUIPOS);
    $('#verProgramadaTipoIntervencion').val(solicitud.TIPO_INTERVENCION);
    $('#verProgramadaRiesgo').val(solicitud.RIESGOS);
    $('#verProgramadaSODI').val(solicitud.SODI);
    $('#verProgramadaDescripcionTrabajo').val(solicitud.DESCRIPCION);
    $('#verProgramadaCondicionesRequeridas').val(solicitud.CONDICIONES);
    $('#verProgramadaAfectaciones').val(solicitud.AFECTACIONES);
    $('#verProgramadaComentarios').val(solicitud.OBSERVACIONES);
    $('#verProgramadaAdministrador').text(solicitud.ADMINISTRADOR);
    $('#verProgramadaID').text(solicitud.ID_REGISTRO);
}

// Función para poblar modal de ver solicitud vigente
function poblarModalVerVigente(solicitud, sufijo = '') {
    console.log('Poblando modal ver vigente:', solicitud);
    $(`#verVigente${sufijo}ID`).text(solicitud.ID_REGISTRO);
    $(`#verVigente${sufijo}FechaInicio`).val(solicitud.INICIO_PROGRAMADO);
    $(`#verVigente${sufijo}FechaFin`).val(solicitud.FIN_PROGRAMADO);
    $(`#verVigente${sufijo}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#verVigente${sufijo}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#verVigente${sufijo}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#verVigente${sufijo}Riesgo`).val(solicitud.RIESGOS);
    $(`#verVigente${sufijo}SODI`).val(solicitud.SODI);
    $(`#verVigente${sufijo}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#verVigente${sufijo}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    $(`#verVigente${sufijo}Afectaciones`).val(solicitud.AFECTACIONES);
    $(`#verVigente${sufijo}Observaciones`).val(solicitud.OBSERVACIONES);
    $(`#verVigente${sufijo}Solicitante`).text(solicitud.SOLICITANTE);
    $(`#verVigente${sufijo}Administrador`).text(solicitud.ADMINISTRADOR);
}

// Función para poblar modal de ver solicitud extendida
function poblarModalVerExtendida(solicitud, sufijo = '') {
    console.log('Poblando modal ver extendida:', solicitud);
    $(`#verExtendida${sufijo}ID`).text(solicitud.ID_REGISTRO);
    $(`#verExtendida${sufijo}FechaInicio`).val(solicitud.INICIO_PROGRAMADO);
    $(`#verExtendida${sufijo}FechaFin`).val(solicitud.FIN_PROGRAMADO);
    $(`#verExtendida${sufijo}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#verExtendida${sufijo}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#verExtendida${sufijo}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#verExtendida${sufijo}Riesgo`).val(solicitud.RIESGOS);
    $(`#verExtendida${sufijo}SODI`).val(solicitud.SODI);
    $(`#verExtendida${sufijo}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#verExtendida${sufijo}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    $(`#verExtendida${sufijo}Afectaciones`).val(solicitud.AFECTACIONES);
    $(`#verExtendida${sufijo}Observaciones`).val(solicitud.OBSERVACIONES);
    $(`#verExtendida${sufijo}Solicitante`).text(solicitud.SOLICITANTE);
    $(`#verExtendida${sufijo}Administrador`).text(solicitud.ADMINISTRADOR);
}

// Función para poblar modal de ver solicitud devuelta
function poblarModalVerDevuelta(solicitud, sufijo = '') {
    console.log('Poblando modal ver devuelta:', solicitud);
    
    // Campos principales
    $(`#verDevuelta${sufijo}FechaInicio`).val(solicitud.INICIO_PROGRAMADO);
    $(`#verDevuelta${sufijo}FechaFin`).val(solicitud.FIN_PROGRAMADO);
    $(`#verDevuelta${sufijo}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#verDevuelta${sufijo}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#verDevuelta${sufijo}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#verDevuelta${sufijo}Riesgo`).val(solicitud.RIESGOS);
    $(`#verDevuelta${sufijo}SODI`).val(solicitud.SODI);
    $(`#verDevuelta${sufijo}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#verDevuelta${sufijo}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    $(`#verDevuelta${sufijo}Afectaciones`).val(solicitud.AFECTACIONES);
    $(`#verDevuelta${sufijo}Observaciones`).val(solicitud.OBSERVACIONES);
    
    // Metadata del sistema
    $(`#verDevuelta${sufijo}ID`).text(solicitud.ID_REGISTRO);
    $(`#verDevuelta${sufijo}Solicitante`).text(solicitud.SOLICITANTE);
    $(`#verDevuelta${sufijo}Administrador`).text(solicitud.ADMINISTRADOR);
}

// Función para poblar modal de editar solicitud
function poblarModalEditar(solicitud, sufijo = '') {
    console.log('Poblando modal editar:', solicitud, 'sufijo:', sufijo);
    
    // Para el solicitante, los IDs son diferentes (sin sufijo Solic)
    const prefix = sufijo === 'Solic' ? 'edit' : `editar${sufijo}`;
    
    // Convertir fechas al formato datetime-local (YYYY-MM-DDTHH:MM)
    const formatearFecha = (fecha) => {
        if (!fecha) return '';
        // Formato esperado: "DD/MM/YYYY HH:MM"
        const partes = fecha.split(' ');
        if (partes.length !== 2) return '';
        const [dia, mes, año] = partes[0].split('/');
        const hora = partes[1];
        return `${año}-${mes}-${dia}T${hora}`;
    };
    
    $(`#${prefix}SolicitudId`).val(solicitud.ID_REGISTRO);
    
    // Poblar estado con badge dinámico
    const badgeClass = solicitud.ESTADO === 'Pendiente' ? 'badge-warning' : 'badge-danger';
    $(`#${prefix}EstadoBadge`).removeClass('badge-warning badge-danger').addClass(badgeClass).text(solicitud.ESTADO);
    
    $(`#${prefix}FechaInicio`).val(formatearFecha(solicitud.INICIO_PROGRAMADO));
    $(`#${prefix}FechaFin`).val(formatearFecha(solicitud.FIN_PROGRAMADO));
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM);
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS);
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION);
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS);
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA);
    
    // SODI es un radio button
    if (solicitud.SODI === 'Sí' || solicitud.SODI === 'Si') {
        $(`input[name="${prefix}Sodi"][value="Si"]`).prop('checked', true);
    } else {
        $(`input[name="${prefix}Sodi"][value="No"]`).prop('checked', true);
    }
    
    $(`#${prefix}DescripcionTrabajo`).val(solicitud.DESCRIPCION);
    $(`#${prefix}CondicionesRequeridas`).val(solicitud.CONDICIONES);
    
    // Afectaciones es un select multiple
    if (solicitud.AFECTACIONES) {
        const afectaciones = solicitud.AFECTACIONES.split(',').map(a => a.trim());
        $(`#${prefix}Afectaciones`).val(afectaciones);
    }
    
    $(`#${prefix}Comentarios`).val(solicitud.OBSERVACIONES);
}
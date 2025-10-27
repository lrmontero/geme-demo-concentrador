// ============================================
// HELPERS PARA CARGAR DATOS EN MODALES
// ============================================

// Función para poblar modal de ver solicitud pendiente
function poblarModalVerPendiente(solicitud, sufijo = '') {
    $(`#verPendiente${sufijo}Codigo`).val(solicitud.codigo);
    $(`#verPendiente${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#verPendiente${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#verPendiente${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#verPendiente${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#verPendiente${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#verPendiente${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#verPendiente${sufijo}Sodi`).val(solicitud.sodi);
    $(`#verPendiente${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#verPendiente${sufijo}Empresa`).val(solicitud.empresa);
    $(`#verPendiente${sufijo}Solicitante`).val(solicitud.solicitante);
    $(`#verPendiente${sufijo}Administrador`).val(solicitud.administrador);
}

// Función para poblar modal de ver solicitud en análisis
function poblarModalVerEnAnalisis(solicitud, sufijo = '') {
    $(`#verEnAnalisis${sufijo}Codigo`).val(solicitud.codigo);
    $(`#verEnAnalisis${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#verEnAnalisis${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#verEnAnalisis${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#verEnAnalisis${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#verEnAnalisis${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#verEnAnalisis${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#verEnAnalisis${sufijo}Sodi`).val(solicitud.sodi);
    $(`#verEnAnalisis${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#verEnAnalisis${sufijo}Empresa`).val(solicitud.empresa);
    $(`#verEnAnalisis${sufijo}Solicitante`).val(solicitud.solicitante);
    $(`#verEnAnalisis${sufijo}Administrador`).val(solicitud.administrador);
}

// Función para poblar modal de ver solicitud administrador gestionando
function poblarModalVerAdminGestionando(solicitud, sufijo = '') {
    $(`#verAdmin${sufijo}Codigo`).val(solicitud.codigo);
    $(`#verAdmin${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#verAdmin${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#verAdmin${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#verAdmin${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#verAdmin${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#verAdmin${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#verAdmin${sufijo}Sodi`).val(solicitud.sodi);
    $(`#verAdmin${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#verAdmin${sufijo}Empresa`).val(solicitud.empresa);
    $(`#verAdmin${sufijo}Solicitante`).val(solicitud.solicitante);
    $(`#verAdmin${sufijo}Administrador`).val(solicitud.administrador);
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
    $('#verProgramadaAdministrador').text(solicitud.administrador);
    $('#verProgramadaID').text(solicitud.ID_REGISTRO);
}

// Función para poblar modal de ver solicitud vigente
function poblarModalVerVigente(solicitud, sufijo = '') {
    $(`#verVigente${sufijo}Codigo`).val(solicitud.codigo);
    $(`#verVigente${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#verVigente${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#verVigente${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#verVigente${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#verVigente${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#verVigente${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#verVigente${sufijo}Sodi`).val(solicitud.sodi);
    $(`#verVigente${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#verVigente${sufijo}Empresa`).val(solicitud.empresa);
    $(`#verVigente${sufijo}Solicitante`).val(solicitud.solicitante);
    $(`#verVigente${sufijo}Administrador`).val(solicitud.administrador);
}

// Función para poblar modal de ver solicitud extendida
function poblarModalVerExtendida(solicitud, sufijo = '') {
    $(`#verExtendida${sufijo}Codigo`).val(solicitud.codigo);
    $(`#verExtendida${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#verExtendida${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#verExtendida${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#verExtendida${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#verExtendida${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#verExtendida${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#verExtendida${sufijo}Sodi`).val(solicitud.sodi);
    $(`#verExtendida${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#verExtendida${sufijo}Empresa`).val(solicitud.empresa);
    $(`#verExtendida${sufijo}Solicitante`).val(solicitud.solicitante);
    $(`#verExtendida${sufijo}Administrador`).val(solicitud.administrador);
}

// Función para poblar modal de editar solicitud
function poblarModalEditar(solicitud, sufijo = '') {
    $(`#editar${sufijo}Id`).val(solicitud.id);
    $(`#editar${sufijo}Codigo`).val(solicitud.codigo);
    $(`#editar${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#editar${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#editar${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#editar${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#editar${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#editar${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#editar${sufijo}Sodi`).val(solicitud.sodi);
    $(`#editar${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#editar${sufijo}Empresa`).val(solicitud.empresa);
    $(`#editar${sufijo}Solicitante`).val(solicitud.solicitante);
    $(`#editar${sufijo}Administrador`).val(solicitud.administrador);
    $(`#editar${sufijo}Estado`).val(solicitud.estado);
}

// Función para poblar modal de clonar solicitud
function poblarModalClonar(solicitud, sufijo = '') {
    $(`#clonar${sufijo}OrigenCodigo`).text(solicitud.codigo);
    $(`#clonar${sufijo}FechaInicio`).val(solicitud.fechaInicio);
    $(`#clonar${sufijo}FechaFin`).val(solicitud.fechaFin);
    $(`#clonar${sufijo}InstalacionGM`).val(solicitud.instalacionGM);
    $(`#clonar${sufijo}EquiposIntervenir`).val(solicitud.equipos);
    $(`#clonar${sufijo}TipoIntervencion`).val(solicitud.tipoIntervencion);
    $(`#clonar${sufijo}Riesgo`).val(solicitud.riesgo);
    $(`#clonar${sufijo}Sodi`).val(solicitud.sodi);
    $(`#clonar${sufijo}Coordinador`).val(solicitud.coordinador);
    $(`#clonar${sufijo}Empresa`).val(solicitud.empresa);
}

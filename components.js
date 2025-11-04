// ============================================
// COMPONENTES GEME - JavaScript
// ============================================

$(document).ready(function() {
    console.log('Componentes GEME cargados correctamente');
    
    // ============================================
    // SIDEBAR TOGGLE
    // ============================================
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
        $('.overlay').toggleClass('active');
        
        // Cambiar icono del botón
        var icon = $(this).find('i');
        if ($('#sidebar').hasClass('active')) {
            icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            icon.removeClass('fa-times').addClass('fa-bars');
        }
    });
    
    // Cerrar sidebar al hacer click en el overlay (móviles)
    $('.overlay').on('click', function() {
        $('#sidebar').removeClass('active');
        $('#content').removeClass('active');
        $(this).removeClass('active');
        $('#sidebarCollapse i').removeClass('fa-times').addClass('fa-bars');
    });
    
    // ============================================
    // RESPONSIVE SIDEBAR
    // ============================================
    function checkWindowSize() {
        if ($(window).width() <= 992) {
            $('#sidebar').addClass('active');
            $('#content').removeClass('active');
        } else {
            $('#sidebar').removeClass('active');
            $('#content').removeClass('active');
            $('.overlay').removeClass('active');
        }
    }
    
    // Ejecutar al cargar
    checkWindowSize();
    
    // Ejecutar al redimensionar
    $(window).resize(function() {
        checkWindowSize();
    });
    
    // ============================================
    // SIDEBAR MENU COLLAPSE (SOLO CSS)
    // ============================================
    
    // Manejar el click en los toggles del sidebar
    $('#sidebar .dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $this = $(this);
        var $submenu = $this.next('ul');
        var isExpanded = $this.attr('aria-expanded') === 'true';
        
        // Guardar scroll position
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        
        // Cerrar otros submenús
        $('#sidebar .dropdown-toggle').not($this).attr('aria-expanded', 'false').removeClass('active');
        $('#sidebar ul.collapse').not($submenu).removeClass('show');
        
        // Toggle el submenú actual solo con clases CSS
        if (isExpanded) {
            $this.attr('aria-expanded', 'false').removeClass('active');
            $submenu.removeClass('show');
        } else {
            $this.attr('aria-expanded', 'true').addClass('active');
            $submenu.addClass('show');
        }
        
        // Forzar scroll a la posición original
        window.scrollTo(0, scrollPos);
        document.documentElement.scrollTop = scrollPos;
        document.body.scrollTop = scrollPos;
    });
    
    // ============================================
    // CARGAR CONTENIDO DINÁMICO
    // ============================================
    
    // Función para limpiar modales antes de cargar nueva vista
    function limpiarModales() {
        // Cerrar todos los modales abiertos
        $('.modal').modal('hide');
        
        // Eliminar todos los backdrops
        $('.modal-backdrop').remove();
        
        // Restaurar el body
        $('body').removeClass('modal-open');
        $('body').css({
            'overflow': '',
            'padding-right': ''
        });
        
        // Limpiar eventos de modales para evitar duplicados
        $('.modal').off('hidden.bs.modal');
    }
    
    // Función para cargar vistas HTML en el contenedor dinámico
    window.loadView = function(viewPath) {
        // Limpiar modales antes de cargar nueva vista
        limpiarModales();
        
        $('#dynamic-content').html('<div class="text-center my-5"><i class="fa fa-spinner fa-spin fa-3x text-primary"></i><p class="mt-3">Cargando...</p></div>');
        
        $.ajax({
            url: viewPath,
            method: 'GET',
            success: function(data) {
                $('#dynamic-content').html(data);
            },
            error: function() {
                $('#dynamic-content').html('<div class="alert alert-danger"><i class="fas fa-exclamation-triangle"></i> Error al cargar la vista</div>');
            }
        });
    };
    
    // Función de ejemplo para demostrar la carga
    window.showEjemplo = function() {
        $('#dynamic-content').html($('#ejemplo-estilos').html());
    };
    
    // ============================================
    // ACTIVE MENU ITEM
    // ============================================
    function setActiveMenuItem() {
        var currentUrl = window.location.href;
        
        $('#sidebar a').each(function() {
            var href = $(this).attr('onclick');
            if (href && href.includes(currentUrl)) {
                $(this).addClass('active');
                $(this).closest('.collapse').collapse('show');
            }
        });
    }
    
    setActiveMenuItem();
    
    // ============================================
    // FUNCIONES GLOBALES (STUBS)
    // ============================================
    
    // Función para instanciar camino (navegación)
    window.InstanciarCamino = function(nivel, id, param, url) {
        console.log('InstanciarCamino:', { nivel, id, param, url });
        
        // Aquí iría la lógica real de navegación
        // Por ahora solo mostramos un mensaje
        if (url) {
            console.log('Navegando a:', url);
            // window.location.href = url;
            
            // Para demo, mostrar alerta
            alert('Navegación a: ' + url);
        }
    };
    
    // Función para obtener contador de Tomas de Conocimiento
    window.getCountTC = function() {
        console.log('Obteniendo contador TC...');
        
        var $spinner = $('#spinner-cargatc');
        var $icon = $('#btnRecargaTC');
        var $count = $('#countTC');
        
        // Mostrar spinner
        $spinner.removeClass('d-none');
        $icon.addClass('d-none');
        
        // Simular llamada AJAX
        setTimeout(function() {
            var newCount = Math.floor(Math.random() * 10);
            $count.text(newCount);
            
            // Ocultar spinner
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
            
            // Animación
            $count.addClass('badge-warning');
            setTimeout(function() {
                $count.removeClass('badge-warning');
            }, 500);
            
            console.log('Contador TC actualizado:', newCount);
        }, 1000);
    };
    
    // Función para ir a Tomas de Conocimiento
    window.irTomasConocimiento = function() {
        console.log('Ir a Tomas de Conocimiento');
        alert('Navegando a Mis Tomas de Conocimiento');
        // window.location.href = '/sites/geme/SitePages/TomasConocimiento.aspx';
    };
    
    // Función para obtener datos de tareas
    window.getDatosTareasInit = function(filtro) {
        console.log('Obteniendo tareas con filtro:', filtro);
        
        var $spinner = $('#spinner-cargatareas');
        var $icon = $('#btnRecarga');
        var $count = $('#countTareas');
        
        // Mostrar spinner
        $spinner.removeClass('d-none');
        $icon.addClass('d-none');
        
        // Simular llamada AJAX
        setTimeout(function() {
            var newCount = Math.floor(Math.random() * 200);
            $count.text(newCount);
            
            // Ocultar spinner
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
            
            // Animación
            $count.addClass('badge-warning');
            setTimeout(function() {
                $count.removeClass('badge-warning');
            }, 500);
            
            console.log('Contador Tareas actualizado:', newCount);
        }, 1000);
    };
    
    // Función para ver mis tareas
    window.verMisTarea = function() {
        console.log('Ver Mis Tareas');
        alert('Navegando a Mis Tareas');
        // window.location.href = '/sites/geme/SitePages/MisTareas.aspx';
    };
    
    // Variable global para filtros de tareas
    window.H_filtroTareas = {
        filtro: 'todos'
    };
    
    // ============================================
    // TOOLTIPS Y POPOVERS
    // ============================================
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 100) {
            $('.header .navbar').addClass('scrolled');
        } else {
            $('.header .navbar').removeClass('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ============================================
    // HIGHLIGHT ACTIVE SUBMENU ITEM
    // ============================================
    $('#sidebar .a-submenu').on('click', function() {
        $('#sidebar .a-submenu').removeClass('active');
        $(this).addClass('active');
    });
    
    // ============================================
    // KEYBOARD SHORTCUTS
    // ============================================
    $(document).keydown(function(e) {
        // Alt + S = Toggle Sidebar
        if (e.altKey && e.keyCode === 83) {
            e.preventDefault();
            $('#sidebarCollapse').click();
        }
        
        // Esc = Cerrar Sidebar (si está abierto en móvil)
        if (e.keyCode === 27) {
            if ($(window).width() <= 992 && !$('#sidebar').hasClass('active')) {
                $('#sidebarCollapse').click();
            }
        }
    });
    
    // ============================================
    // LOCAL STORAGE - RECORDAR ESTADO DEL SIDEBAR
    // ============================================
    function saveSidebarState() {
        var isActive = $('#sidebar').hasClass('active');
        localStorage.setItem('sidebarActive', isActive);
    }
    
    function loadSidebarState() {
        if ($(window).width() > 992) {
            var isActive = localStorage.getItem('sidebarActive') === 'true';
            if (isActive) {
                $('#sidebar').addClass('active');
                $('#content').addClass('active');
                $('#sidebarCollapse i').removeClass('fa-bars').addClass('fa-times');
            }
        }
    }
    
    // Cargar estado al iniciar
    loadSidebarState();
    
    // Guardar estado al cambiar
    $('#sidebarCollapse').on('click', function() {
        setTimeout(saveSidebarState, 400);
    });
    
    // ============================================
    // ANIMACIONES DE ENTRADA
    // ============================================
    function animateElements() {
        $('.card').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('fade-in');
            }, index * 100);
        });
    }
    
    animateElements();
    
    // ============================================
    // BÚSQUEDA EN SIDEBAR
    // ============================================
    function createSidebarSearch() {
        var searchHtml = `
            <div class="sidebar-search p-3" style="background: #1a252f; border-bottom: 1px solid #34495e;">
                <input type="text" id="sidebarSearchInput" class="form-control form-control-sm" 
                       placeholder="Buscar en menú..." style="background: #2c3e50; color: #fff; border: 1px solid #34495e;">
            </div>
        `;
        
        $('#sidebar .sidebar-header').after(searchHtml);
        
        // Funcionalidad de búsqueda
        $('#sidebarSearchInput').on('keyup', function() {
            var searchText = $(this).val().toLowerCase();
            
            $('#sidebar .components li').each(function() {
                var $li = $(this);
                var text = $li.text().toLowerCase();
                
                if (text.includes(searchText)) {
                    $li.show();
                    // Expandir el padre si es un submenu
                    $li.closest('.collapse').collapse('show');
                } else {
                    $li.hide();
                }
            });
            
            // Si no hay búsqueda, mostrar todo
            if (searchText === '') {
                $('#sidebar .components li').show();
                $('#sidebar .collapse').collapse('hide');
            }
        });
    }
    
    createSidebarSearch();
    
    // ============================================
    // NOTIFICACIONES
    // ============================================
    function showNotification(message, type = 'info') {
        var bgColor = {
            'success': '#28a745',
            'error': '#dc3545',
            'warning': '#ffc107',
            'info': '#17a2b8'
        };
        
        var notification = $('<div>')
            .addClass('notification')
            .css({
                'position': 'fixed',
                'top': '90px',
                'right': '20px',
                'background': bgColor[type] || bgColor.info,
                'color': 'white',
                'padding': '15px 20px',
                'border-radius': '8px',
                'box-shadow': '0 4px 12px rgba(0,0,0,0.3)',
                'z-index': '9999',
                'min-width': '250px',
                'animation': 'slideInRight 0.5s ease'
            })
            .html('<i class="fas fa-info-circle mr-2"></i>' + message);
        
        $('body').append(notification);
        
        setTimeout(function() {
            notification.fadeOut(500, function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // Exponer función globalmente
    window.showNotification = showNotification;
    
    // ============================================
    // ACTUALIZACIÓN AUTOMÁTICA DE CONTADORES
    // ============================================
    function autoUpdateCounters() {
        // Actualizar cada 5 minutos
        setInterval(function() {
            console.log('Actualizando contadores automáticamente...');
            // getCountTC();
            // getDatosTareasInit(H_filtroTareas['filtro']);
        }, 300000); // 5 minutos
    }
    
    // Iniciar actualización automática (comentado para demo)
    // autoUpdateCounters();
    
    // ============================================
    // BREADCRUMB DINÁMICO
    // ============================================
    function updateBreadcrumb(path) {
        var breadcrumbHtml = '<nav aria-label="breadcrumb"><ol class="breadcrumb">';
        breadcrumbHtml += '<li class="breadcrumb-item"><a href="/sites/geme/">Inicio</a></li>';
        
        if (path && path.length > 0) {
            path.forEach(function(item, index) {
                if (index === path.length - 1) {
                    breadcrumbHtml += '<li class="breadcrumb-item active" aria-current="page">' + item + '</li>';
                } else {
                    breadcrumbHtml += '<li class="breadcrumb-item"><a href="#">' + item + '</a></li>';
                }
            });
        }
        
        breadcrumbHtml += '</ol></nav>';
        
        return breadcrumbHtml;
    }
    
    window.updateBreadcrumb = updateBreadcrumb;
    
    // ============================================
    // CONSOLE LOG DE INFORMACIÓN
    // ============================================
    console.log('%c🚀 Sistema GEME Iniciado', 'background: #667eea; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
    console.log('Versión: 1.0.0');
    console.log('jQuery:', $.fn.jquery);
    console.log('Bootstrap:', $.fn.tooltip.Constructor.VERSION);
    console.log('Componentes cargados: Header, Sidebar, Navigation');
    
    // ============================================
    // MENSAJE DE BIENVENIDA
    // ============================================
    setTimeout(function() {
        showNotification('¡Bienvenido al Sistema GEME!', 'success');
    }, 500);
});

// ============================================
// FUNCIONES GLOBALES PARA MODAL NUEVA SOLICITUD
// ============================================

// Equipos por instalación
const equiposPorInstalacion = {
    'CEME1': ['Paño 1', 'Paño 2', 'Transformador T1', 'Transformador T2', 'Sección Barra A', 'SCADA', 'Medidor M1', 'Compensador C1', 'Grupo Emergencia', 'Batería', 'Cargador', 'Telecomunicación', 'Línea L1', 'Otros', 'Sistema de Protecciones'],
    'Nueva Renca': ['Paño NR1', 'Paño NR2', 'Transformador TNR1', 'Sección Barra B', 'SCADA', 'Medidor M2', 'Compensador C2', 'Tendido Cable', 'Telecomunicación', 'Línea L2', 'Otros'],
    'Santa Lidia': ['Paño SL1', 'Paño SL2', 'Paño SL3', 'Transformador TSL1', 'Transformador TSL2', 'Sección Barra C', 'SCADA', 'Medidor M3', 'Medidor M4', 'Grupo Emergencia', 'Batería', 'Cargador', 'Telecomunicación', 'Línea L3', 'Otros'],
    'Los Vientos': ['Paño LV1', 'Transformador TLV1', 'SCADA', 'Medidor M5', 'Compensador C3', 'Telecomunicación', 'Línea L4', 'Otros'],
    'Santiago Solar': ['Paño SS1', 'Paño SS2', 'Transformador TSS1', 'SCADA', 'Medidor M6', 'Telecomunicación', 'Otros']
};

// Exponer globalmente para que esté disponible en todos los modales
window.equiposPorInstalacion = equiposPorInstalacion;

// Función para abrir modal de nueva solicitud - SOLICITANTE
function abrirNuevaSolicitud() {
    $('#modalNuevaSolicitud').modal('show');
    $('#formNuevaSolicitud')[0].reset();
    $('#equiposIntervenir').prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
}

// Función para abrir modal de nueva solicitud - ADMINISTRADOR
function abrirNuevaSolicitudAdmin() {
    $('#modalNuevaAdmin').modal('show');
    $('#modalNuevaAdmin #formNuevaSolicitud')[0].reset();
    $('#modalNuevaAdmin #equiposIntervenir').prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
}

// Función para abrir modal de nueva solicitud - DESPACHADOR
function abrirNuevaSolicitudDesp() {
    $('#modalNuevaSolicitudDesp').modal('show');
    $('#modalNuevaSolicitudDesp #formNuevaSolicitud')[0].reset();
    $('#modalNuevaSolicitudDesp #equiposIntervenir').prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
}

// Cambiar equipos según instalación seleccionada
$(document).on('change', '#instalacionGM', function() {
    const instalacion = $(this).val();
    const $equipos = $('#equiposIntervenir');
    
    if (instalacion && equiposPorInstalacion[instalacion]) {
        $equipos.prop('disabled', false).html('<option value="">Seleccione equipo...</option>');
        equiposPorInstalacion[instalacion].forEach(equipo => {
            $equipos.append(`<option value="${equipo}">${equipo}</option>`);
        });
    } else {
        $equipos.prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
    }
});

// Validar fechas
$(document).on('change', '#fechaInicio, #fechaFin', function() {
    const fechaInicio = new Date($('#fechaInicio').val());
    const fechaFin = new Date($('#fechaFin').val());
    const ahora = new Date();
    
    // Validar que fecha inicio sea futura
    if ($('#fechaInicio').val() && fechaInicio < ahora) {
        $(this).addClass('is-invalid');
        $(this).next('.form-text').addClass('text-danger').text('La fecha de inicio debe ser futura');
        $('#fechaInicio').val('');
        return;
    } else {
        $('#fechaInicio').removeClass('is-invalid');
        $('#fechaInicio').next('.form-text').removeClass('text-danger').addClass('text-muted').text('Debe ser una fecha futura');
    }
    
    // Validar que fecha fin sea posterior a inicio
    if ($('#fechaInicio').val() && $('#fechaFin').val() && fechaFin <= fechaInicio) {
        $('#fechaFin').addClass('is-invalid');
        $('#fechaFin').next('.form-text').addClass('text-danger').text('La fecha de fin debe ser posterior a la fecha de inicio');
        $('#fechaFin').val('');
        return;
    } else {
        $('#fechaFin').removeClass('is-invalid');
        $('#fechaFin').next('.form-text').removeClass('text-danger').addClass('text-muted').text('Debe ser posterior a la fecha de inicio');
    }
});

// Mostrar nombre de archivo seleccionado
$(document).on('change', '#archivoAdjunto', function() {
    const fileName = $(this).val().split('\\').pop();
    $(this).next('.custom-file-label').html(fileName || 'Seleccionar archivo...');
});

// Función para guardar solicitud
function guardarSolicitud() {
    const form = $('#formNuevaSolicitud')[0];
    
    // Validar formulario
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Validar descripción del trabajo (mínimo 10 caracteres)
    if ($('#descripcionTrabajo').val().length < 10) {
        alert('La descripción del trabajo debe tener al menos 10 caracteres');
        return;
    }
    
    // Validar que se haya seleccionado al menos una afectación
    if ($('#afectaciones').val() === null || $('#afectaciones').val().length === 0) {
        alert('Debe seleccionar al menos una afectación');
        return;
    }
    
    // Recopilar datos del formulario
    const formData = {
        INICIO_PROGRAMADO: $('#fechaInicio').val(),
        FIN_PROGRAMADO: $('#fechaFin').val(),
        INSTALACION_GM: $('#instalacionGM').val(),
        EQUIPOS: $('#equiposIntervenir').val(),
        TIPO_INTERVENCION: $('#tipoIntervencion').val(),
        RIESGOS: $('#riesgo').val(),
        DESCRIPCION: $('#descripcionTrabajo').val(),
        CONDICIONES: $('#condicionesRequeridas').val(),
        AFECTACIONES: $('#afectaciones').val(),
        SODI: $('input[name="sodi"]:checked').val(),
        OBSERVACIONES: $('#comentarios').val(),
        archivo: $('#archivoAdjunto')[0].files[0]
    };
    
    console.log('Datos de la solicitud:', formData);
    
    // Aquí iría la lógica para enviar al servidor
    // Por ahora solo mostramos un mensaje de éxito
    alert('Solicitud guardada exitosamente');
    $('#modalNuevaSolicitud').modal('hide');
    
    // Recargar la tabla (cuando esté conectado al backend)
    // $('#table-solicitudes').DataTable().ajax.reload();
}

// ============================================
// EVENT LISTENERS PARA MODAL NUEVA SOLICITUD - SOLICITANTE
// ============================================

// Cambiar equipos según instalación seleccionada (Nueva Solicitud - Solicitante)
$(document).on('change', '#nuevaSolicInstalacionGM', function() {
    const instalacion = $(this).val();
    cargarEquiposPorInstalacion(instalacion, 'nuevaSolicEquipos');
});

// ============================================
// FUNCIÓN AUXILIAR PARA OBTENER SOLICITUDES
// ============================================

/**
 * Obtiene una solicitud del array solicitudesData por su ID_REGISTRO
 * @param {number} solicitudId - El ID del registro de la solicitud
 * @returns {object|null} - El objeto de solicitud o null si no se encuentra
 */
function obtenerSolicitud(solicitudId) {
    if (typeof solicitudesData === 'undefined') {
        console.error('solicitudesData no está definido. Asegúrate de cargar data/solicitudes.js');
        return null;
    }
    
    // Buscar por ID_REGISTRO
    const solicitud = solicitudesData.find(s => s.ID_REGISTRO === solicitudId);
    
    if (!solicitud) {
        console.warn(`No se encontró solicitud con ID_REGISTRO: ${solicitudId}`);
        return null;
    }
    
    return solicitud;
}

// ============================================
// FUNCIONES OBSOLETAS ELIMINADAS
// ============================================
// Las siguientes funciones con datos hardcodeados fueron eliminadas:
// - verSolicitudEnAnalisis() -> Usar verSolicitudEnAnalisisAdmin() (línea ~1119)
// - verSolicitudProgramada() -> Usar verSolicitudProgramadaAdmin() (línea ~1635)
// - verSolicitudPendiente() -> Usar verSolicitudPendienteAdmin() (línea ~1103)
// - verSolicitudAdminGestionandoAdmin() -> Versión correcta en línea ~1651

// Función para descargar reporte
function descargarReporte() {
    console.log('Descargando reporte PDF...');
    alert('Funcionalidad de descarga de reporte en desarrollo');
}

// Función para abrir bitácora
function abrirBitacora(solicitudId) {
    console.log('Abriendo bitácora de solicitud:', solicitudId);
    
    // Verificar si el modal existe
    if ($('#modalBitacora').length === 0) {
        console.error('Modal #modalBitacora no encontrado en el DOM');
        alert('Error: Modal de bitácora no cargado. Por favor recarga la página.');
        return;
    }
    
    console.log('Modal bitácora encontrado, actualizando ID...');
    $('#bitacoraIdSolicitud').text('SOL-' + String(solicitudId).padStart(3, '0'));
    
    console.log('Mostrando modal bitácora...');
    $('#modalBitacora').modal('show');
}

// Función para agregar entrada a bitácora
function agregarEntradaBitacora() {
    console.log('Agregando nueva entrada a bitácora');
    alert('Funcionalidad de agregar entrada en desarrollo');
}

// Función para editar entrada de bitácora
function editarEntradaBitacora(entradaId) {
    console.log('Editando entrada de bitácora:', entradaId);
    alert('Funcionalidad de editar entrada en desarrollo');
}

// Función para eliminar entrada de bitácora
function eliminarEntradaBitacora(entradaId) {
    console.log('Eliminando entrada de bitácora:', entradaId);
    if (confirm('¿Está seguro de eliminar esta entrada de la bitácora?')) {
        alert('Funcionalidad de eliminar entrada en desarrollo');
    }
}

// Función para exportar bitácora
function exportarBitacora() {
    console.log('Exportando bitácora a Excel...');
    alert('Funcionalidad de exportar bitácora en desarrollo');
}



// Función para confirmar clonación de solicitud
function confirmarClonarSolicitud() {
    const solicitudId = $('#modalClonarSolicitud').data('solicitudId');
    console.log('Confirmando clonación de solicitud:', solicitudId);
    
    // Cerrar modal de clonar
    $('#modalClonarSolicitud').modal('hide');
    
    // Aquí se abrirá el modal de nueva solicitud con los datos pre-cargados
    alert('Funcionalidad en desarrollo.\nSe abrirá el formulario de nueva solicitud con los datos de SOL-' + String(solicitudId).padStart(3, '0'));
    
    // En el futuro: abrirNuevaSolicitudConDatos(solicitudId);
}

// NOTA: Función obsoleta eliminada - gestionarSolicitud()
// Usar las funciones específicas por rol:
// - gestionarSolicitudDevuelta() para Administrador (línea ~1289)
// - gestionarSolicitudDesp() para Despachador (línea ~1736)
// - gestionarSolicitudSolicitante() para Solicitante (línea ~2356)

// Función para confirmar gestión de solicitud
function confirmarGestionSolicitud() {
    const solicitudId = $('#modalGestionarSolicitud').data('solicitudId');
    const comentarios = $('#gestionarComentarios').val().trim();
    const accion = $('input[name="accionGestion"]:checked').val();
    
    console.log('Confirmando gestión de solicitud:', solicitudId);
    console.log('Acción:', accion);
    console.log('Comentarios:', comentarios);
    
    // Validar comentarios
    if (comentarios === '') {
        alert('Por favor ingrese comentarios sobre la gestión de esta solicitud.');
        return;
    }
    
    // Cerrar modal
    $('#modalGestionarSolicitud').modal('hide');
    
    // Procesar según la acción seleccionada
    if (accion === 'analisis') {
        alert('Solicitud SOL-' + String(solicitudId).padStart(3, '0') + ' enviada a análisis.\n\nComentarios: ' + comentarios + '\n\nFuncionalidad en desarrollo.');
    } else if (accion === 'rechazar') {
        alert('Solicitud SOL-' + String(solicitudId).padStart(3, '0') + ' rechazada.\n\nComentarios: ' + comentarios + '\n\nFuncionalidad en desarrollo.');
    }
}

// ============================================
// FUNCIONES ESPECÍFICAS PARA ADMINISTRADOR
// ============================================

// Función para abrir modal de nueva solicitud - Administrador
function abrirModalNuevaSolicitudAdmin() {
    console.log('Abriendo modal nueva solicitud (Administrador)');
    $('#modalNuevaAdmin').modal('show');
}

// Función para abrir modal de editar solicitud - Administrador
function abrirModalEditarAdmin(solicitudId) {
    console.log('Abriendo modal editar (Administrador) para solicitud:', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalEditar(solicitud, 'Admin');
    }
    $('#modalEditarAdmin').modal('show');
}

// Función para ver solicitud pendiente - Administrador
// ============================================
// FUNCIONES DE COMPATIBILIDAD - Redirigen a la función unificada
// ============================================

function verSolicitudPendienteAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

function verSolicitudDevueltaAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

function verSolicitudEnAnalisisAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

function verSolicitudProgramadaAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

function verSolicitudVigenteAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

function verSolicitudExtendidaAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

// Función para clonar solicitud - Administrador
function clonarSolicitudAdmin(solicitudId) {
    console.log('Clonar solicitud (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalClonarAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalClonarAdmin(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de clonación del administrador
function poblarModalClonarAdmin(solicitud) {
    const modalContext = '#modalClonarAdmin';
    
    console.log('Poblando modal clonar administrador:', solicitud);
    
    // Identificación - ID Solicitud queda vacío, Tipo y Relación se copian
    $(`${modalContext} #clonarAdminIDSolicitud`).val('');
    $(`${modalContext} #clonarAdminTipo`).val(solicitud.TIPO || '');
    $(`${modalContext} #clonarAdminRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas - quedan vacías
    $(`${modalContext} #clonarAdminInicioProgramado`).val('');
    $(`${modalContext} #clonarAdminFinProgramado`).val('');
    
    // Empresas Involucradas - se copian
    $(`${modalContext} #clonarAdminEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`${modalContext} #clonarAdminEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos - se copian
    $(`${modalContext} #clonarAdminInstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`${modalContext} #clonarAdminEquipos`).val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención - se copian
    $(`${modalContext} #clonarAdminTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`${modalContext} #clonarAdminPotencia`).val(solicitud.POTENCIA || '');
    $(`${modalContext} #clonarAdminAplicaSODI`).val(solicitud.APLICA_SODI || '');
    $(`${modalContext} #clonarAdminRiesgo`).val(solicitud.RIESGO || '');
    
    // Descripción del Riesgo (condicional) - se copia
    if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
        $(`${modalContext} #clonarAdminDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '');
        $(`${modalContext} #clonarAdminDescripcionRiesgoContainer`).show();
        $(`${modalContext} #clonarAdminDescripcionRiesgo`).attr('required', 'required');
    } else {
        $(`${modalContext} #clonarAdminDescripcionRiesgoContainer`).hide();
        $(`${modalContext} #clonarAdminDescripcionRiesgo`).val('').removeAttr('required');
    }
    
    // Descripción y Condiciones - se copian
    $(`${modalContext} #clonarAdminDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #clonarAdminCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #clonarAdminComentarios`).val(solicitud.COMENTARIOS || '');
    
    // Afectaciones - se copian
    $(`${modalContext} #clonarAdminAfectaciones`).val(solicitud.AFECTACIONES || '');
    
    // Descripción de Afectación (condicional) - se copia
    if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '') {
        $(`${modalContext} #clonarAdminDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '');
        $(`${modalContext} #clonarAdminDescripcionAfectacionContainer`).show();
        $(`${modalContext} #clonarAdminDescripcionAfectacion`).attr('required', 'required');
    } else {
        $(`${modalContext} #clonarAdminDescripcionAfectacionContainer`).hide();
        $(`${modalContext} #clonarAdminDescripcionAfectacion`).val('').removeAttr('required');
    }
    
    // Archivos Adjuntos - quedan vacíos
    $(`${modalContext} #clonarAdminAdjunto`).val('');
    $(`${modalContext} #clonarAdminSODIAdjunto`).val('');
    $(`${modalContext} .custom-file-label`).text('Seleccionar archivo...');
    
    console.log('Modal clonar administrador poblado correctamente');
}

// ============================================
// FUNCIÓN UNIFICADA PARA GESTIONAR SOLICITUDES - ADMINISTRADOR
// ============================================

// Función unificada para gestionar solicitudes según su estado
function gestionarSolicitudAdmin(solicitudId) {
    console.log('Gestionar solicitud (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    // Validar que el estado sea gestionable (sin Devuelta)
    const estadosGestionables = ['Pendiente', 'En Análisis', 'Administrador Gestionando'];
    if (!estadosGestionables.includes(solicitud.ESTADO)) {
        alert('Esta solicitud no puede ser gestionada en su estado actual: ' + solicitud.ESTADO);
        console.warn('Estado no gestionable:', solicitud.ESTADO);
        return;
    }
    
    const modal = $('#modalGestionarAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalGestionar(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de gestión
function poblarModalGestionar(solicitud) {
    const modalContext = '#modalGestionarAdmin';
    
    // Configurar estado actual
    configurarEstadoGestion(solicitud.ESTADO);
    
    // Header: Observaciones
    $(`${modalContext} #gestionarObservacionesHeader`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación (EDITABLE)
    $(`${modalContext} #gestionarIDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`${modalContext} #gestionarTipo`).val(solicitud.TIPO || '');
    $(`${modalContext} #gestionarRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas (SOLO LECTURA)
    $(`${modalContext} #gestionarInicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`${modalContext} #gestionarFinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Empresas Involucradas (EDITABLE)
    $(`${modalContext} #gestionarEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`${modalContext} #gestionarEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos (SOLO LECTURA)
    $(`${modalContext} #gestionarInstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`${modalContext} #gestionarEquipos`).val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención (SOLO LECTURA)
    $(`${modalContext} #gestionarTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`${modalContext} #gestionarPotencia`).val(solicitud.POTENCIA || '');
    $(`${modalContext} #gestionarAplicaSODI`).val(solicitud.APLICA_SODI || '');
    $(`${modalContext} #gestionarRiesgo`).val(solicitud.RIESGO || '');
    
    // Descripción del Riesgo (condicional - solo si es Medio o Alto)
    if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
        $(`${modalContext} #gestionarDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '');
        $(`${modalContext} #gestionarDescripcionRiesgoContainer`).show();
    } else {
        $(`${modalContext} #gestionarDescripcionRiesgoContainer`).hide();
    }
    
    // Descripción y Condiciones (SOLO LECTURA)
    $(`${modalContext} #gestionarDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #gestionarCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #gestionarComentariosActuales`).val(solicitud.COMENTARIOS || '');
    $(`${modalContext} #gestionarAfectaciones`).val(solicitud.AFECTACIONES || '');
    
    // Descripción de Afectación (condicional - solo si hay afectaciones)
    if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '' && solicitud.AFECTACIONES !== '-') {
        $(`${modalContext} #gestionarDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '');
        $(`${modalContext} #gestionarDescripcionAfectacionContainer`).show();
    } else {
        $(`${modalContext} #gestionarDescripcionAfectacionContainer`).hide();
    }
    
    // Observaciones actuales (mostrar en alert)
    $(`${modalContext} #gestionarObservacionesActuales`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Adjunto
    if (solicitud.ADJUNTO) {
        $(`${modalContext} #gestionarAdjunto`).text(solicitud.ADJUNTO);
        $(`${modalContext} #gestionarDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #gestionarAdjunto`).text('Sin archivo adjunto');
        $(`${modalContext} #gestionarDescargarAdjunto`).hide();
    }
    
    // Limpiar comentarios
    $(`${modalContext} #gestionarComentarios`).val('');
    
    // Metadata
    $(`${modalContext} #gestionarIDRegistro`).text(solicitud.ID_REGISTRO || '');
    $(`${modalContext} #gestionarCreado`).text(solicitud.CREADO || '');
    $(`${modalContext} #gestionarActualizado`).text(solicitud.ACTUALIZADO || '');
    $(`${modalContext} #gestionarAdministrador`).text(solicitud.ADMINISTRADOR || '');
    $(`${modalContext} #gestionarSolicitante`).text(solicitud.SOLICITANTE || '');
    $(`${modalContext} #gestionarCreadoPor`).text(solicitud.CREADO_POR || '');
    
    // Guardar ID de solicitud para usar en la confirmación
    $(`${modalContext}`).data('solicitudId', solicitud.ID_REGISTRO);
    
    // Aplicar reglas de editabilidad según estado
    aplicarReglasEditabilidadGestion(solicitud.ESTADO);
}

// Función para aplicar reglas de editabilidad según el estado
function aplicarReglasEditabilidadGestion(estado) {
    const modalContext = '#modalGestionarAdmin';
    
    // PASO 1: Resetear todos los campos a readonly y remover asteriscos
    $(`${modalContext} #gestionarIDSolicitud`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarTipo`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarRelacionSODICEN`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarInicioProgramado`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarFinProgramado`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarEmpresaSolicitante`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarEmpresaReceptora`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarInstalacionGM`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarEquipos`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarTipoIntervencion`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarPotencia`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarAplicaSODI`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarRiesgo`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDescripcionRiesgo`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDescripcion`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarCondiciones`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarComentariosActuales`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarAfectaciones`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDescripcionAfectacion`).prop('readonly', true).removeAttr('required');
    
    // Remover todos los asteriscos de obligatoriedad
    $(`${modalContext} label .text-danger`).remove();
    
    // Remover clases de editable
    $(`${modalContext} .border-warning`).removeClass('border-warning');
    $(`${modalContext} .bg-warning`).removeClass('bg-warning text-dark').addClass('bg-light');
    $(`${modalContext} .badge-light`).remove();
    
    // PASO 2: Aplicar reglas según el estado
    if (estado === 'Pendiente' || estado === 'En Análisis') {
        // Identificación: Opcional (editable) - SIN asterisco
        $(`${modalContext} #gestionarIDSolicitud`).prop('readonly', false);
        $(`${modalContext} #gestionarTipo`).prop('disabled', false);
        $(`${modalContext} #gestionarRelacionSODICEN`).prop('readonly', false);
        
        // Empresas: OPCIONAL (editable) - SIN asterisco (CORREGIDO según doc)
        $(`${modalContext} #gestionarEmpresaSolicitante`).prop('disabled', false);
        $(`${modalContext} #gestionarEmpresaReceptora`).prop('disabled', false);
        
        // NO agregar asteriscos porque son opcionales
        
        // Marcar secciones editables visualmente
        $(`${modalContext} .card:has(#gestionarIDSolicitud)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarIDSolicitud) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarEmpresaSolicitante)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarEmpresaSolicitante) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        
    } else if (estado === 'Administrador Gestionando') {
        // Identificación: ID_SOLICITUD y TIPO son OBLIGATORIOS, RELACION_SODI_CEN es opcional
        $(`${modalContext} #gestionarIDSolicitud`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarTipo`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarRelacionSODICEN`).prop('readonly', false);
        
        // Empresas: Obligatorio (editable)
        $(`${modalContext} #gestionarEmpresaSolicitante`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarEmpresaReceptora`).prop('disabled', false).attr('required', 'required');
        
        // Agregar asteriscos a campos obligatorios
        $(`${modalContext} label:contains("ID Solicitud")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Tipo")`).first().append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Empresa Solicitante")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Empresa Receptora")`).append(' <span class="text-danger">*</span>');
        
        // Marcar secciones editables visualmente
        $(`${modalContext} .card:has(#gestionarIDSolicitud)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarIDSolicitud) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarEmpresaSolicitante)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarEmpresaSolicitante) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        
    } else if (estado === 'Devuelta') {
        // En estado Devuelta, el administrador puede editar MUCHOS campos
        // Identificación: Solo lectura (ya está readonly)
        // Empresas: Solo lectura (ya está readonly)
        
        // Fechas Programadas: OBLIGATORIO (editable)
        $(`${modalContext} #gestionarInicioProgramado`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarFinProgramado`).prop('readonly', false).attr('required', 'required');
        
        // Instalación y Equipos: OBLIGATORIO (editable)
        $(`${modalContext} #gestionarInstalacionGM`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarEquipos`).prop('readonly', false).attr('required', 'required');
        
        // Características: OBLIGATORIO (editable)
        $(`${modalContext} #gestionarTipoIntervencion`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarPotencia`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarAplicaSODI`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarRiesgo`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDescripcionRiesgo`).prop('readonly', false); // Condicional
        
        // Descripción y Condiciones: OBLIGATORIO (editable)
        $(`${modalContext} #gestionarDescripcion`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarCondiciones`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarComentariosActuales`).prop('readonly', false); // Opcional
        $(`${modalContext} #gestionarAfectaciones`).prop('readonly', false); // Opcional
        $(`${modalContext} #gestionarDescripcionAfectacion`).prop('readonly', false); // Condicional
        
        // Agregar asteriscos a campos obligatorios
        $(`${modalContext} label:contains("Fecha prog. Inicio")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Fecha prog. fin")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Instalación GM")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Instalaciones/Equipos")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Tipo de Intervención")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Potencia")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Aplica SODI")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Clasificación del Riesgo")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Descripción del trabajo")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Condiciones requeridas")`).append(' <span class="text-danger">*</span>');
        
        // Marcar secciones editables visualmente
        $(`${modalContext} .card:has(#gestionarInicioProgramado)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarInicioProgramado) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarInstalacionGM)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarInstalacionGM) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarTipoIntervencion)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarTipoIntervencion) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDescripcion)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDescripcion) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
    }
}

// Función para configurar el estado y las acciones disponibles
function configurarEstadoGestion(estado) {
    const modalContext = '#modalGestionarAdmin';
    const alertElement = $(`${modalContext} #gestionarEstadoAlert`);
    const badgeElement = $(`${modalContext} #gestionarEstadoBadge`);
    const descripcionElement = $(`${modalContext} #gestionarEstadoDescripcion`);
    const accionesContainer = $(`${modalContext} #gestionarAccionesContainer`);
    
    // Limpiar clases anteriores
    alertElement.removeClass('alert-warning alert-info alert-danger alert-secondary');
    badgeElement.removeClass('badge-warning badge-info badge-danger badge-secondary');
    
    // Configurar según el estado
    let acciones = '';
    
    switch(estado) {
        case 'Pendiente':
            alertElement.addClass('alert-warning');
            badgeElement.addClass('badge-warning').text('Pendiente');
            descripcionElement.text('Esta solicitud está pendiente de gestión');
            acciones = `
                <div class="custom-control custom-radio">
                    <input type="radio" id="accionEnviarAnalisis" name="accionGestion" class="custom-control-input" value="En Análisis" checked>
                    <label class="custom-control-label" for="accionEnviarAnalisis">
                        <i class="fas fa-search mr-1"></i>Analizar Solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "En Análisis"</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionDevolver" name="accionGestion" class="custom-control-input" value="Devuelta">
                    <label class="custom-control-label" for="accionDevolver">
                        <i class="fas fa-undo mr-1"></i>Devolver Solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Devuelta"</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAdminGestionando" name="accionGestion" class="custom-control-input" value="Administrador Gestionando">
                    <label class="custom-control-label" for="accionAdminGestionando">
                        <i class="fas fa-user-cog mr-1"></i>Gestionar Solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Administrador Gestionando"</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAnular" name="accionGestion" class="custom-control-input" value="Anulada">
                    <label class="custom-control-label text-danger" for="accionAnular">
                        <i class="fas fa-ban mr-1"></i>Anular solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Anulada"</small>
                </div>
            `;
            break;
            
        case 'En Análisis':
            alertElement.addClass('alert-info');
            badgeElement.addClass('badge-info').text('En Análisis');
            descripcionElement.text('Esta solicitud está en proceso de análisis');
            acciones = `
                <div class="custom-control custom-radio">
                    <input type="radio" id="accionDevolver" name="accionGestion" class="custom-control-input" value="Devuelta" checked>
                    <label class="custom-control-label" for="accionDevolver">
                        <i class="fas fa-undo mr-1"></i>Devolver Solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Devuelta"</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAdminGestionando" name="accionGestion" class="custom-control-input" value="Administrador Gestionando">
                    <label class="custom-control-label" for="accionAdminGestionando">
                        <i class="fas fa-user-cog mr-1"></i>Gestionar Solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Administrador Gestionando"</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAnular" name="accionGestion" class="custom-control-input" value="Anulada">
                    <label class="custom-control-label text-danger" for="accionAnular">
                        <i class="fas fa-ban mr-1"></i>Anular solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Anulada"</small>
                </div>
            `;
            break;
            
        case 'Administrador Gestionando':
            alertElement.addClass('alert-secondary');
            badgeElement.addClass('badge-secondary').text('Administrador Gestionando');
            descripcionElement.text('Esta solicitud está siendo gestionada por el administrador');
            acciones = `
                <div class="custom-control custom-radio">
                    <input type="radio" id="accionProgramar" name="accionGestion" class="custom-control-input" value="Programada" checked>
                    <label class="custom-control-label" for="accionProgramar">
                        <i class="fas fa-calendar-check mr-1"></i>Programar Solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Programada"</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAnular" name="accionGestion" class="custom-control-input" value="Anulada">
                    <label class="custom-control-label text-danger" for="accionAnular">
                        <i class="fas fa-ban mr-1"></i>Anular solicitud
                    </label>
                    <small class="form-text text-muted ml-4">Enviar a "Anulada"</small>
                </div>
            `;
            break;
            
        default:
            alertElement.addClass('alert-secondary');
            badgeElement.addClass('badge-secondary').text(estado);
            descripcionElement.text('Estado no gestionable');
            acciones = '<p class="text-muted">No hay acciones disponibles para este estado</p>';
    }
    
    accionesContainer.html(acciones);
}

// Función para confirmar la gestión de la solicitud
function confirmarGestionSolicitudAdmin() {
    const modalContext = '#modalGestionarAdmin';
    const solicitudId = $(`${modalContext}`).data('solicitudId');
    const comentarios = $(`${modalContext} #gestionarComentarios`).val().trim();
    const accionSeleccionada = $(`${modalContext} input[name="accionGestion"]:checked`).val();
    
    if (!comentarios) {
        alert('Por favor ingrese comentarios sobre la gestión');
        return;
    }
    
    if (!accionSeleccionada) {
        alert('Por favor seleccione una acción');
        return;
    }
    
    console.log('Confirmando gestión:', {
        solicitudId,
        nuevoEstado: accionSeleccionada,
        comentarios
    });
    
    // Aquí iría la lógica para actualizar la solicitud
    alert(`Funcionalidad en desarrollo.\n\nSolicitud: ${solicitudId}\nNuevo Estado: ${accionSeleccionada}\nComentarios: ${comentarios}`);
    
    // Cerrar modal
    $(`${modalContext}`).modal('hide');
}

// NOTA: Funciones antiguas mantenidas para compatibilidad
// Se recomienda usar gestionarSolicitudAdmin() en su lugar
function gestionarSolicitudAnalisisAdmin(solicitudId) {
    gestionarSolicitudAdmin(solicitudId);
}

// ============================================
// FUNCIÓN PARA EDITAR SOLICITUDES - ADMINISTRADOR
// ============================================

// Función para editar solicitud (estados "Administrador Gestionando" y "En Análisis")
function editarSolicitudAdmin(solicitudId) {
    console.log('Editar solicitud (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    // Verificar que esté en estado "Administrador Gestionando" o "En Análisis"
    const estadosEditables = ['Administrador Gestionando', 'En Análisis'];
    if (!estadosEditables.includes(solicitud.ESTADO)) {
        alert('Solo se pueden editar solicitudes en estado "Administrador Gestionando" o "En Análisis".\nEstado actual: ' + solicitud.ESTADO);
        return;
    }
    
    const modal = $('#modalEditarAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalEditar(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de edición
function poblarModalEditar(solicitud) {
    const modalContext = '#modalEditarAdmin';
    
    // Header: Estado
    $(`${modalContext} #editarEstadoBadge`).text(solicitud.ESTADO);
    
    // Determinar comportamiento según CREADO_POR
    const creadoPorSolicitante = solicitud.CREADO_POR === 'Solicitante';
    const creadoPorAdministrador = solicitud.CREADO_POR === 'Administrador';
    
    // Identificación (SIEMPRE EDITABLE)
    $(`${modalContext} #editarIDSolicitud`).val(solicitud.ID_SOLICITUD || '').prop('readonly', false);
    $(`${modalContext} #editarTipo`).val(solicitud.TIPO || '').prop('disabled', false);
    $(`${modalContext} #editarRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '').prop('readonly', false);
    
    // Fechas Programadas
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    if (solicitud.INICIO_PROGRAMADO) {
        const fechaInicio = convertirFechaParaInput(solicitud.INICIO_PROGRAMADO);
        $(`${modalContext} #editarInicioProgramado`).val(fechaInicio).prop('readonly', creadoPorSolicitante);
    }
    if (solicitud.FIN_PROGRAMADO) {
        const fechaFin = convertirFechaParaInput(solicitud.FIN_PROGRAMADO);
        $(`${modalContext} #editarFinProgramado`).val(fechaFin).prop('readonly', creadoPorSolicitante);
    }
    
    // Empresas Involucradas (SIEMPRE EDITABLE)
    $(`${modalContext} #editarEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '').prop('disabled', false);
    $(`${modalContext} #editarEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '').prop('disabled', false);
    
    // Instalación GM
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarInstalacionGM`).val(solicitud.INSTALACION_GM || '').prop('disabled', creadoPorSolicitante);
    
    // Equipos
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarEquipos`).val(solicitud.EQUIPOS || '').prop('readonly', creadoPorSolicitante);
    
    // Características de la Intervención
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '').prop('disabled', creadoPorSolicitante);
    $(`${modalContext} #editarPotencia`).val(solicitud.POTENCIA || '').prop('readonly', creadoPorSolicitante);
    $(`${modalContext} #editarAplicaSODI`).val(solicitud.APLICA_SODI || '').prop('disabled', creadoPorSolicitante);
    $(`${modalContext} #editarRiesgo`).val(solicitud.RIESGO || '').prop('disabled', creadoPorSolicitante);
    
    // Descripción del Riesgo (condicional)
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
        $(`${modalContext} #editarDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '').prop('readonly', creadoPorSolicitante);
        $(`${modalContext} #editarDescripcionRiesgoContainer`).show();
    } else {
        $(`${modalContext} #editarDescripcionRiesgoContainer`).hide();
        $(`${modalContext} #editarDescripcionRiesgo`).val('');
    }
    
    // Descripción y Condiciones
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarDescripcion`).val(solicitud.DESCRIPCION || '').prop('readonly', creadoPorSolicitante);
    $(`${modalContext} #editarCondiciones`).val(solicitud.CONDICIONES || '').prop('readonly', creadoPorSolicitante);
    $(`${modalContext} #editarComentarios`).val(solicitud.COMENTARIOS || '').prop('readonly', creadoPorSolicitante);
    
    // Afectaciones
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarAfectaciones`).val(solicitud.AFECTACIONES || '').prop('disabled', creadoPorSolicitante);
    
    // Descripción de Afectación (condicional)
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '') {
        $(`${modalContext} #editarDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '').prop('readonly', creadoPorSolicitante);
        $(`${modalContext} #editarDescripcionAfectacionContainer`).show();
    } else {
        $(`${modalContext} #editarDescripcionAfectacionContainer`).hide();
        $(`${modalContext} #editarDescripcionAfectacion`).val('');
    }
    
    // Archivo Adjunto (SIEMPRE EDITABLE - se maneja en el HTML)
    if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
        $(`${modalContext} #editarAdjuntoActual`).text(solicitud.ADJUNTO);
        $(`${modalContext} #editarDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #editarAdjuntoActual`).text('Sin archivo adjunto');
        $(`${modalContext} #editarDescargarAdjunto`).hide();
    }
    
    // SODI Adjunto (SIEMPRE EDITABLE)
    $(`${modalContext} #editarSODIAdjunto`).val(solicitud.SODI_ADJUNTO || '')
    
    // Guardar ID de solicitud y CREADO_POR para usar en la actualización
    $(`${modalContext} #editSolicitudId`).val(solicitud.ID_REGISTRO);
    $(`${modalContext} #editCreadoPor`).val(solicitud.CREADO_POR);
    
    console.log('Modal editar poblado. CREADO_POR:', solicitud.CREADO_POR, '| Todos los campos editables:', creadoPorAdministrador);
}

// Función auxiliar para convertir fecha del formato "DD/MM/YYYY HH:MM" a "YYYY-MM-DDTHH:MM"
function convertirFechaParaInput(fechaStr) {
    if (!fechaStr) return '';
    
    // Formato esperado: "DD/MM/YYYY HH:MM"
    const partes = fechaStr.split(' ');
    if (partes.length !== 2) return '';
    
    const fecha = partes[0].split('/');
    const hora = partes[1];
    
    if (fecha.length !== 3) return '';
    
    // Retornar en formato YYYY-MM-DDTHH:MM
    return `${fecha[2]}-${fecha[1].padStart(2, '0')}-${fecha[0].padStart(2, '0')}T${hora}`;
}

// Función para actualizar la solicitud
function actualizarSolicitud() {
    const modalContext = '#modalEditarAdmin';
    const solicitudId = $(`${modalContext} #editSolicitudId`).val();
    
    // Recopilar datos del formulario
    const datosActualizados = {
        ID_SOLICITUD: $(`${modalContext} #editarIDSolicitud`).val(),
        TIPO: $(`${modalContext} #editarTipo`).val(),
        RELACION_SODI_CEN: $(`${modalContext} #editarRelacionSODICEN`).val(),
        INICIO_PROGRAMADO: $(`${modalContext} #editarInicioProgramado`).val(),
        FIN_PROGRAMADO: $(`${modalContext} #editarFinProgramado`).val(),
        EMPRESA_SOLICITANTE: $(`${modalContext} #editarEmpresaSolicitante`).val(),
        EMPRESA_RECEPTORA: $(`${modalContext} #editarEmpresaReceptora`).val(),
        INSTALACION_GM: $(`${modalContext} #editarInstalacionGM`).val(),
        POTENCIA: $(`${modalContext} #editarPotencia`).val(),
        DESCRIPCION: $(`${modalContext} #editarDescripcion`).val(),
        CONDICIONES: $(`${modalContext} #editarCondiciones`).val(),
        COMENTARIOS: $(`${modalContext} #editarComentarios`).val()
    };
    
    console.log('Actualizando solicitud:', solicitudId, datosActualizados);
    
    // Aquí iría la lógica para actualizar la solicitud
    alert(`Funcionalidad en desarrollo.\n\nSolicitud ID: ${solicitudId}\nDatos actualizados correctamente.`);
    
    // Cerrar modal
    $(`${modalContext}`).modal('hide');
}

function verSolicitudAdminGestionandoAdmin(solicitudId) {
    verSolicitudAdmin(solicitudId);
}

// ============================================
// FUNCIÓN UNIFICADA PARA VER SOLICITUDES - ADMINISTRADOR
// ============================================

// Función unificada para ver solicitud - Administrador (cualquier estado)
function verSolicitudAdmin(solicitudId) {
    console.log('Ver solicitud (Administrador - Unificado):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalVerAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalVerAdmin(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal unificado de ver solicitud - Administrador
function poblarModalVerAdmin(solicitud) {
    console.log('Poblando modal ver administrador (unificado):', solicitud);
    
    // Configuración de estilos por estado
    const estadoConfig = {
        'Pendiente': { 
            badge: 'badge-warning', 
            alert: 'alert-warning', 
            header: 'bg-warning text-dark',
            icon: 'fa-clock',
            descripcion: 'La solicitud está pendiente de revisión por el administrador'
        },
        'En Análisis': { 
            badge: 'badge-info', 
            alert: 'alert-info', 
            header: 'bg-info text-white',
            icon: 'fa-search',
            descripcion: 'La solicitud está siendo analizada por el administrador'
        },
        'Devuelta': { 
            badge: 'badge-danger', 
            alert: 'alert-danger', 
            header: 'bg-danger text-white',
            icon: 'fa-undo',
            descripcion: 'La solicitud fue devuelta al solicitante para correcciones'
        },
        'Administrador Gestionando': { 
            badge: 'badge-primary', 
            alert: 'alert-primary', 
            header: 'bg-primary text-white',
            icon: 'fa-user-cog',
            descripcion: 'La solicitud está siendo gestionada por el administrador'
        },
        'Programada': { 
            badge: 'badge-success', 
            alert: 'alert-success', 
            header: 'bg-success text-white',
            icon: 'fa-calendar-check',
            descripcion: 'La solicitud ha sido programada y aprobada'
        },
        'Vigente': { 
            badge: 'badge-success', 
            alert: 'alert-success', 
            header: 'bg-success text-white',
            icon: 'fa-check-circle',
            descripcion: 'La solicitud está vigente y en ejecución'
        },
        'Extendida': { 
            badge: 'badge-info', 
            alert: 'alert-info', 
            header: 'bg-info text-white',
            icon: 'fa-clock',
            descripcion: 'La solicitud ha sido extendida'
        },
        'Finalizada': { 
            badge: 'badge-secondary', 
            alert: 'alert-secondary', 
            header: 'bg-secondary text-white',
            icon: 'fa-check',
            descripcion: 'La solicitud ha sido finalizada'
        },
        'Rechazada': { 
            badge: 'badge-danger', 
            alert: 'alert-danger', 
            header: 'bg-danger text-white',
            icon: 'fa-times-circle',
            descripcion: 'La solicitud ha sido rechazada'
        },
        'Suspendida': { 
            badge: 'badge-warning', 
            alert: 'alert-warning', 
            header: 'bg-warning text-dark',
            icon: 'fa-pause-circle',
            descripcion: 'La solicitud ha sido suspendida'
        },
        'Anulada': { 
            badge: 'badge-dark', 
            alert: 'alert-dark', 
            header: 'bg-dark text-white',
            icon: 'fa-ban',
            descripcion: 'La solicitud ha sido anulada'
        }
    };
    
    const config = estadoConfig[solicitud.ESTADO] || { 
        badge: 'badge-secondary', 
        alert: 'alert-secondary', 
        header: 'bg-secondary text-white',
        icon: 'fa-circle',
        descripcion: ''
    };
    
    // Actualizar header del modal
    $('#verAdminModalHeader').removeClass().addClass('modal-header text-white ' + config.header);
    
    // Header: Estado y Observaciones
    $('#verAdminEstadoAlert').removeClass().addClass('alert mb-0 d-flex align-items-center ' + config.alert);
    $('#verAdminEstadoIcon').removeClass().addClass('fas mr-2 ' + config.icon);
    $('#verAdminEstadoBadge').removeClass().addClass('badge ml-2 ' + config.badge).text(solicitud.ESTADO);
    $('#verAdminEstadoDescripcion').text(config.descripcion);
    
    // Observaciones (mostrar solo si existen)
    if (solicitud.OBSERVACIONES && solicitud.OBSERVACIONES !== '-') {
        $('#verAdminObservaciones').text(solicitud.OBSERVACIONES);
        $('#verAdminObservacionesContainer').show();
    } else {
        $('#verAdminObservacionesContainer').hide();
    }
    
    // Identificación
    $('#verAdminIDSolicitud').val(solicitud.ID_SOLICITUD || '');
    $('#verAdminTipo').val(solicitud.TIPO || '');
    $('#verAdminRelacionSODICEN').val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $('#verAdminInicioProgramado').val(solicitud.INICIO_PROGRAMADO || '');
    $('#verAdminFinProgramado').val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas (mostrar solo en estados Vigente, Extendida, Finalizada)
    const estadosConFechasEfectivas = ['Vigente', 'Extendida', 'Finalizada'];
    if (estadosConFechasEfectivas.includes(solicitud.ESTADO)) {
        $('#verAdminInicioEfectivo').val(solicitud.INICIO_EFECTIVO || '-');
        $('#verAdminFinEfectivo').val(solicitud.FIN_EFECTIVO || '-');
        $('#verAdminFechasEfectivasCard').show();
    } else {
        $('#verAdminFechasEfectivasCard').hide();
    }
    
    // Empresas Involucradas
    $('#verAdminEmpresaSolicitante').val(solicitud.EMPRESA_SOLICITANTE || '');
    $('#verAdminEmpresaReceptora').val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $('#verAdminInstalacionGM').val(solicitud.INSTALACION_GM || '');
    $('#verAdminEquipos').val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención
    $('#verAdminTipoIntervencion').val(solicitud.TIPO_INTERVENCION || '');
    $('#verAdminPotencia').val(solicitud.POTENCIA || '');
    $('#verAdminAplicaSODI').val(solicitud.APLICA_SODI || '');
    $('#verAdminRiesgo').val(solicitud.RIESGO || '');
    
    // Campo condicional - DESCRIPCION_RIESGO
    if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
        $('#verAdminDescripcionRiesgo').val(solicitud.DESCRIPCION_RIESGO);
        $('#verAdminDescripcionRiesgoContainer').show();
    } else {
        $('#verAdminDescripcionRiesgoContainer').hide();
    }
    
    // SODI Adjunto (mostrar solo si aplica SODI)
    if (solicitud.APLICA_SODI === 'Sí') {
        $('#verAdminSODIAdjunto').val(solicitud.APLICA_SODI_ADJUNTO ? 'Sí' : 'No');
        if (solicitud.SODI_ADJUNTO && solicitud.SODI_ADJUNTO !== '-') {
            $('#verAdminArchivoSODI').val(solicitud.SODI_ADJUNTO);
            $('#verAdminDescargarSODI').show();
        } else {
            $('#verAdminArchivoSODI').val('Sin archivo');
            $('#verAdminDescargarSODI').hide();
        }
        $('#verAdminSODIAdjuntoCard').show();
    } else {
        $('#verAdminSODIAdjuntoCard').hide();
    }
    
    // Descripción y Condiciones
    $('#verAdminDescripcion').val(solicitud.DESCRIPCION || '');
    $('#verAdminCondiciones').val(solicitud.CONDICIONES || '');
    $('#verAdminComentarios').val(solicitud.COMENTARIOS || '');
    $('#verAdminAfectaciones').val(solicitud.AFECTACIONES || '');
    
    // Campo condicional - DESCRIPCION_AFECTACION
    if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
        $('#verAdminDescripcionAfectacion').val(solicitud.DESCRIPCION_AFECTACION);
        $('#verAdminDescripcionAfectacionContainer').show();
    } else {
        $('#verAdminDescripcionAfectacionContainer').hide();
    }
    
    // Archivos Adjuntos
    if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
        $('#verAdminAdjunto').val(solicitud.ADJUNTO);
        $('#verAdminDescargarAdjunto').show();
    } else {
        $('#verAdminAdjunto').val('Sin archivo adjunto');
        $('#verAdminDescargarAdjunto').hide();
    }
    
    // Metadata del Sistema
    $('#verAdminIDRegistro').text(solicitud.ID_REGISTRO || '-');
    $('#verAdminCreado').text(solicitud.CREADO || '-');
    $('#verAdminActualizado').text(solicitud.ACTUALIZADO || '-');
    $('#verAdminAdministrador').text(solicitud.ADMINISTRADOR || '-');
    $('#verAdminSolicitante').text(solicitud.SOLICITANTE || '-');
    $('#verAdminCreadoPor').text(solicitud.CREADO_POR || '-');
}

// ============================================
// FUNCIONES ESPECÍFICAS PARA DESPACHADOR
// ============================================

// Función para abrir modal de nueva solicitud - Despachador
function abrirModalNuevaSolicitudDesp() {
    console.log('Abriendo modal nueva solicitud (Despachador)');
    $('#modalNuevaSolicitudDesp').modal('show');
}

// Función para editar solicitud (solo en estado "Despachador Gestionando")
function editarSolicitudDesp(solicitudId) {
    console.log('Editar solicitud (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    // Verificar que esté en estado "Despachador Gestionando"
    if (solicitud.ESTADO !== 'Despachador Gestionando') {
        alert('Solo se pueden editar solicitudes en estado "Despachador Gestionando"');
        return;
    }
    
    const modal = $('#modalEditarSolicitudDesp');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalEditarDesp(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de edición del despachador
function poblarModalEditarDesp(solicitud) {
    const modalContext = '#modalEditarSolicitudDesp';
    
    // Header: Estado
    $(`${modalContext} #editarDespEstadoBadge`).text(solicitud.ESTADO);
    
    // Identificación (EDITABLE)
    $(`${modalContext} #editarDespIDSolicitud`).val(solicitud.ID_SOLICITUD || '').prop('readonly', false);
    $(`${modalContext} #editarDespTipo`).val(solicitud.TIPO || '').prop('disabled', false);
    $(`${modalContext} #editarDespRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '').prop('readonly', false);
    
    // Fechas Programadas (EDITABLE)
    if (solicitud.INICIO_PROGRAMADO) {
        const fechaInicio = convertirFechaParaInput(solicitud.INICIO_PROGRAMADO);
        $(`${modalContext} #editarDespInicioProgramado`).val(fechaInicio).prop('readonly', false);
    }
    if (solicitud.FIN_PROGRAMADO) {
        const fechaFin = convertirFechaParaInput(solicitud.FIN_PROGRAMADO);
        $(`${modalContext} #editarDespFinProgramado`).val(fechaFin).prop('readonly', false);
    }
    
    // Empresas Involucradas (EDITABLE)
    $(`${modalContext} #editarDespEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '').prop('disabled', false);
    $(`${modalContext} #editarDespEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '').prop('disabled', false);
    
    // Instalación GM (EDITABLE)
    $(`${modalContext} #editarDespInstalacionGM`).val(solicitud.INSTALACION_GM || '').prop('disabled', false);
    
    // Equipos (SOLO LECTURA - vacío)
    $(`${modalContext} #editarDespEquipos`).val('').prop('readonly', true);
    
    // Características de la Intervención (SOLO LECTURA - vacío)
    $(`${modalContext} #editarDespTipoIntervencion`).val('').prop('disabled', true);
    $(`${modalContext} #editarDespRiesgo`).val('').prop('disabled', true);
    $(`${modalContext} #editarDespSODI`).val('').prop('disabled', true);
    
    // Potencia (EDITABLE)
    $(`${modalContext} #editarDespPotencia`).val(solicitud.POTENCIA || '').prop('readonly', false);
    
    // Descripción y Condiciones (EDITABLE)
    $(`${modalContext} #editarDespDescripcion`).val(solicitud.DESCRIPCION || '').prop('readonly', false);
    $(`${modalContext} #editarDespCondiciones`).val(solicitud.CONDICIONES || '').prop('readonly', false);
    
    // Afectaciones (SOLO LECTURA - vacío)
    $(`${modalContext} #editarDespAfectaciones`).val('').prop('readonly', true);
    
    // Comentarios (EDITABLE)
    $(`${modalContext} #editarDespComentarios`).val(solicitud.COMENTARIOS || '').prop('readonly', false);
    
    // Archivo Adjunto (EDITABLE)
    if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
        $(`${modalContext} #editarDespAdjuntoActual`).text(solicitud.ADJUNTO);
        $(`${modalContext} #editarDespDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #editarDespAdjuntoActual`).text('Sin archivo adjunto');
        $(`${modalContext} #editarDespDescargarAdjunto`).hide();
    }
    
    // Guardar ID de solicitud
    $(`${modalContext} #editDespSolicitudId`).val(solicitud.ID_REGISTRO);
    
    console.log('Modal editar despachador poblado correctamente');
}

// Función para actualizar la solicitud del despachador
function actualizarSolicitudDesp() {
    const modalContext = '#modalEditarSolicitudDesp';
    const solicitudId = $(`${modalContext} #editDespSolicitudId`).val();
    
    // Recopilar datos del formulario
    const datosActualizados = {
        ID_SOLICITUD: $(`${modalContext} #editarDespIDSolicitud`).val(),
        TIPO: $(`${modalContext} #editarDespTipo`).val(),
        RELACION_SODI_CEN: $(`${modalContext} #editarDespRelacionSODICEN`).val(),
        INICIO_PROGRAMADO: $(`${modalContext} #editarDespInicioProgramado`).val(),
        FIN_PROGRAMADO: $(`${modalContext} #editarDespFinProgramado`).val(),
        EMPRESA_SOLICITANTE: $(`${modalContext} #editarDespEmpresaSolicitante`).val(),
        EMPRESA_RECEPTORA: $(`${modalContext} #editarDespEmpresaReceptora`).val(),
        INSTALACION_GM: $(`${modalContext} #editarDespInstalacionGM`).val(),
        POTENCIA: $(`${modalContext} #editarDespPotencia`).val(),
        DESCRIPCION: $(`${modalContext} #editarDespDescripcion`).val(),
        CONDICIONES: $(`${modalContext} #editarDespCondiciones`).val(),
        COMENTARIOS: $(`${modalContext} #editarDespComentarios`).val()
    };
    
    console.log('Actualizando solicitud (Despachador):', solicitudId, datosActualizados);
    
    // Aquí iría la lógica para actualizar la solicitud
    alert(`Funcionalidad en desarrollo.\n\nSolicitud ID: ${solicitudId}\nDatos actualizados correctamente.`);
    
    // Cerrar modal
    $(`${modalContext}`).modal('hide');
}

// NOTA: Funciones antiguas eliminadas - ahora se usa verSolicitudDesp() unificada
// Las siguientes funciones ya NO son necesarias (eliminadas):
// - verSolicitudPendienteDesp()
// - verSolicitudEnAnalisisDesp()
// - verSolicitudProgramadaDesp()
// - verSolicitudAdminGestionandoDesp()
// - verSolicitudVigenteDesp()
// - verSolicitudExtendidaDesp()

// Función para clonar solicitud - Despachador
function clonarSolicitudDesp(solicitudId) {
    console.log('Clonar solicitud (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalClonar(solicitud, 'Desp');
    }
    $('#modalClonarSolicitudDesp').modal('show');
}

// Función para gestionar solicitud programada - Despachador
function gestionarSolicitudProgramadaDesp(solicitudId) {
    console.log('Gestionar solicitud Programada (Despachador):', solicitudId);
    $('#modalGestionarSolicitudProgramadaDesp').modal('show');
}

// Función unificada para gestionar solicitudes - Despachador
function gestionarSolicitudDesp(solicitudId) {
    console.log('Gestionar solicitud (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    // Determinar qué modal abrir según el estado
    const estado = solicitud.ESTADO;
    
    // Estados que pueden ser gestionados por el despachador
    const estadosGestionables = ['Despachador Gestionando', 'Programada', 'Vigente', 'Extendida'];
    
    if (!estadosGestionables.includes(estado)) {
        alert('Esta solicitud no puede ser gestionada en su estado actual: ' + estado);
        return;
    }
    
    const modal = $('#modalGestionarSolicitudDesp');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalGestionarDespachador(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de gestión del despachador
function poblarModalGestionarDespachador(solicitud) {
    console.log('Poblando modal gestionar despachador:', solicitud);
    
    // Header: Estado y Observaciones
    const estadoConfig = {
        'Despachador Gestionando': { badge: 'badge-warning', alert: 'alert-warning', descripcion: 'Solicitud en gestión por el despachador' },
        'Programada': { badge: 'badge-success', alert: 'alert-success', descripcion: 'Solicitud programada' },
        'Vigente': { badge: 'badge-primary', alert: 'alert-primary', descripcion: 'Solicitud vigente en ejecución' },
        'Extendida': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'Solicitud con plazo extendido' }
    };
    
    const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '' };
    
    $('#gestionarDespEstadoAlert').removeClass().addClass('alert mb-0 d-flex align-items-center ' + config.alert);
    $('#gestionarDespEstadoBadge').removeClass().addClass('badge ml-2 ' + config.badge).text(solicitud.ESTADO);
    $('#gestionarDespEstadoDescripcion').text(config.descripcion);
    $('#gestionarDespObservacionesHeader').text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación (EDITABLE)
    $('#gestionarDespIDSolicitud').val(solicitud.ID_SOLICITUD || '');
    $('#gestionarDespTipo').val(solicitud.TIPO || '');
    $('#gestionarDespRelacionSODICEN').val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas (EDITABLE)
    if (solicitud.INICIO_PROGRAMADO) {
        const fechaInicio = convertirFechaParaInput(solicitud.INICIO_PROGRAMADO);
        $('#gestionarDespInicioProgramado').val(fechaInicio);
    }
    if (solicitud.FIN_PROGRAMADO) {
        const fechaFin = convertirFechaParaInput(solicitud.FIN_PROGRAMADO);
        $('#gestionarDespFinProgramado').val(fechaFin);
    }
    
    // Fechas Efectivas (EDITABLE)
    if (solicitud.INICIO_EFECTIVO) {
        const fechaInicioEfectivo = convertirFechaParaInput(solicitud.INICIO_EFECTIVO);
        $('#gestionarDespInicioEfectivo').val(fechaInicioEfectivo);
    }
    if (solicitud.FIN_EFECTIVO) {
        const fechaFinEfectivo = convertirFechaParaInput(solicitud.FIN_EFECTIVO);
        $('#gestionarDespFinEfectivo').val(fechaFinEfectivo);
    }
    
    // Empresas Involucradas (EDITABLE)
    $('#gestionarDespEmpresaSolicitante').val(solicitud.EMPRESA_SOLICITANTE || '');
    $('#gestionarDespEmpresaReceptora').val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos (SOLO LECTURA)
    $('#gestionarDespInstalacionGM').val(solicitud.INSTALACION_GM || '');
    $('#gestionarDespEquipos').val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención (SOLO LECTURA)
    $('#gestionarDespTipoIntervencion').val(solicitud.TIPO_INTERVENCION || '');
    $('#gestionarDespPotencia').val(solicitud.POTENCIA || '');
    $('#gestionarDespAplicaSODI').val(solicitud.APLICA_SODI || '');
    $('#gestionarDespRiesgo').val(solicitud.RIESGO || '');
    
    // Descripción del Riesgo (condicional - solo si es Medio o Alto)
    if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
        $('#gestionarDespDescripcionRiesgo').val(solicitud.DESCRIPCION_RIESGO || '');
        $('#gestionarDespDescripcionRiesgoContainer').show();
    } else {
        $('#gestionarDespDescripcionRiesgoContainer').hide();
    }
    
    // Descripción y Condiciones (SOLO LECTURA)
    $('#gestionarDespDescripcion').val(solicitud.DESCRIPCION || '');
    $('#gestionarDespCondiciones').val(solicitud.CONDICIONES || '');
    $('#gestionarDespComentariosActuales').val(solicitud.COMENTARIOS || '');
    $('#gestionarDespAfectaciones').val(solicitud.AFECTACIONES || '');
    
    // Descripción de Afectación (condicional - solo si hay afectaciones)
    if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '' && solicitud.AFECTACIONES !== '-') {
        $('#gestionarDespDescripcionAfectacion').val(solicitud.DESCRIPCION_AFECTACION || '');
        $('#gestionarDespDescripcionAfectacionContainer').show();
    } else {
        $('#gestionarDespDescripcionAfectacionContainer').hide();
    }
    
    // Archivo Adjunto (SOLO DESCARGA)
    if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
        $('#gestionarDespAdjunto').text(solicitud.ADJUNTO);
        $('#gestionarDespDescargarAdjunto').show();
    } else {
        $('#gestionarDespAdjunto').text('Sin archivo adjunto');
        $('#gestionarDespDescargarAdjunto').hide();
    }
    
    // Metadata del Sistema
    $('#gestionarDespIDRegistro').text(solicitud.ID_REGISTRO || '-');
    $('#gestionarDespCreado').text(solicitud.CREADO || '-');
    $('#gestionarDespActualizado').text(solicitud.ACTUALIZADO || '-');
    $('#gestionarDespAdministrador').text(solicitud.ADMINISTRADOR || '-');
    $('#gestionarDespSolicitante').text(solicitud.SOLICITANTE || '-');
    $('#gestionarDespCreadoPor').text(solicitud.CREADO_POR || '-');
    
    // Limpiar campo de observaciones
    $('#gestionarDespObservaciones').val('');
    
    // Aplicar reglas de editabilidad según estado
    aplicarReglasEditabilidadDespachador(solicitud.ESTADO);
    
    // Configurar transiciones de estado según el estado actual
    configurarTransicionesEstadoDesp(solicitud.ESTADO);
    
    console.log('Modal gestionar despachador poblado correctamente');
}

// Función para aplicar reglas de editabilidad según el estado del despachador
function aplicarReglasEditabilidadDespachador(estado) {
    const modalContext = '#modalGestionarSolicitudDesp';
    
    // PASO 1: Resetear todos los campos a readonly/disabled y remover asteriscos
    $(`${modalContext} #gestionarDespIDSolicitud`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespTipo`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespRelacionSODICEN`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespInicioProgramado`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespFinProgramado`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespInicioEfectivo`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespFinEfectivo`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespEmpresaSolicitante`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespEmpresaReceptora`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespInstalacionGM`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespEquipos`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespTipoIntervencion`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespPotencia`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespAplicaSODI`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespRiesgo`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespDescripcionRiesgo`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespDescripcion`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespCondiciones`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespComentariosActuales`).prop('readonly', true).removeAttr('required');
    $(`${modalContext} #gestionarDespAfectaciones`).prop('disabled', true).removeAttr('required');
    $(`${modalContext} #gestionarDespDescripcionAfectacion`).prop('readonly', true).removeAttr('required');
    
    // Remover todos los asteriscos de obligatoriedad
    $(`${modalContext} label .text-danger`).remove();
    
    // Remover clases de editable
    $(`${modalContext} .border-warning`).removeClass('border-warning');
    $(`${modalContext} .bg-warning`).removeClass('bg-warning text-dark').addClass('bg-light');
    $(`${modalContext} .badge-light`).remove();
    
    // PASO 2: Aplicar reglas según el estado
    if (estado === 'Despachador Gestionando') {
        // Identificación: Obligatorio (ID y TIPO), Opcional (RELACION)
        $(`${modalContext} #gestionarDespIDSolicitud`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespTipo`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespRelacionSODICEN`).prop('readonly', false);
        
        // Fechas Programadas: Obligatorio
        $(`${modalContext} #gestionarDespInicioProgramado`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespFinProgramado`).prop('readonly', false).attr('required', 'required');
        
        // Empresas: Obligatorio
        $(`${modalContext} #gestionarDespEmpresaSolicitante`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespEmpresaReceptora`).prop('disabled', false).attr('required', 'required');
        
        // Instalación y Equipos: Obligatorio
        $(`${modalContext} #gestionarDespInstalacionGM`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespEquipos`).prop('readonly', false).attr('required', 'required');
        
        // Características: Obligatorio
        $(`${modalContext} #gestionarDespTipoIntervencion`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespPotencia`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespAplicaSODI`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespRiesgo`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespDescripcionRiesgo`).prop('readonly', false); // Condicional
        
        // Descripción: Obligatorio (DESCRIPCION, CONDICIONES), Opcional (COMENTARIOS, AFECTACIONES)
        $(`${modalContext} #gestionarDespDescripcion`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespCondiciones`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespComentariosActuales`).prop('readonly', false);
        $(`${modalContext} #gestionarDespAfectaciones`).prop('disabled', false);
        $(`${modalContext} #gestionarDespDescripcionAfectacion`).prop('readonly', false); // Condicional
        
        // Agregar asteriscos a campos obligatorios
        $(`${modalContext} label:contains("ID Solicitud")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Tipo")`).first().append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Inicio Programado")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Fin Programado")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Empresa Solicitante")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Empresa Receptora")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Instalación GM")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Instalaciones/equipos")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Tipo de Intervención")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Potencia")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Aplica SODI")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Clasificación del Riesgo")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Descripción del trabajo")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Condiciones requeridas")`).append(' <span class="text-danger">*</span>');
        
        // Marcar secciones editables
        $(`${modalContext} .card:has(#gestionarDespIDSolicitud)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespIDSolicitud) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespInicioProgramado)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespInicioProgramado) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespEmpresaSolicitante)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespEmpresaSolicitante) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespInstalacionGM)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespInstalacionGM) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespTipoIntervencion)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespTipoIntervencion) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespDescripcion)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespDescripcion) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        
    } else if (estado === 'Programada') {
        // Similar a Despachador Gestionando, pero con INICIO_EFECTIVO condicional
        // Identificación: Obligatorio
        $(`${modalContext} #gestionarDespIDSolicitud`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespTipo`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespRelacionSODICEN`).prop('readonly', false);
        
        // Fechas Programadas: Obligatorio
        $(`${modalContext} #gestionarDespInicioProgramado`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespFinProgramado`).prop('readonly', false).attr('required', 'required');
        
        // Fechas Efectivas: INICIO_EFECTIVO obligatorio para avanzar a Vigente
        $(`${modalContext} #gestionarDespInicioEfectivo`).prop('readonly', false);
        
        // Empresas: Obligatorio
        $(`${modalContext} #gestionarDespEmpresaSolicitante`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespEmpresaReceptora`).prop('disabled', false).attr('required', 'required');
        
        // Instalación y Equipos: Obligatorio
        $(`${modalContext} #gestionarDespInstalacionGM`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespEquipos`).prop('readonly', false).attr('required', 'required');
        
        // Características: Obligatorio
        $(`${modalContext} #gestionarDespTipoIntervencion`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespPotencia`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespAplicaSODI`).prop('disabled', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespRiesgo`).prop('disabled', false).attr('required', 'required');
        
        // Descripción: Obligatorio
        $(`${modalContext} #gestionarDespDescripcion`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespCondiciones`).prop('readonly', false).attr('required', 'required');
        $(`${modalContext} #gestionarDespComentariosActuales`).prop('readonly', false);
        $(`${modalContext} #gestionarDespAfectaciones`).prop('disabled', false);
        
        // Agregar asteriscos (similar a Despachador Gestionando)
        $(`${modalContext} label:contains("ID Solicitud")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Tipo")`).first().append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Inicio Programado")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Fin Programado")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Empresa Solicitante")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Empresa Receptora")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Instalación GM")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Instalaciones/equipos")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Tipo de Intervención")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Potencia")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Aplica SODI")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Clasificación del Riesgo")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Descripción del trabajo")`).append(' <span class="text-danger">*</span>');
        $(`${modalContext} label:contains("Condiciones requeridas")`).append(' <span class="text-danger">*</span>');
        
        // Marcar secciones editables
        $(`${modalContext} .card:has(#gestionarDespIDSolicitud)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespIDSolicitud) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespInicioProgramado)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespInicioProgramado) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespInicioEfectivo)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespInicioEfectivo) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespEmpresaSolicitante)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespEmpresaSolicitante) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespInstalacionGM)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespInstalacionGM) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespTipoIntervencion)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespTipoIntervencion) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        $(`${modalContext} .card:has(#gestionarDespDescripcion)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespDescripcion) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
        
    } else if (estado === 'Vigente' || estado === 'Extendida') {
        // Todo en solo lectura, excepto FIN_EFECTIVO que es obligatorio para finalizar
        $(`${modalContext} #gestionarDespFinEfectivo`).prop('readonly', false);
        
        // Marcar sección de Fechas Efectivas como editable
        $(`${modalContext} .card:has(#gestionarDespInicioEfectivo)`).addClass('border-warning');
        $(`${modalContext} .card:has(#gestionarDespInicioEfectivo) .card-header`).removeClass('bg-light').addClass('bg-warning text-dark').append(' <span class="badge badge-light ml-2">EDITABLE</span>');
    }
}

// Función para configurar las transiciones de estado disponibles
function configurarTransicionesEstadoDesp(estadoActual) {
    const contenedor = $('#gestionarDespAccionesContainer');
    contenedor.empty();
    
    let opcionesHTML = '';
    
    switch(estadoActual) {
        case 'Despachador Gestionando':
            // Puede avanzar a "Programada" o "Anulada"
            opcionesHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionProgramada" value="Programada" checked>
                    <label class="form-check-label" for="accionProgramada">
                        <strong>Programar Solicitud</strong> - Cambiar estado a "Programada"
                    </label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionAnuladaDesp" value="Anulada">
                    <label class="form-check-label text-danger" for="accionAnuladaDesp">
                        <strong>Anular Solicitud</strong> - Cambiar estado a "Anulada"
                    </label>
                </div>
            `;
            break;
            
        case 'Programada':
            // Puede avanzar a "Vigente", "Rechazada" o "Suspendida"
            opcionesHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionVigente" value="Vigente" checked>
                    <label class="form-check-label" for="accionVigente">
                        <strong>Iniciar Trabajo</strong> - Cambiar estado a "Vigente" (requiere fecha efectiva de inicio)
                    </label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionRechazadaP" value="Rechazada">
                    <label class="form-check-label" for="accionRechazadaP">
                        <strong>Rechazar Solicitud</strong> - Cambiar estado a "Rechazada"
                    </label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionSuspendidaP" value="Suspendida">
                    <label class="form-check-label" for="accionSuspendidaP">
                        <strong>Suspender Trabajo</strong> - Cambiar estado a "Suspendida"
                    </label>
                </div>
            `;
            break;
            
        case 'Vigente':
            // Puede avanzar a "Extendida", "Finalizada", "Rechazada" o "Suspendida"
            opcionesHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionFinalizada" value="Finalizada" checked>
                    <label class="form-check-label" for="accionFinalizada">
                        <strong>Finalizar Trabajo</strong> - Cambiar estado a "Finalizada" (requiere fecha efectiva de fin)
                    </label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionExtendida" value="Extendida">
                    <label class="form-check-label" for="accionExtendida">
                        <strong>Extender Trabajo</strong> - Cambiar estado a "Extendida"
                    </label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionRechazadaV" value="Rechazada">
                    <label class="form-check-label" for="accionRechazadaV">
                        <strong>Rechazar Solicitud</strong> - Cambiar estado a "Rechazada"
                    </label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionSuspendidaV" value="Suspendida">
                    <label class="form-check-label" for="accionSuspendidaV">
                        <strong>Suspender Trabajo</strong> - Cambiar estado a "Suspendida"
                    </label>
                </div>
            `;
            break;
            
        case 'Extendida':
            // Puede avanzar a "Finalizada"
            opcionesHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionFinalizadaE" value="Finalizada" checked>
                    <label class="form-check-label" for="accionFinalizadaE">
                        <strong>Finalizar Trabajo</strong> - Cambiar estado a "Finalizada"
                    </label>
                </div>
            `;
            break;
            
        default:
            opcionesHTML = `
                <div class="alert alert-warning mb-0">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    No hay transiciones de estado disponibles para el estado actual: <strong>${estadoActual}</strong>
                </div>
            `;
    }
    
    contenedor.html(opcionesHTML);
}

// Función para confirmar la gestión de la solicitud del despachador
function confirmarGestionSolicitudDespachador() {
    console.log('Confirmando gestión de solicitud (Despachador)');
    
    // TODO: Implementar validaciones y lógica de actualización
    
    alert('Funcionalidad en desarrollo');
    $('#modalGestionarSolicitudDesp').modal('hide');
}

// ============================================
// FUNCIÓN UNIFICADA PARA VER SOLICITUDES - DESPACHADOR
// ============================================

// Función unificada para ver cualquier solicitud (Despachador)
function verSolicitudDesp(solicitudId) {
    console.log('Ver solicitud (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalVerDespachador');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalVerDespachador(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal unificado de visualización (Despachador)
function poblarModalVerDespachador(solicitud) {
    const modalContext = '#modalVerDespachador';
    
    // Configurar badge y alert según el estado
    const estadoConfig = {
        'Pendiente': { badge: 'badge-warning', alert: 'alert-warning', descripcion: 'La solicitud está pendiente de revisión' },
        'Devuelta': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud ha sido devuelta para correcciones' },
        'En Análisis': { badge: 'badge-info', alert: 'alert-info', descripcion: 'La solicitud está siendo analizada' },
        'Administrador Gestionando': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'La solicitud está siendo gestionada por el administrador' },
        'Programada': { badge: 'badge-success', alert: 'alert-success', descripcion: 'La solicitud ha sido programada' },
        'Vigente': { badge: 'badge-primary', alert: 'alert-primary', descripcion: 'El trabajo está en ejecución' },
        'Extendida': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'El trabajo ha sido extendido' },
        'Finalizada': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'El trabajo ha sido finalizado' },
        'Rechazada': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud ha sido rechazada' },
        'Suspendida': { badge: 'badge-dark', alert: 'alert-dark', descripcion: 'El trabajo ha sido suspendido' },
        'No Solicitada': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'Trabajo no solicitado formalmente' }
    };
    
    const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '-' };
    
    // Header: Estado y Observaciones
    $(`${modalContext} #verDespEstadoAlert`).removeClass().addClass(`alert mb-0 d-flex align-items-center ${config.alert}`);
    $(`${modalContext} #verDespEstadoBadge`).removeClass().addClass(`badge ml-2 ${config.badge}`).text(solicitud.ESTADO);
    $(`${modalContext} #verDespEstadoDescripcion`).text(config.descripcion);
    $(`${modalContext} #verDespObservaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`${modalContext} #verDespIDSolicitud`).val(solicitud.ID_SOLICITUD || '-');
    $(`${modalContext} #verDespTipo`).val(solicitud.TIPO || '-');
    $(`${modalContext} #verDespRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '-');
    
    // Fechas Programadas
    $(`${modalContext} #verDespInicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '-');
    $(`${modalContext} #verDespFinProgramado`).val(solicitud.FIN_PROGRAMADO || '-');
    
    // Fechas Efectivas de Ejecución
    $(`${modalContext} #verDespInicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '-');
    $(`${modalContext} #verDespFinEfectivo`).val(solicitud.FIN_EFECTIVO || '-');
    
    // Empresas Involucradas
    $(`${modalContext} #verDespEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '-');
    $(`${modalContext} #verDespEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '-');
    
    // Instalación y Equipos
    $(`${modalContext} #verDespInstalacionGM`).val(solicitud.INSTALACION_GM || '-');
    $(`${modalContext} #verDespEquipos`).val(solicitud.EQUIPOS || '-');
    
    // Características de la Intervención
    $(`${modalContext} #verDespTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '-');
    $(`${modalContext} #verDespRiesgo`).val(solicitud.RIESGOS || '-');
    $(`${modalContext} #verDespSODI`).val(solicitud.APLICA_SODI || '-');
    $(`${modalContext} #verDespPotencia`).val(solicitud.POTENCIA || '-');
    
    // Descripción y Condiciones
    $(`${modalContext} #verDespDescripcion`).val(solicitud.DESCRIPCION || '-');
    $(`${modalContext} #verDespCondiciones`).val(solicitud.CONDICIONES || '-');
    $(`${modalContext} #verDespAfectaciones`).val(solicitud.AFECTACIONES || '-');
    $(`${modalContext} #verDespComentarios`).val(solicitud.COMENTARIOS || '-');
    
    // Archivos Adjuntos
    if (solicitud.ADJUNTO) {
        $(`${modalContext} #verDespAdjunto`).text(solicitud.ADJUNTO);
        $(`${modalContext} #verDespDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #verDespAdjunto`).text('Sin archivo adjunto');
        $(`${modalContext} #verDespDescargarAdjunto`).hide();
    }
    
    // Footer: Información del Sistema
    $(`${modalContext} #verDespIDRegistro`).val(solicitud.ID_REGISTRO || '-');
    $(`${modalContext} #verDespCreado`).val(solicitud.CREADO || '-');
    $(`${modalContext} #verDespActualizado`).val(solicitud.ACTUALIZADO || '-');
    $(`${modalContext} #verDespAdministrador`).val(solicitud.ADMINISTRADOR || '-');
    $(`${modalContext} #verDespSolicitante`).val(solicitud.SOLICITANTE || '-');
    $(`${modalContext} #verDespCreadoPor`).val(solicitud.CREADO_POR || '-');
}

// NOTA: Funciones antiguas eliminadas - ahora se usa verSolicitudDesp() unificada
// Las siguientes funciones ya no son necesarias:
// - verSolicitudPendienteDesp()
// - verSolicitudEnAnalisisDesp()
// - verSolicitudProgramadaDesp()
// - verSolicitudAdminGestionandoDesp()

// ============================================
// FUNCIONES ESPECÍFICAS PARA SOLICITANTE
// ============================================

// Función para abrir modal de nueva solicitud - Solicitante
function abrirModalNuevaSolicitudSolic() {
    console.log('Abriendo modal nueva solicitud (Solicitante)');
    
    // Limpiar formulario
    $('#formNuevaSolicitud')[0].reset();
    $('#nuevaSolicEquipos').prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
    
    $('#modalNuevaSolicitudSolic').modal('show');
}

// Función para cargar equipos según la instalación seleccionada
function cargarEquiposPorInstalacion(instalacion, selectId) {
    const select = $(`#${selectId}`);
    
    if (!instalacion) {
        select.prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
        return;
    }
    
    // Obtener equipos de la instalación
    const equipos = window.equiposPorInstalacion && window.equiposPorInstalacion[instalacion] 
        ? window.equiposPorInstalacion[instalacion].filter(e => e.estado === 'Activo')
        : [];
    
    // Si no hay equipos configurados, usar valores por defecto basados en los datos existentes
    const equiposPorDefecto = {
        'Santiago Solar': ['Panel Solar PS1', 'Panel Solar PS2', 'Panel Solar PS3', 'Inversor I1', 'Inversor I2', 'Inversor I3'],
        'Nueva Renca': ['Paño NR1', 'Paño NR2', 'Paño NR3', 'Paño NR4', 'Transformador TNR1'],
        'Los Vientos': ['Paño LV1', 'Paño LV2', 'Transformador TLV1', 'Aerogenerador A1', 'Aerogenerador A2', 'Aerogenerador A3', 'Aerogenerador A4'],
        'Santa Lidia': ['Paño SL1', 'Paño SL2', 'Paño SL3', 'Transformador TSL1', 'Transformador TSL2'],
        'CEME1': ['Sistema de Control', 'Sistema SCADA', 'Medidor M1', 'Medidor M2', 'Medidor M3', 'Transformador T1', 'Transformador T2', 'Transformador T3', 'Transformador T4', 'Transformador T5', 'Transformador T6', 'Barra B1', 'Barra B2', 'Barra B3', 'Barra B4', 'Línea L1', 'Línea L2', 'Torre T6']
    };
    
    let opcionesEquipos = equipos.length > 0 
        ? equipos.map(e => e.nombre)
        : (equiposPorDefecto[instalacion] || []);
    
    if (opcionesEquipos.length === 0) {
        select.prop('disabled', true).html('<option value="">No hay equipos disponibles para esta instalación</option>');
        return;
    }
    
    // Poblar select con opciones
    let html = '<option value="">Seleccione equipo(s)...</option>';
    opcionesEquipos.forEach(equipo => {
        html += `<option value="${equipo}">${equipo}</option>`;
    });
    
    select.prop('disabled', false).html(html);
}

// Función para abrir modal de editar solicitud - Solicitante
function abrirModalEditarSolic(solicitudId) {
    console.log('Abriendo modal editar (Solicitante) para solicitud:', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalEditarSolicitudSolic');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalEditarSolic(solicitud);
    });
    
    modal.modal('show');
}

// Función auxiliar para convertir fecha de DD/MM/YYYY HH:MM a YYYY-MM-DDTHH:MM
function convertirFechaParaInput(fechaStr) {
    if (!fechaStr) return '';
    
    // Formato esperado: "20/03/2025 11:00"
    const partes = fechaStr.split(' ');
    if (partes.length !== 2) return '';
    
    const fecha = partes[0].split('/');
    const hora = partes[1];
    
    if (fecha.length !== 3) return '';
    
    // Convertir a formato ISO: YYYY-MM-DDTHH:MM
    return `${fecha[2]}-${fecha[1].padStart(2, '0')}-${fecha[0].padStart(2, '0')}T${hora}`;
}

// Función para poblar el modal de edición del solicitante
function poblarModalEditarSolic(solicitud) {
    const modalContext = '#modalEditarSolicitudSolic';
    
    console.log('Poblando modal editar solicitante:', solicitud);
    
    // Estado - mostrar con badge dinámico
    const estadoConfig = {
        'Pendiente': { badge: 'badge-warning', alert: 'alert-warning' },
        'Devuelta': { badge: 'badge-danger', alert: 'alert-danger' }
    };
    
    const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary' };
    
    $(`${modalContext} #editarSolicEstadoAlert`).removeClass().addClass(`alert mb-0 ${config.alert}`);
    $(`${modalContext} #editarSolicEstadoBadge`).removeClass().addClass(`badge ml-2 ${config.badge}`).text(solicitud.ESTADO);
    
    // Fechas Programadas - convertir formato
    $(`${modalContext} #editarSolicInicioProgramado`).val(convertirFechaParaInput(solicitud.INICIO_PROGRAMADO));
    $(`${modalContext} #editarSolicFinProgramado`).val(convertirFechaParaInput(solicitud.FIN_PROGRAMADO));
    
    // Configurar listener para cambio de instalación
    $(`${modalContext} #editarSolicInstalacionGM`).off('change').on('change', function() {
        const instalacion = $(this).val();
        const selectEquipos = $(`${modalContext} #editarSolicEquipos`);
        
        if (instalacion && window.equiposPorInstalacion && window.equiposPorInstalacion[instalacion]) {
            selectEquipos.prop('disabled', false);
            selectEquipos.empty();
            selectEquipos.append('<option value="">Seleccione...</option>');
            
            window.equiposPorInstalacion[instalacion].forEach(equipo => {
                selectEquipos.append(`<option value="${equipo}">${equipo}</option>`);
            });
        } else {
            selectEquipos.prop('disabled', true);
            selectEquipos.empty();
            selectEquipos.append('<option value="">Primero seleccione Instalación GM</option>');
        }
    });
    
    // Instalación y Equipos
    $(`${modalContext} #editarSolicInstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`${modalContext} #editarSolicInstalacionGM`).trigger('change');
    
    // Esperar que se carguen los equipos y luego seleccionar
    setTimeout(() => {
        $(`${modalContext} #editarSolicEquipos`).val(solicitud.EQUIPOS || '');
    }, 100);
    
    // Características de la Intervención
    $(`${modalContext} #editarSolicTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`${modalContext} #editarSolicRiesgo`).val(solicitud.RIESGO || '');
    
    // Campo condicional - DESCRIPCION_RIESGO
    if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
        $(`${modalContext} #editarSolicDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO);
        $(`${modalContext} #editarSolicDescripcionRiesgoContainer`).show();
    } else {
        $(`${modalContext} #editarSolicDescripcionRiesgoContainer`).hide();
    }
    
    // SODI - radio buttons
    if (solicitud.APLICA_SODI === 'Sí') {
        $(`${modalContext} #editarSolicSODISi`).prop('checked', true);
    } else if (solicitud.APLICA_SODI === 'No') {
        $(`${modalContext} #editarSolicSODINo`).prop('checked', true);
    }
    
    $(`${modalContext} #editarSolicPotencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`${modalContext} #editarSolicDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #editarSolicCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #editarSolicComentarios`).val(solicitud.COMENTARIOS || '');
    
    // Afectaciones - select simple
    $(`${modalContext} #editarSolicAfectaciones`).val(solicitud.AFECTACIONES || '');
    
    // Campo condicional - DESCRIPCION_AFECTACION
    if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
        $(`${modalContext} #editarSolicDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION);
        $(`${modalContext} #editarSolicDescripcionAfectacionContainer`).show();
    } else {
        $(`${modalContext} #editarSolicDescripcionAfectacionContainer`).hide();
    }
    
    // ID oculto
    $(`${modalContext} #editarSolicID`).val(solicitud.ID_REGISTRO || '');
    
    console.log('Modal editar solicitante poblado correctamente');
}

// NOTA: Funciones antiguas eliminadas - ahora se usa verSolicitudSolic() unificada
// Las siguientes funciones ya no son necesarias:
// - verSolicitudPendienteSolic()
// - verSolicitudDevueltaSolic()
// - verSolicitudEnAnalisisSolic()
// - verSolicitudProgramadaSolic()
// - verSolicitudAdminGestionandoSolic()

// Función para clonar solicitud - Solicitante
function clonarSolicitudSolic(solicitudId) {
    console.log('Clonar solicitud (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalClonarSolicitudSolic');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalClonarSolic(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de clonación del solicitante
function poblarModalClonarSolic(solicitud) {
    const modalContext = '#modalClonarSolicitudSolic';
    
    console.log('Poblando modal clonar solicitante:', solicitud);
    console.log('Equipos disponibles:', window.equiposPorInstalacion);
    
    // Fechas programadas - quedan vacías (no se copian)
    $(`${modalContext} #clonarSolicInicioProgramado`).val('');
    $(`${modalContext} #clonarSolicFinProgramado`).val('');
    
    // Configurar listener para cambio de instalación (solo una vez)
    $(`${modalContext} #clonarSolicInstalacionGM`).off('change').on('change', function() {
        const instalacion = $(this).val();
        const selectEquipos = $(`${modalContext} #clonarSolicEquipos`);
        
        console.log('Instalación cambiada a:', instalacion);
        
        if (instalacion && window.equiposPorInstalacion && window.equiposPorInstalacion[instalacion]) {
            selectEquipos.prop('disabled', false);
            selectEquipos.empty();
            selectEquipos.append('<option value="">Seleccione...</option>');
            
            window.equiposPorInstalacion[instalacion].forEach(equipo => {
                selectEquipos.append(`<option value="${equipo}">${equipo}</option>`);
            });
            
            console.log('Equipos cargados para', instalacion, ':', window.equiposPorInstalacion[instalacion]);
        } else {
            selectEquipos.prop('disabled', true);
            selectEquipos.empty();
            selectEquipos.append('<option value="">Primero seleccione Instalación GM</option>');
        }
    });
    
    // Instalación GM - se copia el valor
    $(`${modalContext} #clonarSolicInstalacionGM`).val(solicitud.INSTALACION_GM || '');
    
    // Trigger del cambio para cargar equipos
    $(`${modalContext} #clonarSolicInstalacionGM`).trigger('change');
    
    // Esperar un momento para que se carguen los equipos y luego seleccionar el valor
    setTimeout(() => {
        $(`${modalContext} #clonarSolicEquipos`).val(solicitud.EQUIPOS || '');
        console.log('Equipo seleccionado:', solicitud.EQUIPOS);
    }, 100);
    
    // Características de la Intervención - se copian los valores
    $(`${modalContext} #clonarSolicTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`${modalContext} #clonarSolicPotencia`).val(solicitud.POTENCIA || '');
    
    // APLICA_SODI - manejar radio buttons
    if (solicitud.APLICA_SODI === 'Sí') {
        $(`${modalContext} #clonarSolicAplicaSODISi`).prop('checked', true);
    } else if (solicitud.APLICA_SODI === 'No') {
        $(`${modalContext} #clonarSolicAplicaSODINo`).prop('checked', true);
    }
    
    $(`${modalContext} #clonarSolicRiesgo`).val(solicitud.RIESGO || '');
    
    // Campo condicional - DESCRIPCION_RIESGO
    if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
        $(`${modalContext} #clonarSolicDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO);
        $(`${modalContext} #clonarSolicDescripcionRiesgoContainer`).show();
    } else {
        $(`${modalContext} #clonarSolicDescripcionRiesgoContainer`).hide();
    }
    
    // Descripción y Condiciones - se copian los valores
    $(`${modalContext} #clonarSolicDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #clonarSolicCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #clonarSolicComentarios`).val(solicitud.COMENTARIOS || '');
    
    // Afectaciones - select simple
    $(`${modalContext} #clonarSolicAfectaciones`).val(solicitud.AFECTACIONES || '');
    
    // Campo condicional - DESCRIPCION_AFECTACION
    if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
        $(`${modalContext} #clonarSolicDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION);
        $(`${modalContext} #clonarSolicDescripcionAfectacionContainer`).show();
    } else {
        $(`${modalContext} #clonarSolicDescripcionAfectacionContainer`).hide();
    }
    
    console.log('Modal clonar solicitante poblado correctamente');
}

// ============================================
// FUNCIÓN PARA GESTIONAR SOLICITUDES DEVUELTAS - SOLICITANTE
// ============================================

// Función para gestionar solicitudes devueltas (Solicitante)
function gestionarSolicitudSolic(solicitudId) {
    console.log('Gestionar solicitud devuelta (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    // Validar que la solicitud esté en estado "Devuelta"
    if (solicitud.ESTADO !== 'Devuelta') {
        alert('Solo se pueden gestionar solicitudes en estado "Devuelta".\nEstado actual: ' + solicitud.ESTADO);
        return;
    }
    
    const modal = $('#modalGestionarSolicitudSolicitante');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalGestionarSolicitante(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de gestión del solicitante
function poblarModalGestionarSolicitante(solicitud) {
    console.log('Poblando modal gestionar solicitante:', solicitud);
    
    // Header: Estado y Observaciones (SOLO LECTURA)
    const estadoConfig = {
        'Devuelta': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud fue devuelta por el administrador para correcciones' }
    };
    
    const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '' };
    
    $('#gestionarSolEstadoAlert').removeClass().addClass('alert mb-0 d-flex align-items-center ' + config.alert);
    $('#gestionarSolEstadoBadge').removeClass().addClass('badge ml-2 ' + config.badge).text(solicitud.ESTADO);
    $('#gestionarSolEstadoDescripcion').text(config.descripcion);
    $('#gestionarSolObservacionesHeader').text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación (SOLO LECTURA)
    $('#gestionarSolIDSolicitud').val(solicitud.ID_SOLICITUD || '');
    $('#gestionarSolTipo').val(solicitud.TIPO || '');
    $('#gestionarSolRelacionSODICEN').val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas (EDITABLE)
    $('#gestionarSolInicioProgramado').val(solicitud.INICIO_PROGRAMADO ? formatDateTimeForInput(solicitud.INICIO_PROGRAMADO) : '');
    $('#gestionarSolFinProgramado').val(solicitud.FIN_PROGRAMADO ? formatDateTimeForInput(solicitud.FIN_PROGRAMADO) : '');
    
    // Empresas Involucradas (SOLO LECTURA)
    $('#gestionarSolEmpresaSolicitante').val(solicitud.EMPRESA_SOLICITANTE || '');
    $('#gestionarSolEmpresaReceptora').val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos (EDITABLE)
    $('#gestionarSolInstalacionGM').val(solicitud.INSTALACION_GM || '');
    $('#gestionarSolEquipos').val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención (EDITABLE)
    $('#gestionarSolTipoIntervencion').val(solicitud.TIPO_INTERVENCION || '');
    $('#gestionarSolPotencia').val(solicitud.POTENCIA || '');
    
    // APLICA_SODI - radio buttons
    if (solicitud.APLICA_SODI === 'Sí') {
        $('#gestionarSolAplicaSODISi').prop('checked', true);
    } else if (solicitud.APLICA_SODI === 'No') {
        $('#gestionarSolAplicaSODINo').prop('checked', true);
    }
    
    $('#gestionarSolRiesgo').val(solicitud.RIESGO || '');
    
    // Campo condicional - DESCRIPCION_RIESGO
    if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
        $('#gestionarSolDescripcionRiesgo').val(solicitud.DESCRIPCION_RIESGO);
        $('#gestionarSolDescripcionRiesgoContainer').show();
    } else {
        $('#gestionarSolDescripcionRiesgoContainer').hide();
    }
    
    // Descripción y Condiciones (EDITABLE)
    $('#gestionarSolDescripcion').val(solicitud.DESCRIPCION || '');
    $('#gestionarSolCondiciones').val(solicitud.CONDICIONES || '');
    $('#gestionarSolComentariosActuales').val(solicitud.COMENTARIOS || '');
    $('#gestionarSolAfectaciones').val(solicitud.AFECTACIONES || '');
    
    // Campo condicional - DESCRIPCION_AFECTACION
    if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
        $('#gestionarSolDescripcionAfectacion').val(solicitud.DESCRIPCION_AFECTACION);
        $('#gestionarSolDescripcionAfectacionContainer').show();
    } else {
        $('#gestionarSolDescripcionAfectacionContainer').hide();
    }
    
    // Archivo Adjunto (EDITABLE)
    if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
        $('#gestionarSolAdjuntoActual').text(solicitud.ADJUNTO);
        $('#gestionarSolDescargarAdjunto').show();
    } else {
        $('#gestionarSolAdjuntoActual').text('Sin archivo adjunto');
        $('#gestionarSolDescargarAdjunto').hide();
    }
    
    // Limpiar campo de nuevo archivo
    $('#gestionarSolAdjunto').val('');
    
    // Limpiar observaciones del solicitante y resetear acción a Pendiente
    $('#gestionarSolObservaciones').val('');
    $('#gestionarSolAccionPendiente').prop('checked', true);
    
    // Metadata del Sistema
    $('#gestionarSolIDRegistro').text(solicitud.ID_REGISTRO || '-');
    $('#gestionarSolCreado').text(solicitud.CREADO || '-');
    $('#gestionarSolActualizado').text(solicitud.ACTUALIZADO || '-');
    $('#gestionarSolAdministrador').text(solicitud.ADMINISTRADOR || '-');
    $('#gestionarSolSolicitante').text(solicitud.SOLICITANTE || '-');
    $('#gestionarSolCreadoPor').text(solicitud.CREADO_POR || '-');
}

// Función auxiliar para formatear fecha para input datetime-local
function formatDateTimeForInput(dateString) {
    if (!dateString) return '';
    // Asume formato "DD/MM/YYYY HH:mm" y convierte a "YYYY-MM-DDTHH:mm"
    const parts = dateString.split(' ');
    if (parts.length !== 2) return '';
    const dateParts = parts[0].split('/');
    if (dateParts.length !== 3) return '';
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${parts[1]}`;
}

// Función para confirmar la gestión de la solicitud del solicitante
function confirmarGestionSolicitudSolicitante() {
    console.log('Confirmando gestión de solicitud (Solicitante)');
    
    // Validar observaciones obligatorias
    const observaciones = $('#gestionarSolObservaciones').val().trim();
    if (!observaciones) {
        alert('Debe ingresar observaciones sobre las correcciones realizadas.');
        $('#gestionarSolObservaciones').focus();
        return;
    }
    
    // Validar campos requeridos
    const camposRequeridos = [
        { id: '#gestionarSolInicioProgramado', nombre: 'Inicio Programado' },
        { id: '#gestionarSolFinProgramado', nombre: 'Fin Programado' },
        { id: '#gestionarSolInstalacionGM', nombre: 'Instalación GM' },
        { id: '#gestionarSolEquipos', nombre: 'Equipos' },
        { id: '#gestionarSolTipoIntervencion', nombre: 'Tipo de Intervención' },
        { id: '#gestionarSolRiesgo', nombre: 'Riesgo' },
        { id: '#gestionarSolSODI', nombre: 'SODI' },
        { id: '#gestionarSolPotencia', nombre: 'Potencia' },
        { id: '#gestionarSolDescripcion', nombre: 'Descripción' },
        { id: '#gestionarSolCondiciones', nombre: 'Condiciones' },
        { id: '#gestionarSolAfectaciones', nombre: 'Afectaciones' }
    ];
    
    for (const campo of camposRequeridos) {
        if (!$(campo.id).val()) {
            alert(`El campo "${campo.nombre}" es obligatorio.`);
            $(campo.id).focus();
            return;
        }
    }
    
    // Confirmar acción
    if (!confirm('¿Está seguro de reenviar esta solicitud a estado "Pendiente"?\n\nLa solicitud será revisada nuevamente por el administrador.')) {
        return;
    }
    
    // Aquí iría la lógica para actualizar la solicitud en SharePoint
    // Por ahora solo mostramos un mensaje de éxito
    alert('✓ Solicitud reenviada exitosamente.\n\nLa solicitud ha vuelto a estado "Pendiente" y será revisada por el administrador.');
    
    $('#modalGestionarSolicitudSolicitante').modal('hide');
    
    // Recargar la tabla
    location.reload();
}

// ============================================
// FUNCIÓN UNIFICADA PARA VER SOLICITUDES - SOLICITANTE
// ============================================

// Función unificada para ver cualquier solicitud (Solicitante)
function verSolicitudSolic(solicitudId) {
    console.log('Ver solicitud (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalVerSolicitante');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalVerSolicitante(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal unificado de visualización (Solicitante)
function poblarModalVerSolicitante(solicitud) {
    const modalContext = '#modalVerSolicitante';
    
    // Configurar badge y alert según el estado
    const estadoConfig = {
        'Pendiente': { badge: 'badge-warning', alert: 'alert-warning', descripcion: 'La solicitud está pendiente de revisión' },
        'Devuelta': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud ha sido devuelta para correcciones' },
        'En Análisis': { badge: 'badge-info', alert: 'alert-info', descripcion: 'La solicitud está siendo analizada' },
        'Administrador Gestionando': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'La solicitud está siendo gestionada por el administrador' },
        'Programada': { badge: 'badge-success', alert: 'alert-success', descripcion: 'La solicitud ha sido programada' },
        'Vigente': { badge: 'badge-primary', alert: 'alert-primary', descripcion: 'El trabajo está en ejecución' },
        'Extendida': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'El trabajo ha sido extendido' },
        'Finalizada': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'El trabajo ha sido finalizado' },
        'Rechazada': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud ha sido rechazada' },
        'Suspendida': { badge: 'badge-dark', alert: 'alert-dark', descripcion: 'El trabajo ha sido suspendido' },
        'No Solicitada': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'Trabajo no solicitado formalmente' }
    };
    
    const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '-' };
    
    // Header: Estado y Observaciones
    $(`${modalContext} #verSolicEstadoAlert`).removeClass().addClass(`alert mb-0 d-flex align-items-center ${config.alert}`);
    $(`${modalContext} #verSolicEstadoBadge`).removeClass().addClass(`badge ml-2 ${config.badge}`).text(solicitud.ESTADO);
    $(`${modalContext} #verSolicEstadoDescripcion`).text(config.descripcion);
    $(`${modalContext} #verSolicObservaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`${modalContext} #verSolicIDSolicitud`).val(solicitud.ID_SOLICITUD || '-');
    $(`${modalContext} #verSolicTipo`).val(solicitud.TIPO || '-');
    $(`${modalContext} #verSolicRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '-');
    
    // Fechas Programadas
    $(`${modalContext} #verSolicInicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '-');
    $(`${modalContext} #verSolicFinProgramado`).val(solicitud.FIN_PROGRAMADO || '-');
    
    // Fechas Efectivas de Ejecución
    $(`${modalContext} #verSolicInicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '-');
    $(`${modalContext} #verSolicFinEfectivo`).val(solicitud.FIN_EFECTIVO || '-');
    
    // Empresas Involucradas
    $(`${modalContext} #verSolicEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '-');
    $(`${modalContext} #verSolicEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '-');
    
    // Instalación y Equipos
    $(`${modalContext} #verSolicInstalacionGM`).val(solicitud.INSTALACION_GM || '-');
    $(`${modalContext} #verSolicEquipos`).val(solicitud.EQUIPOS || '-');
    
    // Características de la Intervención
    $(`${modalContext} #verSolicTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '-');
    $(`${modalContext} #verSolicPotencia`).val(solicitud.POTENCIA || '-');
    $(`${modalContext} #verSolicAplicaSODI`).val(solicitud.APLICA_SODI || '-');
    $(`${modalContext} #verSolicRiesgo`).val(solicitud.RIESGO || '-');
    
    // Campos condicionales - DESCRIPCION_RIESGO
    if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
        $(`${modalContext} #verSolicDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO);
        $(`${modalContext} #verSolicDescripcionRiesgoContainer`).show();
    } else {
        $(`${modalContext} #verSolicDescripcionRiesgoContainer`).hide();
    }
    
    // Descripción y Condiciones
    $(`${modalContext} #verSolicDescripcion`).val(solicitud.DESCRIPCION || '-');
    $(`${modalContext} #verSolicCondiciones`).val(solicitud.CONDICIONES || '-');
    $(`${modalContext} #verSolicComentarios`).val(solicitud.COMENTARIOS || '-');
    $(`${modalContext} #verSolicAfectaciones`).val(solicitud.AFECTACIONES || '-');
    
    // Campos condicionales - DESCRIPCION_AFECTACION
    if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
        $(`${modalContext} #verSolicDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION);
        $(`${modalContext} #verSolicDescripcionAfectacionContainer`).show();
    } else {
        $(`${modalContext} #verSolicDescripcionAfectacionContainer`).hide();
    }
    
    // Archivos Adjuntos
    if (solicitud.ADJUNTO) {
        $(`${modalContext} #verSolicAdjunto`).text(solicitud.ADJUNTO);
        $(`${modalContext} #verSolicDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #verSolicAdjunto`).text('Sin archivo adjunto');
        $(`${modalContext} #verSolicDescargarAdjunto`).hide();
    }
    $(`${modalContext} #verSolicSODIAdjunto`).val(solicitud.APLICA_SODI_ADJUNTO ? 'Sí' : 'No');
    
    // Footer: Información del Sistema
    $(`${modalContext} #verSolicIDRegistro`).val(solicitud.ID_REGISTRO || '-');
    $(`${modalContext} #verSolicCreado`).val(solicitud.CREADO || '-');
    $(`${modalContext} #verSolicActualizado`).val(solicitud.ACTUALIZADO || '-');
    $(`${modalContext} #verSolicAdministrador`).val(solicitud.ADMINISTRADOR || '-');
    $(`${modalContext} #verSolicSolicitante`).val(solicitud.SOLICITANTE || '-');
    
    // Configurar visibilidad de secciones según el estado
    configurarVisibilidadVerSolicitud(solicitud.ESTADO);
}

// ============================================
// FUNCIÓN PARA POBLAR MODAL DE CLONAR
// ============================================

function poblarModalClonar(solicitud, tipo) {
    const prefix = 'clonar' + tipo;
    
    // Determinar el contexto del modal según el tipo
    const modalContext = tipo === 'Desp' ? '#modalClonarSolicitudDesp' : '#modalClonarAdmin';
    
    console.log('Poblando modal clonar ' + tipo + ':', solicitud);
    
    // Identificación - ID Solicitud queda vacío, Tipo y Relación se copian
    $(`${modalContext} #${prefix}IDSolicitud`).val('');
    $(`${modalContext} #${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`${modalContext} #${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas - quedan vacías
    $(`${modalContext} #${prefix}InicioProgramado`).val('');
    $(`${modalContext} #${prefix}FinProgramado`).val('');
    
    // Empresas Involucradas - se copian
    $(`${modalContext} #${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`${modalContext} #${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos - se copian
    $(`${modalContext} #${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`${modalContext} #${prefix}Equipos`).val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención - se copian
    $(`${modalContext} #${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`${modalContext} #${prefix}Potencia`).val(solicitud.POTENCIA || '');
    $(`${modalContext} #${prefix}AplicaSODI`).val(solicitud.APLICA_SODI || '');
    $(`${modalContext} #${prefix}Riesgo`).val(solicitud.RIESGO || '');
    
    // Descripción del Riesgo (condicional) - se copia
    if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
        $(`${modalContext} #${prefix}DescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '');
        $(`${modalContext} #${prefix}DescripcionRiesgoContainer`).show();
        $(`${modalContext} #${prefix}DescripcionRiesgo`).attr('required', 'required');
    } else {
        $(`${modalContext} #${prefix}DescripcionRiesgoContainer`).hide();
        $(`${modalContext} #${prefix}DescripcionRiesgo`).val('').removeAttr('required');
    }
    
    // Descripción y Condiciones - se copian
    $(`${modalContext} #${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Afectaciones - se copian
    $(`${modalContext} #${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    
    // Descripción de Afectación (condicional) - se copia
    if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '') {
        $(`${modalContext} #${prefix}DescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '');
        $(`${modalContext} #${prefix}DescripcionAfectacionContainer`).show();
        $(`${modalContext} #${prefix}DescripcionAfectacion`).attr('required', 'required');
    } else {
        $(`${modalContext} #${prefix}DescripcionAfectacionContainer`).hide();
        $(`${modalContext} #${prefix}DescripcionAfectacion`).val('').removeAttr('required');
    }
    
    // Archivos Adjuntos - quedan vacíos
    $(`${modalContext} #${prefix}Adjunto`).val('');
    $(`${modalContext} #${prefix}SODIAdjunto`).val('');
    $(`${modalContext} .custom-file-label`).text('Seleccionar archivo...');
    
    console.log('Modal clonar ' + tipo + ' poblado correctamente');
}

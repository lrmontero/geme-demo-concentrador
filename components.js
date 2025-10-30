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
    $('#modalNuevaSolicitudAdmin').modal('show');
    $('#modalNuevaSolicitudAdmin #formNuevaSolicitud')[0].reset();
    $('#modalNuevaSolicitudAdmin #equiposIntervenir').prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
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
// FUNCIONES PARA MODAL EDITAR SOLICITUD
// ============================================

// Función para abrir modal de edición
function abrirModalEditar(solicitudId) {
    // Aquí cargarías los datos de la solicitud desde el servidor
    // Por ahora usamos datos de ejemplo
    const solicitudEjemplo = {
        id: solicitudId,
        INICIO_PROGRAMADO: '2025-01-28T10:00',
        FIN_PROGRAMADO: '2025-01-28T18:00',
        INSTALACION_GM: 'Santa Lidia',
        EQUIPOS: 'Paño SL1',
        TIPO_INTERVENCION: 'Intervención',
        RIESGOS: 'Medio',
        DESCRIPCION: 'Mantenimiento preventivo del equipo',
        CONDICIONES: 'Desenergización completa',
        AFECTACIONES: ['SSCC', 'Protecciones'],
        SODI: 'Si',
        OBSERVACIONES: 'Coordinar con operador',
        ADJUNTO: ''
    };
    
    // Llenar el formulario
    $('#editSolicitudId').val(solicitudEjemplo.id);
    $('#editFechaInicio').val(solicitudEjemplo.INICIO_PROGRAMADO);
    $('#editFechaFin').val(solicitudEjemplo.FIN_PROGRAMADO);
    $('#editInstalacionGM').val(solicitudEjemplo.INSTALACION_GM).trigger('change');
    
    // Esperar a que se carguen los equipos
    setTimeout(() => {
        $('#editEquiposIntervenir').val(solicitudEjemplo.EQUIPOS);
    }, 100);
    
    $('#editTipoIntervencion').val(solicitudEjemplo.TIPO_INTERVENCION);
    $('#editRiesgo').val(solicitudEjemplo.RIESGOS);
    $('#editDescripcionTrabajo').val(solicitudEjemplo.DESCRIPCION);
    $('#editCondicionesRequeridas').val(solicitudEjemplo.CONDICIONES);
    $('#editAfectaciones').val(solicitudEjemplo.AFECTACIONES);
    $(`input[name="editSodi"][value="${solicitudEjemplo.SODI}"]`).prop('checked', true);
    $('#editComentarios').val(solicitudEjemplo.OBSERVACIONES);
    
    $('#modalEditarSolicitud').modal('show');
}

// Cambiar equipos según instalación seleccionada (para edición)
$(document).on('change', '#editInstalacionGM', function() {
    const instalacion = $(this).val();
    const $equipos = $('#editEquiposIntervenir');
    
    if (instalacion && equiposPorInstalacion[instalacion]) {
        $equipos.prop('disabled', false).html('<option value="">Seleccione equipo...</option>');
        equiposPorInstalacion[instalacion].forEach(equipo => {
            $equipos.append(`<option value="${equipo}">${equipo}</option>`);
        });
    } else {
        $equipos.prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
    }
});

// Mostrar nombre de archivo seleccionado (para edición)
$(document).on('change', '#editArchivoAdjunto', function() {
    const fileName = $(this).val().split('\\').pop();
    $(this).next('.custom-file-label').html(fileName || 'Seleccionar archivo...');
});

// Función para actualizar solicitud
function actualizarSolicitud() {
    const form = $('#formEditarSolicitud')[0];
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const formData = {
        id: $('#editSolicitudId').val(),
        INICIO_PROGRAMADO: $('#editFechaInicio').val(),
        FIN_PROGRAMADO: $('#editFechaFin').val(),
        INSTALACION_GM: $('#editInstalacionGM').val(),
        EQUIPOS: $('#editEquiposIntervenir').val(),
        TIPO_INTERVENCION: $('#editTipoIntervencion').val(),
        RIESGOS: $('#editRiesgo').val(),
        DESCRIPCION: $('#editDescripcionTrabajo').val(),
        CONDICIONES: $('#editCondicionesRequeridas').val(),
        AFECTACIONES: $('#editAfectaciones').val(),
        SODI: $('input[name="editSodi"]:checked').val(),
        OBSERVACIONES: $('#editComentarios').val(),
        archivo: $('#editArchivoAdjunto')[0].files[0]
    };
    
    console.log('Actualizando solicitud:', formData);
    alert('Solicitud actualizada exitosamente');
    $('#modalEditarSolicitud').modal('hide');
}

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
// FUNCIONES PARA MODALES DE VISUALIZACIÓN
// ============================================

// Función para ver solicitud en análisis
function verSolicitudEnAnalisis(solicitudId) {
    console.log('Abriendo modal ver en análisis para solicitud:', solicitudId);
    
    // Cargar datos de ejemplo
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'María González',
        fechaCreacion: '22/01/2025 09:30',
        fechaActualizacion: '26/01/2025 14:20',
        ADMINISTRADOR: 'Carlos Ramírez',
        INICIO_PROGRAMADO: '28/01/2025 10:00',
        FIN_PROGRAMADO: '28/01/2025 18:00',
        INSTALACION_GM: 'Santa Lidia',
        EQUIPOS: 'Paño SL1, Paño SL2',
        TIPO_INTERVENCION: 'Intervención',
        RIESGOS: 'Medio',
        POTENCIA: '200.0',
        DESCRIPCION: 'Mantenimiento preventivo del equipo',
        CONDICIONES: 'Desenergización completa',
        AFECTACIONES: 'SSCC, Protecciones',
        SODI: 'Sí',
        OBSERVACIONES: 'Coordinar con operador'
    };
    
    // Metadata del sistema
    $('#verAnalisisID').text(solicitud.id);
    $('#verAnalisisUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verAnalisisFechaCreacion').text(solicitud.fechaCreacion);
    $('#verAnalisisFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verAnalisisAdministrador').text(solicitud.ADMINISTRADOR);
    
    // Campos de solicitud
    $('#verAnalisisFechaInicio').val(solicitud.fechaInicio);
    $('#verAnalisisFechaFin').val(solicitud.fechaFin);
    $('#verAnalisisInstalacionGM').val(solicitud.instalacionGM);
    $('#verAnalisisEquiposIntervenir').val(solicitud.equiposIntervenir);
    $('#verAnalisisTipoIntervencion').val(solicitud.tipoIntervencion);
    $('#verAnalisisRiesgo').val(solicitud.riesgo);
    $('#verAnalisisPotencia').val(solicitud.potencia);
    $('#verAnalisisDescripcionTrabajo').val(solicitud.descripcionTrabajo);
    $('#verAnalisisCondicionesRequeridas').val(solicitud.condicionesRequeridas);
    $('#verAnalisisAfectaciones').val(solicitud.afectaciones);
    $('#verAnalisisSODI').val(solicitud.sodi);
    $('#verAnalisisComentarios').val(solicitud.comentarios);
    
    $('#modalVerEnAnalisis').modal('show');
}

// Función para ver solicitud administrador gestionando - ADMINISTRADOR
function verSolicitudAdminGestionandoAdmin(solicitudId) {
    console.log('Abriendo modal ver admin gestionando (Administrador) para solicitud:', solicitudId);
    
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Pedro Sánchez',
        fechaCreacion: '21/01/2025 11:15',
        fechaActualizacion: '27/01/2025 16:45',
        ADMINISTRADOR: 'Ana Torres',
        INICIO_PROGRAMADO: '28/01/2025 10:00',
        FIN_PROGRAMADO: '28/01/2025 18:00',
        INSTALACION_GM: 'Nueva Renca',
        EQUIPOS: 'Transformador TNR1',
        TIPO_INTERVENCION: 'Desconexión',
        RIESGOS: 'Alto',
        POTENCIA: '300.0',
        DESCRIPCION: 'Reemplazo de transformador',
        CONDICIONES: 'Desenergización y aislamiento',
        AFECTACIONES: 'SSCC, Protecciones, Medidores',
        SODI: 'Sí',
        OBSERVACIONES: 'Requiere supervisión continua'
    };
    
    // Metadata del sistema
    $('#verAdminID').text(solicitud.id);
    $('#verAdminUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verAdminFechaCreacion').text(solicitud.fechaCreacion);
    $('#verAdminFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verAdminAdministrador').text(solicitud.ADMINISTRADOR);
    
    // Campos de solicitud
    $('#verAdminFechaInicio').val(solicitud.fechaInicio);
    $('#verAdminFechaFin').val(solicitud.fechaFin);
    $('#verAdminInstalacionGM').val(solicitud.instalacionGM);
    $('#verAdminEquiposIntervenir').val(solicitud.equiposIntervenir);
    $('#verAdminTipoIntervencion').val(solicitud.tipoIntervencion);
    $('#verAdminRiesgo').val(solicitud.riesgo);
    $('#verAdminPotencia').val(solicitud.potencia);
    $('#verAdminDescripcionTrabajo').val(solicitud.descripcionTrabajo);
    $('#verAdminCondicionesRequeridas').val(solicitud.condicionesRequeridas);
    $('#verAdminAfectaciones').val(solicitud.afectaciones);
    $('#verAdminSODI').val(solicitud.sodi);
    $('#verAdminComentarios').val(solicitud.comentarios);
    
    $('#modalVerAdminGestionandoAdmin').modal('show');
}

// NOTA: Función eliminada - ahora se usa verSolicitudDesp() unificada
// verSolicitudAdminGestionandoDesp() ya no es necesaria

// NOTA: Función antigua eliminada - ahora se usa verSolicitudSolic() unificada
// Esta función con datos hardcodeados ya no es necesaria

// Función para ver solicitud programada
function verSolicitudProgramada(solicitudId) {
    console.log('Abriendo modal ver programada para solicitud:', solicitudId);
    
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Juan Pérez',
        fechaCreacion: '20/01/2025 10:00',
        fechaActualizacion: '24/01/2025 15:30',
        ADMINISTRADOR: 'Luis Fernández',
        INICIO_PROGRAMADO: '25/01/2025 09:00',
        FIN_PROGRAMADO: '25/01/2025 17:00',
        INSTALACION_GM: 'CEME1',
        EQUIPOS: 'Paño 1, Paño 2',
        TIPO_INTERVENCION: 'Intervención',
        RIESGOS: 'Bajo',
        POTENCIA: '150.5',
        DESCRIPCION: 'Inspección rutinaria programada',
        CONDICIONES: 'Acceso controlado',
        AFECTACIONES: 'SSCC',
        SODI: 'No',
        OBSERVACIONES: 'Trabajo programado y aprobado'
    };
    
    // Verificar si el modal existe
    if ($('#modalVerProgramada').length === 0) {
        console.error('Modal #modalVerProgramada no encontrado en el DOM');
        alert('Error: Modal no cargado. Por favor recarga la página.');
        return;
    }
    
    console.log('Modal encontrado, llenando campos...');
    
    // Metadata del sistema
    $('#verProgramadaID').text(solicitud.id);
    $('#verProgramadaUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verProgramadaFechaCreacion').text(solicitud.fechaCreacion);
    $('#verProgramadaFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verProgramadaAdministrador').text(solicitud.administrador);
    $('#verProgramadaFechaInicio').val(solicitud.fechaInicio);
    $('#verProgramadaFechaFin').val(solicitud.fechaFin);
    $('#verProgramadaInstalacionGM').val(solicitud.instalacionGM);
    $('#verProgramadaEquiposIntervenir').val(solicitud.equiposIntervenir);
    $('#verProgramadaTipoIntervencion').val(solicitud.tipoIntervencion);
    $('#verProgramadaRiesgo').val(solicitud.riesgo);
    $('#verProgramadaPotencia').val(solicitud.potencia);
    $('#verProgramadaDescripcionTrabajo').val(solicitud.descripcionTrabajo);
    $('#verProgramadaCondicionesRequeridas').val(solicitud.condicionesRequeridas);
    $('#verProgramadaAfectaciones').val(solicitud.afectaciones);
    $('#verProgramadaSODI').val(solicitud.sodi);
    $('#verProgramadaComentarios').val(solicitud.comentarios);
    
    console.log('Mostrando modal...');
    $('#modalVerProgramada').modal('show');
}

// Función para descargar reporte
function descargarReporte() {
    console.log('Descargando reporte PDF...');
    alert('Funcionalidad de descarga de reporte en desarrollo');
}

// Función para ver solicitud pendiente
function verSolicitudPendiente(solicitudId) {
    console.log('Abriendo modal ver pendiente para solicitud:', solicitudId);
    
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Roberto Díaz',
        fechaCreacion: '19/01/2025 08:45',
        fechaActualizacion: '25/01/2025 11:20',
        INICIO_PROGRAMADO: '28/01/2025 09:00',
        FIN_PROGRAMADO: '28/01/2025 17:00',
        INSTALACION_GM: 'Santa Lidia',
        EQUIPOS: 'Paño SL1',
        TIPO_INTERVENCION: 'Intervención',
        RIESGOS: 'Bajo',
        POTENCIA: '100.0',
        DESCRIPCION: 'Mantenimiento preventivo anual',
        CONDICIONES: 'Desenergización parcial',
        AFECTACIONES: 'SSCC',
        SODI: 'Sí',
        OBSERVACIONES: 'Solicitud pendiente de aprobación'
    };
    
    // Verificar si el modal existe
    if ($('#modalVerPendiente').length === 0) {
        console.error('Modal #modalVerPendiente no encontrado en el DOM');
        alert('Error: Modal no cargado. Por favor recarga la página.');
        return;
    }
    
    console.log('Modal encontrado, llenando campos...');
    
    // Metadata del sistema
    $('#verPendienteID').text(solicitud.id);
    $('#verPendienteUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verPendienteFechaCreacion').text(solicitud.fechaCreacion);
    $('#verPendienteFechaActualizacion').text(solicitud.fechaActualizacion);
    
    // Campos de solicitud
    $('#verPendienteFechaInicio').val(solicitud.fechaInicio);
    $('#verPendienteFechaFin').val(solicitud.fechaFin);
    $('#verPendienteInstalacionGM').val(solicitud.instalacionGM);
    $('#verPendienteEquiposIntervenir').val(solicitud.equiposIntervenir);
    $('#verPendienteTipoIntervencion').val(solicitud.tipoIntervencion);
    $('#verPendienteRiesgo').val(solicitud.riesgo);
    $('#verPendientePotencia').val(solicitud.potencia);
    $('#verPendienteDescripcionTrabajo').val(solicitud.descripcionTrabajo);
    $('#verPendienteCondicionesRequeridas').val(solicitud.condicionesRequeridas);
    $('#verPendienteAfectaciones').val(solicitud.afectaciones);
    $('#verPendienteSODI').val(solicitud.sodi);
    $('#verPendienteComentarios').val(solicitud.comentarios);
    
    console.log('Mostrando modal...');
    $('#modalVerPendiente').modal('show');
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

// Función para gestionar solicitud
function gestionarSolicitud(solicitudId) {
    console.log('Abriendo modal gestionar solicitud:', solicitudId);
    
    // Datos de ejemplo de la solicitud
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Roberto Díaz',
        fechaCreacion: '19/01/2025 08:45',
        fechaActualizacion: '25/01/2025 11:20',
        INICIO_PROGRAMADO: '28/01/2025 09:00',
        FIN_PROGRAMADO: '28/01/2025 17:00',
        INSTALACION_GM: 'Santa Lidia',
        EQUIPOS: 'Paño SL1',
        TIPO_INTERVENCION: 'Intervención',
        RIESGOS: 'Bajo',
        POTENCIA: '100.0',
        DESCRIPCION: 'Mantenimiento preventivo anual'
    };
    
    // Verificar si el modal existe
    if ($('#modalGestionarSolicitud').length === 0) {
        console.error('Modal #modalGestionarSolicitud no encontrado en el DOM');
        alert('Error: Modal no cargado. Por favor recarga la página.');
        return;
    }
    
    console.log('Modal encontrado, llenando campos...');
    
    // Metadata del sistema
    $('#gestionarID').text(solicitud.id);
    $('#gestionarUsuarioCreador').text(solicitud.usuarioCreador);
    $('#gestionarFechaCreacion').text(solicitud.fechaCreacion);
    $('#gestionarFechaActualizacion').text(solicitud.fechaActualizacion);
    
    // Campos de solicitud
    $('#gestionarFechaInicio').val(solicitud.fechaInicio);
    $('#gestionarFechaFin').val(solicitud.fechaFin);
    $('#gestionarInstalacionGM').val(solicitud.instalacionGM);
    $('#gestionarEquiposIntervenir').val(solicitud.equiposIntervenir);
    $('#gestionarTipoIntervencion').val(solicitud.tipoIntervencion);
    $('#gestionarRiesgo').val(solicitud.riesgo);
    $('#gestionarPotencia').val(solicitud.potencia);
    $('#gestionarDescripcionTrabajo').val(solicitud.descripcionTrabajo);
    
    // Limpiar comentarios y resetear radio button
    $('#gestionarComentarios').val('');
    $('#accionEnviarAnalisis').prop('checked', true);
    
    // Guardar el ID de la solicitud para usar en la confirmación
    $('#modalGestionarSolicitud').data('solicitudId', solicitudId);
    
    console.log('Mostrando modal...');
    $('#modalGestionarSolicitud').modal('show');
}

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
    $('#modalNuevaSolicitudAdmin').modal('show');
}

// Función para abrir modal de editar solicitud - Administrador
function abrirModalEditarAdmin(solicitudId) {
    console.log('Abriendo modal editar (Administrador) para solicitud:', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalEditar(solicitud, 'Admin');
    }
    $('#modalEditarSolicitudAdmin').modal('show');
}

// Función para ver solicitud pendiente - Administrador
function verSolicitudPendienteAdmin(solicitudId) {
    console.log('Ver solicitud Pendiente (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerPendiente(solicitud, 'Admin');
    }
    $('#modalVerPendienteAdmin').modal('show');
}

// Función para ver solicitud devuelta - Administrador
function verSolicitudDevueltaAdmin(solicitudId) {
    console.log('Ver solicitud Devuelta (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerDevuelta(solicitud, 'Admin');
    }
    $('#modalVerDevueltaAdmin').modal('show');
}

// Función para ver solicitud en análisis - Administrador
function verSolicitudEnAnalisisAdmin(solicitudId) {
    console.log('Ver solicitud En Análisis (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerEnAnalisis(solicitud, 'Admin');
    }
    $('#modalVerEnAnalisisAdmin').modal('show');
}

// Función para ver solicitud programada - Administrador
function verSolicitudProgramadaAdmin(solicitudId) {
    console.log('Ver solicitud Programada (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerProgramada(solicitud, 'Admin');
    }
    $('#modalVerProgramadaAdmin').modal('show');
}

// Función para ver solicitud vigente - Administrador
function verSolicitudVigenteAdmin(solicitudId) {
    console.log('Ver solicitud Vigente (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerVigente(solicitud, 'Admin');
    }
    $('#modalVerVigenteAdmin').modal('show');
}

// Función para ver solicitud extendida - Administrador
function verSolicitudExtendidaAdmin(solicitudId) {
    console.log('Ver solicitud Extendida (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerExtendida(solicitud, 'Admin');
    }
    $('#modalVerExtendidaAdmin').modal('show');
}

// Función para clonar solicitud - Administrador
function clonarSolicitudAdmin(solicitudId) {
    console.log('Clonar solicitud (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    
    if (!solicitud) {
        console.error('Solicitud no encontrada:', solicitudId);
        return;
    }
    
    const modal = $('#modalClonarSolicitudAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalClonarAdmin(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de clonación del administrador
function poblarModalClonarAdmin(solicitud) {
    const modalContext = '#modalClonarSolicitudAdmin';
    
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
    $(`${modalContext} #clonarAdminPotencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones - se copian
    $(`${modalContext} #clonarAdminDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #clonarAdminCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #clonarAdminComentarios`).val(solicitud.COMENTARIOS || '');
    
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
    
    const modal = $('#modalGestionarSolicitudAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalGestionar(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de gestión
function poblarModalGestionar(solicitud) {
    const modalContext = '#modalGestionarSolicitudAdmin';
    
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
    $(`${modalContext} #gestionarRiesgo`).val(solicitud.RIESGOS || '');
    $(`${modalContext} #gestionarSODI`).val(solicitud.SODI || '');
    $(`${modalContext} #gestionarPotencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones (SOLO LECTURA)
    $(`${modalContext} #gestionarDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #gestionarCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #gestionarAfectaciones`).val(solicitud.AFECTACIONES || '');
    $(`${modalContext} #gestionarComentariosActuales`).val(solicitud.COMENTARIOS || '');
    
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
}

// Función para configurar el estado y las acciones disponibles
function configurarEstadoGestion(estado) {
    const modalContext = '#modalGestionarSolicitudAdmin';
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
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "En Análisis"
                    </label>
                    <small class="form-text text-muted ml-4">La solicitud será enviada para análisis detallado</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionDevolver" name="accionGestion" class="custom-control-input" value="Devuelta">
                    <label class="custom-control-label" for="accionDevolver">
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "Devuelta"
                    </label>
                    <small class="form-text text-muted ml-4">Devolver la solicitud al solicitante para correcciones</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAdminGestionando" name="accionGestion" class="custom-control-input" value="Administrador Gestionando">
                    <label class="custom-control-label" for="accionAdminGestionando">
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "Administrador Gestionando"
                    </label>
                    <small class="form-text text-muted ml-4">El administrador tomará el control de la gestión</small>
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
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "Devuelta"
                    </label>
                    <small class="form-text text-muted ml-4">Devolver la solicitud al solicitante para correcciones</small>
                </div>
                <div class="custom-control custom-radio mt-2">
                    <input type="radio" id="accionAdminGestionando" name="accionGestion" class="custom-control-input" value="Administrador Gestionando">
                    <label class="custom-control-label" for="accionAdminGestionando">
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "Administrador Gestionando"
                    </label>
                    <small class="form-text text-muted ml-4">El administrador tomará el control de la gestión</small>
                </div>
            `;
            break;
            
        case 'Devuelta':
            alertElement.addClass('alert-danger');
            badgeElement.addClass('badge-danger').text('Devuelta');
            descripcionElement.text('Esta solicitud fue devuelta al solicitante para correcciones');
            acciones = `
                <div class="custom-control custom-radio">
                    <input type="radio" id="accionEnviarAnalisis" name="accionGestion" class="custom-control-input" value="En Análisis" checked>
                    <label class="custom-control-label" for="accionEnviarAnalisis">
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "En Análisis"
                    </label>
                    <small class="form-text text-muted ml-4">Enviar nuevamente la solicitud a análisis</small>
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
                        <i class="fas fa-arrow-right mr-1"></i>Avanzar a "Programada"
                    </label>
                    <small class="form-text text-muted ml-4">Aprobar y programar la solicitud para ejecución</small>
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
    const modalContext = '#modalGestionarSolicitudAdmin';
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
    
    const modal = $('#modalEditarSolicitudAdmin');
    
    // Limpiar eventos previos y agregar nuevo listener
    modal.off('shown.bs.modal').on('shown.bs.modal', function() {
        poblarModalEditar(solicitud);
    });
    
    modal.modal('show');
}

// Función para poblar el modal de edición
function poblarModalEditar(solicitud) {
    const modalContext = '#modalEditarSolicitudAdmin';
    
    // Header: Estado
    $(`${modalContext} #editarEstadoBadge`).text(solicitud.ESTADO);
    
    // Determinar comportamiento según CREADO_POR
    const creadoPorSolicitante = solicitud.CREADO_POR === 'Solicitante';
    
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
    
    // Equipos (SIEMPRE SOLO LECTURA)
    $(`${modalContext} #editarEquipos`).val(solicitud.EQUIPOS || '').prop('readonly', true);
    
    // Características de la Intervención (SIEMPRE SOLO LECTURA)
    $(`${modalContext} #editarTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '').prop('disabled', true);
    $(`${modalContext} #editarRiesgo`).val(solicitud.RIESGOS || '').prop('disabled', true);
    $(`${modalContext} #editarSODI`).val(solicitud.SODI || '').prop('disabled', true);
    
    // Potencia
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarPotencia`).val(solicitud.POTENCIA || '').prop('readonly', creadoPorSolicitante);
    
    // Descripción y Condiciones
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarDescripcion`).val(solicitud.DESCRIPCION || '').prop('readonly', creadoPorSolicitante);
    $(`${modalContext} #editarCondiciones`).val(solicitud.CONDICIONES || '').prop('readonly', creadoPorSolicitante);
    
    // Afectaciones (SIEMPRE SOLO LECTURA)
    $(`${modalContext} #editarAfectaciones`).val(solicitud.AFECTACIONES || '').prop('readonly', true);
    
    // Comentarios
    // Si CREADO_POR = "Solicitante" -> SOLO LECTURA
    // Si CREADO_POR = "Administrador" -> EDITABLE
    $(`${modalContext} #editarComentarios`).val(solicitud.COMENTARIOS || '').prop('readonly', creadoPorSolicitante);
    
    // Archivo Adjunto (SIEMPRE EDITABLE - se maneja en el HTML)
    if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
        $(`${modalContext} #editarAdjuntoActual`).text(solicitud.ADJUNTO);
        $(`${modalContext} #editarDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #editarAdjuntoActual`).text('Sin archivo adjunto');
        $(`${modalContext} #editarDescargarAdjunto`).hide();
    }
    
    // Guardar ID de solicitud y CREADO_POR para usar en la actualización
    $(`${modalContext} #editSolicitudId`).val(solicitud.ID_REGISTRO);
    $(`${modalContext} #editCreadoPor`).val(solicitud.CREADO_POR);
    
    console.log('Modal editar poblado. CREADO_POR:', solicitud.CREADO_POR, '| Campos de fechas readonly:', creadoPorSolicitante);
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
    const modalContext = '#modalEditarSolicitudAdmin';
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

// Función para ver solicitud administrador gestionando - Administrador
function verSolicitudAdminGestionandoAdmin(solicitudId) {
    console.log('Ver solicitud Administrador Gestionando (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerAdminGestionando(solicitud, 'Admin');
    }
    $('#modalVerAdminGestionandoAdmin').modal('show');
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
    $('#gestionarDespRiesgo').val(solicitud.RIESGOS || '');
    $('#gestionarDespSODI').val(solicitud.SODI || '');
    $('#gestionarDespPotencia').val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones (SOLO LECTURA)
    $('#gestionarDespDescripcion').val(solicitud.DESCRIPCION || '');
    $('#gestionarDespCondiciones').val(solicitud.CONDICIONES || '');
    $('#gestionarDespAfectaciones').val(solicitud.AFECTACIONES || '');
    $('#gestionarDespComentariosActuales').val(solicitud.COMENTARIOS || '');
    
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
    
    // Configurar transiciones de estado según el estado actual
    configurarTransicionesEstadoDesp(solicitud.ESTADO);
    
    console.log('Modal gestionar despachador poblado correctamente');
}

// Función para configurar las transiciones de estado disponibles
function configurarTransicionesEstadoDesp(estadoActual) {
    const contenedor = $('#gestionarDespAccionesContainer');
    contenedor.empty();
    
    let opcionesHTML = '';
    
    switch(estadoActual) {
        case 'Despachador Gestionando':
            // Puede avanzar a "Programada"
            opcionesHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="accionDesp" id="accionProgramada" value="Programada" checked>
                    <label class="form-check-label" for="accionProgramada">
                        <strong>Programar Solicitud</strong> - Cambiar estado a "Programada"
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
    $(`${modalContext} #verDespSODI`).val(solicitud.SODI || '-');
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
    $('#modalNuevaSolicitudSolic').modal('show');
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
    $(`${modalContext} #editarSolicRiesgo`).val(solicitud.RIESGOS || '');
    
    // SODI - radio buttons
    if (solicitud.SODI === 'Sí') {
        $(`${modalContext} #editarSolicSODISi`).prop('checked', true);
    } else if (solicitud.SODI === 'No') {
        $(`${modalContext} #editarSolicSODINo`).prop('checked', true);
    }
    
    $(`${modalContext} #editarSolicPotencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`${modalContext} #editarSolicDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #editarSolicCondiciones`).val(solicitud.CONDICIONES || '');
    
    // Afectaciones - select múltiple
    if (solicitud.AFECTACIONES) {
        const afectaciones = solicitud.AFECTACIONES.split(',').map(a => a.trim());
        $(`${modalContext} #editarSolicAfectaciones`).val(afectaciones);
    }
    
    $(`${modalContext} #editarSolicComentarios`).val(solicitud.COMENTARIOS || '');
    
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
    $(`${modalContext} #clonarSolicRiesgo`).val(solicitud.RIESGOS || '');
    
    // SODI - manejar radio buttons
    if (solicitud.SODI === 'Sí') {
        $(`${modalContext} #clonarSolicSODISi`).prop('checked', true);
    } else if (solicitud.SODI === 'No') {
        $(`${modalContext} #clonarSolicSODINo`).prop('checked', true);
    }
    
    $(`${modalContext} #clonarSolicPotencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones - se copian los valores
    $(`${modalContext} #clonarSolicDescripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #clonarSolicCondiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #clonarSolicComentarios`).val(solicitud.COMENTARIOS || '');
    
    // Afectaciones - manejar select múltiple
    if (solicitud.AFECTACIONES) {
        const afectaciones = solicitud.AFECTACIONES.split(',').map(a => a.trim());
        $(`${modalContext} #clonarSolicAfectaciones`).val(afectaciones);
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
    $('#gestionarSolRiesgo').val(solicitud.RIESGOS || '');
    $('#gestionarSolSODI').val(solicitud.SODI || '');
    $('#gestionarSolPotencia').val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones (EDITABLE)
    $('#gestionarSolDescripcion').val(solicitud.DESCRIPCION || '');
    $('#gestionarSolCondiciones').val(solicitud.CONDICIONES || '');
    $('#gestionarSolAfectaciones').val(solicitud.AFECTACIONES || '');
    $('#gestionarSolComentariosActuales').val(solicitud.COMENTARIOS || '');
    
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
    
    // Limpiar observaciones del solicitante
    $('#gestionarSolObservaciones').val('');
    
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
    $(`${modalContext} #verSolicRiesgo`).val(solicitud.RIESGOS || '-');
    $(`${modalContext} #verSolicSODI`).val(solicitud.SODI || '-');
    $(`${modalContext} #verSolicPotencia`).val(solicitud.POTENCIA || '-');
    
    // Descripción y Condiciones
    $(`${modalContext} #verSolicDescripcion`).val(solicitud.DESCRIPCION || '-');
    $(`${modalContext} #verSolicCondiciones`).val(solicitud.CONDICIONES || '-');
    $(`${modalContext} #verSolicAfectaciones`).val(solicitud.AFECTACIONES || '-');
    $(`${modalContext} #verSolicComentarios`).val(solicitud.COMENTARIOS || '-');
    
    // Archivos Adjuntos
    if (solicitud.ADJUNTO) {
        $(`${modalContext} #verSolicAdjunto`).text(solicitud.ADJUNTO);
        $(`${modalContext} #verSolicDescargarAdjunto`).show();
    } else {
        $(`${modalContext} #verSolicAdjunto`).text('Sin archivo adjunto');
        $(`${modalContext} #verSolicDescargarAdjunto`).hide();
    }
    
    // Footer: Información del Sistema
    $(`${modalContext} #verSolicIDRegistro`).val(solicitud.ID_REGISTRO || '-');
    $(`${modalContext} #verSolicCreado`).val(solicitud.CREADO || '-');
    $(`${modalContext} #verSolicActualizado`).val(solicitud.ACTUALIZADO || '-');
    $(`${modalContext} #verSolicAdministrador`).val(solicitud.ADMINISTRADOR || '-');
    $(`${modalContext} #verSolicSolicitante`).val(solicitud.SOLICITANTE || '-');
}

// ============================================
// FUNCIONES PARA POBLAR MODALES DE VISUALIZACIÓN - ADMINISTRADOR
// ============================================

function poblarModalVerPendiente(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verPendiente' : 'verPendiente' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

function poblarModalVerDevuelta(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verDevueltaAdmin' : 'verDevuelta' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Observaciones de devolución
    $(`#${prefix}ObservacionesDevolucion`).val(solicitud.OBSERVACIONES || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

function poblarModalVerEnAnalisis(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verAnalisis' : 'verAnalisis' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

function poblarModalVerProgramada(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verProgramada' : 'verProgramada' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

function poblarModalVerVigente(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verVigente' : 'verVigente' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

function poblarModalVerExtendida(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verExtendida' : 'verExtendida' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

function poblarModalVerAdminGestionando(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'verAdmin' : 'verAdmin' + tipo;
    
    // Estado y Observaciones (Header)
    $(`#${prefix}Estado`).text(solicitud.ESTADO || '-');
    $(`#${prefix}Observaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
    
    // Identificación
    $(`#${prefix}IDSolicitud`).val(solicitud.ID_SOLICITUD || '');
    $(`#${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`#${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas
    $(`#${prefix}InicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
    $(`#${prefix}FinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
    
    // Fechas Efectivas
    $(`#${prefix}InicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '');
    $(`#${prefix}FinEfectivo`).val(solicitud.FIN_EFECTIVO || '');
    
    // Empresas
    $(`#${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`#${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos
    $(`#${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`#${prefix}EquiposIntervenir`).val(solicitud.EQUIPOS || '');
    
    // Características
    $(`#${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`#${prefix}Riesgo`).val(solicitud.RIESGOS || '');
    $(`#${prefix}SODI`).val(solicitud.SODI || '');
    $(`#${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones
    $(`#${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`#${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`#${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    $(`#${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Adjunto
    $(`#${prefix}Adjunto`).val(solicitud.ADJUNTO || '');
    
    // Metadata del sistema
    $(`#${prefix}ID`).text(solicitud.ID_REGISTRO || '');
    $(`#${prefix}Creado`).text(solicitud.CREADO || '');
    $(`#${prefix}Actualizado`).text(solicitud.ACTUALIZADO || '');
    $(`#${prefix}Administrador`).text(solicitud.ADMINISTRADOR || '');
    $(`#${prefix}Solicitante`).text(solicitud.SOLICITANTE || '');
    $(`#${prefix}CreadoPor`).text(solicitud.CREADO_POR || '');
}

// ============================================
// FUNCIÓN PARA POBLAR MODAL DE CLONAR
// ============================================

function poblarModalClonar(solicitud, tipo) {
    const prefix = tipo === 'Admin' ? 'clonar' : 'clonar' + tipo;
    
    // Usar el contexto del modal para evitar conflictos con otros modales cargados
    const modalContext = '#modalClonarSolicitudAdmin';
    
    // Mostrar ID de solicitud origen
    $(`${modalContext} #${prefix}IdSolicitudOrigen`).text(solicitud.ID_SOLICITUD || 'Sin ID');
    
    // Identificación - campos editables
    $(`${modalContext} #${prefix}Tipo`).val(solicitud.TIPO || '');
    $(`${modalContext} #${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Empresas Involucradas - campos editables
    $(`${modalContext} #${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`${modalContext} #${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos - campos editables
    $(`${modalContext} #${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`${modalContext} #${prefix}Potencia`).val(solicitud.POTENCIA || '');
    
    // Descripción y Condiciones - campos editables
    $(`${modalContext} #${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
}

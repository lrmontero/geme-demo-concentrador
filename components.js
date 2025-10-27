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
    'CEME1': ['Paño 1', 'Paño 2', 'Transformador T1', 'Transformador T2', 'Sección Barra A', 'SCADA', 'Medidor M1', 'Compensador C1', 'Grupo Emergencia', 'Batería', 'Cargador', 'Telecomunicación', 'Línea L1', 'Otros'],
    'Nueva Renca': ['Paño NR1', 'Paño NR2', 'Transformador TNR1', 'Sección Barra B', 'SCADA', 'Medidor M2', 'Compensador C2', 'Tendido Cable', 'Telecomunicación', 'Línea L2', 'Otros'],
    'Santa Lidia': ['Paño SL1', 'Paño SL2', 'Paño SL3', 'Transformador TSL1', 'Transformador TSL2', 'Sección Barra C', 'SCADA', 'Medidor M3', 'Medidor M4', 'Grupo Emergencia', 'Batería', 'Cargador', 'Telecomunicación', 'Línea L3', 'Otros'],
    'Los Vientos': ['Paño LV1', 'Transformador TLV1', 'SCADA', 'Medidor M5', 'Compensador C3', 'Telecomunicación', 'Línea L4', 'Otros'],
    'Santiago Solar': ['Paño SS1', 'Paño SS2', 'Transformador TSS1', 'SCADA', 'Medidor M6', 'Telecomunicación', 'Otros']
};

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
        fechaInicio: $('#fechaInicio').val(),
        fechaFin: $('#fechaFin').val(),
        instalacionGM: $('#instalacionGM').val(),
        equiposIntervenir: $('#equiposIntervenir').val(),
        tipoIntervencion: $('#tipoIntervencion').val(),
        riesgo: $('#riesgo').val(),
        descripcionTrabajo: $('#descripcionTrabajo').val(),
        condicionesRequeridas: $('#condicionesRequeridas').val(),
        afectaciones: $('#afectaciones').val(),
        sodi: $('input[name="sodi"]:checked').val(),
        comentarios: $('#comentarios').val(),
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
        fechaInicio: '2025-01-28T10:00',
        fechaFin: '2025-01-28T18:00',
        instalacionGM: 'Santa Lidia',
        equiposIntervenir: 'Paño SL1',
        tipoIntervencion: 'Intervención',
        riesgo: 'Medio',
        descripcionTrabajo: 'Mantenimiento preventivo del equipo',
        condicionesRequeridas: 'Desenergización completa',
        afectaciones: ['SSCC', 'Protecciones'],
        sodi: 'Si',
        comentarios: 'Coordinar con operador'
    };
    
    // Llenar el formulario
    $('#editSolicitudId').val(solicitudEjemplo.id);
    $('#editFechaInicio').val(solicitudEjemplo.fechaInicio);
    $('#editFechaFin').val(solicitudEjemplo.fechaFin);
    $('#editInstalacionGM').val(solicitudEjemplo.instalacionGM).trigger('change');
    
    // Esperar a que se carguen los equipos
    setTimeout(() => {
        $('#editEquiposIntervenir').val(solicitudEjemplo.equiposIntervenir);
    }, 100);
    
    $('#editTipoIntervencion').val(solicitudEjemplo.tipoIntervencion);
    $('#editRiesgo').val(solicitudEjemplo.riesgo);
    $('#editDescripcionTrabajo').val(solicitudEjemplo.descripcionTrabajo);
    $('#editCondicionesRequeridas').val(solicitudEjemplo.condicionesRequeridas);
    $('#editAfectaciones').val(solicitudEjemplo.afectaciones);
    $(`input[name="editSodi"][value="${solicitudEjemplo.sodi}"]`).prop('checked', true);
    $('#editComentarios').val(solicitudEjemplo.comentarios);
    
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
        fechaInicio: $('#editFechaInicio').val(),
        fechaFin: $('#editFechaFin').val(),
        instalacionGM: $('#editInstalacionGM').val(),
        equiposIntervenir: $('#editEquiposIntervenir').val(),
        tipoIntervencion: $('#editTipoIntervencion').val(),
        riesgo: $('#editRiesgo').val(),
        descripcionTrabajo: $('#editDescripcionTrabajo').val(),
        condicionesRequeridas: $('#editCondicionesRequeridas').val(),
        afectaciones: $('#editAfectaciones').val(),
        sodi: $('input[name="editSodi"]:checked').val(),
        comentarios: $('#editComentarios').val(),
        archivo: $('#editArchivoAdjunto')[0].files[0]
    };
    
    console.log('Actualizando solicitud:', formData);
    alert('Solicitud actualizada exitosamente');
    $('#modalEditarSolicitud').modal('hide');
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
        administrador: 'Carlos Ramírez',
        fechaInicio: '28/01/2025 10:00',
        fechaFin: '28/01/2025 18:00',
        instalacionGM: 'Santa Lidia',
        equiposIntervenir: 'Paño SL1, Paño SL2',
        tipoIntervencion: 'Intervención',
        riesgo: 'Medio',
        potencia: '200.0',
        descripcionTrabajo: 'Mantenimiento preventivo del equipo',
        condicionesRequeridas: 'Desenergización completa',
        afectaciones: 'SSCC, Protecciones',
        sodi: 'Sí',
        comentarios: 'Coordinar con operador'
    };
    
    // Metadata del sistema
    $('#verAnalisisID').text(solicitud.id);
    $('#verAnalisisUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verAnalisisFechaCreacion').text(solicitud.fechaCreacion);
    $('#verAnalisisFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verAnalisisAdministrador').text(solicitud.administrador);
    
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
        administrador: 'Ana Torres',
        fechaInicio: '28/01/2025 10:00',
        fechaFin: '28/01/2025 18:00',
        instalacionGM: 'Nueva Renca',
        equiposIntervenir: 'Transformador TNR1',
        tipoIntervencion: 'Desconexión',
        riesgo: 'Alto',
        potencia: '300.0',
        descripcionTrabajo: 'Reemplazo de transformador',
        condicionesRequeridas: 'Desenergización y aislamiento',
        afectaciones: 'SSCC, Protecciones, Medidores',
        sodi: 'Sí',
        comentarios: 'Requiere supervisión continua'
    };
    
    // Metadata del sistema
    $('#verAdminID').text(solicitud.id);
    $('#verAdminUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verAdminFechaCreacion').text(solicitud.fechaCreacion);
    $('#verAdminFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verAdminAdministrador').text(solicitud.administrador);
    
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

// Función para ver solicitud administrador gestionando - DESPACHADOR
function verSolicitudAdminGestionandoDesp(solicitudId) {
    console.log('Abriendo modal ver admin gestionando (Despachador) para solicitud:', solicitudId);
    
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Pedro Sánchez',
        fechaCreacion: '21/01/2025 11:15',
        fechaActualizacion: '27/01/2025 16:45',
        administrador: 'Ana Torres',
        fechaInicio: '28/01/2025 10:00',
        fechaFin: '28/01/2025 18:00',
        instalacionGM: 'Nueva Renca',
        equiposIntervenir: 'Transformador TNR1',
        tipoIntervencion: 'Desconexión',
        riesgo: 'Alto',
        potencia: '300.0',
        descripcionTrabajo: 'Reemplazo de transformador',
        condicionesRequeridas: 'Desenergización y aislamiento',
        afectaciones: 'SSCC, Protecciones, Medidores',
        sodi: 'Sí',
        comentarios: 'Requiere supervisión continua'
    };
    
    // Metadata del sistema
    $('#verAdminID').text(solicitud.id);
    $('#verAdminUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verAdminFechaCreacion').text(solicitud.fechaCreacion);
    $('#verAdminFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verAdminAdministrador').text(solicitud.administrador);
    
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
    
    $('#modalVerAdminGestionandoDesp').modal('show');
}

// Función para ver solicitud administrador gestionando - SOLICITANTE
function verSolicitudAdminGestionandoSolic(solicitudId) {
    console.log('Abriendo modal ver admin gestionando (Solicitante) para solicitud:', solicitudId);
    
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Pedro Sánchez',
        fechaCreacion: '21/01/2025 11:15',
        fechaActualizacion: '27/01/2025 16:45',
        administrador: 'Ana Torres',
        fechaInicio: '28/01/2025 10:00',
        fechaFin: '28/01/2025 18:00',
        instalacionGM: 'Nueva Renca',
        equiposIntervenir: 'Transformador TNR1',
        tipoIntervencion: 'Desconexión',
        riesgo: 'Alto',
        potencia: '300.0',
        descripcionTrabajo: 'Reemplazo de transformador',
        condicionesRequeridas: 'Desenergización y aislamiento',
        afectaciones: 'SSCC, Protecciones, Medidores',
        sodi: 'Sí',
        comentarios: 'Requiere supervisión continua'
    };
    
    // Metadata del sistema
    $('#verAdminID').text(solicitud.id);
    $('#verAdminUsuarioCreador').text(solicitud.usuarioCreador);
    $('#verAdminFechaCreacion').text(solicitud.fechaCreacion);
    $('#verAdminFechaActualizacion').text(solicitud.fechaActualizacion);
    $('#verAdminAdministrador').text(solicitud.administrador);
    
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
    
    $('#modalVerAdminGestionandoSolic').modal('show');
}

// Función para ver solicitud programada
function verSolicitudProgramada(solicitudId) {
    console.log('Abriendo modal ver programada para solicitud:', solicitudId);
    
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        usuarioCreador: 'Juan Pérez',
        fechaCreacion: '20/01/2025 10:00',
        fechaActualizacion: '24/01/2025 15:30',
        administrador: 'Luis Fernández',
        fechaInicio: '25/01/2025 09:00',
        fechaFin: '25/01/2025 17:00',
        instalacionGM: 'CEME1',
        equiposIntervenir: 'Paño 1, Paño 2',
        tipoIntervencion: 'Intervención',
        riesgo: 'Bajo',
        potencia: '150.5',
        descripcionTrabajo: 'Inspección rutinaria programada',
        condicionesRequeridas: 'Acceso controlado',
        afectaciones: 'SSCC',
        sodi: 'No',
        comentarios: 'Trabajo programado y aprobado'
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
        fechaInicio: '28/01/2025 09:00',
        fechaFin: '28/01/2025 17:00',
        instalacionGM: 'Santa Lidia',
        equiposIntervenir: 'Paño SL1',
        tipoIntervencion: 'Intervención',
        riesgo: 'Bajo',
        potencia: '100.0',
        descripcionTrabajo: 'Mantenimiento preventivo anual',
        condicionesRequeridas: 'Desenergización parcial',
        afectaciones: 'SSCC',
        sodi: 'Sí',
        comentarios: 'Solicitud pendiente de aprobación'
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

// Función para clonar solicitud
function clonarSolicitud(solicitudId) {
    console.log('Abriendo modal clonar para solicitud:', solicitudId);
    
    // Datos de ejemplo de la solicitud a clonar
    const solicitud = {
        id: 'SOL-' + String(solicitudId).padStart(3, '0'),
        instalacionGM: 'CEME1',
        equiposIntervenir: 'Paño 1, Paño 2',
        tipoIntervencion: 'Intervención',
        riesgo: 'Bajo',
        potencia: '150.5',
        descripcionTrabajo: 'Inspección rutinaria de equipos',
        condicionesRequeridas: 'Acceso controlado, personal autorizado',
        afectaciones: 'SSCC',
        sodi: 'No',
        comentarios: 'Trabajo programado'
    };
    
    // Verificar si el modal existe
    if ($('#modalClonarSolicitud').length === 0) {
        console.error('Modal #modalClonarSolicitud no encontrado en el DOM');
        alert('Error: Modal no cargado. Por favor recarga la página.');
        return;
    }
    
    console.log('Modal encontrado, llenando campos...');
    
    // Llenar campos del modal
    $('#clonarIdSolicitud').text(solicitud.id);
    $('#clonarInstalacionGM').val(solicitud.instalacionGM);
    $('#clonarEquiposIntervenir').val(solicitud.equiposIntervenir);
    $('#clonarTipoIntervencion').val(solicitud.tipoIntervencion);
    $('#clonarRiesgo').val(solicitud.riesgo);
    $('#clonarPotencia').val(solicitud.potencia);
    $('#clonarDescripcionTrabajo').val(solicitud.descripcionTrabajo);
    $('#clonarCondicionesRequeridas').val(solicitud.condicionesRequeridas);
    $('#clonarAfectaciones').val(solicitud.afectaciones);
    $('#clonarSODI').val(solicitud.sodi);
    $('#clonarComentarios').val(solicitud.comentarios);
    
    // Guardar el ID de la solicitud para usar en la confirmación
    $('#modalClonarSolicitud').data('solicitudId', solicitudId);
    
    console.log('Mostrando modal...');
    $('#modalClonarSolicitud').modal('show');
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
        fechaInicio: '28/01/2025 09:00',
        fechaFin: '28/01/2025 17:00',
        instalacionGM: 'Santa Lidia',
        equiposIntervenir: 'Paño SL1',
        tipoIntervencion: 'Intervención',
        riesgo: 'Bajo',
        potencia: '100.0',
        descripcionTrabajo: 'Mantenimiento preventivo anual'
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
    if (solicitud) {
        poblarModalClonar(solicitud, 'Admin');
    }
    $('#modalClonarSolicitudAdmin').modal('show');
}

// Función para gestionar solicitud desde estado "En Análisis" - Administrador
function gestionarSolicitudAnalisisAdmin(solicitudId) {
    console.log('Gestionar solicitud En Análisis (Administrador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalGestionarAnalisis(solicitud, 'Admin');
    }
    $('#modalGestionarSolicitudAnalisisAdmin').modal('show');
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

// Función para abrir modal de editar solicitud - Despachador
function abrirModalEditarDesp(solicitudId) {
    console.log('Abriendo modal editar (Despachador) para solicitud:', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalEditar(solicitud, 'Desp');
    }
    $('#modalEditarSolicitudDesp').modal('show');
}

// Función para ver solicitud pendiente - Despachador
function verSolicitudPendienteDesp(solicitudId) {
    console.log('Ver solicitud Pendiente (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerPendiente(solicitud, 'Desp');
    }
    $('#modalVerPendienteDesp').modal('show');
}

// Función para ver solicitud en análisis - Despachador
function verSolicitudEnAnalisisDesp(solicitudId) {
    console.log('Ver solicitud En Análisis (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerEnAnalisis(solicitud, 'Desp');
    }
    $('#modalVerEnAnalisisDesp').modal('show');
}

// Función para ver solicitud programada - Despachador
function verSolicitudProgramadaDesp(solicitudId) {
    console.log('Ver solicitud Programada (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerProgramada(solicitud, 'Desp');
    }
    $('#modalVerProgramadaDesp').modal('show');
}

// Función para clonar solicitud - Despachador
function clonarSolicitudDesp(solicitudId) {
    console.log('Clonar solicitud (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalClonar(solicitud, 'Desp');
    }
    $('#modalClonarSolicitudDesp').modal('show');
}

// Función para ver solicitud vigente - Despachador
function verSolicitudVigenteDesp(solicitudId) {
    console.log('Ver solicitud Vigente (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerVigente(solicitud, 'Desp');
    }
    $('#modalVerVigenteDesp').modal('show');
}

// Función para ver solicitud extendida - Despachador
function verSolicitudExtendidaDesp(solicitudId) {
    console.log('Ver solicitud Extendida (Despachador):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerExtendida(solicitud, 'Desp');
    }
    $('#modalVerExtendidaDesp').modal('show');
}

// Función para gestionar solicitud programada - Despachador
function gestionarSolicitudProgramadaDesp(solicitudId) {
    console.log('Gestionar solicitud Programada (Despachador):', solicitudId);
    $('#modalGestionarSolicitudProgramadaDesp').modal('show');
}

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
    if (solicitud) {
        poblarModalEditar(solicitud, 'Solic');
    }
    $('#modalEditarSolicitudSolic').modal('show');
}

// Función para ver solicitud pendiente - Solicitante
function verSolicitudPendienteSolic(solicitudId) {
    console.log('Ver solicitud Pendiente (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerPendiente(solicitud, 'Solic');
    }
    $('#modalVerPendienteSolic').modal('show');
}

// Función para ver solicitud en análisis - Solicitante
function verSolicitudEnAnalisisSolic(solicitudId) {
    console.log('Ver solicitud En Análisis (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerEnAnalisis(solicitud, 'Solic');
    }
    $('#modalVerEnAnalisisSolic').modal('show');
}

// Función para ver solicitud programada - Solicitante
function verSolicitudProgramadaSolic(solicitudId) {
    console.log('Ver solicitud Programada (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerProgramada(solicitud, 'Solic');
    }
    $('#modalVerProgramadaSolic').modal('show');
}

// Función para ver solicitud administrador gestionando - Solicitante
function verSolicitudAdminGestionandoSolic(solicitudId) {
    console.log('Ver solicitud Administrador Gestionando (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalVerAdminGestionando(solicitud, 'Solic');
    }
    $('#modalVerAdminGestionandoSolic').modal('show');
}

// Función para clonar solicitud - Solicitante
function clonarSolicitudSolic(solicitudId) {
    console.log('Clonar solicitud (Solicitante):', solicitudId);
    const solicitud = obtenerSolicitud(solicitudId);
    if (solicitud) {
        poblarModalClonar(solicitud, 'Solic');
    }
    $('#modalClonarSolicitudSolic').modal('show');
}

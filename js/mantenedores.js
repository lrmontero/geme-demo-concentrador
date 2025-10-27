// ===== MANTENEDORES - FUNCIONES GLOBALES =====

// Variables globales para almacenar datos
if (typeof window.equiposPorInstalacion === 'undefined') {
	window.equiposPorInstalacion = {};
}

if (typeof window.empresas === 'undefined') {
	window.empresas = [
		{ id: 1, nombre: 'CDC', codigo: 'CDC', estado: 'Activo' },
		{ id: 2, nombre: 'GM', codigo: 'GM', estado: 'Activo' },
		{ id: 3, nombre: 'Transelec Norte', codigo: 'TN', estado: 'Activo' },
		{ id: 4, nombre: 'Transelec Sur', codigo: 'TS', estado: 'Activo' },
		{ id: 5, nombre: 'Chilquinta', codigo: 'CHQ', estado: 'Activo' },
		{ id: 6, nombre: 'Saesa', codigo: 'SAESA', estado: 'Activo' }
	];
}

// ===== FUNCIONES GENERALES =====

// Función para cambiar de categoría de mantenedor
function verMantenedorCategoria(categoria, elemento) {
	// Remover clase activa de todas las filas
	$('#tabla-datos-modulos tr').removeClass('trActive');
	// Agregar clase activa al elemento clickeado
	$(elemento).closest('tr').addClass('trActive');
	
	console.log('Categoría seleccionada:', categoria);
	
	// Aquí puedes cargar diferentes mantenedores según la categoría
	if (categoria === 'Concentrador') {
		// Mostrar mantenedores del concentrador
		$('#tabla-datos').html(`
			<tr onclick="view_mantenedor('PlazoEnvio', this)" style="cursor:pointer" class="trActive">
				<th scope="row">1</th>
				<td><i class="fas fa-clock mr-2 text-warning"></i>Plazo Máximo de Envío de Solicitudes Programadas</td>
			</tr>
			<tr onclick="view_mantenedor('PlazoSODI', this)" style="cursor:pointer">
				<th scope="row">2</th>
				<td><i class="fas fa-exclamation-triangle mr-2 text-danger"></i>Plazo Máximo de Envío de Solicitudes SODI</td>
			</tr>
			<tr onclick="view_mantenedor('EquiposInstalacion', this)" style="cursor:pointer">
				<th scope="row">3</th>
				<td><i class="fas fa-tools mr-2 text-info"></i>Equipos a Intervenir por Instalación</td>
			</tr>
			<tr onclick="view_mantenedor('Empresas', this)" style="cursor:pointer">
				<th scope="row">4</th>
				<td><i class="fas fa-building mr-2 text-success"></i>Empresas Solicitantes/Receptoras</td>
			</tr>
		`);
	}
}

// Función para ver un mantenedor específico
function view_mantenedor(mantenedor, elemento) {
	// Remover clase activa de todas las filas de mantenedores
	$('#tabla-datos tr').removeClass('trActive');
	// Agregar clase activa al elemento clickeado
	if (elemento) {
		$(elemento).closest('tr').addClass('trActive');
	}
	
	// Ocultar todos los mantenedores
	$('[id^="mant"]').addClass('d-none').removeClass('activeTable');
	
	// Mostrar el mantenedor seleccionado
	if (mantenedor === 'PlazoEnvio') {
		$('#mantPlazoEnvio').removeClass('d-none').addClass('activeTable');
		cargarDatosPlazoEnvio();
	} else if (mantenedor === 'PlazoSODI') {
		$('#mantPlazoSODI').removeClass('d-none').addClass('activeTable');
		cargarDatosPlazoSODI();
	} else if (mantenedor === 'EquiposInstalacion') {
		$('#mantEquiposInstalacion').removeClass('d-none').addClass('activeTable');
		// Resetear selector
		$('#selectInstalacionEquipos').val('');
		$('#contenedorEquipos').hide();
	} else if (mantenedor === 'Empresas') {
		$('#mantEmpresas').removeClass('d-none').addClass('activeTable');
		cargarEmpresas();
	} else if (mantenedor === 'Instalaciones') {
		$('#mantInstalaciones').removeClass('d-none').addClass('activeTable');
		cargarInstalaciones();
	}
	
	console.log('Mantenedor seleccionado:', mantenedor);
}

// ===== FUNCIONES PLAZO DE ENVÍO =====

function cargarDatosPlazoEnvio() {
	console.log('Cargando datos de plazo de envío...');
	
	const datosEjemplo = {
		lunes: { dias: 5, hora: '12:00' },
		martes: { dias: 5, hora: '12:00' },
		miercoles: { dias: 5, hora: '12:00' },
		jueves: { dias: 5, hora: '12:00' },
		viernes: { dias: 5, hora: '12:00' }
	};
	
	Object.keys(datosEjemplo).forEach(dia => {
		$(`#dias-${dia}`).val(datosEjemplo[dia].dias);
		$(`#hora-${dia}`).val(datosEjemplo[dia].hora);
	});
}

function guardarPlazo(dia) {
	const dias = $(`#dias-${dia}`).val();
	const hora = $(`#hora-${dia}`).val();
	
	if (!dias || !hora) {
		alert('Por favor complete todos los campos');
		return;
	}
	
	console.log(`Guardando plazo para ${dia}:`, { dias, hora });
	
	const diaCapitalizado = dia.charAt(0).toUpperCase() + dia.slice(1);
	alert(`✓ Plazo actualizado para ${diaCapitalizado}:\n${dias} días hábiles antes de las ${hora} hrs.`);
	
	const btn = event.target.closest('button');
	$(btn).prop('disabled', true).html('<i class="fas fa-check"></i>');
	setTimeout(() => {
		$(btn).prop('disabled', false).html('<i class="fas fa-save"></i>');
	}, 2000);
}

// ===== FUNCIONES PLAZO SODI =====

function cargarDatosPlazoSODI() {
	console.log('Cargando datos de plazo SODI...');
	
	const datosEjemplo = {
		'santiago-solar': { dias: 3, hora: '10:00' },
		'nueva-renca': { dias: 3, hora: '10:00' },
		'los-vientos': { dias: 3, hora: '10:00' },
		'santa-lidia': { dias: 3, hora: '10:00' },
		'ceme1': { dias: 3, hora: '10:00' }
	};
	
	Object.keys(datosEjemplo).forEach(instalacion => {
		$(`#dias-${instalacion}`).val(datosEjemplo[instalacion].dias);
		$(`#hora-${instalacion}`).val(datosEjemplo[instalacion].hora);
	});
}

function guardarPlazoSODI(instalacion) {
	const dias = $(`#dias-${instalacion}`).val();
	const hora = $(`#hora-${instalacion}`).val();
	
	if (!dias || !hora) {
		alert('Por favor complete todos los campos');
		return;
	}
	
	console.log(`Guardando plazo SODI para ${instalacion}:`, { dias, hora });
	
	const nombresInstalacion = {
		'santiago-solar': 'Santiago Solar',
		'nueva-renca': 'Nueva Renca',
		'los-vientos': 'Los Vientos',
		'santa-lidia': 'Santa Lidia',
		'ceme1': 'CEME1'
	};
	
	const nombreInstalacion = nombresInstalacion[instalacion] || instalacion;
	alert(`✓ Plazo SODI actualizado para ${nombreInstalacion}:\n${dias} días hábiles antes de las ${hora} hrs.`);
	
	const btn = event.target.closest('button');
	$(btn).prop('disabled', true).html('<i class="fas fa-check"></i>');
	setTimeout(() => {
		$(btn).prop('disabled', false).html('<i class="fas fa-save"></i>');
	}, 2000);
}

// ===== FUNCIONES EQUIPOS POR INSTALACIÓN =====

function cargarEquiposInstalacion(instalacion) {
	if (!instalacion) {
		$('#contenedorEquipos').hide();
		return;
	}
	
	const nombresInstalacion = {
		'santiago-solar': 'Santiago Solar',
		'nueva-renca': 'Nueva Renca',
		'santa-lidia': 'Santa Lidia',
		'los-vientos': 'Los Vientos',
		'ceme1': 'CEME1'
	};
	
	$('#nombreInstalacionActual').text(nombresInstalacion[instalacion]);
	$('#contenedorEquipos').show();
	
	if (!window.equiposPorInstalacion[instalacion]) {
		window.equiposPorInstalacion[instalacion] = [
			{ id: 1, nombre: 'Paños 1', tipo: 'Paños', estado: 'Activo' },
			{ id: 2, nombre: 'Transformador T1', tipo: 'Transformador', estado: 'Activo' },
			{ id: 3, nombre: 'Scada Principal', tipo: 'Scada', estado: 'Activo' }
		];
	}
	
	renderizarTablaEquipos(instalacion);
}

function renderizarTablaEquipos(instalacion) {
	const equipos = window.equiposPorInstalacion[instalacion] || [];
	let html = '';
	
	if (equipos.length === 0) {
		html = '<tr><td colspan="5" class="text-center text-muted">No hay equipos configurados para esta instalación</td></tr>';
	} else {
		equipos.forEach((equipo, index) => {
			const estadoBadge = equipo.estado === 'Activo' 
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';
			
			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${equipo.nombre}</strong></td>
					<td>${equipo.tipo}</td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarEquipo(${equipo.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
						<button class="btn btn-sm btn-danger" onclick="eliminarEquipo(${equipo.id})" title="Eliminar">
							<i class="fas fa-trash"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}
	
	$('#tablaEquipos').html(html);
}

function agregarEquipo() {
	const instalacion = $('#selectInstalacionEquipos').val();
	if (!instalacion) {
		alert('Por favor seleccione una instalación primero');
		return;
	}
	
	$('#tituloModalEquipo').text('Agregar Equipo');
	$('#equipoId').val('');
	$('#instalacionActual').val(instalacion);
	$('#formEquipo')[0].reset();
	$('#modalEquipo').modal('show');
}

function editarEquipo(id) {
	const instalacion = $('#selectInstalacionEquipos').val();
	const equipo = window.equiposPorInstalacion[instalacion].find(e => e.id === id);
	
	if (!equipo) return;
	
	$('#tituloModalEquipo').text('Editar Equipo');
	$('#equipoId').val(id);
	$('#instalacionActual').val(instalacion);
	$('#nombreEquipo').val(equipo.nombre);
	$('#tipoEquipo').val(equipo.tipo);
	$('#estadoEquipo').val(equipo.estado);
	
	$('#modalEquipo').modal('show');
}

function guardarEquipo() {
	const nombreEquipo = $('#nombreEquipo').val().trim();
	const tipoEquipo = $('#tipoEquipo').val();
	const estadoEquipo = $('#estadoEquipo').val();
	const instalacion = $('#instalacionActual').val();
	const equipoId = $('#equipoId').val();
	
	if (!nombreEquipo) {
		alert('Por favor ingrese el nombre del equipo');
		return;
	}
	
	const nuevoEquipo = {
		id: equipoId ? parseInt(equipoId) : Date.now(),
		nombre: nombreEquipo,
		tipo: tipoEquipo,
		estado: estadoEquipo
	};
	
	if (!window.equiposPorInstalacion[instalacion]) {
		window.equiposPorInstalacion[instalacion] = [];
	}
	
	if (equipoId) {
		const index = window.equiposPorInstalacion[instalacion].findIndex(e => e.id === parseInt(equipoId));
		window.equiposPorInstalacion[instalacion][index] = nuevoEquipo;
	} else {
		window.equiposPorInstalacion[instalacion].push(nuevoEquipo);
	}
	
	console.log('Guardando equipo:', nuevoEquipo);
	
	$('#modalEquipo').modal('hide');
	renderizarTablaEquipos(instalacion);
	
	alert('✓ Equipo guardado correctamente');
}

function eliminarEquipo(id) {
	if (!confirm('¿Está seguro que desea eliminar este equipo?')) {
		return;
	}
	
	const instalacion = $('#selectInstalacionEquipos').val();
	window.equiposPorInstalacion[instalacion] = window.equiposPorInstalacion[instalacion].filter(e => e.id !== id);
	
	console.log('Eliminando equipo:', id);
	
	renderizarTablaEquipos(instalacion);
	alert('✓ Equipo eliminado correctamente');
}

// ===== FUNCIONES EMPRESAS =====

function cargarEmpresas() {
	console.log('Cargando empresas...');
	renderizarTablaEmpresas();
}

function renderizarTablaEmpresas() {
	let html = '';
	
	if (window.empresas.length === 0) {
		html = '<tr><td colspan="5" class="text-center text-muted">No hay empresas configuradas</td></tr>';
	} else {
		window.empresas.forEach((empresa, index) => {
			const estadoBadge = empresa.estado === 'Activo' 
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';
			
			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${empresa.nombre}</strong></td>
					<td class="text-center"><span class="badge badge-primary">${empresa.codigo}</span></td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarEmpresa(${empresa.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
						<button class="btn btn-sm btn-danger" onclick="eliminarEmpresa(${empresa.id})" title="Eliminar">
							<i class="fas fa-trash"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}
	
	$('#tablaEmpresas').html(html);
}

function agregarEmpresa() {
	$('#tituloModalEmpresa').text('Agregar Empresa');
	$('#empresaId').val('');
	$('#formEmpresa')[0].reset();
	$('#estadoEmpresa').val('Activo');
	$('#modalEmpresa').modal('show');
}

function editarEmpresa(id) {
	const empresa = window.empresas.find(e => e.id === id);
	
	if (!empresa) return;
	
	$('#tituloModalEmpresa').text('Editar Empresa');
	$('#empresaId').val(id);
	$('#nombreEmpresa').val(empresa.nombre);
	$('#codigoEmpresa').val(empresa.codigo);
	$('#estadoEmpresa').val(empresa.estado);
	
	$('#modalEmpresa').modal('show');
}

function guardarEmpresa() {
	const nombreEmpresa = $('#nombreEmpresa').val().trim();
	const codigoEmpresa = $('#codigoEmpresa').val().trim().toUpperCase();
	const estadoEmpresa = $('#estadoEmpresa').val();
	const empresaId = $('#empresaId').val();
	
	if (!nombreEmpresa || !codigoEmpresa) {
		alert('Por favor complete todos los campos obligatorios');
		return;
	}
	
	const nuevaEmpresa = {
		id: empresaId ? parseInt(empresaId) : Date.now(),
		nombre: nombreEmpresa,
		codigo: codigoEmpresa,
		estado: estadoEmpresa
	};
	
	if (empresaId) {
		const index = window.empresas.findIndex(e => e.id === parseInt(empresaId));
		window.empresas[index] = nuevaEmpresa;
	} else {
		window.empresas.push(nuevaEmpresa);
	}
	
	console.log('Guardando empresa:', nuevaEmpresa);
	
	$('#modalEmpresa').modal('hide');
	renderizarTablaEmpresas();
	
	alert('✓ Empresa guardada correctamente');
}

function eliminarEmpresa(id) {
	const empresa = window.empresas.find(e => e.id === id);
	
	if (!confirm(`¿Está seguro que desea eliminar la empresa "${empresa.nombre}"?`)) {
		return;
	}
	
	window.empresas = window.empresas.filter(e => e.id !== id);
	
	console.log('Eliminando empresa:', id);
	
	renderizarTablaEmpresas();
	alert('✓ Empresa eliminada correctamente');
}

// ===== FUNCIONES PARA MANTENEDOR DE INSTALACIONES =====

// Variable global para almacenar instalaciones
if (typeof window.instalaciones === 'undefined') {
	window.instalaciones = [
		{ id: 1, nombre: 'CEME1', codigo: 'CEME1', estado: 'Activo' },
		{ id: 2, nombre: 'Nueva Renca', codigo: 'NR', estado: 'Activo' },
		{ id: 3, nombre: 'Santa Lidia', codigo: 'SL', estado: 'Activo' },
		{ id: 4, nombre: 'Los Vientos', codigo: 'LV', estado: 'Activo' },
		{ id: 5, nombre: 'Santiago Solar', codigo: 'SS', estado: 'Activo' }
	];
}
var instalaciones = window.instalaciones;

// Función para cargar instalaciones
function cargarInstalaciones() {
	// Aquí deberías cargar desde SharePoint
	console.log('Cargando instalaciones...');
	renderizarTablaInstalaciones();
}

// Función para renderizar tabla de instalaciones
function renderizarTablaInstalaciones() {
	let html = '';
	
	if (window.instalaciones.length === 0) {
		html = '<tr><td colspan="5" class="text-center text-muted">No hay instalaciones configuradas</td></tr>';
	} else {
		window.instalaciones.forEach((instalacion, index) => {
			const estadoBadge = instalacion.estado === 'Activo' 
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';
			
			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${instalacion.nombre}</strong></td>
					<td class="text-center"><span class="badge badge-info">${instalacion.codigo}</span></td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarInstalacion(${instalacion.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
						<button class="btn btn-sm btn-danger" onclick="eliminarInstalacion(${instalacion.id})" title="Eliminar">
							<i class="fas fa-trash"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}
	
	$('#tablaInstalaciones').html(html);
}

// Función para agregar nueva instalación
function agregarInstalacion() {
	$('#tituloModalInstalacion').text('Agregar Instalación');
	$('#instalacionId').val('');
	$('#formInstalacion')[0].reset();
	$('#estadoInstalacion').val('Activo');
	$('#modalInstalacion').modal('show');
}

// Función para editar instalación
function editarInstalacion(id) {
	const instalacion = window.instalaciones.find(i => i.id === id);
	
	if (!instalacion) return;
	
	$('#tituloModalInstalacion').text('Editar Instalación');
	$('#instalacionId').val(id);
	$('#nombreInstalacion').val(instalacion.nombre);
	$('#codigoInstalacion').val(instalacion.codigo);
	$('#estadoInstalacion').val(instalacion.estado);
	
	$('#modalInstalacion').modal('show');
}

// Función para guardar instalación
function guardarInstalacion() {
	const nombreInstalacion = $('#nombreInstalacion').val().trim();
	const codigoInstalacion = $('#codigoInstalacion').val().trim().toUpperCase();
	const estadoInstalacion = $('#estadoInstalacion').val();
	const instalacionId = $('#instalacionId').val();
	
	if (!nombreInstalacion || !codigoInstalacion) {
		alert('Por favor complete todos los campos obligatorios');
		return;
	}
	
	const nuevaInstalacion = {
		id: instalacionId ? parseInt(instalacionId) : Date.now(),
		nombre: nombreInstalacion,
		codigo: codigoInstalacion,
		estado: estadoInstalacion
	};
	
	if (instalacionId) {
		// Editar
		const index = window.instalaciones.findIndex(i => i.id === parseInt(instalacionId));
		window.instalaciones[index] = nuevaInstalacion;
	} else {
		// Agregar
		window.instalaciones.push(nuevaInstalacion);
	}
	instalaciones = window.instalaciones;
	
	// Aquí deberías guardar en SharePoint
	console.log('Guardando instalación:', nuevaInstalacion);
	
	$('#modalInstalacion').modal('hide');
	renderizarTablaInstalaciones();
	
	alert('✓ Instalación guardada correctamente');
}

// Función para eliminar instalación
function eliminarInstalacion(id) {
	const instalacion = window.instalaciones.find(i => i.id === id);
	
	if (!confirm(`¿Está seguro que desea eliminar la instalación "${instalacion.nombre}"?`)) {
		return;
	}
	
	window.instalaciones = window.instalaciones.filter(i => i.id !== id);
	instalaciones = window.instalaciones;
	
	// Aquí deberías eliminar en SharePoint
	console.log('Eliminando instalación:', id);
	
	renderizarTablaInstalaciones();
	alert('✓ Instalación eliminada correctamente');
}

// Inicializar cuando se carga la vista
$(document).ready(function() {
	// Solo inicializar si estamos en la vista de mantenedores
	if ($('#mantPlazoEnvio').length > 0) {
		cargarDatosPlazoEnvio();
	}
});

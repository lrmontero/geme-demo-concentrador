# Documentación: Vista Solicitante

## Descripción General
La vista `solicitante.html` es la interfaz principal para que los usuarios con rol de **Solicitante** gestionen sus solicitudes en el sistema Concentrador de Solicitudes. Permite visualizar, crear, editar, clonar y gestionar solicitudes de desconexión/intervención.

---

## Estructura de la Vista

### 1. Encabezado
```html
<h2 class="mb-4"><i class="fas fa-file-alt"></i> Solicitudes</h2>
```
- Título principal de la vista con icono de documento.

---

### 2. Sistema de Filtros

#### 2.1 Botonera de Control de Filtros
- **Botón "Mostrar/Ocultar filtro"**: Expande o colapsa el panel de filtros.
- **Botón "Limpiar filtro"**: Limpia todos los filtros aplicados.

#### 2.2 Panel de Filtros (Colapsable)
El panel contiene los siguientes campos de filtrado:

**Fila 1:**
- **Instalación GM**: Dropdown con opciones:
  - Todas
  - Santiago Solar
  - Nueva Renca
  - Los Vientos
  - Santa Lidia
  - CEME1

- **Instalaciones/Equipos a intervenir**: Campo de texto libre para búsqueda.

- **Tipo Intervención**: Dropdown con opciones:
  - Todos
  - Intervención
  - Desconexión

- **Riesgo**: Dropdown con opciones:
  - Todos
  - Bajo
  - Medio
  - Alto

**Fila 2:**
- **Aplica SODI**: Dropdown con opciones:
  - Todos
  - Sí
  - No

- **Fecha Desde**: Campo de fecha para rango inicial.
- **Fecha Hasta**: Campo de fecha para rango final.

**Botones de Acción:**
- **Filtrar**: Aplica los filtros seleccionados (`aplicarFiltrosSolic()`).
- **Limpiar**: Limpia todos los filtros (`limpiarFiltrosSolic()`).

---

### 3. Botonera de Acciones y Filtros de Estado

#### 3.1 Botón Nueva Solicitud
```javascript
onclick="abrirModalNuevaSolicitudSolic()"
```
Abre el modal para crear una nueva solicitud.

#### 3.2 Filtros de Estado (Radio Buttons)
- **En Proceso** (seleccionado por defecto): Muestra solicitudes activas.
  - Estados incluidos: `Pendiente`, `Devuelta`, `En Análisis`, `Administrador Gestionando`, `Programada`, `Vigente`, `Extendida`,
  
- **Finalizadas**: Muestra solicitudes completadas.
  - Estados incluidos: `Finalizada`, `No Solicitada`, `Rechazada`, `Suspendida`

---

### 4. Tabla de Solicitudes

#### 4.1 Estructura de Columnas
| Columna | Descripción | Índice |
|---------|-------------|--------|
| Acciones | Botones de acción (Ver, Editar, Clonar, Gestionar, Bitácora) | 0 |
| ID Registro | Identificador único de la solicitud | 1 |
| Fecha Prog. Inicio | Fecha programada de inicio | 2 |
| Fecha Prog. Fin | Fecha programada de finalización | 3 |
| Instalación GM | Instalación de GM donde se realizará la intervención | 4 |
| Instalaciones/Equipos a intervenir | Equipos específicos | 5 |
| Tipo Intervención | Tipo de trabajo (Intervención/Desconexión) | 6 |
| Riesgo | Nivel de riesgo (Bajo/Medio/Alto) | 7 |
| Aplica SODI | Si aplica SODI (Sí/No) | 8 |
| Estado | Estado actual de la solicitud | 9 |

#### 4.2 Configuración DataTable
```javascript
{
    "pageLength": 10,
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Mostrar todo"]],
    "responsive": true,
    "order": [[1, "desc"]], // Ordenar por ID descendente
    "columnDefs": [
        { "orderable": false, "targets": 0 } // Columna de acciones no ordenable
    ]
}
```

---

## Lógica JavaScript

### 1. Carga de Datos

#### 1.1 Función IIFE de Carga Inicial
```javascript
(function() {
    // Verificar que solicitudesData existe
    if (typeof solicitudesData === 'undefined') {
        setTimeout(arguments.callee, 100); // Reintentar en 100ms
        return;
    }
    
    // Filtrar solo solicitudes creadas por solicitante
    const solicitudes = solicitudesData.filter(sol => sol.CREADO_POR === 'Solicitante');
})();
```

**Proceso:**
1. Verifica que `solicitudesData` esté disponible (cargado desde `data/solicitudes.js`).
2. Si no está disponible, reintenta cada 100ms.
3. Filtra solo las solicitudes donde `CREADO_POR === 'Solicitante'`.
4. Genera dinámicamente las filas de la tabla.

---

### 2. Sistema de Acciones por Estado

#### 2.1 Estado "Devuelta" (Editable)
Cuando una solicitud está en estado **Devuelta**, el solicitante puede:
- ✏️ **Editar**: `abrirModalEditarSolic(ID_REGISTRO)`
- 👁️ **Ver**: `verSolicitudSolic(ID_REGISTRO)`
- 📋 **Clonar**: `clonarSolicitudSolic(ID_REGISTRO)`
- ➡️ **Gestionar**: `gestionarSolicitudSolic(ID_REGISTRO)` - Reenviar la solicitud
- 📝 **Bitácora**: `abrirBitacora(ID_REGISTRO)`

#### 2.2 Otros Estados (Solo Lectura)
Para estados no editables, el solicitante solo puede:
- 👁️ **Ver**: `verSolicitudSolic(ID_REGISTRO)`
- 📋 **Clonar**: `clonarSolicitudSolic(ID_REGISTRO)`
- 📝 **Bitácora**: `abrirBitacora(ID_REGISTRO)`

---

### 3. Sistema de Badges

#### 3.1 Badges de Riesgo
```javascript
switch(solicitud.RIESGO) {
    case 'Bajo': badgeRiesgo = 'badge-info'; break;      // Azul
    case 'Medio': badgeRiesgo = 'badge-warning'; break;  // Amarillo
    case 'Alto': badgeRiesgo = 'badge-danger'; break;    // Rojo
}
```

#### 3.2 Badges de Estado
```javascript
switch(solicitud.ESTADO) {
    case 'Pendiente': badgeEstado = 'badge-warning'; break;
    case 'Devuelta': badgeEstado = 'badge-danger'; break;
    case 'En Análisis': badgeEstado = 'badge-info'; break;
    case 'Administrador Gestionando': badgeEstado = 'badge-warning text-dark'; break;
    case 'Programada': badgeEstado = 'badge-success'; break;
    case 'Vigente': badgeEstado = 'badge-primary'; break;
    case 'Extendida': badgeEstado = 'badge-secondary'; break;
    case 'Finalizada': badgeEstado = 'badge-dark'; break;
    case 'Rechazada': badgeEstado = 'badge-danger'; break;
}
```

---

### 4. Sistema de Filtros

#### 4.1 Función `aplicarFiltrosSolic()`
Aplica filtros personalizados a las columnas de DataTable:

```javascript
window.aplicarFiltrosSolic = function() {
    const table = $('#tablaSolicitudesSolicitante').DataTable();
    
    // Mapeo de filtros a columnas
    table.column(4).search(filtroInstalacion);     // Instalación GM
    table.column(5).search(filtroEquipos);         // Equipos
    table.column(6).search(filtroTipoInterv);      // Tipo Intervención
    table.column(7).search(filtroRiesgo);          // Riesgo
    table.column(8).search(filtroSODI);            // Aplica SODI
    
    table.draw();
};
```

#### 4.2 Función `limpiarFiltrosSolic()`
Limpia todos los campos de filtro y resetea la tabla:

```javascript
window.limpiarFiltrosSolic = function() {
    // Limpiar inputs
    $('#filtroInstalacionGMSolic').val('');
    $('#filtroEquiposSolic').val('');
    // ... (resto de campos)
    
    // Limpiar búsquedas de DataTable
    const table = $('#tablaSolicitudesSolicitante').DataTable();
    table.search('').columns().search('').draw();
};
```

---

### 5. Filtro Personalizado de Estados

#### 5.1 Función `filtrarPorEstado(tipo)`
Filtra la tabla según el tipo de estado seleccionado:

```javascript
window.filtrarPorEstado = function(tipo) {
    filtroActual = tipo; // 'proceso' o 'finalizadas'
    const table = $('#tablaSolicitudesSolicitante').DataTable();
    table.draw();
};
```

#### 5.2 Filtro Personalizado de DataTable
```javascript
$.fn.dataTable.ext.search.push(
    function(settings, data, dataIndex) {
        const estadoColumna = data[9]; // Columna de Estado
        
        // Extraer texto del badge HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = estadoColumna;
        const estado = tempDiv.textContent.trim();
        
        if (filtroActual === 'proceso') {
            return estadosEnProceso.includes(estado);
        } else if (filtroActual === 'finalizadas') {
            return estadosFinalizadas.includes(estado);
        }
        return true;
    }
);
```

**Estados En Proceso:**
- Pendiente
- Devuelta
- En Análisis
- Administrador Gestionando
- Programada

**Estados Finalizadas:**
- Finalizada
- No Solicitada
- Rechazada
- Suspendida

---

### 6. Interacción con Filtros Colapsables

```javascript
$('#zona-filtro').on('show.bs.collapse', function () {
    $('#showHideFilter').html('<i class="fa fa-filter mr-2 text-white"></i> Ocultar filtro');
});

$('#zona-filtro').on('hide.bs.collapse', function () {
    $('#showHideFilter').html('<i class="fa fa-filter mr-2 text-white"></i> Mostrar filtro');
});
```

Cambia el texto del botón según el estado del panel de filtros.

---

## Dependencias

### Scripts Externos
1. **jQuery**: Para manipulación del DOM y eventos.
2. **DataTables**: Para funcionalidad de tabla avanzada.
3. **Bootstrap**: Para componentes UI (collapse, badges, etc.).
4. **data/solicitudes.js**: Fuente de datos (`solicitudesData`).
5. **modals/solicitante/modals-loader.js**: Carga los modales del solicitante.

---

## Flujo de Trabajo del Usuario

### 1. Visualización Inicial
1. La página carga y muestra solicitudes "En Proceso" por defecto.
2. Se filtran automáticamente las solicitudes donde `CREADO_POR === 'Solicitante'`.

### 2. Crear Nueva Solicitud
1. Click en "Nueva Solicitud".
2. Se abre el modal `nueva-solicitante.html`.
3. Completa el formulario y guarda.

### 3. Gestionar Solicitud Devuelta
1. Identifica una solicitud con estado "Devuelta".
2. Click en el icono de "Gestionar" (flecha).
3. Se abre el modal `gestionar-solicitante.html`.
4. Corrige los datos según observaciones.
5. Reenvía la solicitud.

### 4. Aplicar Filtros
1. Click en "Mostrar filtro".
2. Selecciona criterios de búsqueda.
3. Click en "Filtrar".
4. La tabla se actualiza con los resultados.

### 5. Ver Bitácora
1. Click en el icono de bitácora (clipboard).
2. Se abre el modal con el historial de cambios.

---

## Notas Técnicas

### Encapsulamiento con IIFE
Todo el código JavaScript está encapsulado en una **IIFE (Immediately Invoked Function Expression)** para evitar conflictos de variables globales:

```javascript
(function() {
    let filtroActual = 'proceso'; // Variable local
    // ... resto del código
})();
```

### Manejo de Asincronía
El sistema implementa un mecanismo de reintento para esperar la carga de datos:

```javascript
if (typeof solicitudesData === 'undefined') {
    setTimeout(arguments.callee, 100); // Reintentar
    return;
}
```

### Destrucción y Reinicialización de DataTable
Antes de inicializar DataTable, se destruye cualquier instancia previa:

```javascript
if ($.fn.DataTable.isDataTable('#tablaSolicitudesSolicitante')) {
    $('#tablaSolicitudesSolicitante').DataTable().destroy();
}
```

---

## Mejoras Futuras Sugeridas

1. **Filtro por Rango de Fechas**: Implementar la lógica para los campos "Fecha Desde" y "Fecha Hasta".
2. **Exportación de Datos**: Agregar botones para exportar a Excel/PDF.
3. **Búsqueda Global**: Mejorar la búsqueda para incluir todos los campos.
4. **Paginación Persistente**: Mantener la página actual al aplicar filtros.
5. **Indicadores Visuales**: Agregar tooltips con más información en los badges.
6. **Validación de Fechas**: Validar que "Fecha Hasta" sea posterior a "Fecha Desde".

---

## Versión
- **Última actualización**: Según `index.html` - v72
- **Archivo**: `views/solicitante.html`
- **Rol**: Solicitante

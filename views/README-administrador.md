# Documentación: Vista Administrador

## Descripción General
La vista `administrador.html` es la interfaz principal para usuarios con rol de **Administrador**. Permite gestionar **todas las solicitudes** del sistema, independientemente de quién las creó. El administrador tiene permisos completos para aprobar, rechazar, devolver y programar solicitudes.

---

## Estructura de la Vista

### 1. Encabezado y Métricas
```html
<h2 class="mb-4"><i class="fas fa-user-shield"></i> Administrador - Gestión de Solicitudes</h2>
```

#### 1.1 Card de Métricas
- **SODI's Generadas**: Muestra el contador de SODIs generadas (actualmente hardcoded: 12)
- **Período**: GM - 2025

---

### 2. Sistema de Filtros

#### 2.1 Panel de Filtros (Colapsable)
El administrador tiene acceso a filtros más completos que otros roles:

**Fila 1:**
- **ID Solicitud**: Campo de texto libre para búsqueda por ID.
- **Tipo**: Dropdown con todas las opciones de tipo de solicitud:
  - SDCN - Solicitud de Desconexión Curso Normal
  - SDCF - Solicitud de Desconexión Curso Forzoso
  - SICN - Solicitud de Intervención Curso Normal
  - SICF - Solicitud de Intervención Curso Forzoso
  - IL - Informe de Limitación
  - MM - Mantención Mayor
  - SODI - Solicitud de Desconexión/Intervención

- **Instalación GM**: Dropdown con instalaciones.
- **Empresa Solicitante**: Dropdown con empresas.

**Fila 2:**
- **Empresa Receptora**: Dropdown con empresas.
- **Aplica SODI**: Sí/No.
- **Fecha Desde**: Campo de fecha.
- **Fecha Hasta**: Campo de fecha.

**Botones de Acción:**
- **Filtrar**: `aplicarFiltrosAdmin()`
- **Limpiar**: `limpiarFiltrosAdmin()`

---

### 3. Botonera de Acciones

#### 3.1 Botón Nueva Solicitud
```javascript
onclick="abrirModalNuevaSolicitudAdmin()"
```
El administrador puede crear solicitudes directamente.

#### 3.2 Filtros de Estado (Radio Buttons)
- **En Proceso** (por defecto): Muestra solicitudes activas.
  - Estados: `Pendiente`, `Devuelta`, `En Análisis`, `Administrador Gestionando`, `Programada`, `Vigente`, `Extendida`
  
- **Finalizadas**: Muestra solicitudes completadas.
  - Estados: `Finalizada`, `No Solicitada`, `Rechazada`, `Suspendida`

---

### 4. Tabla de Solicitudes

#### 4.1 Estructura de Columnas
| Columna | Descripción | Índice |
|---------|-------------|--------|
| Acciones | Botones de acción | 0 |
| ID Registro | Identificador único interno | 1 |
| ID Solicitud | ID de la solicitud (CEN, SODI, etc.) | 2 |
| Tipo | Tipo de solicitud con badge | 3 |
| Fecha Prog. Inicio | Fecha programada de inicio | 4 |
| Fecha Prog. Fin | Fecha programada de fin | 5 |
| Instalación GM | Instalación donde se realizará | 6 |
| Administrador | Usuario administrador asignado | 7 |
| Solicitante | Usuario solicitante | 8 |
| Empresa Solicitante | Empresa que solicita | 9 |
| Empresa Receptora | Empresa que recibe | 10 |
| Aplica SODI | Si aplica SODI | 11 |
| Estado | Estado actual con badge | 12 |

---

## Lógica JavaScript

### 1. Carga de Datos

#### 1.1 Función IIFE de Carga Inicial
```javascript
(function() {
    // El administrador puede ver TODAS las solicitudes
    const solicitudes = solicitudesData;
})();
```

**Diferencia clave con Solicitante:**
- El administrador **NO filtra** por `CREADO_POR`.
- Tiene acceso a **todas las solicitudes** del sistema.

---

### 2. Sistema de Funciones de Visualización por Estado

El administrador tiene funciones específicas para ver solicitudes según su estado:

```javascript
switch(solicitud.ESTADO) {
    case 'Pendiente':
        funcionVer = `verSolicitudPendienteAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'Devuelta':
        funcionVer = `verSolicitudDevueltaAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'En Análisis':
        funcionVer = `verSolicitudEnAnalisisAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'Administrador Gestionando':
        funcionVer = `verSolicitudAdminGestionandoAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'Programada':
        funcionVer = `verSolicitudProgramadaAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'Vigente':
        funcionVer = `verSolicitudVigenteAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'Extendida':
        funcionVer = `verSolicitudExtendidaAdmin(${solicitud.ID_REGISTRO})`;
        break;
    case 'Finalizada':
        funcionVer = `verSolicitudFinalizada(${solicitud.ID_REGISTRO})`;
        break;
    case 'Rechazada':
        funcionVer = `verSolicitudRechazada(${solicitud.ID_REGISTRO})`;
        break;
    case 'Suspendida':
        funcionVer = `verSolicitudSuspendida(${solicitud.ID_REGISTRO})`;
        break;
    case 'No Solicitada':
        funcionVer = `verSolicitudNoSolicitada(${solicitud.ID_REGISTRO})`;
        break;
}
```

**Nota:** Cada estado tiene su propia función de visualización, permitiendo mostrar información específica según el contexto.

---

### 3. Sistema de Acciones por Estado

#### 3.1 Estados Gestionables
Para estados `Pendiente`, `En Análisis`, `Administrador Gestionando`:

**Acciones disponibles:**
- ✏️ **Editar** (solo para `Administrador Gestionando` y `En Análisis`): `editarSolicitudAdmin(ID_REGISTRO)`
- 👁️ **Ver**: Función específica según estado
- 📋 **Clonar**: `clonarSolicitudAdmin(ID_REGISTRO)`
- ➡️ **Gestionar**: `gestionarSolicitudAdmin(ID_REGISTRO)` - Aprobar, rechazar, devolver
- 📝 **Bitácora**: `abrirBitacora(ID_REGISTRO)`

```javascript
if (['Pendiente', 'En Análisis', 'Administrador Gestionando'].includes(solicitud.ESTADO)) {
    const botonEditar = ['Administrador Gestionando', 'En Análisis'].includes(solicitud.ESTADO)
        ? `<a href="javascript:;" onclick="editarSolicitudAdmin(${solicitud.ID_REGISTRO})" ...>
            <i class="fas fa-edit"></i>
        </a>` 
        : '';
    
    acciones = `
        ${botonEditar}
        <a href="javascript:;" onclick="${funcionVer}" ...>Ver</a>
        <a href="javascript:;" onclick="clonarSolicitudAdmin(${solicitud.ID_REGISTRO})" ...>Clonar</a>
        <a href="javascript:;" onclick="gestionarSolicitudAdmin(${solicitud.ID_REGISTRO})" ...>Gestionar</a>
        <a href="javascript:;" onclick="abrirBitacora(${solicitud.ID_REGISTRO})" ...>Bitácora</a>
    `;
}
```

#### 3.2 Estados No Gestionables
Para estados `Devuelta`, `Programada`, `Vigente`, `Extendida`, y estados finalizados:

**Acciones disponibles:**
- 👁️ **Ver**: Función específica según estado
- 📋 **Clonar**: `clonarSolicitudAdmin(ID_REGISTRO)`
- 📝 **Bitácora**: `abrirBitacora(ID_REGISTRO)`

---

### 4. Sistema de Badges

#### 4.1 Badges de Tipo
```javascript
switch(solicitud.TIPO) {
    case 'SDCN': badgeTipo = 'badge-primary'; break;    // Azul
    case 'SICF': badgeTipo = 'badge-success'; break;    // Verde
    case 'SODI': badgeTipo = 'badge-danger'; break;     // Rojo
    case 'IL': badgeTipo = 'badge-warning'; break;      // Amarillo
    case 'MM': badgeTipo = 'badge-info'; break;         // Celeste
    case 'SDCF': badgeTipo = 'badge-dark'; break;       // Negro
    case 'SICN': badgeTipo = 'badge-secondary'; break;  // Gris
}
```

#### 4.2 Badges de Estado
```javascript
switch(solicitud.ESTADO) {
    case 'Pendiente': badgeEstado = 'badge-warning'; break;
    case 'Devuelta': badgeEstado = 'badge-danger'; break;
    case 'En Análisis': badgeEstado = 'badge-info'; break;
    case 'Administrador Gestionando': badgeEstado = 'badge-warning text-dark'; break;
    case 'Programada': badgeEstado = 'badge-success'; break;
    case 'Vigente': badgeEstado = 'badge-primary'; break;
    case 'Extendida': badgeEstado = 'badge-secondary'; break;
    case 'Finalizada': badgeEstado = 'badge-secondary'; break;
    case 'Rechazada': badgeEstado = 'badge-danger'; break;
    case 'Suspendida': badgeEstado = 'badge-dark'; break;
    case 'No Solicitada': badgeEstado = 'badge-secondary'; break;
}
```

#### 4.3 Clase para Solicitudes Finalizadas
```javascript
let claseFinalizad = '';
if (['Finalizada', 'Rechazada', 'Suspendida', 'No Solicitada'].includes(solicitud.ESTADO)) {
    claseFinalizad = 'solicitud-finalizada';
}
```

---

### 5. Sistema de Filtros

#### 5.1 Función `aplicarFiltrosAdmin()`
Aplica filtros a columnas específicas de DataTable:

```javascript
window.aplicarFiltrosAdmin = function() {
    const table = $('#table-solicitudes').DataTable();
    
    // Mapeo de filtros a columnas
    table.column(2).search(filtroID);              // ID Solicitud
    table.column(3).search(filtroTipo);            // Tipo
    table.column(6).search(filtroInstalacion);     // Instalación GM
    table.column(9).search(filtroEmpSol);          // Empresa Solicitante
    table.column(10).search(filtroEmpRec);         // Empresa Receptora
    table.column(11).search(filtroSODI);           // Aplica SODI
    
    table.draw();
};
```

#### 5.2 Función `limpiarFiltrosAdmin()`
Limpia todos los filtros y resetea la tabla.

---

### 6. Filtro Personalizado de Estados

#### 6.1 Estados En Proceso (Administrador)
```javascript
const estadosEnProceso = [
    'Pendiente', 
    'Devuelta', 
    'En Análisis', 
    'Administrador Gestionando', 
    'Programada', 
    'Vigente', 
    'Extendida'
];
```

**Nota:** El administrador ve más estados en "En Proceso" que el solicitante, incluyendo `Vigente` y `Extendida`.

#### 6.2 Estados Finalizadas
```javascript
const estadosFinalizadas = [
    'Finalizada', 
    'No Solicitada', 
    'Rechazada', 
    'Suspendida'
];
```

---

## Flujo de Trabajo del Administrador

### 1. Recepción de Solicitud Pendiente
1. Solicitud llega con estado **Pendiente**.
2. Administrador la revisa usando el botón "Ver".
3. Opciones:
   - **Aprobar**: Cambia a "En Análisis" o "Administrador Gestionando".
   - **Devolver**: Cambia a "Devuelta" con observaciones.
   - **Rechazar**: Cambia a "Rechazada".

### 2. Gestión de Solicitud
1. Click en "Gestionar" para solicitudes en estados gestionables.
2. Se abre el modal `gestionar-administrador.html`.
3. Puede:
   - Completar campos faltantes.
   - Asignar fechas efectivas.
   - Cambiar estado a "Programada".

### 3. Edición de Solicitud
1. Solo disponible para estados "Administrador Gestionando" y "En Análisis".
2. Click en "Editar".
3. Se abre el modal `editar-administrador.html`.
4. Modifica campos y guarda.

### 4. Programación
1. Una vez aprobada, la solicitud pasa a "Programada".
2. El despachador toma el control desde este punto.

---

## Diferencias con Otras Vistas

### Administrador vs Solicitante
| Característica | Administrador | Solicitante |
|----------------|---------------|-------------|
| Solicitudes visibles | **Todas** | Solo las creadas por él |
| Puede editar | Sí (estados específicos) | Solo "Devuelta" |
| Puede aprobar/rechazar | ✅ Sí | ❌ No |
| Puede programar | ✅ Sí | ❌ No |
| Estados "En Proceso" | 7 estados | 5 estados |

### Administrador vs Despachador
| Característica | Administrador | Despachador |
|----------------|---------------|-------------|
| Solicitudes visibles | **Todas** | **Todas** |
| Gestiona estados iniciales | ✅ Sí (Pendiente, En Análisis) | ❌ No |
| Gestiona estados operativos | ❌ No | ✅ Sí (Programada, Vigente) |
| Puede crear solicitudes | ✅ Sí | ✅ Sí |

---

## Configuración DataTable

```javascript
$('#table-solicitudes').DataTable({
    "pageLength": 10,
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Mostrar todo"]],
    "responsive": true,
    "order": [[1, "desc"]], // Ordenar por ID Registro descendente
    "columnDefs": [
        { "orderable": false, "targets": 0 } // Columna de acciones no ordenable
    ]
});
```

---

## Dependencias

1. **jQuery**: Manipulación del DOM.
2. **DataTables**: Tabla avanzada.
3. **Bootstrap**: Componentes UI.
4. **data/solicitudes.js**: Fuente de datos (`solicitudesData`).
5. **modals/administrador/modals-loader.js**: Carga los modales del administrador.

---

## Notas Técnicas

### Permisos Completos
El administrador es el único rol que puede:
- Ver **todas** las solicitudes sin filtro.
- Aprobar o rechazar solicitudes.
- Devolver solicitudes al solicitante.
- Editar solicitudes en estados específicos.

### Funciones de Visualización Específicas
A diferencia del solicitante, el administrador tiene funciones `ver` específicas para cada estado, permitiendo mostrar información contextual relevante.

### Clase `solicitud-finalizada`
Se aplica a las filas de solicitudes finalizadas para permitir estilos CSS específicos (ej: opacidad reducida).

---

## Mejoras Futuras Sugeridas

1. **Dashboard de Métricas**: Hacer dinámico el contador de SODIs.
2. **Filtro por Administrador**: Agregar filtro para ver solo solicitudes asignadas a un administrador específico.
3. **Filtro por Rango de Fechas**: Implementar lógica para "Fecha Desde" y "Fecha Hasta".
4. **Notificaciones**: Alertas cuando llegan nuevas solicitudes pendientes.
5. **Exportación Masiva**: Botón para exportar todas las solicitudes a Excel/PDF.
6. **Asignación Automática**: Sistema para asignar automáticamente solicitudes a administradores.

---

## Versión
- **Última actualización**: Según `index.html` - v66
- **Archivo**: `views/administrador.html`
- **Rol**: Administrador

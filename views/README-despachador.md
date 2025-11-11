# Documentación: Vista Despachador

## Descripción General
La vista `despachador.html` es la interfaz principal para usuarios con rol de **Despachador**. Gestiona solicitudes en sus **fases operativas** (Programada, Vigente, Extendida). El despachador controla la ejecución de solicitudes aprobadas y registra fechas efectivas.

---

## Estructura de la Vista

### 1. Encabezado
```html
<h2 class="mb-4"><i class="fas fa-clipboard-list"></i> Despachador - Control de Solicitudes</h2>
```

### 2. Sistema de Filtros
Panel colapsable con filtros por:
- ID Solicitud, Tipo, Instalación GM
- Empresa Solicitante, Empresa Receptora
- Aplica SODI, Fecha Desde, Fecha Hasta

### 3. Filtros de Estado
- **En Proceso**: `Despachador Gestionando`, `Programada`, `Vigente`, `Extendida`
- **Finalizadas**: `Finalizada`, `No Solicitada`, `Rechazada`, `Suspendida`

---

## Lógica JavaScript

### 1. Carga de Datos
```javascript
// El despachador ve TODAS las solicitudes
const solicitudes = solicitudesData;
```

### 2. Visualización Unificada
```javascript
const funcionVer = `verSolicitudDesp(${solicitud.ID_REGISTRO})`;
```

### 3. Acciones por Estado

#### Botón Editar
Solo para estado **"Despachador Gestionando"**:
```javascript
if (solicitud.ESTADO === 'Despachador Gestionando') {
    accionEditar = `<a onclick="editarSolicitudDesp(${solicitud.ID_REGISTRO})">Editar</a>`;
}
```

#### Botón Gestionar
Para estados operativos:
```javascript
const estadosGestionables = ['Despachador Gestionando', 'Programada', 'Vigente', 'Extendida'];
if (estadosGestionables.includes(solicitud.ESTADO)) {
    accionGestionar = `<a onclick="gestionarSolicitudDesp(${solicitud.ID_REGISTRO})">Gestionar</a>`;
}
```

#### Acciones Siempre Disponibles
- 👁️ Ver: `verSolicitudDesp(ID_REGISTRO)`
- 📋 Clonar: `clonarSolicitudDesp(ID_REGISTRO)`
- 📝 Bitácora: `abrirBitacora(ID_REGISTRO)`

---

## Flujo de Trabajo

### 1. Recepción de Solicitud Programada
- Solicitud llega con estado **Programada** (aprobada por administrador)
- Despachador revisa y espera fecha programada

### 2. Inicio de Ejecución
- Click en "Gestionar"
- Registra **Fecha de Inicio Efectiva**
- Estado cambia a **Vigente**

### 3. Durante Ejecución
- Puede extender plazo (→ **Extendida**)
- Puede suspender (→ **Suspendida**)
- Puede finalizar anticipadamente

### 4. Finalización
- Registra **Fecha de Fin Efectiva**
- Estado cambia a **Finalizada**

---

## Diferencias con Otras Vistas

### Despachador vs Administrador
| Característica | Despachador | Administrador |
|----------------|-------------|---------------|
| Estados visibles "En Proceso" | 4 estados operativos | 7 estados (incluye administrativos) |
| Puede aprobar/rechazar | ❌ No | ✅ Sí |
| Gestiona ejecución | ✅ Sí | ❌ No |
| Registra fechas efectivas | ✅ Sí | ❌ No |

### Despachador vs Solicitante
| Característica | Despachador | Solicitante |
|----------------|-------------|-------------|
| Solicitudes visibles | Todas | Solo las propias |
| Puede gestionar operación | ✅ Sí | ❌ No |
| Puede crear solicitudes | ✅ Sí | ✅ Sí |

---

## Estados Gestionables

### Estados En Proceso
```javascript
const estadosEnProceso = [
    'Despachador Gestionando',
    'Programada', 
    'Vigente', 
    'Extendida'
];
```

**Nota:** NO incluye estados administrativos (`Pendiente`, `En Análisis`, etc.)

### Estados Finalizadas
```javascript
const estadosFinalizadas = [
    'Finalizada', 
    'No Solicitada', 
    'Rechazada', 
    'Suspendida'
];
```

---

## Sistema de Filtros

### Función aplicarFiltrosDesp()
Aplica filtros por columna:
- Columna 2: ID Solicitud
- Columna 3: Tipo
- Columna 6: Instalación GM
- Columna 9: Empresa Solicitante
- Columna 10: Empresa Receptora
- Columna 11: Aplica SODI

### Función limpiarFiltrosDesp()
Limpia todos los campos de filtro y resetea DataTable.

---

## Badges de Estado

```javascript
case 'Despachador Gestionando': badgeEstado = 'badge-warning text-dark'; break;
case 'Programada': badgeEstado = 'badge-success'; break;
case 'Vigente': badgeEstado = 'badge-primary'; break;
case 'Extendida': badgeEstado = 'badge-secondary'; break;
case 'Finalizada': badgeEstado = 'badge-secondary'; break;
```

---

## Dependencias
1. jQuery
2. DataTables
3. Bootstrap
4. data/solicitudes.js
5. modals/despachador/modals-loader.js

---

## Versión
- **Última actualización**: v42
- **Archivo**: `views/despachador.html`
- **Rol**: Despachador

# 📁 Carpeta de Modales

Esta carpeta contiene todos los modales del sistema GEME, organizados de forma modular.

## 🚀 Cómo agregar un nuevo modal

### 1. Crear el archivo HTML del modal

Crea un nuevo archivo en esta carpeta, por ejemplo: `editar-solicitud.html`

```html
<!-- MODAL EDITAR SOLICITUD -->
<div class="modal fade" id="modalEditarSolicitud" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-2"></i>Editar Solicitud
                </h5>
                <button type="button" class="close text-white" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Contenido del modal aquí -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Cancelar
                </button>
                <button type="button" class="btn btn-primary" onclick="guardarEdicion()">
                    Guardar
                </button>
            </div>
        </div>
    </div>
</div>
```

### 2. Registrar el modal en el cargador

Edita `modals-loader.js` y agrega la ruta del nuevo modal:

```javascript
const modalsToLoad = [
    'modals/nueva-solicitud.html',
    'modals/editar-solicitud.html',  // ← Agregar aquí
    // más modales...
];
```

### 3. Crear las funciones JavaScript

Agrega las funciones necesarias en `components.js`:

```javascript
// Función para abrir el modal
function abrirModalEditar(solicitudId) {
    // Cargar datos de la solicitud
    // ...
    $('#modalEditarSolicitud').modal('show');
}

// Función para guardar
function guardarEdicion() {
    // Lógica de guardado
    // ...
}
```

### 4. Llamar el modal desde las vistas

```html
<button onclick="abrirModalEditar(123)">
    <i class="fas fa-edit"></i> Editar
</button>
```

## 📋 Modales Existentes

### Modales de Creación/Edición

- **nueva-solicitud.html** - Modal para crear nuevas solicitudes
  - ID: `#modalNuevaSolicitud`
  - Función: `abrirNuevaSolicitud()`
  - Guardar: `guardarSolicitud()`
  - Estado: N/A

- **editar-solicitud.html** - Modal para editar solicitudes pendientes
  - ID: `#modalEditarSolicitud`
  - Función: `abrirModalEditar(solicitudId)`
  - Guardar: `actualizarSolicitud()`
  - Estado: Solo para solicitudes en estado "Pendiente"

### Modales de Visualización (Solo Lectura)

- **ver-pendiente.html** - Ver solicitudes pendientes
  - ID: `#modalVerPendiente`
  - Función: `verSolicitudPendiente(solicitudId)`
  - Estado: "Pendiente"
  - Color: Amarillo (Warning)

- **ver-en-analisis.html** - Ver solicitudes en análisis
  - ID: `#modalVerEnAnalisis`
  - Función: `verSolicitudEnAnalisis(solicitudId)`
  - Estado: "En Análisis"
  - Color: Azul (Info)

- **ver-admin-gestionando.html** - Ver solicitudes siendo gestionadas
  - ID: `#modalVerAdminGestionando`
  - Función: `verSolicitudAdminGestionando(solicitudId)`
  - Estado: "Administrador Gestionando"
  - Color: Amarillo (Warning)

- **ver-programada.html** - Ver solicitudes programadas
  - ID: `#modalVerProgramada`
  - Función: `verSolicitudProgramada(solicitudId)`
  - Estado: "Programada"
  - Color: Verde (Success)
  - Icono: `fa-calendar-check`

### Modales Especiales

- **bitacora.html** - Bitácora de seguimiento de solicitudes
  - ID: `#modalBitacora`
  - Función: `abrirBitacora(solicitudId)`
  - Campos: ID, Adjuntos, Tarea Identificador, Fecha Inicial, Estado Inicial, Responsable, Tarea, Acción, Estado Final, Responsable Cierre, Fecha Término, Observaciones
  - Funciones adicionales:
    - `agregarEntradaBitacora()` - Agregar nueva entrada
    - `editarEntradaBitacora(entradaId)` - Editar entrada existente
    - `eliminarEntradaBitacora(entradaId)` - Eliminar entrada
    - `exportarBitacora()` - Exportar a Excel

## 💡 Buenas Prácticas

1. **Nombres descriptivos**: Usa nombres claros para los archivos (ej: `ver-detalle-solicitud.html`)
2. **IDs únicos**: Cada modal debe tener un ID único (ej: `#modalVerDetalle`)
3. **Prefijos consistentes**: Usa prefijos para funciones relacionadas (ej: `abrirModal...`, `guardar...`)
4. **Comentarios**: Documenta qué hace cada modal al inicio del archivo
5. **Tamaños**: Usa clases de Bootstrap para el tamaño:
   - `modal-sm` - Pequeño
   - `modal-lg` - Grande
   - `modal-xl` - Extra grande

## 🔧 Troubleshooting

**El modal no se carga:**
- Verifica que la ruta en `modals-loader.js` sea correcta
- Revisa la consola del navegador (F12) para ver errores
- Asegúrate de que el archivo HTML esté bien formado

**El modal pierde el foco:**
- Verifica que no uses `alert()` en las validaciones
- Usa validación visual inline con clases de Bootstrap
- Asegúrate de que el z-index esté configurado en `components.css`

**Los eventos no funcionan:**
- Usa `$(document).on('event', '#selector', function(){})` para eventos delegados
- Esto permite que funcionen con contenido cargado dinámicamente

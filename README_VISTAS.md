# Sistema de Vistas Dinámicas - GEME

## 📋 Descripción

`components.html` es la **carcasa principal** que contiene el header y sidebar. Las vistas individuales se cargan dinámicamente en el contenedor `#dynamic-content`.

## 🗂️ Estructura de Archivos

```
concentrador/
├── components.html          # Carcasa principal (Header + Sidebar)
├── components.css           # Estilos globales
├── components.js            # JavaScript global
└── views/                   # Carpeta de vistas
    ├── dashboard.html
    ├── matriz-comunicaciones.html
    └── formulario-ejemplo.html
```

## 🚀 Cómo Usar

### 1. Cargar una Vista desde JavaScript

```javascript
// Cargar una vista específica
loadView('views/dashboard.html');
loadView('views/matriz-comunicaciones.html');
loadView('views/formulario-ejemplo.html');
```

### 2. Cargar una Vista desde el Sidebar

Modifica los enlaces del sidebar en `components.html`:

```html
<!-- Ejemplo: Cargar Dashboard -->
<li>
    <a class="a-sidebar a-submenu" href="javascript:;" onclick="loadView('views/dashboard.html');">
        Dashboard
    </a>
</li>

<!-- Ejemplo: Cargar Matriz de Comunicaciones -->
<li>
    <a class="a-sidebar a-submenu" href="javascript:;" onclick="loadView('views/matriz-comunicaciones.html');">
        Matriz de Comunicaciones
    </a>
</li>
```

### 3. Crear una Nueva Vista

1. **Crea un archivo HTML** en la carpeta `views/`:
   ```
   views/mi-nueva-vista.html
   ```

2. **Escribe solo el contenido** (sin `<html>`, `<head>`, `<body>`):
   ```html
   <h2 class="mb-4">Mi Nueva Vista</h2>
   
   <div class="row">
       <div class="col-12">
           <div class="card">
               <div class="card-body">
                   <p>Contenido de mi vista...</p>
               </div>
           </div>
       </div>
   </div>
   ```

3. **Carga la vista** desde el sidebar o JavaScript:
   ```javascript
   loadView('views/mi-nueva-vista.html');
   ```

## 📦 Vistas de Ejemplo Incluidas

### 1. Dashboard (`views/dashboard.html`)
- Cards con estadísticas
- Tabla de actividad reciente
- Panel de notificaciones

### 2. Matriz de Comunicaciones (`views/matriz-comunicaciones.html`)
- Filtros de búsqueda
- Tabla con datos
- Botones de acción

### 3. Formulario de Ejemplo (`views/formulario-ejemplo.html`)
- Formulario completo con validación
- Campos de diferentes tipos
- Panel de información lateral

## 🎨 Clases CSS Disponibles

Todas las vistas pueden usar las clases definidas en `components.css`:

### Cards
- `.card-alcance` - Cards con gradiente naranja
- `.cardTipoG` - Card gris que cambia a naranja al hover
- `.cardTipoN` - Card naranja que cambia a gris al hover

### Botones
- `.btn-customized` - Botón naranja
- `.btn-customized-2` - Botón blanco
- `.btn-customized-3` - Botón full width
- `.btn-customized-4` - Botones de acción pequeños
- `.btn-filter` - Botón de filtro
- `.btn-filtrar` / `.btn-limpiar` - Botones de acción

### Tablas
- `.table-group` - Fila de encabezado con estilo
- `.truncate` - Texto truncado con ellipsis

### Otros
- `.tituloAreas` - Título de sección con estilo
- `.h_area` - Elemento con hover naranja
- `.line` - Línea divisoria punteada

## 🔧 Funciones JavaScript Disponibles

### `loadView(viewPath)`
Carga una vista HTML en el contenedor dinámico.

```javascript
loadView('views/dashboard.html');
```

### `showEjemplo()`
Muestra el contenido de ejemplo de estilos.

```javascript
showEjemplo();
```

## 💡 Tips

1. **No incluyas** `<html>`, `<head>`, o `<body>` en las vistas
2. **No incluyas** scripts de jQuery, Bootstrap, etc. (ya están en `components.html`)
3. **Usa las clases CSS** definidas en `components.css` para mantener consistencia
4. **Mantén las vistas simples** - solo el contenido HTML
5. Si necesitas JavaScript específico de una vista, inclúyelo al final de la vista con `<script>` tags

## 🔄 Ejemplo Completo

**1. Crear vista:** `views/mi-modulo.html`
```html
<h2 class="mb-4"><i class="fas fa-cog"></i> Mi Módulo</h2>

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Contenido del Módulo</h5>
            </div>
            <div class="card-body">
                <p>Aquí va el contenido...</p>
            </div>
        </div>
    </div>
</div>
```

**2. Agregar al sidebar en `components.html`:**
```html
<li>
    <a class="a-sidebar a-submenu" href="javascript:;" onclick="loadView('views/mi-modulo.html');">
        Mi Módulo
    </a>
</li>
```

**3. Listo!** Al hacer click en el sidebar, se cargará tu vista.

## 📞 Soporte

Para más información, revisa los archivos de ejemplo en la carpeta `views/`.

# 🎨 Guía de Estilos GEME

## Descripción

Esta guía documenta todos los estilos CSS personalizados integrados en el sistema GEME, incluyendo cards, botones, tablas y elementos interactivos.

## 📋 Tabla de Contenidos

1. [Cards Personalizadas](#cards-personalizadas)
2. [Botones Customizados](#botones-customizados)
3. [Elementos de Tabla](#elementos-de-tabla)
4. [Títulos y Áreas](#títulos-y-áreas)
5. [Spinners](#spinners)
6. [Colores del Sistema](#colores-del-sistema)

---

## Cards Personalizadas

### Card Alcance
Card azul con efecto hover que invierte colores.

```html
<div class="card card-alcance text-white">
    <div class="card-body">
        <h5 class="card-title">Título del Módulo</h5>
        <p class="card-text">Descripción</p>
    </div>
</div>
```

**Características:**
- Color de fondo: `#0079C8` (azul)
- Hover: Fondo blanco con borde azul
- Cursor: pointer
- Título con tamaño: `0.85rem`

---

### Card Tipo G (Gris)
Card gris que se vuelve naranja al hover.

```html
<div class="card cardTipoG">
    <div class="card-body">
        <h5 class="card-title">Card Tipo G</h5>
        <p class="card-text">Contenido</p>
    </div>
</div>
```

**Características:**
- Color inicial: `rgba(74, 74, 73, 1)` (gris)
- Hover: `#e56000` (naranja GEME)
- Texto: Blanco
- Altura: 100%

---

### Card Tipo N (Naranja)
Card naranja que se vuelve gris al hover.

```html
<div class="card cardTipoN">
    <div class="card-body">
        <h5 class="card-title">Card Tipo N</h5>
        <p class="card-text">Contenido</p>
    </div>
</div>
```

**Características:**
- Color inicial: `#e56000` (naranja GEME)
- Hover: `rgba(74, 74, 73, 1)` (gris)
- Texto: Blanco
- Altura: 100%

---

## Botones Customizados

### Botón Customized (Principal)
Botón naranja GEME con hover gris.

```html
<a href="javascript:;" class="btn-customized">
    <i class="fas fa-save"></i> Guardar
</a>
```

**Características:**
- Color: `#E56000` (naranja)
- Hover: `rgba(74, 74, 73, 0.85)` (gris)
- Padding: `.45rem 1.5rem`
- Border-radius: `5px`
- Margin: `15px 0`

---

### Botón Customized 2 (Secundario)
Botón blanco con hover gris claro.

```html
<a href="javascript:;" class="btn-customized-2">
    <i class="fas fa-edit"></i> Editar
</a>
```

**Características:**
- Color: Blanco
- Hover: `rgba(255, 255, 255, 0.5)`
- Font-size: `0.9em`
- Margin: `5px` (izq/der)

---

### Botón Customized 3 (Full Width)
Botón oscuro de ancho completo.

```html
<a href="javascript:;" class="btn-customized-3">
    <i class="fas fa-check"></i> Confirmar
</a>
```

**Características:**
- Width: `100%`
- Color: `#444` (gris oscuro)
- Hover: `#555`
- Display: `inline-block`

---

### Botón Customized 4 (Circular)
Botones circulares pequeños para acciones.

```html
<!-- Botón oscuro -->
<a href="javascript:;" class="btn-customized-4 btn-customized-dark" title="Ver">
    <i class="fas fa-eye"></i>
</a>

<!-- Botón claro -->
<a href="javascript:;" class="btn-customized-4 btn-customized-light" title="Editar">
    <i class="fas fa-edit"></i>
</a>
```

**Características:**
- Tamaño: `28px x 28px`
- Border-radius: `50%` (circular)
- Margin: `0 3px`
- Variantes: `dark` (#222) y `light` (#fff)

---

### Botón Filtro
Botón naranja para filtros.

```html
<button class="btn btn-filter">
    <i class="fas fa-filter"></i> Filtrar
</button>
```

**Características:**
- Background: `#E56000`
- Color: Blanco

---

## Elementos de Tabla

### Tabla con Grupos
Filas agrupadas con fondo gris.

```html
<table class="table">
    <thead>
        <tr class="table-group">
            <th>Columna 1</th>
            <th>Columna 2</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-group">
            <td>Dato 1</td>
            <td>Dato 2</td>
        </tr>
    </tbody>
</table>
```

**Características:**
- Background: `#ECECEC`

---

### Texto Truncado
Texto con ellipsis cuando excede el ancho.

```html
<td class="truncate">
    Este es un texto muy largo que será truncado...
</td>
```

**Características:**
- White-space: `nowrap`
- Overflow: `hidden`
- Text-overflow: `ellipsis`
- Max-width: `273px`
- Min-width: `50px`

---

### Contenedor de Tabla
Tabla centrada con ancho del 90%.

```html
<div id="div_table">
    <table class="table">
        <!-- contenido -->
    </table>
</div>
```

---

## Títulos y Áreas

### Título de Áreas
Título con fondo azul y bordes redondeados.

```html
<div class="tituloAreas p-3 text-center">
    <h5 class="mb-0">Nombre del Área</h5>
</div>
```

**Características:**
- Background: `#003773` (azul GEME)
- Border-radius: `41px`
- Color: Blanco

---

### Elemento con Hover Naranja
Elemento que cambia a naranja al hover.

```html
<div class="h_area p-3">
    <p>Contenido del área</p>
</div>
```

**Características:**
- Hover background: `#e56000`
- Hover border-radius: `5px`
- Hover color: Blanco
- Cursor: pointer

---

## Botones de Acción y Filtro

### Contenedor de Botones
Grupo de botones para filtros.

```html
<div class="btns-accion-filtro">
    <a href="javascript:;" class="btn-filtrar">
        <i class="fas fa-filter"></i> Filtrar
    </a>
    <a href="javascript:;" class="btn-limpiar">
        <i class="fas fa-eraser"></i> Limpiar
    </a>
</div>
```

**Características:**
- Padding: `20px`
- Botones con display: `block`
- Background: `#003773`
- Border-radius: `5px`

---

## Spinners

### Spinner de Carga
Spinner animado con rotación continua.

```html
<div class="spinner">
    <i class="fa fa-spinner spinning"></i>
</div>
```

**Características:**
- Display: `flex`
- Justify-content: `center`
- Font-size: `1.5rem`
- Animación: Rotación 360° continua

---

## Elementos Adicionales

### Línea Divisora
Línea punteada para separar secciones.

```html
<div class="line"></div>
```

**Características:**
- Width: `100%`
- Border-bottom: `1px dashed #ddd`
- Margin: `20px 0`

---

### Tab Panes
Pestañas con bordes.

```html
<div class="tab-pane">
    <!-- Contenido de la pestaña -->
</div>
```

**Características:**
- Border-bottom: `1px solid #dee2e6`
- Border-left: `1px solid #dee2e6`
- Border-right: `1px solid #dee2e6`

---

## Colores del Sistema

### Paleta Principal

| Color | Código | Uso |
|-------|--------|-----|
| Naranja GEME | `#E56000` | Botones principales, hover |
| Azul GEME | `#003773` | Header, títulos |
| Azul Claro | `#0079C8` | Cards de alcance |
| Gris Oscuro | `rgba(74, 74, 73, 1)` | Sidebar, cards tipo G |
| Gris Claro | `#ECECEC` | Fondos de tabla |
| Blanco | `#FFFFFF` | Texto, fondos |

### Colores de Estado

| Estado | Color | Código |
|--------|-------|--------|
| Hover Naranja | `#e56000` | Naranja GEME |
| Hover Gris | `rgba(74, 74, 73, 0.85)` | Gris semi-transparente |
| Hover Botón 2 | `rgba(255, 255, 255, 0.5)` | Blanco semi-transparente |

---

## Sidebar con Colores GEME

Para aplicar los colores GEME al sidebar, añade la clase `geme-colors`:

```html
<nav id="sidebar" class="geme-colors">
    <!-- Contenido del sidebar -->
</nav>
```

**Características:**
- Background: `rgba(74, 74, 73, 1)` (gris)
- Hover: `#e56000` (naranja)
- Border-top: `1px solid white`

---

## Botón Sidebar Estilo Hamburguesa

Para usar el botón con animación de hamburguesa, añade la clase `hamburger-style`:

```html
<button id="sidebarCollapse" class="hamburger-style">
    <span></span>
    <span></span>
    <span></span>
</button>
```

**Características:**
- Width/Height: `40px`
- Background: `rgba(74, 74, 73, 1)`
- Position: `absolute`
- Border-radius: `0 0 10px 0`
- Animación: Transformación de hamburguesa a X

---

## Ejemplos de Uso Combinado

### Card con Botón
```html
<div class="card cardTipoG">
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Descripción</p>
        <a href="javascript:;" class="btn-customized">
            <i class="fas fa-arrow-right"></i> Ver más
        </a>
    </div>
</div>
```

### Tabla con Acciones
```html
<table class="table">
    <thead>
        <tr class="table-group">
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="truncate">Nombre muy largo...</td>
            <td>
                <a href="javascript:;" class="btn-customized-4 btn-customized-dark">
                    <i class="fas fa-eye"></i>
                </a>
                <a href="javascript:;" class="btn-customized-4 btn-customized-light">
                    <i class="fas fa-edit"></i>
                </a>
            </td>
        </tr>
    </tbody>
</table>
```

---

## Responsive

Todos los estilos son responsive y se adaptan a diferentes tamaños de pantalla:

- **Desktop** (>992px): Diseño completo
- **Tablet** (768px-992px): Ajustes de padding y márgenes
- **Mobile** (<768px): Elementos apilados, botones full-width
- **Mobile Small** (<368px): Nav items con altura fija de 3rem

---

## Archivo de Ejemplo

Consulta `ejemplo-estilos.html` para ver todos los estilos en acción.

---

## Notas Importantes

1. **Font-size base**: El body tiene `font-size: 13px !important`
2. **Transiciones**: Todos los elementos tienen `transition: all 0.3s ease`
3. **Iconos**: Se usa Font Awesome 5.15.4
4. **Compatibilidad**: Bootstrap 4.4.0

---

**Versión:** 1.0  
**Fecha:** Octubre 2024  
**Proyecto:** GEME Concentrador

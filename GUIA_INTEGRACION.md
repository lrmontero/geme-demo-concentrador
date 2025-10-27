# 🚀 Guía de Integración - Componentes GEME

## Cómo usar estos componentes en tu proyecto

### Método 1: Copiar y Pegar (Más Simple)

#### Paso 1: Copiar el CSS
Copia todo el contenido de `components.css` y pégalo en tu archivo CSS principal o en una etiqueta `<style>` en tu HTML.

#### Paso 2: Copiar el HTML del Header
```html
<!-- Copia este bloque completo -->
<header class="header">
    <nav class="navbar navbar-expand-md navbar-light shadow fixed-top">
        <!-- ... todo el contenido del header ... -->
    </nav>
</header>
```

#### Paso 3: Copiar el HTML del Sidebar
```html
<!-- Copia este bloque completo -->
<div class="wrapper">
    <nav id="sidebar">
        <!-- ... todo el contenido del sidebar ... -->
    </nav>
    
    <div id="content">
        <!-- AQUÍ VA TU CONTENIDO -->
    </div>
</div>
```

#### Paso 4: Copiar el JavaScript
Copia todo el contenido de `components.js` y pégalo antes del cierre de `</body>`.

---

### Método 2: Archivos Externos (Recomendado)

#### Estructura de archivos:
```
tu-proyecto/
├── css/
│   └── components.css
├── js/
│   └── components.js
└── tu-pagina.html
```

#### En tu HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Página</title>
    
    <!-- Librerías CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    
    <!-- Tu CSS de componentes -->
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <!-- Copiar contenido del header -->
    </header>

    <!-- Wrapper con Sidebar y Contenido -->
    <div class="wrapper">
        <!-- Sidebar -->
        <nav id="sidebar">
            <!-- Copiar contenido del sidebar -->
        </nav>

        <!-- Tu Contenido -->
        <div id="content">
            <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info mb-3">
                    <i class="fas fa-bars"></i>
                    <span class="ml-2">Toggle Sidebar</span>
                </button>

                <!-- AQUÍ VA TU CONTENIDO PERSONALIZADO -->
                <h1>Mi Contenido</h1>
                <p>Contenido de tu página...</p>
            </div>
        </div>
    </div>

    <!-- Librerías JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/js/bootstrap.min.js"></script>
    
    <!-- Tu JS de componentes -->
    <script src="js/components.js"></script>
</body>
</html>
```

---

### Método 3: Incluir con JavaScript (Avanzado)

#### Crear archivos parciales:

**header-partial.html**
```html
<header class="header">
    <!-- Contenido del header -->
</header>
```

**sidebar-partial.html**
```html
<nav id="sidebar">
    <!-- Contenido del sidebar -->
</nav>
```

#### En tu página principal:
```html
<body>
    <div id="header-container"></div>
    
    <div class="wrapper">
        <div id="sidebar-container"></div>
        
        <div id="content">
            <!-- Tu contenido -->
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $('#header-container').load('header-partial.html');
            $('#sidebar-container').load('sidebar-partial.html', function() {
                // Inicializar componentes después de cargar
                initComponents();
            });
        });
    </script>
</body>
```

---

## 🎯 Personalización Rápida

### Cambiar el color del header
En `components.css`, busca:
```css
.header .navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Reemplaza con tu color:
```css
.header .navbar {
    background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
}
```

### Cambiar el logo
En el HTML del header, busca:
```html
<img alt="Logo GEME" src="/sites/geme/SiteAssets/img/logo.png">
```

Reemplaza con tu logo:
```html
<img alt="Tu Logo" src="ruta/a/tu/logo.png">
```

### Cambiar el nombre de usuario
En el HTML del header, busca:
```html
<span id="span-user-name" class="text-white">
    <i class="fa fa-user-circle mr-2"></i>Bienvenido, Demo Novakem 10
</span>
```

Puedes cambiarlo dinámicamente con JavaScript:
```javascript
$('#span-user-name').html('<i class="fa fa-user-circle mr-2"></i>Bienvenido, ' + nombreUsuario);
```

### Modificar los items del menú
En el HTML del sidebar, cada item tiene esta estructura:
```html
<li>
    <a href="#subMenuX" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
        Nombre del Menú
    </a>
    <ul class="collapse list-unstyled" id="subMenuX">
        <li>
            <a class="a-sidebar a-submenu" href="javascript:;" onclick="tuFuncion();">
                Subitem
            </a>
        </li>
    </ul>
</li>
```

---

## 🔧 Conectar con tu Backend

### Actualizar contadores desde API

Reemplaza las funciones stub en `components.js`:

```javascript
// Función real para obtener contador de TC
window.getCountTC = function() {
    var $spinner = $('#spinner-cargatc');
    var $icon = $('#btnRecargaTC');
    var $count = $('#countTC');
    
    $spinner.removeClass('d-none');
    $icon.addClass('d-none');
    
    // Llamada AJAX real
    $.ajax({
        url: '/api/tomas-conocimiento/count',
        method: 'GET',
        success: function(response) {
            $count.text(response.count);
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
        },
        error: function() {
            showNotification('Error al cargar contador', 'error');
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
        }
    });
};

// Función real para obtener tareas
window.getDatosTareasInit = function(filtro) {
    var $spinner = $('#spinner-cargatareas');
    var $icon = $('#btnRecarga');
    var $count = $('#countTareas');
    
    $spinner.removeClass('d-none');
    $icon.addClass('d-none');
    
    $.ajax({
        url: '/api/tareas/count',
        method: 'GET',
        data: { filtro: filtro },
        success: function(response) {
            $count.text(response.count);
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
        },
        error: function() {
            showNotification('Error al cargar tareas', 'error');
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
        }
    });
};
```

### Implementar navegación real

```javascript
window.InstanciarCamino = function(nivel, id, param, url) {
    // Guardar en historial o analytics
    console.log('Navegación:', { nivel, id, param, url });
    
    // Redirigir
    if (url) {
        window.location.href = url;
    }
};
```

---

## 📱 Testing Responsive

### Desktop (>992px)
- Sidebar visible por defecto
- Toggle opcional
- Contenido con margen izquierdo

### Tablet (768px-992px)
- Sidebar oculto por defecto
- Toggle requerido
- Contenido a ancho completo

### Mobile (<768px)
- Sidebar fullscreen
- Overlay oscuro
- Menú hamburguesa

### Probar en diferentes dispositivos:
```javascript
// Simular diferentes tamaños
// Chrome DevTools > Toggle Device Toolbar (Ctrl+Shift+M)
```

---

## ✅ Checklist de Integración

- [ ] Copiar `components.css` a tu proyecto
- [ ] Copiar `components.js` a tu proyecto
- [ ] Copiar HTML del header
- [ ] Copiar HTML del sidebar
- [ ] Verificar que todas las librerías CDN estén cargadas
- [ ] Personalizar logo y colores
- [ ] Actualizar items del menú según tu aplicación
- [ ] Implementar funciones de backend (contadores, navegación)
- [ ] Probar en diferentes dispositivos
- [ ] Verificar que el toggle funcione
- [ ] Probar búsqueda en sidebar
- [ ] Verificar atajos de teclado (Alt+S, Esc)

---

## 🐛 Problemas Comunes

### El sidebar no aparece
**Solución:** Verifica que el CSS esté cargado y que no haya conflictos con otros estilos.

### El toggle no funciona
**Solución:** Asegúrate de que jQuery y Bootstrap JS estén cargados antes de `components.js`.

### Los iconos no se muestran
**Solución:** Verifica que Font Awesome esté cargado correctamente.

### El sidebar no es responsive
**Solución:** Añade el meta viewport:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Los contadores no se actualizan
**Solución:** Implementa las funciones AJAX reales conectadas a tu backend.

---

## 📞 Necesitas Ayuda?

1. Revisa la consola del navegador (F12) para errores
2. Verifica que todas las dependencias estén cargadas
3. Compara tu código con `components.html` de ejemplo
4. Revisa la documentación completa en `README_COMPONENTS.md`

---

**¡Listo para usar!** 🎉

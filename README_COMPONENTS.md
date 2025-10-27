# Componentes GEME - Header y Sidebar

## 📋 Descripción

Sistema de componentes reutilizables que incluye un header con navegación y un sidebar colapsable para el sistema GEME.

## 📁 Archivos del Componente

```
concentrador/
├── components.html  # Página HTML con header y sidebar
├── components.css   # Estilos completos para los componentes
├── components.js    # JavaScript con toda la funcionalidad
└── README_COMPONENTS.md  # Esta documentación
```

## 🎯 Características Principales

### Header
- ✅ **Navbar fijo** con gradiente moderno
- ✅ **Logo personalizable**
- ✅ **Menú de navegación** responsive
- ✅ **Contador de Tomas de Conocimiento** con recarga
- ✅ **Contador de Tareas** con recarga
- ✅ **Información de usuario** con logout
- ✅ **Spinners animados** durante la carga
- ✅ **Totalmente responsive**

### Sidebar
- ✅ **Menú colapsable** con animaciones
- ✅ **Submenús multinivel** con iconos
- ✅ **Búsqueda integrada** en el menú
- ✅ **Scrollbar personalizado**
- ✅ **Estado persistente** (LocalStorage)
- ✅ **Overlay para móviles**
- ✅ **Atajos de teclado** (Alt+S, Esc)
- ✅ **Responsive** con breakpoints

## 🚀 Funcionalidades Implementadas

### 1. Toggle Sidebar
```javascript
// Botón para mostrar/ocultar sidebar
$('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
});
```

### 2. Búsqueda en Menú
- Campo de búsqueda integrado en el sidebar
- Filtrado en tiempo real
- Expansión automática de submenús con resultados

### 3. Contadores Dinámicos
- **Tomas de Conocimiento**: Recarga con `getCountTC()`
- **Mis Tareas**: Recarga con `getDatosTareasInit(filtro)`
- Animaciones de spinner durante la carga
- Actualización visual con badges

### 4. Navegación
```javascript
InstanciarCamino(nivel, id, param, url)
// nivel: 1 (header) o 2 (sidebar)
// id: ID del acceso
// param: Parámetros adicionales
// url: URL de destino
```

### 5. Responsive Design
- **Desktop** (>992px): Sidebar visible por defecto
- **Tablet** (768px-992px): Sidebar oculto, toggle disponible
- **Mobile** (<768px): Sidebar fullscreen con overlay

### 6. Persistencia de Estado
- Guarda el estado del sidebar en LocalStorage
- Restaura el estado al recargar la página
- Solo en desktop (>992px)

### 7. Notificaciones
```javascript
showNotification('Mensaje', 'tipo');
// tipos: success, error, warning, info
```

### 8. Atajos de Teclado
- **Alt + S**: Toggle sidebar
- **Esc**: Cerrar sidebar (en móvil)

## 🎨 Personalización

### Colores del Header
```css
.header .navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Colores del Sidebar
```css
#sidebar {
    background: #2c3e50;  /* Fondo principal */
}

#sidebar .sidebar-header {
    background: #1a252f;  /* Header del sidebar */
}

#sidebar ul ul {
    background: #1a252f;  /* Fondo de submenús */
}
```

### Ancho del Sidebar
```css
#sidebar {
    min-width: 280px;
    max-width: 280px;
}
```

### Logo
Reemplaza la ruta de la imagen:
```html
<img alt="Logo GEME" src="/sites/geme/SiteAssets/img/logo.png">
```

## 📱 Breakpoints Responsive

| Dispositivo | Ancho | Comportamiento |
|-------------|-------|----------------|
| Desktop | >992px | Sidebar visible, toggle opcional |
| Tablet | 768px-992px | Sidebar oculto, toggle requerido |
| Mobile | <768px | Sidebar fullscreen con overlay |
| Mobile Small | <576px | Sidebar 100% ancho |

## 🔧 Funciones JavaScript Disponibles

### Navegación
```javascript
InstanciarCamino(nivel, id, param, url)
```

### Contadores
```javascript
getCountTC()                    // Actualizar Tomas de Conocimiento
getDatosTareasInit(filtro)      // Actualizar Tareas
```

### Navegación Rápida
```javascript
irTomasConocimiento()           // Ir a Tomas de Conocimiento
verMisTarea()                   // Ir a Mis Tareas
```

### Notificaciones
```javascript
showNotification(mensaje, tipo) // Mostrar notificación
```

### Breadcrumb
```javascript
updateBreadcrumb(['SIG', 'Mejora', 'Auditorías'])
```

## 🎯 Integración en tu Proyecto

### Opción 1: Usar como está
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="components.css">
</head>
<body>
    <!-- Incluir el header y sidebar desde components.html -->
    <script src="components.js"></script>
</body>
</html>
```

### Opción 2: Extraer componentes
Copia el HTML del header y sidebar a tu página:

```html
<!-- Tu página -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="components.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <!-- Copiar contenido del header -->
    </header>
    
    <!-- Wrapper -->
    <div class="wrapper">
        <!-- Sidebar -->
        <nav id="sidebar">
            <!-- Copiar contenido del sidebar -->
        </nav>
        
        <!-- Tu contenido aquí -->
        <div id="content">
            <!-- Tu contenido personalizado -->
        </div>
    </div>
    
    <script src="components.js"></script>
</body>
</html>
```

### Opción 3: Componentes modulares
Crea archivos separados:

**header.html**
```html
<header class="header">
    <!-- Contenido del header -->
</header>
```

**sidebar.html**
```html
<nav id="sidebar">
    <!-- Contenido del sidebar -->
</nav>
```

Luego incluye con JavaScript:
```javascript
$('#header-container').load('header.html');
$('#sidebar-container').load('sidebar.html');
```

## 🔌 Dependencias

Todas las librerías se cargan desde CDN:

- jQuery 3.4.1
- jQuery UI 1.12.1
- Bootstrap 4.4.0
- Popper.js 1.14.7
- Font Awesome 5.15.4
- Moment.js 2.24.0
- JS Cookie 2.2.1

## 📊 Estructura del Menú

El menú del sidebar está organizado en:

1. **Comunicaciones Int. y Externas**
   - Matriz de Comunicaciones
   - Carga de Evidencias

2. **Mejora**
   - Sugerencias de Mejora
   - Acciones y condiciones Inseg
   - Auditorías
   - Caminata Integral
   - Informe de Observaciones
   - Inspecciones Planeadas
   - Objetivos
   - Brechas Legales
   - Reporte NC - Incidentes
   - Tratamiento de No Conformidades/Incidentes
   - Respaldo Actividades HSQS

3. **Matrices**
   - Ambiental
   - Contexto Organizacional
   - Partes Interesadas
   - Riesgos y Peligro

4. **Control Documentos**
   - Certificados Calibración Equipos
   - Biblioteca de Normas
   - Control Documentos
   - Control Registros
   - Flujo Aprobación Documental

5. **Reportes**
   - Reporte

6. **Capex y Gestión del Cambio**
   - Control Capex
   - Control Capex Jefe de Proyecto
   - Gestión del Cambio JP
   - Gestión del Cambio SIG

7. **Control Sitio**
   - Permisos Usuarios
   - Mantenedores
   - Adm. Noticias

8. **Tutoriales Plataforma**

## 🎨 Temas y Estilos

### Gradientes Disponibles
```css
/* Púrpura (actual) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Azul */
background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);

/* Verde */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* Naranja */
background: linear-gradient(135deg, #f46b45 0%, #eea849 100%);
```

## 🐛 Troubleshooting

### El sidebar no se muestra
- Verifica que `components.css` esté cargado
- Revisa la consola del navegador para errores
- Asegúrate de que jQuery esté cargado antes de `components.js`

### Los contadores no se actualizan
- Las funciones `getCountTC()` y `getDatosTareasInit()` son stubs
- Debes implementar las llamadas AJAX reales a tu backend

### El sidebar no es responsive
- Verifica que el viewport meta tag esté presente:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Los iconos no se muestran
- Confirma que Font Awesome esté cargado correctamente
- Revisa la consola para errores de red

## 📝 Notas Importantes

1. **Funciones Stub**: Las funciones de navegación y contadores son ejemplos. Debes implementar la lógica real según tu backend.

2. **URLs**: Todas las URLs apuntan a `/sites/geme/`. Ajusta según tu entorno.

3. **LocalStorage**: El estado del sidebar se guarda en el navegador del usuario.

4. **Performance**: El sidebar usa transiciones CSS3 para mejor rendimiento.

5. **Accesibilidad**: Incluye atributos ARIA para lectores de pantalla.

## 🔄 Próximas Mejoras

- [ ] Temas claro/oscuro
- [ ] Más opciones de personalización
- [ ] Exportar/importar configuración
- [ ] Modo offline
- [ ] PWA support
- [ ] Animaciones adicionales

## 📞 Soporte

Para más información sobre las librerías utilizadas:
- [Bootstrap 4](https://getbootstrap.com/docs/4.4/)
- [jQuery](https://jquery.com/)
- [Font Awesome](https://fontawesome.com/)

---

**Versión:** 1.0  
**Fecha:** Octubre 2024  
**Proyecto:** GEME Concentrador

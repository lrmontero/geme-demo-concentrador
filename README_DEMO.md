# Maqueta Demo GEME

## 📋 Descripción

Maqueta HTML completa que integra todas las librerías solicitadas con ejemplos funcionales de cada una.

## 🚀 Librerías Incluidas

### CSS
- **jQuery UI** - Componentes de interfaz de usuario
- **Bootstrap 4.4.0** - Framework CSS responsive
- **DataTables** - Tablas interactivas con búsqueda, ordenamiento y paginación
- **FontAwesome 5.15.4** - Iconos vectoriales
- **Trumbowyg 2.23.0** - Editor WYSIWYG
- **Bootstrap Select 1.13.18** - Selectores mejorados con búsqueda

### JavaScript
- **jQuery 3.4.1** - Librería JavaScript base
- **jQuery UI 1.12.1** - Componentes interactivos (datepicker, dialog, effects)
- **Popper.js** - Motor de posicionamiento para tooltips
- **Bootstrap 4.4.0** - Componentes JavaScript (modals, alerts, collapse)
- **Moment.js 2.24.0** - Manejo y formateo de fechas
- **JS Cookie 2.2.1** - Manejo de cookies del navegador
- **Bootstrap Select** - Con idioma español (es_CL)
- **DataTables** - Con plugins de responsive, datetime y sorting
- **Trumbowyg** - Editor de texto enriquecido

## 📁 Archivos

```
concentrador/
├── demo.html       # Archivo HTML principal con la maqueta
├── demo.js         # JavaScript con toda la funcionalidad
└── README_DEMO.md  # Este archivo
```

## 🎯 Funcionalidades Implementadas

### 1. Bootstrap Components
- **Modal** - Ventana emergente
- **Alerts** - Alertas con auto-cierre
- **Collapse** - Contenido colapsable
- **Botones** - Diferentes estilos y tamaños

### 2. FontAwesome Icons
- Iconos interactivos con efectos hover
- Múltiples categorías de iconos
- Animaciones con jQuery UI

### 3. Bootstrap Select
- Selección simple con búsqueda
- Selección múltiple
- Configurado en español

### 4. jQuery UI Datepicker
- Selector de fechas en español
- Dos campos de fecha (inicio/fin)
- Fecha actual con actualización en tiempo real
- Dialog modal de jQuery UI

### 5. Trumbowyg Editor
- Editor WYSIWYG completo
- Barra de herramientas personalizada
- Función para obtener contenido HTML
- Contenido de ejemplo precargado

### 6. DataTables
- Tabla responsive con 5 registros de ejemplo
- Búsqueda en tiempo real
- Ordenamiento por columnas
- Paginación
- Botones de acción (ver, editar, eliminar)
- Configurado en español
- Integración con Moment.js para fechas

### 7. JS Cookie
- Guardar cookies
- Leer cookies
- Eliminar cookies
- Feedback visual de operaciones

### 8. Moment.js
- Formato de fechas en español
- Reloj en tiempo real
- Integración con DataTables

## 🌐 Cómo Usar

### Opción 1: Abrir directamente
1. Abre el archivo `demo.html` en tu navegador web
2. Todas las librerías se cargan desde CDN

### Opción 2: Servidor local
```bash
# Navega al directorio
cd /Users/leonmontero/apps/sharepointApps/geme/concentrador

# Inicia un servidor local (Python 3)
python3 -m http.server 8000

# O con Node.js
npx http-server -p 8000

# Abre en el navegador
# http://localhost:8000/demo.html
```

## ⚠️ Nota Importante

El archivo hace referencia a:
```html
<script src="/sites/geme/SiteAssets/js/jquery.ui.datepicker-es.js"></script>
```

Este archivo es para la traducción al español del datepicker. Si no existe en tu entorno, la funcionalidad del datepicker seguirá funcionando pero en inglés. La maqueta ya incluye la configuración en español directamente en el código JavaScript.

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en la sección `<style>` del archivo HTML.

### Agregar más datos a la tabla
Añade más filas `<tr>` en el `<tbody>` de la tabla `#demoTable`.

### Modificar el editor
Cambia la configuración de botones en la inicialización de Trumbowyg en `demo.js`.

### Agregar más opciones a los selectores
Añade más elementos `<option>` en los elementos `<select>`.

## 🔍 Verificación

Abre la consola del navegador (F12) para ver:
- Versiones de todas las librerías cargadas
- Logs de eventos
- Mensajes de confirmación

## 📝 Características Adicionales

- **Responsive**: Funciona en dispositivos móviles y tablets
- **Accesibilidad**: Uso de atributos ARIA y semántica HTML5
- **Performance**: Todas las librerías desde CDN con integridad verificada
- **UX**: Feedback visual en todas las interacciones
- **Internacionalización**: Configurado en español

## 🛠️ Troubleshooting

### Las librerías no cargan
- Verifica tu conexión a internet (todas las librerías vienen de CDN)
- Revisa la consola del navegador para errores

### El datepicker no se ve
- Asegúrate de que jQuery UI CSS esté cargado
- Verifica que no haya conflictos con otros estilos

### DataTables no funciona
- Confirma que jQuery se carga antes que DataTables
- Revisa que la estructura de la tabla sea correcta

## 📞 Soporte

Para más información sobre cada librería, consulta su documentación oficial:
- [jQuery](https://jquery.com/)
- [jQuery UI](https://jqueryui.com/)
- [Bootstrap](https://getbootstrap.com/docs/4.4/)
- [DataTables](https://datatables.net/)
- [FontAwesome](https://fontawesome.com/)
- [Trumbowyg](https://alex-d.github.io/Trumbowyg/)
- [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/)
- [Moment.js](https://momentjs.com/)
- [JS Cookie](https://github.com/js-cookie/js-cookie)

---

**Versión:** 1.0  
**Fecha:** Octubre 2024  
**Proyecto:** GEME Concentrador

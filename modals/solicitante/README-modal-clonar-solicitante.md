# El solicitante puede clonar cualquier solicitud los campos que se deben clonar son: 

Estado por defecto al clonar una solicitud: "Pendiente"
Todos los campos son editables a excepcion del Estado

Header
1. Categoría: Estado - Nombre de Campo: ESTADO - Label: Estado - Tipo de Dato: Línea de Texto - Descripción: Se clona en estado Pendiente - Obligatoriedad: ✅ Lectura. Por defecto "Pendiente"

Fechas Programadas
6. Categoría: Fechas Programadas - Nombre de Campo: INICIO_PROGRAMADO - Label: Fecha prog. Inicio - Tipo de Dato: Fecha y hora - Descripción: En esté campo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos. - Obligatoriedad: ✅ Obligatorio. Se vacía el campo.
7. Categoría: Fechas Programadas - Nombre de Campo: FIN_PROGRAMADO - Label: Fecha prog. fin - Tipo de Dato: Fecha y hora - Descripción: En esté campo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos. - Obligatoriedad: ✅ Obligatorio. Se vacía el campo.

Instalación y Equipos
12. Categoría: Instalación y Equipos - Nombre de Campo: INSTALACION_GM - Label: Instalación GM - Tipo de Dato: Elección - Descripción: Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1) - Obligatoriedad: ✅ Obligatorio. Se copia el campo
13. Categoría: Instalación y Equipos - Nombre de Campo: EQUIPOS - Label: Instalaciones/Equipos a intervenir - Tipo de Dato: Búsqueda (con filtrado) o Metadatos administrados - Descripción: En esté modulo se deberá ingresar lo que intervendrá para los trabajos, en los equipos que salen con varios, están sujeto a selección de otros subequipos internos: (Paños: Varios, Transformador: Varios, Secciones de barra: Varios, Scada, Medidores de facturación: Varios, Compensadores: Varios, Grupo de Emergencia, Batería, Tendido de Cable, Cargadores, Telecomunicación, Línea: Varios, Otros) - Obligatoriedad: ✅ Obligatorio. Se copia el campo

Características de la Intervención
14. Categoría: Características de la Intervención - Nombre de Campo: TIPO_INTERVENCION - Label: Tipo de Intervención - Tipo de Dato: Elección - Descripción: En esté modulo se deberá si la aplica a una intervención o desconexión. - Obligatoriedad: ✅ Obligatorio. Se copia el campo
15. Categoría: Características de la Intervención - Nombre de Campo: POTENCIA - Label: Potencia MWH - Tipo de Dato: Número (configurado con 2 decimales) - Descripción: Se debe ingresar la potencia involucrada - Obligatoriedad: ✅ Obligatorio. Se copia el campo
16. Categoría: Características de la Intervención - Nombre de Campo: APLICA_SODI - Label: Aplica SODI - Tipo de Dato: Sí/No - Descripción: Aplica o no aplica SODI - Obligatoriedad: ✅ Obligatorio. Se copia el campo
17. Categoría: Características de la Intervención - Nombre de Campo: RIESGO - Label: Clasificación del Riesgo - Tipo de Dato: Elección - Descripción: En esté modulo se deberá identificar el tipo de riesgo. (riesgo bajo, medio alto). - Obligatoriedad: ✅ Obligatorio. Se copia el campo
18. Categoría: Características de la Intervención - Nombre de Campo: DESCRIPCION_RIESGO - Label: Descripción del Riesgo - Tipo de Dato: Múltiples Lineas de Texto. Dependiente de Clasificación de Riesgo - Descripción: En este campo se debera describir el riesgo de forma obligatoria en el caso que el riesgo se haya clasificado como medio o alto. - Obligatoriedad: ✅ Obligatorio. Para Riesgo Medio o Alto. Se copia el campo

Descripción y condiciones
19. Categoría: Descripción y condiciones - Nombre de Campo: DESCRIPCION - Label: Descripción del trabajo a realizar - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir). - Obligatoriedad: ✅ Obligatorio. Se copia el campo
20. Categoría: Descripción y condiciones - Nombre de Campo: CONDICIONES - Label: Condiciones requeridas - Tipo de Dato: Múltiples Lineas de Texto - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados. - Obligatoriedad: ✅ Obligatorio. Se copia el campo
21. Categoría: Descripción y condiciones - Nombre de Campo: COMENTARIOS - Label: Comentarios - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En esté modulo se podrá dejar comentarios adicionales. - Obligatoriedad: ✅ Opcional. Se copia el campo
22. Categoría: Descripción y condiciones - Nombre de Campo: AFECTACIONES - Label: Afectaciones - Tipo de Dato: Elección - Descripción: En esté modulo se deberá dejar indicado si afectar o no a lo siguiente: (SSCC, Protecciones, Medidores) - Obligatoriedad: ✅ Opcional. Se copia el campo
23. Categoría: Descripción y condiciones - Nombre de Campo: DESCRIPCION_AFECTACION - Label: Descripción de la Afectación - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En este campo se deberá describir de forma obligatoria la afectación, en el caso que se haya seleccionado alguna de las opciones de la lista. - Obligatoriedad: ✅ Obligatorio. Solo si se selecciona una Afectación. Se copia el campo

Archivos Adjuntos
24. Categoría: Archivos Adjuntos - Nombre de Campo: ADJUNTO - Label: Carga de archivo - Tipo de Dato: Adjunto - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc. - Obligatoriedad: ✅ Opcional. Se vacía el campo.
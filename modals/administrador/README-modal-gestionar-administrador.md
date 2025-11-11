# Anexo 1. Administrador
# Las solicitudes de trabajos deben estar compuestas por los siguientes campos:

El administrador puede gestionar los estados de las solicitudes (Pendiente, En Análisis, Administrador Gestionando)

Al gestionar puede visualizar y editar los siguientes campos:

Cuando el estado es "Pendiente" o "En Análisis" los campos de gestionar siguen las siguientes reglas de obligatoriedad y lectura:

Header
1. Categoría: Estado - Nombre de Campo: ESTADO - Label: Estado - Tipo de Dato: Liena de Texto - Descripción: En esté modulo se deberá actualizar el estado en que está cada solicitud, los estados que puede gestionar el administrador son: (Pendiente, En Análisis) - Obligatoriedad: ✅ Lectura
2. Categoría: Estado - Nombre de Campo: OBSERVACIONES - Label: Observaciones - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En cada cambio de estado se debe incluir una observacion obligatoria. - Obligatoriedad: ✅ Lectura

Identificación
3. Categoría: Identificación - Nombre de Campo: ID_SOLICITUD - Label: ID Solicitud - Tipo de Dato: Liena de Texto - Descripción: Id de la solicitud (CEN o SODI), Este será el número asignado por la solicitud del CEN o SODI, sirviendo como identificador del trabajo. - Obligatoriedad: ✅ Opcional
4. Categoría: Identificación - Nombre de Campo: TIPO - Label: Tipo - Tipo de Dato: Elección - Descripción: Las solicitudes se clasificarán según el tipo de trabajo y/o solicitante, con las siguientes categorías: (SDCN, SDCF, SICN, SICF, IL, MM, SODI) - Obligatoriedad: ✅ Opcional
5. Categoría: Identificación - Nombre de Campo: RELACION_SODI_CEN - Label: Relación SODI/CEN - Tipo de Dato: Múltiples Lineas de Texto - Descripción: Campo de texto para saber con que solicitudes SODIs o CEN se relaciona esta solicitud. - Obligatoriedad: ✅ Opcional

Fechas Programadas
6. Categoría: Fechas Programadas - Nombre de Campo: INICIO_PROGRAMADO - Label: Fecha prog. Inicio - Tipo de Dato: Fecha y hora - Descripción: En esté campo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos. - Obligatoriedad: ✅ Lectura
7. Categoría: Fechas Programadas - Nombre de Campo: FIN_PROGRAMADO - Label: Fecha prog. fin - Tipo de Dato: Fecha y hora - Descripción: En esté campo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos. - Obligatoriedad: ✅ Lectura

Empresas Involucradas
10. Categoría: Empresas Involucradas - Nombre de Campo: EMPRESA_SOLICITANTE - Label: Empresa Solicitante - Tipo de Dato: Elección - Descripción: Se identificará la empresa que solicita los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa) - Obligatoriedad: ✅ Opcional
11. Categoría: Empresas Involucradas - Nombre de Campo: EMPRESA_RECEPTORA - Label: Empresa Receptora - Tipo de Dato: Elección - Descripción: Se identificará la empresa receptora de los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa) - Obligatoriedad: ✅ Opcional

Instalación y Equipos
12. Categoría: Instalación y Equipos - Nombre de Campo: INSTALACION_GM - Label: Instalación GM - Tipo de Dato: Elección - Descripción: Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1) - Obligatoriedad: ✅ Lectura
13. Categoría: Instalación y Equipos - Nombre de Campo: EQUIPOS - Label: Instalaciones/Equipos a intervenir - Tipo de Dato: Búsqueda (con filtrado) o Metadatos administrados - Descripción: En esté modulo se deberá ingresar lo que intervendrá para los trabajos, en los equipos que salen con varios, están sujeto a selección de otros subequipos internos: (Paños: Varios, Transformador: Varios, Secciones de barra: Varios, Scada, Medidores de facturación: Varios, Compensadores: Varios, Grupo de Emergencia, Batería, Tendido de Cable, Cargadores, Telecomunicación, Línea: Varios, Otros) - Obligatoriedad: ✅ Lectura

Características de la Intervención
14. Categoría: Características de la Intervención - Nombre de Campo: TIPO_INTERVENCION - Label: Tipo de Intervención - Tipo de Dato: Elección - Descripción: En esté modulo se deberá si la aplica a una intervención o desconexión. - Obligatoriedad: ✅ Lectura
15. Categoría: Características de la Intervención - Nombre de Campo: POTENCIA - Label: Potencia MWH - Tipo de Dato: Número (configurado con 2 decimales) - Descripción: Se debe ingresar la potencia involucrada - Obligatoriedad: ✅ Lectura
16. Categoría: Características de la Intervención - Nombre de Campo: APLICA_SODI - Label: Aplica SODI - Tipo de Dato: Sí/No - Descripción: Aplica o no aplica SODI - Obligatoriedad: ✅ Lectura
17. Categoría: Características de la Intervención - Nombre de Campo: RIESGO - Label: Clasificación del Riesgo - Tipo de Dato: Elección - Descripción: En esté modulo se deberá identificar el tipo de riesgo. (riesgo bajo, medio alto). - Obligatoriedad: ✅ Lectura
18. Categoría: Características de la Intervención - Nombre de Campo: DESCRIPCION_RIESGO - Label: Descripción del Riesgo del Trabajo - Tipo de Dato: Múltiples Lineas de Texto. Dependiente de Clasificación de Riesgo - Descripción: En este campo se debera describir el riesgo de forma obligatoria en el caso que el riesgo se haya clasificado como medio o alto. - Obligatoriedad: ✅ Lectura

Descripción y condiciones
19. Categoría: Descripción y condiciones - Nombre de Campo: DESCRIPCION - Label: Descripción del trabajo a realizar - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir). - Obligatoriedad: ✅ Lectura
20. Categoría: Descripción y condiciones - Nombre de Campo: CONDICIONES - Label: Condiciones requeridas - Tipo de Dato: Múltiples Lineas de Texto - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados. - Obligatoriedad: ✅ Lectura
21. Categoría: Descripción y condiciones - Nombre de Campo: COMENTARIOS - Label: Comentarios - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En esté modulo se podrá dejar comentarios adicionales. - Obligatoriedad: ✅ Lectura
22. Categoría: Descripción y condiciones - Nombre de Campo: AFECTACIONES - Label: Afectaciones - Tipo de Dato: Elección - Descripción: En esté modulo se deberá dejar indicado si afectar o no a lo siguiente: (SSCC, Protecciones, Medidores) - Obligatoriedad: ✅ Lectura
23. Categoría: Descripción y condiciones - Nombre de Campo: DESCRIPCION_AFECTACION - Label: Descripción de la Afectación - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En este campo se deberá describir de forma obligatoria la afectación, en el caso que se haya seleccionado alguna de las opciones de la lista. - Obligatoriedad: ✅ Lectura

Archivos Adjuntos
24. Categoría: Archivos Adjuntos - Nombre de Campo: ADJUNTO - Label: Carga de archivo - Tipo de Dato: Adjunto - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc. - Obligatoriedad: ✅ Opcional
25. Categoría: Archivos Adjuntos - Nombre de Campo: SODI Adjunto - Label: SODI Adjunta - Tipo de Dato: Sí/No - Descripción: Se marcará si se esta cargando una adjunto SODI o no. - Obligatoriedad: ✅ Opcional

Footer-> Información del Sistema
26. Categoría: Metadata - Nombre de Campo: ID_REGISTRO - Label: ID - Tipo de Dato: Liena de Texto - Descripción: Id del registro de lista - Obligatoriedad: ✅ Lectura
27. Categoría: Metadata - Nombre de Campo: CREADO - Label: Creado - Tipo de Dato: Liena de Texto - Descripción: Fecha de creación del registro - Obligatoriedad: ✅ Lectura
28. Categoría: Metadata - Nombre de Campo: ACTUALIZADO - Label: Actualizado - Tipo de Dato: Liena de Texto - Descripción: Fecha de actualización del registro - Obligatoriedad: ✅ Lectura
29. Categoría: Metadata - Nombre de Campo: SOLICITANTE - Label: Solicitante - Tipo de Dato: Liena de Texto - Descripción: Administrador que creó el registro - Obligatoriedad: ✅ Lectura
30. Categoría: Metadata - Nombre de Campo: ADMINISTRADOR - Label: Administrador - Tipo de Dato: Liena de Texto - Descripción: Solicitante que creó el registro - Obligatoriedad: ✅ Lectura
31. Categoría: Metadata - Nombre de Campo: CREADO_POR - Label: Creado por - Tipo de Dato: Liena de Texto - Descripción: Almacena que ROL creó el registro - Obligatoriedad: ✅ Lectura


Cuando el estado es "Administrador Gestionando" los campos de gestionar siguen las siguientes reglas de obligatoriedad y lectura:

Header
1. Categoría: Estado - Nombre de Campo: ESTADO - Label: Estado - Tipo de Dato: Liena de Texto - Descripción: En esté modulo se deberá actualizar el estado en que está cada solicitud, estos estados serán los siguientes: (Administrador Gestionando) - Obligatoriedad: ✅ Lectura
2. Categoría: Estado - Nombre de Campo: OBSERVACIONES - Label: Observaciones - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En cada cambio de estado se debe incluir una observacion obligatoria. - Obligatoriedad: ✅ Lectura

Identificación
3. Categoría: Identificación - Nombre de Campo: ID_SOLICITUD - Label: ID Solicitud - Tipo de Dato: Liena de Texto - Descripción: Id de la solicitud (CEN o SODI), Este será el número asignado por la solicitud del CEN o SODI, sirviendo como identificador del trabajo. - Obligatoriedad: ✅ Obligatorio
4. Categoría: Identificación - Nombre de Campo: TIPO - Label: Tipo - Tipo de Dato: Elección - Descripción: Las solicitudes se clasificarán según el tipo de trabajo y/o solicitante, con las siguientes categorías: (SDCN, SDCF, SICN, SICF, IL, MM, SODI) - Obligatoriedad: ✅ Obligatorio
5. Categoría: Identificación - Nombre de Campo: RELACION_SODI_CEN - Label: Relación SODI/CEN - Tipo de Dato: Múltiples Lineas de Texto - Descripción: Campo de texto para saber con que solicitudes SODIs o CEN se relaciona esta solicitud. - Obligatoriedad: ✅ Opcional

Fechas Programadas
6. Categoría: Fechas Programadas - Nombre de Campo: INICIO_PROGRAMADO - Label: Fecha prog. Inicio - Tipo de Dato: Fecha y hora - Descripción: En esté campo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos. - Obligatoriedad: ✅ Lectura
7. Categoría: Fechas Programadas - Nombre de Campo: FIN_PROGRAMADO - Label: Fecha prog. fin - Tipo de Dato: Fecha y hora - Descripción: En esté campo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos. - Obligatoriedad: ✅ Lectura

Empresas Involucradas
10. Categoría: Empresas Involucradas - Nombre de Campo: EMPRESA_SOLICITANTE - Label: Empresa Solicitante - Tipo de Dato: Elección - Descripción: Se identificará la empresa que solicita los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa) - Obligatoriedad: ✅ Obligatorio
11. Categoría: Empresas Involucradas - Nombre de Campo: EMPRESA_RECEPTORA - Label: Empresa Receptora - Tipo de Dato: Elección - Descripción: Se identificará la empresa receptora de los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa) - Obligatoriedad: ✅ Obligatorio

Instalación y Equipos
12. Categoría: Instalación y Equipos - Nombre de Campo: INSTALACION_GM - Label: Instalación GM - Tipo de Dato: Elección - Descripción: Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1) - Obligatoriedad: ✅ Lectura
13. Categoría: Instalación y Equipos - Nombre de Campo: EQUIPOS - Label: Instalaciones/Equipos a intervenir - Tipo de Dato: Búsqueda (con filtrado) o Metadatos administrados - Descripción: En esté modulo se deberá ingresar lo que intervendrá para los trabajos, en los equipos que salen con varios, están sujeto a selección de otros subequipos internos: (Paños: Varios, Transformador: Varios, Secciones de barra: Varios, Scada, Medidores de facturación: Varios, Compensadores: Varios, Grupo de Emergencia, Batería, Tendido de Cable, Cargadores, Telecomunicación, Línea: Varios, Otros) - Obligatoriedad: ✅ Lectura

Características de la Intervención
14. Categoría: Características de la Intervención - Nombre de Campo: TIPO_INTERVENCION - Label: Tipo de Intervención - Tipo de Dato: Elección - Descripción: En esté modulo se deberá si la aplica a una intervención o desconexión. - Obligatoriedad: ✅ Lectura
15. Categoría: Características de la Intervención - Nombre de Campo: POTENCIA - Label: Potencia MWH - Tipo de Dato: Número (configurado con 2 decimales) - Descripción: Se debe ingresar la potencia involucrada - Obligatoriedad: ✅ Lectura
16. Categoría: Características de la Intervención - Nombre de Campo: APLICA_SODI - Label: Aplica SODI - Tipo de Dato: Sí/No - Descripción: Aplica o no aplica SODI - Obligatoriedad: ✅ Lectura
17. Categoría: Características de la Intervención - Nombre de Campo: RIESGO - Label: Clasificación del Riesgo - Tipo de Dato: Elección - Descripción: En esté modulo se deberá identificar el tipo de riesgo. (riesgo bajo, medio alto). - Obligatoriedad: ✅ Lectura
18. Categoría: Características de la Intervención - Nombre de Campo: DESCRIPCION_RIESGO - Label: Descripción del Riesgo del Trabajo - Tipo de Dato: Múltiples Lineas de Texto. Dependiente de Clasificación de Riesgo - Descripción: En este campo se debera describir el riesgo de forma obligatoria en el caso que el riesgo se haya clasificado como medio o alto. - Obligatoriedad: ✅ Lectura

Descripción y condiciones
19. Categoría: Descripción y condiciones - Nombre de Campo: DESCRIPCION - Label: Descripción del trabajo a realizar - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir). - Obligatoriedad: ✅ Lectura
20. Categoría: Descripción y condiciones - Nombre de Campo: CONDICIONES - Label: Condiciones requeridas - Tipo de Dato: Múltiples Lineas de Texto - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados. - Obligatoriedad: ✅ Lectura
21. Categoría: Descripción y condiciones - Nombre de Campo: COMENTARIOS - Label: Comentarios - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En esté modulo se podrá dejar comentarios adicionales. - Obligatoriedad: ✅ Lectura
22. Categoría: Descripción y condiciones - Nombre de Campo: AFECTACIONES - Label: Afectaciones - Tipo de Dato: Elección - Descripción: En esté modulo se deberá dejar indicado si afectar o no a lo siguiente: (SSCC, Protecciones, Medidores) - Obligatoriedad: ✅ Lectura
23. Categoría: Descripción y condiciones - Nombre de Campo: DESCRIPCION_AFECTACION - Label: Descripción de la Afectación - Tipo de Dato: Múltiples Lineas de Texto - Descripción: En este campo se deberá describir de forma obligatoria la afectación, en el caso que se haya seleccionado alguna de las opciones de la lista. - Obligatoriedad: ✅ Lectura

Archivos Adjuntos
24. Categoría: Archivos Adjuntos - Nombre de Campo: ADJUNTO - Label: Carga de archivo - Tipo de Dato: Adjunto - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc. - Obligatoriedad: ✅ Obligatorio
25. Categoría: Archivos Adjuntos - Nombre de Campo: SODI Adjunto - Label: SODI Adjunta - Tipo de Dato: Sí/No - Descripción: Se marcará si se esta cargando una adjunto SODI o no. - Obligatoriedad: ✅ Obligatorio


Footer-> Información del Sistema
26. Categoría: Metadata - Nombre de Campo: ID_REGISTRO - Label: ID - Tipo de Dato: Liena de Texto - Descripción: Id del registro de lista - Obligatoriedad: ✅ Lectura
27. Categoría: Metadata - Nombre de Campo: CREADO - Label: Creado - Tipo de Dato: Liena de Texto - Descripción: Fecha de creación del registro - Obligatoriedad: ✅ Lectura
28. Categoría: Metadata - Nombre de Campo: ACTUALIZADO - Label: Actualizado - Tipo de Dato: Liena de Texto - Descripción: Fecha de actualización del registro - Obligatoriedad: ✅ Lectura
29. Categoría: Metadata - Nombre de Campo: SOLICITANTE - Label: Solicitante - Tipo de Dato: Liena de Texto - Descripción: Administrador que creó el registro - Obligatoriedad: ✅ Lectura
30. Categoría: Metadata - Nombre de Campo: ADMINISTRADOR - Label: Administrador - Tipo de Dato: Liena de Texto - Descripción: Solicitante que creó el registro - Obligatoriedad: ✅ Lectura
31. Categoría: Metadata - Nombre de Campo: CREADO_POR - Label: Creado por - Tipo de Dato: Liena de Texto - Descripción: Almacena que ROL creó el registro - Obligatoriedad: ✅ Lectura

Se debe agregar una sección para avanzar al siguiente estado

Opciones para avanzar:
1. Pendiente
    Si la solicitud es "Pendiente", el administrador puede enviar a "En Análisis", el nombre de la transición es: "Analizar Solicitud"
    Si la solicitud es "Pendiente", el administrador puede enviar a "Devuelta", el nombre de la transición es: "Devolver Solicitud"
    Si la solicitud es "Pendiente", el administrador puede enviar a "Administrador Gestionando", el nombre de la transición es: "Gestionar Solicitud"
    Si la solicitud es "Pendiente", el administrador puede enviar a "Anular", el nombre de la transición es: "Anular solicitud"

2. En Análisis
    Si la solicitud es "En Análisis", el administrador puede enviar a "Devuelta", el nombre de la transición es: "Devolver Solicitud"
    Si la solicitud es "En Análisis", el administrador puede enviar a "Administrador Gestionando", el nombre de la transición es: "Gestionar Solicitud"
    Si la solicitud es "En Análisis", el administrador puede enviar a "Anular", el nombre de la transición es: "Anular solicitud"

3. Administrador Gestionando
    Si la solicitud es "Administrador Gestionando", el administrador puede enviar a "Programada", el nombre de la transición es: "Programar Solicitud"
    Si la solicitud es "Administrador Gestionando", el administrador puede enviar a "Anular", el nombre de la transición es: "Anular solicitud"

Campo de OBSERVACIONES obligatorio

Añadir leyenda de obligatorio
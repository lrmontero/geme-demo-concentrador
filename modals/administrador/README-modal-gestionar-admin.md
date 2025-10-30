# Anexo 1. Administrador
# Las solicitudes de trabajos deben estar compuestas por los siguientes campos:

El administrador puede gestionar los estados de las solicitudes (Pendiente, En Análisis, Devuelta, Administrador Gestionando)

Al gestionar puede visualizar y editar los siguientes campos:

Header
ver -> 1 - Nombre campo: ESTADO - label: Estado - Descripción: El administrador puede gestionar los estados de las solicitudes (Pendiente, En Análisis, Devuelta, Administrador Gestionando)
ver -> 2 - Nombre campo: OBSERVACIONES - label: Observaciones - Descripción: Se podrán incluir observaciones en caso de ser necesario.

Identificación
editar -> 3 - Nombre campo: ID_SOLICITUD - label: ID Solicitud - Descripción: Id de la solicitud (CEN o SODI), Este será el número asignado por la solicitud del CEN o SODI, sirviendo como identificador del trabajo.
editar -> 4 - Nombre campo: TIPO - label: Tipo - Descripción: Las solicitudes se clasificarán según el tipo de trabajo y/o solicitante, con las siguientes categorías: (SDCN, SDCF, SICN, SICF, IL, MM, SODI)
editar -> 5 - RELACION_SODI_CEN - label: Relación SODI-CEN - Descripción: Campo de texto para saber con que solicitudes SODIs o CEN se relaciona esta solicitud.

Fechas Programadas
ver -> 6 - Nombre campo: INICIO_PROGRAMADO - label: Fecha y hora programada de inicio - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos.
ver -> 7 - Nombre campo: FIN_PROGRAMADO - label: Fecha y hora programada de fin - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos.

Empresas Involucradas
editar -> 10 - Nombre campo: EMPRESA_SOLICITANTE - label: Empresa Solicitante - Descripción: Se identificará la empresa que solicita los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa)
editar -> 11 - Nombre campo: EMPRESA_RECEPTORA - label: Empresa Receptora - Descripción: Se identificará la empresa receptora de los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa)

Instalación y Equipos
ver -> 12 - Nombre campo: INSTALACION_GM - label: Instalación GM - Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1)
ver -> 13 - Nombre campo: EQUIPOS - label: Instalaciones/equipos a intervenir - Descripción: En esté modulo se deberá ingresar lo que intervendrá para los trabajos, en los equipos que salen con varios, están sujeto a selección de otros subequipos internos: (Paños: Varios, Transformador: Varios, Secciones de barra: Varios, Scada, Medidores de facturación: Varios, Compensadores: Varios, Grupo de Emergencia, Batería, Tendido de Cable, Cargadores, Telecomunicación, Línea: Varios, Otros)

Características de la Intervención
ver -> 14 - Nombre campo: TIPO_INTERVENCION - label: Tipo de intervención - Descripción: En esté modulo se deberá si la aplica a una intervención o desconexión.
ver -> 15 - Nombre campo: RIESGOS - label: Descripción del Riesgo del Trabajo - Descripción: En esté modulo se deberá identificar el tipo de riesgo. (riesgo bajo, medio alto).
ver -> 16 - Nombre campo: SODI - label: SODI - Descripción: Aplica o no aplica.
ver -> 17 - Nombre campo: POTENCIA - label: Potencia KwH - Descripción: campo numerico

Descripción y Condiciones
ver -> 18 - Nombre campo: DESCRIPCION - label: Descripción del trabajo a realizar - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir).
ver -> 19 - Nombre campo: CONDICIONES - label: Condiciones requeridas - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados.
ver -> 20 - Nombre campo: AFECTACIONES - label: Afectaciones - Descripción: En esté modulo se deberá dejar indicado si afectar o no a lo siguiente: (SSCC, Protecciones, Medidores)
ver -> 21 - Nombre campo: COMENTARIOS - label: Comentarios - Descripción: En esté modulo se podrá dejar comentarios adicionales.

Archivos Adjuntos
descargar -> 22 - Nombre campo: ADJUNTO - label: Carga de archivo - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc.

Footer->
Información del Sistema
ver -> 23 - Nombre campo: ID_REGISTRO - label: ID - Descripción: Id del registro de lista
ver -> 24 - Nombre campo: CREADO - label: Creado - Descripción: Fecha de creación del registro
ver -> 25 - Nombre campo: ACTUALIZADO - label: Actualizado - Descripción: Fecha de actualización del registro
ver -> 26 - Nombre campo: ADMINISTRADOR - label: Administrador - Descripción: Administrador que creó el registro
ver -> 27 - Nombre campo: SOLICITANTE - label: Solicitante - Descripción: Solicitante que creó el registro
ver -> 28 - Nombre campo: CREADO_POR - label: Creado por - Descripción: Creado por quién el registro


Se debe agregar una seccion para avanzar al siguiente estado

Opciones para avanzar:
1. Pendiente
    Si la solicitud es pendiente, se puede avanzar a "En Análisis"
    Si la solicitud es pendiente, se puede avanzar a "Devuelta"
    Si la solicitud es pendiente, se puede avanzar a "Administrador Gestionando"
2. En Análisis
    Si la solicitud es en análisis, se puede avanzar a "Devuelta" o "Administrador Gestionando"
3. Devuelta
    Si la solicitud es devuelta, se puede avanzar a "En Análisis"
4. Administrador Gestionando
    Si la solicitud es administrador gestionando, se puede avanzar a "Programada"

Campo de OBSERVACIONES obligatorio


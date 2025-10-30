# Anexo 1. Despachador

El despachador puede editar los siguientes campos solo en estado Despachador Gestionando

Header
ver -> 1 - Nombre campo: ESTADO - label: Estado - Descripción: El administrador puede gestionar los estados de las solicitudes (Pendiente, En Análisis, Devuelta, Administrador Gestionando)

Identificación
editar -> 3 - Nombre campo: ID_SOLICITUD - label: ID Solicitud - Descripción: Id de la solicitud (CEN o SODI), Este será el número asignado por la solicitud del CEN o SODI, sirviendo como identificador del trabajo.
editar -> 4 - Nombre campo: TIPO - label: Tipo - Descripción: Las solicitudes se clasificarán según el tipo de trabajo y/o solicitante, con las siguientes categorías: (SDCN, SDCF, SICN, SICF, IL, MM, SODI)
editar -> 5 - RELACION_SODI_CEN - label: Relación SODI-CEN - Descripción: Campo de texto para saber con que solicitudes SODIs o CEN se relaciona esta solicitud.

Fechas Programadas
editar -> 6 - Nombre campo: INICIO_PROGRAMADO - label: Fecha y hora programada de inicio - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos.
editar -> 7 - Nombre campo: FIN_PROGRAMADO - label: Fecha y hora programada de fin - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos.

Empresas Involucradas
editar -> 10 - Nombre campo: EMPRESA_SOLICITANTE - label: Empresa Solicitante - Descripción: Se identificará la empresa que solicita los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa)
editar -> 11 - Nombre campo: EMPRESA_RECEPTORA - label: Empresa Receptora - Descripción: Se identificará la empresa receptora de los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa)

Instalación y Equipos
editar -> 12 - Nombre campo: INSTALACION_GM - label: Instalación GM - Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1)
ver vacio -> 13 - Nombre campo: EQUIPOS - label: Instalaciones/equipos a intervenir - Descripción: En esté modulo se deberá ingresar lo que intervendrá para los trabajos, en los equipos que salen con varios, están sujeto a selección de otros subequipos internos: (Paños: Varios, Transformador: Varios, Secciones de barra: Varios, Scada, Medidores de facturación: Varios, Compensadores: Varios, Grupo de Emergencia, Batería, Tendido de Cable, Cargadores, Telecomunicación, Línea: Varios, Otros)

Características de la Intervención
ver vacio -> 14 - Nombre campo: TIPO_INTERVENCION - label: Tipo de intervención - Descripción: En esté modulo se deberá si la aplica a una intervención o desconexión.
ver vacio -> 15 - Nombre campo: RIESGOS - label: Descripción del Riesgo del Trabajo - Descripción: En esté modulo se deberá identificar el tipo de riesgo. (riesgo bajo, medio alto).
ver vacio -> 16 - Nombre campo: SODI - label: SODI - Descripción: Aplica o no aplica.
editar -> 17 - Nombre campo: POTENCIA - label: Potencia KwH - Descripción: campo numerico

Descripción y Condiciones
editar -> 18 - Nombre campo: DESCRIPCION - label: Descripción del trabajo a realizar - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir).
editar -> 19 - Nombre campo: CONDICIONES - label: Condiciones requeridas - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados.
ver vacio -> 20 - Nombre campo: AFECTACIONES - label: Afectaciones - Descripción: En esté modulo se deberá dejar indicado si afectar o no a lo siguiente: (SSCC, Protecciones, Medidores)
editar -> 21 - Nombre campo: COMENTARIOS - label: Comentarios - Descripción: En esté modulo se podrá dejar comentarios adicionales.

Archivos Adjuntos
editar -> 22 - Nombre campo: ADJUNTO - label: Carga de archivo - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc.
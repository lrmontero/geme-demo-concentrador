# Anexo 1. Solicitante
# Las solicitudes de trabajos deben estar compuestas por los siguientes campos:

Header
ver -> 1 - Nombre campo: ESTADO - label: Estado - Descripción: Se crea en estado Pendiente
ver -> 2 - Nombre campo: OBSERVACIONES - label: Observaciones - Descripción: Visualiza las observaciones del administrador

Fechas Programadas
editar -> 6 - Nombre campo: INICIO_PROGRAMADO - label: Fecha y hora programada de inicio - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos.
editar -> 7 - Nombre campo: FIN_PROGRAMADO - label: Fecha y hora programada de fin - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos.

Instalación y Equipos
editar -> 12 - Nombre campo: INSTALACION_GM - label: Instalación GM - Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1)
editar -> 13 - Nombre campo: EQUIPOS - label: Instalaciones/equipos a intervenir - Descripción: En esté modulo se deberá ingresar lo que intervendrá para los trabajos, en los equipos que salen con varios, están sujeto a selección de otros subequipos internos: (Paños: Varios, Transformador: Varios, Secciones de barra: Varios, Scada, Medidores de facturación: Varios, Compensadores: Varios, Grupo de Emergencia, Batería, Tendido de Cable, Cargadores, Telecomunicación, Línea: Varios, Otros)

Características de la Intervención
editar -> 14 - Nombre campo: TIPO_INTERVENCION - label: Tipo de intervención - Descripción: En esté modulo se deberá si la aplica a una intervención o desconexión.
editar -> 15 - Nombre campo: POTENCIA - label: Potencia MWH - Descripción: campo numerico dos decimales
editar -> 16 - Nombre campo: APLICA_SODI - label: SODI - Descripción: Aplica o no aplica.
editar -> 17 - Nombre campo: RIESGO - label: Clasificación del Riesgo - Descripción: En este campo se deberá identificar el tipo de riesgo. (riesgo bajo, medio alto).
editar -> 18 - Nombre campo: DESCRIPCION_RIESGO - label: Descripción del Riesgo del Trabajo - Descripción: En este campo se debera describir el riesgo de forma obligatoria en el caso que el riesgo se haya clasificado como medio o alto.

Descripción y Condiciones
editar -> 19 - Nombre campo: DESCRIPCION - label: Descripción del trabajo a realizar - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir).
editar -> 20 - Nombre campo: CONDICIONES - label: Condiciones requeridas - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados.
editar -> 21 - Nombre campo: COMENTARIOS - label: Comentarios - Descripción: En este modulo se podrá dejar comentarios adicionales.
editar -> 22 - Nombre campo: AFECTACIONES - label: Afectaciones - Descripción: En este modulo se deberá dejar indicado si afectar o no a lo siguiente: (SSCC, Protecciones, Medidores)
editar -> 23 - Nombre campo: DESCRIPCION_AFECTACION - label: Descripción de la afectación - Descripción: En este campo se deberá describir de forma obligatoria la afectación, en el caso que se haya seleccionado alguna de las opciones de la lista.

Archivos Adjuntos
editar -> 24 - Nombre campo: ADJUNTO - label: Carga de archivo - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc.

Footer->
Información del Sistema
ver -> 25 - Nombre campo: ID_REGISTRO - label: ID - Descripción: Id del registro de lista
ver -> 26 - Nombre campo: CREADO - label: Creado - Descripción: Fecha de creación del registro
ver -> 27 - Nombre campo: ACTUALIZADO - label: Actualizado - Descripción: Fecha de actualización del registro
ver -> 28 - Nombre campo: ADMINISTRADOR - label: Administrador - Descripción: Administrador que creó el registro
ver -> 29 - Nombre campo: SOLICITANTE - label: Solicitante - Descripción: Solicitante que creó el registro
ver -> 30 - Nombre campo: CREADO_POR - label: Creado por - Descripción: Creado por quién el registro


Se debe agregar una seccion para avanzar al siguiente estado

Opciones para avanzar (radio buton):
1. Estado Devuelta
    Si la solicitud es Devuelta, el solicitante puede enviar a Pendiente, el nombre de la transición es: "Enviar a Pendiente"
    Si la solicitud es Devuelta, el solicitante puede enviar a Anular, el nombre de la transición es: "Anular solicitud"

Campo de OBSERVACIONES obligatorio
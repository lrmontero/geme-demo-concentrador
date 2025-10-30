# El despachador puede clonar cualquier solicitud los campos que se deben clonar son: 

Estado por defecto al clonar una solicitud: "Despachador Gestionando"

Header
1 - Nombre campo: ESTADO - label: Estado - Descripción: Estado por defecto al clonar una solicitud: "Despachador Gestionando"

Identificación
Quedan vacias -> 3 - Nombre campo: ID_SOLICITUD - label: ID Solicitud - Descripción: Id de la solicitud (CEN o SODI), Este será el número asignado por la solicitud del CEN o SODI, sirviendo como identificador del trabajo.
Se copia valor -> 4 - Nombre campo: TIPO - label: Tipo - Descripción: Las solicitudes se clasificarán según el tipo de trabajo y/o solicitante, con las siguientes categorías: (SDCN, SDCF, SICN, SICF, IL, MM, SODI)
Se copia valor -> 5 - RELACION_SODI_CEN - label: Relación SODI-CEN - Descripción: Campo de texto para saber con que solicitudes SODIs o CEN se relaciona esta solicitud.

Fechas Programadas
Quedan vacias -> 6 - Nombre campo: INICIO_PROGRAMADO - label: Fecha y hora programada de inicio - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el inicio de los trabajos.
Quedan vacias -> 7 - Nombre campo: FIN_PROGRAMADO - label: Fecha y hora programada de fin - Descripción: En esté modulo se deberá ingresar la fecha y hora en que está programado el termino de los trabajos.

Identificación
Se copia valor -> 2 - Nombre campo: TIPO - label: Tipo - Descripción: Las solicitudes se clasificarán según el tipo de trabajo y/o solicitante, con las siguientes categorías: (SDCN, SDCF, SICN, SICF, IL, MM, SODI)
Se copia valor -> 3 - RELACION_SODI_CEN - label: Relación SODI-CEN - Descripción: Campo de texto para saber con que solicitudes SODIs o CEN se relaciona esta solicitud.

Empresas Involucradas
Se copia valor -> 4 - Nombre campo: EMPRESA_SOLICITANTE - label: Empresa Solicitante - Descripción: Se identificará la empresa que solicita los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa)
Se copia valor -> 5 - Nombre campo: EMPRESA_RECEPTORA - label: Empresa Receptora - Descripción: Se identificará la empresa receptora de los trabajos, pudiendo ser: (CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa)

Instalación y Equipos
Se copia valor -> 6 - Nombre campo: INSTALACION_GM - label: Instalación GM - Descripción: Aquí se indicará la instalación coordinada por el CO de GM que está siendo afectada y/o para la cual se solicita la condición operacional. Las instalaciones incluidas son: (Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1)
Se copia valor -> 7 - Nombre campo: POTENCIA - label: Potencia KwH - Descripción: campo numerico

Descripción y Condiciones
Se copia valor -> 8 - Nombre campo: DESCRIPCION - label: Descripción del trabajo a realizar - Descripción: En esté modulo se deberá dejar la descripción del trabajo a realizar (libre para escribir).
Se copia valor -> 9 - Nombre campo: CONDICIONES - label: Condiciones requeridas - Descripción: Se especificarán las condiciones necesarias para llevar a cabo los trabajos solicitados.
Se copia valor -> 10 - Nombre campo: COMENTARIOS - label: Comentarios - Descripción: En esté modulo se podrá dejar comentarios adicionales.

Archivos Adjuntos
Quedan vacias -> 22 - Nombre campo: ADJUNTO - label: Carga de archivo - Descripción: Se permitirá cargar o borrar archivos útiles para los trabajos, en formatos PDF, Excel, Word, etc.
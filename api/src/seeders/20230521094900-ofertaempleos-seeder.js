module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      // Titulos de ofertas: Programador Java, Gerente de gente y gestión, Ejecutivo de Telemarketing
      descripcionOferta1 = "En nuestra empresa promovemos y garantizamos el respeto y el ejercicio de los derechos laborales de la persona con discapacidad, así como el desarrollo de sus capacidades y habilidades, a través del servicio de Tecnología de Información, que brindamos. \nTe invitamos a formar parte de nuestro equipo de trabajo como: Java Broker. \n1. Realizar análisis de factibilidad técnica de las definiciones funcionales de iniciativas evolutivas o proyectos, y definición de entregables de los mismos. \n2. Desarrollar, en forma individual o como parte de un equipo de trabajo, la solución propuesta para solventar las necesidades presentadas por las áreas de negocio, con la documentación respectiva y evidencias de pruebas unitarias. \n3. Elaborar estimaciones de esfuerzo, tiempo y recursos para el desarrollo e implementación de soluciones." 
      descripcionOferta2 = "¡¡¡Únete a nuestra familia!!! Estamos búsqueda de una Generalista de Gente y Gestión. \nFunciones: - Asistir al departamento de Recursos humanos en todos los procesos. \n- Realizar el proceso completo de reclutamiento y selección (Posteo de plazas, revisión de hojas de vida, entrevistas con candidatos, gestión con jefaturas a cargo, presentación de oferta laboral, gestión de expedientes, inducción al personal de nuevo ingreso.) \n- Presentación de Ternas completas en reporte de comparativos (Candidatos ya entrevistados, con investigación de referencias, Pruebas psicométricas, etc.) \n- Brindar inducción al personal de nuevo ingreso. \n- Apoyo en entrega de logística de beneficios (Uniformes, Carnet, expedientes, etc.) \n- Asegurar que al momento de ingreso de nuevos colaboradores, estos tengan la documentación completa. (check list de expedientes)"
      descripcionOferta3 = "OBJETIVO GENERAL: Alcanzar y superar los objetivos de ventas asignados, mediante la generación de oportunidades de venta, cierre de negocios exitosos y el mantenimiento de relaciones sólidas con los clientes. \nFUNCIONES DEL PUESTO: \n1. Asesorar y brindar un excelente servicio a los clientes que se contacte por los canales virtuales, brindando información inmediata de líneas móviles pospago, portabilidad numérica, promociones del mes o temporada. \n2. Búsqueda de clientes digitales (recorridos de base, venta en redes sociales, entre otros), para realizar perfilamientos de clientes, contactándolos y realizando seguimientos, hasta concretar la venta, adición o renovación de nuestros servicios. \n3. Realizar la gestión de venta de líneas móviles pospago, portabilidad numérica, promociones del mes o temporada; solicitándole a clientes las documentaciones según las Políticas Crediticias Vigentes"
      experiencia1 = "a. Desarrollo de plataformas Java EE / Java SE \nb. Desarrollo de servicios Java, WebServices SOAP, API REST \nc. Creació de flujos bróker para la transmisión de mensajería MQ entre dos plataformas \nd. Uso de herramienta IBM Integration Bus Toolkit o similares \ne. Desarrollo de servicios Message-Driven Bean o MDB (EJB dirigido por mensajes), para la comunicación vía MQ entre plataformas."
      experiencia2 = "Procesos de reclutamiento masivos, conocimientos de técnicas de reclutamiento, aplicación de pruebas psicométricas, manejo de plataformas de búsqueda de empleo."
      experiencia3 = "Estudios universitarios a cualquier nivel (deseable).\nExperiencia de 1 año en Call Center de ventas (indispensable).\nManejo básico o intermedio de Excel (indispensable).\nExperiencia en manejo de Televentas (Indispensable)"
      return queryInterface.bulkInsert('OfertaEmpleos', [
        { idEmpresa: 1, tituloOferta: 'Programador Java', fechaExpiracion: '17/06/2023',idCategoriaOfer: 1, descOferta: descripcionOferta1, perfilAcademico: 'Ingeniería en Sistemas, Licenciatura en Computación', habilidades: 'Java EE, IBM WAS, IBM Portal, Lenguaje SQL, Desarrollo de WS Soap, API REST', expLaboral: experiencia1, rangoSalar: '1000-1200', ubicacion: 'San Salvador, El Salvador', modalidad: 'Semi-presencial', createdAt: new Date(), updatedAt: new Date() },
        { idEmpresa: 2, tituloOferta: 'Gerente de gente y gestión', fechaExpiracion: '15/06/2023', idCategoriaOfer: 2, descOferta: descripcionOferta2, perfilAcademico: 'Licenciatura psicología, Administración de empresas o carrera afines', habilidades: 'Proactividad, dinamismo y responsabilidad', expLaboral: experiencia2, rangoSalar: '600', ubicacion: '', modalidad: 'Presencial', createdAt: new Date(), updatedAt: new Date() },
        { idEmpresa: 3, tituloOferta: 'Ejecutivo de Telemarketing', fechaExpiracion: '10/06/2023', idCategoriaOfer: 3, descOferta: descripcionOferta3, perfilAcademico: 'Ejecutiv@ de Telemarketing', habilidades: 'Proactivas, dinamismo y responsabilidad', expLaboral: experiencia3, rangoSalar: '600-1000', ubicacion: 'San Salvador, El Salvador', modalidad: 'Presencial', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('OfertaEmpleos', null, {});
    }
};
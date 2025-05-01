export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Opciones de prevención e intervención en el contexto laboral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Opciones de prevención e intervención en el contexto laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Enfoques de intervención en el contexto laboral',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias educativas para la prevención',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Campañas de concientización',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Beneficios de la educación y concientización en el contexto laboral',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Evaluación de la efectividad de los programas educativos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Políticas de tolerancia cero y normativas internas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Programas de bienestar integral',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Intervención temprana y apoyo continuo',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Fomento de un ambiente laboral positivo',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'La estrategia Treatnet como modelo de apoyo en el tratamiento de adicciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Origen y principios de la estrategia Treatnet',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Empresas libres de consumo de sustancias psicoactivas  de la sociedad',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cantera, J. (2023). La salud mental en la empresa: cómo crear trabajos saludables y mejorar la salud mental de tu equipo (1 ed.). LID Editorial España.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/270585?page=25',
    },
    {
      referencia:
        'Recalde, M. M. & Recalde E. H. (2016). Educación y prevención del consumo problemático de drogas I: alcohol y tabaco ( ed.). Ediciones del Aula Taller.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/77225?page=87',
    },
    {
      referencia:
        'Basic Volume for participants: Elements of Drug Depence Treatment. (s. f.). United Nations : Office On Drugs And Crime.',
      link:
        'https://www.unodc.org/unodc/en/treatment-and-care/basic-volume-for-participants.html',
    },
    {
      referencia:
        'Treatnet Training package. (s. f.). United Nations : Office On Drugs And Crime.',
      link: 'http://www.unodc.org/treatment/index.html',
    },
    {
      referencia:
        'Hernandez Trujillo, M. M., & Garzón Arévalo, D. R. (2021). Diseño del programa de prevención de consumo de sustancias psicoactivas en la empresa Millenium BPO SA.',
      link:
        'https://repositorio.ecci.edu.co/server/api/core/bitstreams/165d55f9-924c-4368-9685-e553f117e3c0/content',
    },
    {
      referencia:
        'Anaya Simanca, L. P. (2021). Sistematización de aprendizaje de práctica profesional en el diseño del programa de prevención del consumo de sustancias psicoactivas, alcohol y tabaco en la empresa Casa Británica S. A (Doctoral dissertation, Corporación Universitaria Minuto de Dios).',
      link:
        'https://repository.uniminuto.edu/server/api/core/bitstreams/cc263823-2c11-46e8-982b-54d9cb886239/content',
    },
  ],
  glosario: [
    {
      termino: 'Acoso laboral',
      significado:
        'Conducta reiterada que atenta contra la dignidad o integridad de un trabajador.',
    },
    {
      termino: 'Ambiente laboral',
      significado:
        'Conjunto de condiciones en el trabajo que influyen en el bienestar de los empleados.',
    },
    {
      termino: 'Burnout',
      significado:
        'Síndrome de agotamiento físico y emocional causado por estrés laboral prolongado.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'Percepción colectiva de los empleados sobre el entorno de trabajo.',
    },
    {
      termino: 'Conflicto laboral',
      significado:
        'Desacuerdo entre trabajadores o entre empleados y empleadores en un entorno laboral.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, normas y prácticas que caracterizan a una empresa.',
    },
    {
      termino: 'Desempeño laboral',
      significado:
        'Nivel de cumplimiento de las tareas y objetivos de un trabajador.',
    },
    {
      termino: 'Estrés laboral',
      significado:
        'Respuesta negativa del cuerpo ante exigencias o presiones en el trabajo.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'Análisis sistemático de peligros potenciales en el entorno laboral.',
    },
    {
      termino: 'Fatiga laboral',
      significado:
        'Sensación de cansancio extremo debido a una carga excesiva de trabajo.',
    },
    {
      termino: 'Liderazgo organizacional',
      significado:
        'Capacidad de un líder para influir en su equipo dentro de una empresa.',
    },
    {
      termino: 'Motivación laboral',
      significado:
        'Factores internos y externos que impulsan a los empleados a cumplir sus tareas.',
    },
    {
      termino: 'Prevención de riesgos',
      significado:
        'Conjunto de medidas para reducir accidentes y enfermedades laborales.',
    },
    {
      termino: 'Seguridad en el trabajo',
      significado:
        'Condiciones y normas que garantizan la integridad física y mental del trabajador.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'Colaboración entre empleados para alcanzar objetivos comunes.',
    },
  ],
}

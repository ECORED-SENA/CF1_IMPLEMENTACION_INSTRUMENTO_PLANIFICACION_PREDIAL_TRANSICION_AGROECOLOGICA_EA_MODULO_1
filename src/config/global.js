export default {
  global: {
    Name: 'Fundamentos Ambientales para el Diagnóstico Predial',
    Description:
      'Este componente explica los fundamentos ecológicos de la transición agroecológica y analiza cómo el modelo agroindustrial afecta los ecosistemas y los límites planetarios. Desde este diagnóstico, impulsa soluciones prediales orientadas a conservar la biodiversidad, proteger el agua y gestionar residuos, integrando prácticas contextualizadas, monitoreo comunitario y acciones que restauran relaciones equilibradas entre producción y ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos ambientales de la transición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Crisis planetaria y colapso ecosistémico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Límites planetarios y resiliencia territorial',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Agua: fuente de vida y producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de fuentes hídricas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características y áreas de influencia del agua',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Zonas hídricas funcionales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Bioindicadores de la calidad de agua',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Grupos de organismos bioindicadores',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Clasificación por tolerancia (índices biológicos)',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Clasificación por características sensoriales',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Biodiversidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de zonas estratégicas para la conservación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Función ecológica de las áreas de conservación dentro del predio',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de residuos en el predio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de residuos generados en el predio',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Impactos ambientales de una mala gestión',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elaboración de mapas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Uso y cobertura del suelo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Pendientes y relieve',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Zonas de riesgo y áreas degradadas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Distribución de recursos hídricos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Fichas de diagnóstico: síntesis territorial para la toma de decisiones',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Agua: fuente de vida y producción',
      referencia:
        'Roldán, G. (2012). Los macroinvertebrados como bioindicadores de la calidad de agua. Bogotá: CAR. ',
      tipo: 'Libro',
      link: 'https://ianas.org/wp-content/uploads/2025/05/wbp12.pdf',
    },
    {
      tema: 'Gestión de residuos en el predio',
      referencia:
        'DNP- Minambiente (2022). Guía nacional para la adecuada separación de residuos sólidos, 2022. Bogotá.',
      tipo: 'Libro',
      link:
        'https://economiacircular.minambiente.gov.co/wp-content/uploads/2022/06/guia-nacional-para-la-adecuada-gestion-de-residuos-colombia-2022.pdf',
    },
    {
      tema: 'Diagnóstico territorial',
      referencia:
        'Acnur (2024). Herramienta de Acnur para el diagnóstico participativo guía práctica. ',
      tipo: 'Libro',
      link:
        'https://www.acnur.org/sites/default/files/2025-02/herramienta-para-el-diagnostico-participativo-es.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'sistema vivo y complejo que integra la actividad agrícola con los componentes ecológicos (bióticos y abióticos) del entorno, buscando la sostenibilidad y resiliencia.',
    },
    {
      termino: 'Agroecología',
      significado:
        'enfoque que promueve la transición de los sistemas productivos hacia modelos más sostenibles y resilientes, integrando la conservación de los recursos naturales con la productividad.',
    },
    {
      termino:
        'IPPTA (Instrumento de Planificación Predial para la Transición Agroecológica)',
      significado:
        'herramienta técnica y conceptual, fundamentada en el diagnóstico detallado, que estructura las acciones concretas para guiar la finca hacia la sostenibilidad agroecológica.',
    },
    {
      termino: 'Planificación Territorial',
      significado:
        'proceso de gestión a escalas mayores (veredas, municipios, cuencas) con el que el diagnóstico predial debe alinearse para garantizar la coherencia entre las decisiones de la finca y los objetivos de desarrollo rural y conservación.',
    },
    {
      termino: 'Resiliencia Ecológica',
      significado:
        'capacidad intrínseca de los sistemas naturales y productivos para adaptarse y recuperarse eficazmente frente a perturbaciones (cambio climático, plagas, degradación del suelo), fortalecida por la diversificación y el manejo adaptativo.',
    },
    {
      termino: 'Sistema Agroalimentario dominante',
      significado:
        'se refiere al conjunto de prácticas, actores e infraestructuras que configuran el modelo agroalimentario predominante a nivel global. Este sistema se basa en una lógica de mercado que prioriza la eficiencia económica, la productividad intensiva y la estandarización de los alimentos, con impactos significativos sobre los ecosistemas, la salud humana y la soberanía alimentaria.',
    },
    {
      termino: 'Servicios Ecosistémicos',
      significado:
        'beneficios que la naturaleza provee al ser humano, críticos para la sostenibilidad del predio, como la regulación hídrica, el control de erosión, la polinización y la captura de carbono.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acevedo, Á., y Jiménez, N. (Comps.). (2019). Agroecología: Experiencias comunitarias para la agricultura familiar en Colombia. Corporación Universitaria Minuto de Dios - Uniminuto; Editorial Universidad del Rosario. ',
      link:
        'https://repository.uniminuto.edu/server/api/core/bitstreams/cbb44aa8-a288-4a83-85bf-8ecc2c4ec430/content',
    },
    {
      referencia:
        'Ángel Maya, A. (2013). El reto de la vida: Ecosistema y cultura (2.ª ed.). Ecofondo; Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Armbrecht, I. (2016). Agroecología y biodiversidad. Universidad del Valle. ISBN 978-958-765-240-6.',
      link: '',
    },
    {
      referencia:
        'Climate Change Institute. (2024). Daily Surface Air Temperature - World (ERA5). Climate Reanalyzer, University of Maine.',
      link: 'https://climatereanalyzer.org/clim/t2_daily/?dm_id=world',
    },
    {
      referencia:
        'Cruz Hincapié, A. (2013). Caracterización y manejo de residuos sólidos de siete predios en Salento, Quindío. Universidad del Tolima.',
      link: '',
    },
    {
      referencia:
        'FAO. (2020). Global Forest Resources Assessment 2020: Key findings. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Giraldo, O. F., y Toro, I. F. (2020). Afectividad ambiental: Sensibilidad, empatía, estéticas del habitar. El Colegio de la Frontera Sur; Universidad Veracruzana. ',
      link:
        'https://laoms.org/wp-content/uploads/2020/12/Afectividad-Ambiental-1.pdf',
    },
    {
      referencia: 'IICA. (2021). Gestión y manejo del agua en la agricultura. ',
      link:
        'https://repositorio.iica.int/server/api/core/bitstreams/846ee73e-15d2-4aa6-a932-7ff27be5342f/content',
    },
    {
      referencia:
        'Melchor, D. (2023). Blanqueamiento del coral: ¿Por qué ocurre y cómo afecta al ecosistema marino? Tecnológico de Monterrey. TecScience. ',
      link:
        'https://tecscience.tec.mx/es/humano-social/blanqueamiento-del-coral/',
    },
    {
      referencia:
        'Ortega, D. (2011). Diagnóstico sobre la gestión y el uso del agua en el sector agropecuario de Nuevo León. Instituto del Agua del Estado de Nuevo León.',
      link: '',
    },
    {
      referencia:
        'Páez Barón, E. M., Corredor Camargo, E. S., y Fonseca Carreño, J. A. (2019). Metodologías para la estimación de sostenibilidad agropecuaria. Universidad Nacional Abierta y a Distancia. ',
      link:
        'https://libros.unad.edu.co/index.php/selloeditorial/catalog/view/98/95/422',
    },
    {
      referencia:
        'Pérez, E. (2022). Métodos para el diagnóstico ambiental de suelos. Universidad del Cauca.',
      link: '',
    },
    {
      referencia:
        'Reyes-García, V. (2010). Conocimiento ecológico tradicional para la conservación: Dinámicas y conflictos. Papeles de relaciones ecosociales y cambio global, (107), 1 - 12. FUHEM Ecosocial. ',
      link:
        'https://www.fuhem.es/media/cdv/file/biblioteca/PDF%20Papeles/107/Conocimiento_ecologico_tradicional.pdf',
    },
    {
      referencia:
        'Rockström, J., Gupta, J., Qin, D., Lade, S. J., Abrams, J. F., Andersen, L. S., Armstrong McKay, D. I., Bai, X., Bala, G., Bunn, S. E., Ciobanu, D., DeClerck, F., Ebi, K., Gifford, L., Gordon, C., Hasan, S., Kanie, N., Lenton, T. M., Loriani, S., ... Zhang, X. (2023). Safe and just Earth system boundaries. Nature, 619(7968), 102–111. ',
      link: 'https://doi.org/10.1038/s41586-023-06083-8',
    },
    {
      referencia:
        'Sarandón, S. J. (Coord.). (2020). Biodiversidad, agroecología y agricultura sustentable. Editorial de la Universidad Nacional de La Plata. ',
      link:
        'https://agroecologia.net/wp-content/uploads/2020/12/biodiversidad-agroecologia-santiago-sarandon.pdf',
    },
    {
      referencia:
        'Simón Ruiz, I., y Aravena Rodríguez, B. (2021). El ciclo hidrosocial: Una propuesta didáctica desde la historia, la geografía, las ciencias sociales y la educación para la ciudadanía. Centro de Comunicación de las Ciencias, Universidad Autónoma de Chile. ',
      link: '',
    },
    {
      referencia:
        'The Amazon Conservation Team, & The Nature Conservancy. (2020). Guía práctica de reconversión de un sistema ganadero extensivo en un sistema con prácticas de ganadería sostenible. ',
      link:
        'https://www.nature.org/content/dam/tnc/nature/en/documents/AFC_Guia_Asistencia_tecnica_paginas_baja.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon Rincón',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

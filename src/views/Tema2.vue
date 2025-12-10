<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Agua: fuente de vida y producción

    p.mb-1 El <strong>agua</strong> no es solo un recurso: es el <strong>tejido vital</strong> que conecta la vida, la producción y el equilibrio ecológico en cada paisaje. En los sistemas agroecológicos, su gestión responsable <strong>va más allá del ahorro</strong>: implica <strong>comprender sus ciclos, proteger sus fuentes y restaurar su función dentro del agroecosistema</strong>.
    p.mb-5 La <strong>planificación agroecológica</strong> reconoce que <strong>cuidar el agua es cuidar el territorio</strong>. Esto se traduce en acciones como:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_1(data-aos="zoom-in")
          h5.mb-0 Sembrar árboles en nacederos
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_1(data-aos="zoom-in")
          h5.mb-0 Conservar humedales

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_1(data-aos="zoom-in")
          h5.mb-0 Diseñar estrategias de cosecha de agua
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_1(data-aos="zoom-in")
          h5.mb-0 Respetar los ritmos del suelo
    
    p.mb-5 Esta mirada combina el <strong>conocimiento local</strong>, que sabe cuándo llueve, cómo se infiltra el agua, qué plantas la retienen, con <strong>herramientas técnicas</strong> que permiten evaluar su disponibilidad y uso. Así, el agua deja de ser una variable externa y se convierte en un <strong>principio organizador del predio</strong>, una guía para la <strong>resiliencia frente al cambio climático y una expresión concreta del compromiso con la vida</strong>.

    <!-- BLOQUE 1 -->
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos de fuentes hídricas

    p.mb-5 Antes de planificar acciones agroecológicas, es fundamental <strong>reconocer y clasificar las fuentes de agua</strong> disponibles según su localización y dinámica hidrológica. Esta clasificación permite adaptar prácticas de protección y aprovechamiento sostenibles:

    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Fuentes superficiales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img46.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Fuentes superficiales
            p.mb-0 Incluyen ríos, quebradas, lagunas, embalses y represas. Son visibles y abastecen la mayoría de las actividades agrícolas y domésticas. Requieren protección frente a la deforestación, erosión y contaminación.

      .py-3.py-md-4(titulo="Fuentes subterráneas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img47.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Fuentes subterráneas
            p.mb-0 Comprenden acuíferos, pozos y galerías filtrantes. Almacenan agua en capas subterráneas. Son clave en zonas con baja disponibilidad de agua superficial.
      
      .py-3.py-md-4(titulo="Manantiales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img48.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Manantiales
            p.mb-0 Sitios donde el agua subterránea emerge naturalmente. Cumplen funciones <strong>ecológicas, sociales y culturales, y son indicadores de buena salud ecosistémica</strong>.

    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Características y áreas de influencia del agua

    p.mb-5 El agua circula en el territorio a través de <strong>unidades hidrológicas interconectadas</strong>, donde cada elemento cumple una función dentro del <strong>ciclo hídrico</strong>. Estas unidades permiten planificar el uso del agua de forma coherente con el paisaje:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img49.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Microcuencas
            p.mb-0 Unidades naturales de drenaje que captan, conducen y regulan el agua hacia ríos principales. Son ideales para la planificación territorial y la <strong>gestión comunitaria</strong> del recurso.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img50.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Zonas de recarga hídrica
            p.mb-0 Áreas donde el agua de lluvia se <strong>infiltra</strong> en el suelo y alimenta los acuíferos. Su conservación requiere vegetación adecuada, suelos <strong>permeables y baja compactación</strong>.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img51.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Perímetros de protección
            p.mb-0 Franja de seguridad alrededor de fuentes hídricas (ríos, manantiales, pozos), destinada a <strong>prevenir la contaminación, la deforestación y el sobrepastoreo</strong>.
    
    p.mb-0 En el marco de la <strong>planificación predial</strong>, estas unidades permiten <strong>delimitar zonas funcionales</strong> dentro del territorio cuencas, microcuencas, escurrimientos que pueden <strong>orientar o restringir</strong> actividades según su impacto sobre el recurso hídrico. Estas zonas son <strong>fácilmente identificables a nivel de finca, vereda o territorio comunitario</strong>, y deben ser incorporadas en la estrategia agroecológica como <strong>espacios de gestión prioritaria</strong>.

    <!-- BLOQUE 3 -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Zonas hídricas funcionales

    p.mb-5 En los territorios rurales, el manejo del agua debe considerar la <strong>diversidad de zonas funcionales</strong> que componen una microcuenca o unidad hídrica. Cada zona cumple <strong>funciones ecológicas y sociales específicas</strong> y requiere <strong>estrategias diferenciadas de gestión</strong> para garantizar el equilibrio del sistema hídrico y su articulación con la producción y la vida comunitaria. A continuación, se describen las <strong>zonas hídricas funcionales</strong>, sus características y las actividades prioritarias para su conservación y manejo sostenible:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Zona de páramo / nacimiento
                p.mb-3 Área más alta de la microcuenca, donde nacen los ríos y fuentes de agua. Funciones y actividades prioritarias: 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Conservación de fuentes hídricas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Protección del ecosistema de páramo.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Regulación del ciclo hidrológico.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Zona de producción
                p.mb-3 Áreas destinadas a actividades económicas como agricultura, ganadería o silvicultura. Funciones y actividades prioritarias: 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Implementación de prácticas sostenibles.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Manejo adecuado de agroquímicos. </li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Conservación del suelo y la cobertura vegetal.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Zona de asentamiento
                p.mb-3 Espacios donde se ubican viviendas, comercio e infraestructura. Funciones y actividades prioritarias: 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Manejo adecuado de aguas residuales y residuos sólidos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Regulación del uso del suelo.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Infraestructura segura y sostenible.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Zona de amortiguamiento / transición
                p.mb-3 Áreas de conexión entre zonas, con mosaicos de vegetación y usos del suelo. Funciones y actividades prioritarias: 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Protección de bordes de cauces.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Establecimiento de corredores biológicos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Conservación de la biodiversidad.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cauce principal y lecho
                p.mb-3 Tramo del río o quebrada que transporta el agua. Funciones y actividades prioritarias: 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mantenimiento de riberas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Protección de especies acuáticas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Control de sedimentación y erosión.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 Estas <strong>zonas funcionales hídricas</strong> permiten una <strong>planificación diferenciada</strong> del territorio, integrando criterios ecológicos, sociales y productivos. Su identificación a nivel de finca o vereda fortalece la <strong>gestión participativa</strong> del agua y aporta al diseño de estrategias de <strong>resiliencia territorial frente al cambio climático</strong>.

    .fondo___img_2
      .px-5 

        <!-- BLOQUE 4 -->
        Separador
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Bioindicadores de la calidad de agua
        
        p.mb-5 Los <strong>bioindicadores</strong> son organismos que actúan como <strong>testigos silenciosos de la salud del ecosistema</strong>. Su presencia, ausencia o comportamiento revela alteraciones en el ambiente, especialmente aquellas causadas por contaminación o desequilibrios ecológicos.

        .row.align-items-center.m-0.style___box_2.ajuste___box_2.mb-5(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img57.jpg', alt='').m-auto
          .col-xl
            p.mb-0 En agroecología, estos organismos (insectos, plantas, hongos, aves o microorganismos) permiten <strong>leer el paisaje más allá de lo visible</strong>, ya que ofrecen pistas sobre la calidad del agua, del suelo y del aire. Su <strong>diversidad y sensibilidad</strong> los convierte en aliados clave para el <strong>diagnóstico predial</strong> ambiental, porque permiten monitorear ecosistemas terrestres, acuáticos o mixtos sin necesidad de instrumentos complejos.
        
        p.mb-0 Reconocer y valorar los bioindicadores en el predio forma parte del diálogo de saberes. Muchas comunidades campesinas ya identifican qué especies anuncian fertilidad, sequía, contaminación o regeneración. Integrarlos en la planificación agroecológica fortalece la capacidad de observación, promueve prácticas de manejo más respetuosas y activa procesos de restauración ecológica desde el conocimiento vivo del territorio.

        <!-- BLOQUE 5 -->
        Separador
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Grupos de organismos bioindicadores

    p.mb-5 Los organismos bioindicadores responden de forma diferente a los cambios físicos y químicos del agua, por lo que son herramientas clave para <strong>monitorear la calidad hídrica</strong>. A continuación, se presentan los principales grupos utilizados en agroecología y evaluación ambiental, junto con sus ventajas y ejemplos representativos.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Macroinvertebrados del lecho de ecosistemas acuáticos
                p.mb-3 Son los indicadores más comunes y estables. Incluyen insectos acuáticos en estado larval o ninfal, crustáceos, moluscos y anélidos que habitan el fondo (bentos) de ríos, lagos o arroyos. 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Ventajas</strong>: son relativamente sedentarios, fáciles de recolectar y poseen ciclos de vida lo suficientemente largos para reflejar condiciones ambientales acumuladas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Ejemplos</strong>: larvas de efímeras, plecópteros, tricópteros, libélulas, caracoles y gusanos acuáticos.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Algas y fitoplancton
                p.mb-3  Son organismos muy sensibles a la concentración de nutrientes como nitrógeno y fósforo, por lo que permiten identificar procesos de eutrofización. 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Diatomeas</strong>: las especies de diatomeas permiten identificar valores de pH o salinidad del agua.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Cianobacterias (algas verde-azules)</strong>: su floración masiva indica niveles elevados de eutrofización y baja calidad del agua. Algunas especies pueden producir toxinas peligrosas para la salud humana y animal.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Peces
                p.mb-3 Aunque su respuesta a los cambios ambientales es más lenta, los peces expresan la calidad del hábitat a largo plazo y la acumulación de contaminantes persistentes. 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Indicadores</strong>: diversidad de especies, presencia de enfermedades, deformidades o tumores.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
            
    p.mb-0 Este enfoque permite integrar el monitoreo biológico como parte del <strong>diagnóstico predial agroecológico</strong>, ofreciendo una <strong>visión integral y contextualizada</strong> de la calidad del agua sin depender exclusivamente de instrumentos tecnológicos.

    .fondo___img_2
      .px-5 

        <!-- BLOQUE 6 -->
        Separador
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Clasificación por tolerancia (índices biológicos)

        p.mb-1 El uso de bioindicadores en el monitoreo de la calidad del agua se basa en la <strong>clasificación de especies según su tolerancia a la contaminación orgánica</strong>. Esta clasificación permite aplicar <strong>índices biológicos</strong>, como el índice <strong>BMWP</strong> (Biological Monitoring Working Party) en Europa, o versiones adaptadas en América Latina.
        p.mb-5 Cada grupo de organismos se asocia con un <strong>rango de calidad del agua</strong>, lo que permite obtener una <strong>lectura rápida y confiable del estado ecológico</strong> de cuerpos de agua dulce. A continuación, se presenta una tabla que resume los <strong>grupos de tolerancia</strong>, sus características y algunas especies representativas:

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Indicadores de calidad del agua según tolerancia biológica
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla Grupo de tolerancia
                th.ajuste-border-tabla Características clave
                th.ajuste-border-tabla Indicador de calidad del agua
                th Especies comunes
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>I. Intolerantes</strong>
                td.ajuste-border-tabla.texto-left Requieren altos niveles de oxígeno disuelto y agua limpia. Son los primeros en desaparecer ante contaminación.
                td.ajuste-border-tabla.texto-left Excelente / Buena
                td.texto-left 
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Larvas de moscas de las piedras (plecópteros).</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Efímeras (mayflies).</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Larvas de tricópteros.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Algunas diatomeas.</li>
                  </ul>
              tr
                td.ajuste-border-tabla.texto-left <strong>II. Moderadamente tolerantes</strong>
                td.ajuste-border-tabla.texto-left Toleran cierta reducción de oxígeno y leves aumentos de nutrientes.
                td.ajuste-border-tabla.texto-left Aceptable / Regular
                td.texto-left
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Caracoles acuáticos.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Larvas de libélulas y caballitos del diablo.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Algunas lombrices acuáticas.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Insectos de cuerpo robusto y lento movimiento.</li>
                  </ul>
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>III. Tolerantes</strong>
                td.ajuste-border-tabla.texto-left Sobreviven en condiciones de bajo oxígeno y alta contaminación orgánica.
                td.ajuste-border-tabla.texto-left Mala / Pésima
                td.texto-left 
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cianobacterias (algas verde-azules).</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Larvas de mosquitos y zancudos.</li>
                    <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Gusanos rojos del fondo (tubicífidos).</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Larvas de mosca negra.</li>
                  </ul>
        
        p.mb-0 Esta clasificación permite a técnicos, productores y comunidades <strong>realizar evaluaciones simples pero efectivas</strong> del estado del agua en sus territorios, integrando el <strong>conocimiento biológico con la observación directa</strong>.

    <!-- BLOQUE 7 -->
    Separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Clasificación por características sensoriales

    p.mb-5 A continuación, se presenta un video que describe las principales características sensoriales del agua, sus posibles causas y las implicaciones que tienen en el manejo agroecológico, con el fin de apoyar el diagnóstico ambiental participativo en entornos rurales.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: TEXTO

    .row.align-items-center.mb-0
      .col-xl
        p.mb-3 Si bien la <strong>observación sensorial</strong> aporta información valiosa para el diagnóstico predial, se recomienda complementarla con <strong>análisis físico-químicos y microbiológicos</strong>, especialmente cuando el agua está destinada al consumo humano. Contar con el apoyo de <strong>laboratorios especializados o entidades competentes</strong> permite:
        .row.align-items-center.m-0.style___box_2.ajuste___box_2_1.mb-3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img61.jpg', alt='').m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Detectar <strong>contaminantes invisibles</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evaluar <strong>riesgos sanitarios</strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Verificar el cumplimiento de los <strong>parámetros de potabilidad</strong> establecidos por la normativa vigente.</li>
            </ul>
        p.mb-0 Integrar estos estudios en la <strong>planificación agroecológica</strong> fortalece la <strong>salud comunitaria</strong> y contribuye a una <strong>gestión integral del recurso hídrico</strong>.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img62.png', alt='' ).m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

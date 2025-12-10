<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Elaboración de mapas ambientales
    
    p.mb-5 Los mapas ambientales son herramientas fundamentales para interpretar el paisaje desde una perspectiva local y participativa. Su construcción, especialmente mediante técnicas de dibujo a mano alzada, permite representar diversos elementos del territorio, tales como:

    .row.justify-content-center.mb-5
      .col-xl-7
        .row.align-items-center.m-0.style___box_2(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img76.jpg', alt='').m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso del suelo.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Pendientes.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Fuentes de agua.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Zonas de riesgo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Espacios de conservación.</li>
            </ul>
    
    p.mb-5 Estos mapas no solo traducen datos técnicos, sino que también:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Activan la memoria comunitaria
      
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Visibilizan conflictos y potenciales

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Orientan la toma de decisiones hacia un manejo sostenible del predio

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 Al ser elaborados por quienes habitan el territorio, los mapas ambientales fortalecen la <strong>apropiación del espacio, el diálogo entre saberes y la planificación agroecológica</strong> basada en la experiencia vivida. Son instrumentos vivos que acompañan procesos como:
          .style___box_6(data-aos="zoom-in")
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Diagnóstico predial.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restauración ecológica.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Diseño de sistemas productivos resilientes.</li>
            </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img77.jpg', alt='' ).m-auto
    
    .fondo___img_5
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Mapa temático
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img78.png', alt='Mapa ilustrado de unidades ambientales de la Finca La Esperanza que presenta zonas diferenciadas como bosque nativo, sistemas agroforestales y silvopastoriles, pastoreo con árboles, cultivos anuales, huerta con granos y un reservorio para cosecha de lluvia, atravesadas por un río central y distribuidas alrededor de una zona edificada.').m-auto

        p.mb-0 En procesos comunitarios, los mapas elaborados a mano alzada son herramientas vivas que acompañan el diagnóstico ambiental y productivo del predio. 

    <!-- BLOQUE 1 -->
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Uso y cobertura del suelo

    p.mb-5 Los mapas de uso del suelo representan la <strong>distribución espacial</strong> de áreas agrícolas, bosques, cuerpos de agua, zonas degradadas y espacios habitados. Son esenciales para comprender las dinámicas del paisaje.

    .fondo___img_4
      .px-5
        .row.align-items-center.mb-0
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img80.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Elaboración participativa
                p.mb-0 Se construyen a mano alzada mediante recorridos de campo, observación directa y saberes locales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tecnologías complementarias
                p.mb-0 En algunos procesos se usan imágenes satelitales y <em>software</em> especializado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Importancia en el contexto rural
                p.mb-0 Activa la memoria ambiental, visibiliza conflictos y potenciales, y guía decisiones sobre conservación, restauración y producción sostenible.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img83.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Clasificación del uso del suelo
                p.mb-0 Basada en la experiencia comunitaria, reconoce transformaciones del paisaje y elementos clave para la resiliencia agroecológica.
              
        <!-- BLOQUE 2 -->
        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Pendientes y relieve
        
        p.mb-5 El análisis del relieve y las pendientes permite identificar zonas vulnerables a <strong>erosión, deslizamientos</strong> o con necesidad de un manejo especial del agua.

    .row.justify-content-center.mb-0
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___box_7.h-100
          h4.mb-0.text-center Identificación del relieve
          p.mb-0 A través de mapas construidos colectivamente durante recorridos de campo.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_7.h-100
          h4.mb-0.text-center Tecnologías complementarias
          p.mb-0 Se pueden usar Modelos Digitales de Terreno (MDT) y datos de elevación.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_7.h-100
          h4.mb-0.text-center Utilidad en la planificación
          p.mb-0 Permite definir unidades de manejo del suelo y diseñar prácticas como terrazas, zanjas de infiltración o barreras vivas.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_7.h-100
          h4.mb-0.text-center Contribución
          p.mb-0 Fortalece la resiliencia del predio frente al cambio climático mediante soluciones adaptadas al territorio.

    <!-- BLOQUE 3 -->
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Zonas de riesgo y áreas degradadas

    p.mb-5 Estos mapas permiten identificar áreas afectadas por <strong>erosión, contaminación o presión antrópica</strong>, integrando observaciones comunitarias y datos técnicos.

    .row.align-items-center.mb-0
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img84.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img85.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Metodología
            p.mb-0 Construcción participativa a mano alzada con base en observación directa y saberes locales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img86.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Información considerada
            p.mb-0 Cobertura vegetal, relieve, uso del suelo y reportes comunitarios.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img87.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Objetivo
            p.mb-0 Priorizar acciones de restauración, revegetación, control de escorrentías y protección de nacederos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img88.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Aporte comunitario
            p.mb-0 Fortalece la planificación territorial desde la experiencia vivida y la resiliencia colectiva.

    <!-- BLOQUE 4 -->
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Distribución de recursos hídricos
    
    p.mb-5 Los mapas hídricos permiten visualizar la red de agua en el territorio, incluyendo <strong>ríos, quebradas, arroyos, humedales, nacederos</strong> y zonas de recarga acuífera.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Elaboración
                p.mb-0 A mano alzada, con apoyo de recorridos de campo, memoria comunitaria y datos locales sobre lluvias y escorrentías.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Utilidad
                p.mb-0 Identifica áreas prioritarias para conservación, restauración y manejo del recurso hídrico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Aplicación agroecológica
                p.mb-0 Orienta decisiones sobre prácticas como barreras vivas, protección de nacederos o zanjas de infiltración.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Fichas de diagnóstico: síntesis territorial para la toma de decisiones

    p.mb-5 Las <strong>fichas de diagnóstico territorial</strong> presentan una visión sintética del predio, facilitando una lectura rápida y comparativa para la planificación agroecológica. Cada ficha recoge variables clave:

    .row.justify-content-center.mb-3
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___box_8.h-100
          h4.mb-0.text-center Características biofísicas
          p.mb-0 Suelo, clima, relieve, cobertura vegetal.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          h4.mb-0.text-center Recurso hídrico
          p.mb-0 Estado y uso del agua disponible.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          h4.mb-0.text-center Prácticas productivas
          p.mb-0 Sistemas de cultivo, técnicas agroecológicas.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          h4.mb-0.text-center Infraestructura y accesibilidad
          p.mb-0 Caminos, construcciones, conectividad.
    
    .row.justify-content-center.mb-0
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___box_8.h-100
          h4.mb-0.text-center Riesgos y afectaciones
          p.mb-0 Erosión, contaminación, presión humana.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          h4.mb-0.text-center Potencialidades
          p.mb-0 Capacidades ecológicas y productivas.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          h4.mb-0.text-center Indicadores de resiliencia
          p.mb-0 Vulnerabilidad frente al cambio climático.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100
          h4.mb-0.text-center Propuestas comunitarias
          p.mb-0 Estrategias de manejo sostenible y restauración.
            
</template>

<script>
export default {
  name: 'Tema5',
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

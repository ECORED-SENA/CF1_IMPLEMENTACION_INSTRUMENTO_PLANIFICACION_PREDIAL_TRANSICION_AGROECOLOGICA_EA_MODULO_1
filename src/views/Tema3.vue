<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Biodiversidad

    p.mb-5 Colombia, como <strong>país megadiverso</strong>, tiene la responsabilidad y la oportunidad de <strong>integrar la conservación de la biodiversidad</strong> en sus actividades productivas. Esta temática ofrece un marco práctico para <strong>identificar, gestionar y monitorear Áreas de Conservación y Biodiversidad</strong> dentro de propiedades rurales, en <strong>alineación con la normativa ambiental colombiana</strong>.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img63.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El objetivo es <strong>guiar a propietarios, técnicos y comunidades en la integración efectiva de la conservación con la producción agroecológica</strong>, contribuyendo al <strong>mantenimiento de los servicios ecosistémicos</strong> y a la conformación de un <strong>paisaje rural sostenible</strong>.
    
    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Identificación de zonas estratégicas para la conservación

    p.mb-5 La <strong>identificación de zonas estratégicas</strong> es el primer paso en la planificación predial con enfoque de conservación. Estas áreas son esenciales para proteger la biodiversidad, conservar el agua y garantizar la conectividad ecológica. A continuación, se describen tres tipos clave de zonas estratégicas:

    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img64.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Áreas boscosas").ajuste-cajaAcordion
              <ul class="fa-ul estilo___ul_1 mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Definición</strong>: ecosistemas naturales con cobertura arbórea. </li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Identificación</strong>: incluye bosques primarios, secundarios, rastrojos y fragmentos boscosos.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Importancia</strong>: aportan regulación hídrica, hábitat para fauna silvestre, captura de carbono y conservación del suelo.</li>
              </ul>
            .row(titulo="Rondas hídricas").ajuste-cajaAcordion
              <ul class="fa-ul estilo___ul_1 mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Definición</strong>: franjas de protección paralelas a cuerpos de agua, con anchos mínimos definidos por la normativa colombiana. </li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Anchos mínimos</strong>: 
                  <ul class="fa-ul estilo___ul_2 mb-0">
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Quebradas y arroyos: 30 m.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Ríos hasta 10 m de ancho: 30 m.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Ríos entre 10 y 50 m: 50 m.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Ríos de más de 50 m: 100 m.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Lagunas, ciénagas y humedales: 50 m.</li>
                  </ul>
                </li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Identificación</strong>: zonas con vegetación arbórea o arbustiva cercanas a fuentes hídricas. </li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Importancia</strong>: sirven como corredores biológicos, protegen contra la erosión, previenen inundaciones y fortalecen la gestión del riesgo.</li>
              </ul>
            .row(titulo="Corredores biológicos de conectividad").ajuste-cajaAcordion
              <ul class="fa-ul estilo___ul_1 mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Definición</strong>: franjas de vegetación que enlazan fragmentos de bosque y permiten el flujo genético y el movimiento de especies. </li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Identificación</strong>: se ubican entre áreas de bosque; pueden ser cercas vivas, bosques de galería o vegetación arbustiva. </li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Importancia</strong>: disminuyen el aislamiento de poblaciones, previenen la endogamia y aumentan la resiliencia ecológica frente al cambio climático, enfermedades y perturbaciones; integran prácticas agroecológicas dentro del paisaje funcional.</li>
              </ul>
      
    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Función ecológica de las áreas de conservación dentro del predio

    p.mb-5 En el contexto agroecológico, las <strong>áreas de conservación dentro del predio</strong> no deben ser vistas como "tierras improductivas", sino como <strong>espacios esenciales para la sostenibilidad</strong>. Estas áreas <strong>proveen servicios ecosistémicos fundamentales</strong> que benefician directamente la producción agrícola, la salud del suelo, el manejo del agua y la resiliencia frente al cambio climático. A continuación, se detallan las principales <strong>funciones ecológicas</strong> que estas áreas cumplen:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Regulación hídrica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img66.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Regulación hídrica
            p.mb-0 Los bosques y rondas hídricas protegen nacederos, regulan el caudal de ríos y quebradas, evitan inundaciones y aseguran disponibilidad de agua en época seca. También filtran contaminantes.

      .py-3.py-md-4(titulo="Control de erosión")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img65.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Control de erosión
            p.mb-0 Las raíces de árboles y arbustos estabilizan el suelo, evitando su pérdida por escorrentía y preservando la fertilidad.
      
      .py-3.py-md-4(titulo="Polinización y control biológico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img67.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Polinización y control biológico
            p.mb-0 Las áreas de conservación son hábitat para abejas, mariposas y aves que polinizan cultivos y controlan plagas, reduciendo la dependencia de insumos químicos.

      .py-3.py-md-4(titulo="Reservorio de biodiversidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img68.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Reservorio de biodiversidad
            p.mb-0 Conservan flora y fauna nativa, incluyendo especies endémicas, migratorias y en riesgo. Mantienen el equilibrio ecológico del territorio.
      
      .py-3.py-md-4(titulo="Resiliencia climática")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img69.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Resiliencia climática
            p.mb-0 Amortiguan los efectos del cambio climático (como sequías o lluvias extremas) y ayudan a mantener la estabilidad del agroecosistema.

    .row.align-items-center.m-0.mb-0.style___box_5(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img70.svg', alt='' ).m-auto
      .col-xl
        p.mb-0 Integrar y proteger estas áreas dentro de la finca no solo cumple una función ecológica, sino que representa una <strong>estrategia productiva inteligente</strong> en contextos de crisis ambiental y climática.

</template>

<script>
export default {
  name: 'Tema3',
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

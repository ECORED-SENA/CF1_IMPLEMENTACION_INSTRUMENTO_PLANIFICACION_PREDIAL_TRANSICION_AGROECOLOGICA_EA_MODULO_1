<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de residuos en el predio

    p.mb-1 La <strong>gestión adecuada de residuos</strong> es un pilar fundamental para la <strong>sostenibilidad ambiental y la salubridad</strong> en los predios rurales. Una gestión deficiente contamina el <strong>suelo, el agua y el aire, afecta la salud humana y animal</strong>, y además implica la pérdida de <strong>materiales valiosos</strong> que podrían ser reutilizados o transformados.
    p.mb-5 Implementar un sistema de manejo de residuos eficiente contribuye a:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Reducir impactos ambientales
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Promover la economía circular

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Mejorar la higiene del entorno
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_3.ajuste___box_3_2(data-aos="zoom-in")
          h5.mb-0 Fortalecer la producción agroecológica
    
    <!-- BLOQUE 1 -->
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Clasificación de residuos generados en el predio

    p.mb-5 Para gestionar correctamente los residuos, es necesario <strong>clasificarlos desde su origen</strong>, ya que cada tipo requiere un <strong>manejo diferenciado</strong>. A continuación, se presentan las principales categorías y sus características:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Residuos orgánicos o biodegradables
                p.mb-0 Cocina (restos de comida, cáscaras), cultivos (frutas no comercializables, rastrojos), jardinería (poda y hojas), excretas animales (estiércol, gallinaza). Se descomponen de forma natural y permiten su transformación en compost o abono.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Residuos inorgánicos aprovechables
                p.mb-0 Envases de plástico, vidrio, metales, tetrapak, cartón limpio y papel. Son reciclables y poseen valor económico. Es necesaria su separación correcta.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Residuos inorgánicos no aprovechables
                p.mb-0 Empaques sucios, plásticos de un solo uso no reciclables, icopor. No cuentan con un mercado de reciclaje. Su disposición adecuada evita afectaciones ambientales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Residuos peligrosos
                p.mb-0 Envases de plaguicidas o fertilizantes, medicamentos veterinarios vencidos, aceites usados y baterías. Presentan propiedades tóxicas o contaminantes. Requieren manejo especializado y disposición segura.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 Una <strong>gestión integral de residuos en el predio</strong> mejora las condiciones sanitarias, <strong>aprovecha recursos disponibles</strong> y evita la acumulación de materiales que puedan dañar el ambiente o la salud. Integrar este manejo en la planificación agroecológica promueve prácticas sostenibles y responsables en el territorio.
            
    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Impactos ambientales de una mala gestión

    p.mb-5 Una disposición inadecuada de residuos genera múltiples consecuencias negativas para el entorno natural y social. A continuación, se resumen los principales impactos:

    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img75.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Contaminación hídrica").ajuste-cajaAcordion
              p.mb-3 Los lixiviados provenientes de residuos orgánicos y químicos se infiltran en acuíferos o escurren hacia quebradas y ríos. Esto provoca procesos de eutrofización y toxicidad en los cuerpos de agua.
            .row(titulo="Contaminación del suelo").ajuste-cajaAcordion
              p.mb-3 La acumulación de plásticos impide la infiltración de agua, y la presencia de sustancias químicas altera la biota y reduce la fertilidad del suelo.
            .row(titulo="Emisión de gases de efecto invernadero").ajuste-cajaAcordion
              p.mb-3 La descomposición anaeróbica de materia orgánica en botaderos libera metano (CH₄), un gas con alto poder contaminante que contribuye al cambio climático.
            .row(titulo="Problemas sanitarios").ajuste-cajaAcordion
              p.mb-3 La acumulación de residuos atrae plagas como roedores y moscas, generando focos de infección que afectan la salud humana y animal.
            .row(titulo="Degradación del paisaje").ajuste-cajaAcordion
              p.mb-3 La presencia visible de residuos afecta la estética del entorno y disminuye el valor del territorio, tanto en términos ecológicos como económicos.

</template>

<script>
export default {
  name: 'Tema4',
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

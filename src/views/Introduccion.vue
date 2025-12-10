<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___img_1
      .px-5
    
          p.mb-5 La transición agroecológica exige comprender profundamente las condiciones ecológicas del territorio y los impactos del modelo agroindustrial sobre los sistemas de vida. Este componente formativo se propone como punto de partida para fortalecer la planificación predial desde una mirada integral, crítica y regenerativa, articulando saberes locales, criterios técnicos y principios ecosistémicos.

          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 A través del estudio de los límites planetarios, el colapso ecosistémico y la sustitución de saberes, se invita a los participantes a reconocer el diagnóstico predial como herramienta clave para interpretar el paisaje, identificar vulnerabilidades y proyectar soluciones agroecológicas contextualizadas. El enfoque sistémico del predio permite comprender las interrelaciones entre suelo, agua, biodiversidad y prácticas productivas, facilitando la toma de decisiones informadas y sostenibles.
          
          .fondo___color_1
            .px-5

                .row.align-items-center.m-0
                  .col-xl-auto(data-aos="fade-right")
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/intro/img3.svg', alt='').m-auto
                  .col-xl
                    p.mb-0 Este componente promueve el uso del <strong>Instrumento de Planificación Predial para la Transición Agroecológica (IPPTA)</strong> como guía metodológica para valorar fuentes hídricas, áreas de conservación y gestión de residuos, integrando técnicas participativas, bioindicadores y mapas temáticos. Se busca fortalecer la autonomía territorial, el monitoreo comunitario y la capacidad de los actores locales para regenerar sus agroecosistemas desde el cuidado, la equidad y la resiliencia.

</template>

<script>
export default {
  name: 'Introduccion',
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

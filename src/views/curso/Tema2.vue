<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. La estrategia Treatnet como modelo de apoyo en el tratamiento de adicciones'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-rojo.p-4(data-aos="fade-up")
          p.mb-0 La problemática de las adicciones ha sido un desafío constante para las sociedades contemporáneas, afectando no solo a los individuos, sino también a sus familias y comunidades. Las adicciones no solo implican un uso descontrolado de sustancias, sino que también conllevan una serie de consecuencias sociales, económicas y de salud pública que impactan de manera significativa en el tejido social.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      
      p.mb-4 La estrategia Treatnet (<i>Treatment and Rehabilitation for Drug Dependence</i>) emerge como un modelo de apoyo integral que busca mejorar la atención y el tratamiento de las personas que enfrentan problemas de dependencia a sustancias, proporcionando un enfoque más humano y efectivo en la lucha contra este fenómeno complejo.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Origen y principios de la estrategia Treatnet

      .row.mb-4 
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Treatnet es una iniciativa promovida por la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC), diseñada para fortalecer los sistemas de tratamiento y rehabilitación en distintos países. Esta estrategia se articula en torno a la necesidad de ofrecer un marco coherente y eficaz que permita abordar las adicciones de manera integral. Su enfoque se centra en la capacitación de profesionales, la mejora de la calidad de los servicios y la promoción de prácticas basadas en la evidencia, asegurando así que las intervenciones sean efectivas y adaptadas a las necesidades de cada población.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-38.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Uno de los principios claves de Treatnet es la universalidad y accesibilidad del tratamiento. La estrategia promueve la eliminación de barreras económicas, geográficas y culturales que dificultan el acceso de las personas a servicios de rehabilitación. De esta manera, se garantiza que el apoyo esté disponible para todas las personas, independientemente de su situación socioeconómica.
          span Conozcamos algunos aspectos importantes:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Formación y capacitación de profesionales")
              p Uno de los aspectos más destacados de Treatnet es su énfasis en la formación de recursos humanos. A través de programas de capacitación, se busca dotar a los profesionales de la salud y a los trabajadores sociales con las herramientas necesarias para abordar las adicciones de manera adecuada. Esto incluye no solo el conocimiento técnico sobre sustancias y sus efectos, sino también habilidades en la gestión de casos, la comunicación y el apoyo emocional.<br><br>Este enfoque formativo permite que los profesionales adquieran una visión integral del problema de las adicciones, incorporando aspectos médicos, psicológicos y sociales en su práctica. Asimismo, se promueve la implementación de estrategias terapéuticas basadas en la evidencia, tales como la terapia cognitivo-conductual y la terapia motivacional, las cuales han demostrado ser efectivas en la rehabilitación de personas con dependencia a sustancias.

            .div(titulo="Enfoque centrado en el paciente")
              p Treatnet promueve la implementación de modelos de atención centrados en el paciente, garantizando que cada individuo reciba un tratamiento personalizado que contemple sus circunstancias particulares. Esto implica la integración de servicios de salud mental, apoyo social y programas de reintegración, lo que contribuye a una recuperación más efectiva y sostenible.<br><br>El enfoque centrado en el paciente reconoce que cada historia de adicción es única y requiere un abordaje adaptado a las particularidades de cada persona, considerando su entorno, sus necesidades y sus aspiraciones. De esta manera, se fomenta una mayor adherencia a los tratamientos y una reducción de las tasas de recaída.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Redes de colaboración y coordinación interinstitucional")
              p Otro componente esencial de esta estrategia es la creación de redes de colaboración entre diferentes actores, incluidos gobiernos, organizaciones no gubernamentales y comunidades locales. Esta colaboración permite un enfoque coordinado que maximiza los recursos disponibles y asegura una respuesta integral a la problemática de las adicciones.<br><br>Al unir esfuerzos y compartir recursos, se logra un impacto más significativo en la comunidad, promoviendo una cultura de apoyo y recuperación que beneficia no solo a los individuos afectados, sino a la sociedad en su conjunto. Las redes de colaboración también facilitan el intercambio de conocimientos y buenas prácticas entre los distintos actores involucrados en la atención a las adicciones.

            .div(titulo="Evaluación y mejora continua")
              p Un aspecto clave de Treatnet es la evaluación constante de sus programas y estrategias para asegurar su efectividad. A través del monitoreo y la recopilación de datos, se analizan los resultados obtenidos y se identifican áreas de mejora. Este proceso de evaluación permite que la estrategia se adapte a las nuevas necesidades y desafíos que surgen en el tratamiento de las adicciones.

      .d-flex.align-items-start.bg-gris.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-41.png', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white Los estudios de impacto han demostrado que los programas que siguen el modelo Treatnet logran una mayor tasa de recuperación y reinserción social de los pacientes. Esto se debe a su enfoque integral, que aborda no solo el problema de la adicción en sí, sino también los factores de riesgo subyacentes, como la pobreza, la violencia y la exclusión social.

      .row.mb-4
        .col-10.mx-auto
          .row.bg-amarillo.p-4.py-xl-0
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8.d-flex
              p.my-auto La estrategia Treatnet se presenta como un modelo de apoyo valioso en la lucha contra las adicciones, al ofrecer un marco que prioriza la capacitación, la atención centrada en el paciente y la colaboración interinstitucional.
          .row.bg-amarillo-oscuro.p-4.py-xl-0
            .col-12.col-xl-8.d-flex
              p.my-auto Al implementar este enfoque, se abre la puerta a una atención más efectiva y humanizada, que no solo busca la reducción del consumo de sustancias, sino también la mejora de la calidad de vida de quienes enfrentan estas dificultades y sus familias.
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

      .row.mb-5
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Este esfuerzo colectivo es fundamental para construir un futuro más saludable y resiliente, donde las adicciones se traten como un problema de salud pública y se ofrezcan soluciones efectivas y compasivas. La transformación de la atención a las adicciones a través de iniciativas como Treatnet no solo tiene el potencial de cambiar vidas individuales, sino que también puede contribuir a la construcción de comunidades más fuertes y unidas en la lucha contra este grave problema social. 

        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.unodc.org/unodc/en/treatment-and-care/index.html") Tomás-Rosselló, J., Rawson, R. A., Zarza, M. J., Bellows, A., Busse, A., Saenz, E., ... & Ling, W. (2010). United Nations Office on Drugs and Crime international network of drug dependence treatment and rehabilitation resource centres: Treatnet.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://open.spotify.com/episode/6gFVMno82gjp4DYe5HGDHM?si=aPtRD-ozSGiI5Sj1pyXxRw") [Podcast] Sanamente. (2023, 19 de diciembre) Tratar la conducta adictiva de sustancias psicoactivas.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

import Layout from "../../../components/layout"
import { Helmet } from "react-helmet"
import React from "react"
import SEO from "../../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const EspaceMetafisicoPage = () => {
  return (
    <Layout>
      <SEO title="ESCAPE METAFÍSICO (CUIDADO PALIATIVO)" />
      <Helmet>
        <body className="dobFiber" />
      </Helmet>
      <div className="flex items-center justify-center pt-32 carlovich">
        <div className="w-full max-w-xl mx-auto my-0 ">
          <h1 className="block max-w-4xl px-6 py-2 font-mono text-3xl font-bold text-center text-gray-400 uppercase bg-gray-800 shadow-2xl tarantos-title">
            ESCAPE METAFÍSICO (CUIDADO PALIATIVO)
          </h1>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            title="ESCAPE METAFÍSICO (CUIDADO PALIATIVO)"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924551380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>

          <p
            className="px-8 py-12 mb-6 font-sans text-base"
            style={{
              background: "rgba(40, 17, 54, 0.9)",
            }}
          >
            NUMEROSOS DÍAS VAN DESDE QUE ME ENCUENTRO ENCERRADA EN ESTA FORZOSA
            REALIDAD DE LA QUE OBLIGADAMENTE DEBO SER PARTE. EN UN CÍRCULO TAN
            NAUSEOSO COMO LA CALESITA ME DESCOMPONGO Y MI CUERPO SE DESVANECE EN
            ESA FORMA PERFECTA SIN PODER VER EN EL ABISMO OTRA REALIDAD POSIBLE.
            INTENTO ESCAPARME DE ESTA FISICALIDAD ABRUMADORA DE TODAS LAS
            MANERAS EXISTENTES PERO MI CUERPO SOLO ENCUENTRA EN LO SENSORIAL LA
            UNICA POSIBILIDAD DE CALMA. LOS PASOS Y LOS PEDALEOS ME LLEVAN A
            EMBAUCARME EN EXPEDICIONES SIN DESTINO, EN RECORRIDOS QUE ME
            ASOMBREN Y ME DISTRAIGAN. EL MOVIMIENTO ME TRASLADA Y ME EMBISTE CON
            PERSONAJES QUE DISPONEN DE MIS PENSAMIENTOS PARA DISCURRIR SUS
            DELIRIOS, Y EN ESE FLUIR DEJO QUE MI CUERPO NAUFRAGUE POR UNOS
            MINUTOS QUE SE SABEN ETERNOS.
            <br />
            <br />
            ESTA GUÍA AUDITIVA PUEDE SER UTILIZADA COMO HERRAMIENTA DE ESCAPE Y
            DE LIBERACIÓN DE TENSIÓN Y ANSIEDAD. LA NARRATIVA PSEUDOREAL
            ENCENDERÁ TUS SENTIDOS Y TE CONECTARÁ CON OTROS DESASOSIEGOS. ESTA
            PÍLDORA DESCOMPRESIVA NO VIENE CON MANUAL DE INSTRUCCIONES, AUNQUE
            UNOS AURICULARES Y DISPONER DE TU CUERPO EN MOVIMIENTO ACTIVARÁ TUS
            GLÁNDULAS SENSORIALES Y PERMITIRÁ A LOS SONIDOS INMISCUIRSE.
            <br />
            <br />
          </p>
          <BackgroundSlider
            className=" bgslider"
            initDelay={3}
            images={["escape-metafisico.jpg"]}
            transition={2}
            duration={8}
            query={useStaticQuery(graphql`
              query {
                backgrounds: allFile(
                  filter: { sourceInstanceName: { eq: "backgrounds" } }
                ) {
                  nodes {
                    relativePath
                    childImageSharp {
                      fluid(
                        maxWidth: 2000
                        quality: 100
                        duotone: { highlight: "#f00e2e", shadow: "#281136" }
                        traceSVG: { color: "#281136" }
                      ) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            `)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default EspaceMetafisicoPage

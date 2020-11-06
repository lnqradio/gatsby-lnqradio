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
            Numerosos días van desde que me encuentro encerrada en esta forzosa
            realidad de la que obligadamente debo ser parte. En un círculo tan
            nauseoso como la calesita me descompongo y mi cuerpo se desvanece en
            esa forma perfecta sin poder ver en el abismo otra realidad posible.
            Intento escaparme de esta fisicalidad abrumadora de todas las
            maneras existentes pero mi cuerpo solo encuentra en lo sensorial la
            unica posibilidad de calma. Los pasos y los pedaleos me llevan a
            embaucarme en expediciones sin destino, en recorridos que me
            asombren y me distraigan. El movimiento me traslada y me embiste con
            personajes que disponen de mis pensamientos para discurrir sus
            delirios, y en ese fluir dejo que mi cuerpo naufrague por unos
            minutos que se saben eternos.
            <br />
            <br />
            Esta guía auditiva puede ser utilizada como herramienta de escape y
            de liberación de tensión y ansiedad. La narrativa pseudoreal
            encenderá tus sentidos y te conectará con otros desasosiegos. Esta
            píldora descompresiva no viene con manual de instrucciones, aunque
            unos auriculares y disponer de tu cuerpo en movimiento activará tus
            glándulas sensoriales y permitirá a los sonidos inmiscuirse.
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

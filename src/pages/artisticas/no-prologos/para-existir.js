import React from "react"
import Layout from "../../../components/layout"
import { Helmet } from "react-helmet"

import SEO from "../../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const ParaexistirPage = () => {
  return (
    <Layout>
      <SEO title="Prólogo-para existir- de un sueño, el #7. " />
      <Helmet>
        <body className="domFiber" />
      </Helmet>
      <div className="flex items-center justify-center pt-32 carlovich">
        <div className="w-full max-w-xl m-auto my-0 ">
          <h1 className="inline-block max-w-4xl px-6 py-3 text-xl text-center text-gray-400 bg-gray-800 shadow-2xl tarantos-title">
            Prólogo-para existir- de un sueño, el #7.
          </h1>
          <iframe
            width="100%"
            height="300"
            title="Prólogo-para existir- de un sueño, el #7."
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/603286659&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
          ></iframe>
          <p
            className="px-8 py-12 mb-6 font-serif text-base"
            style={{
              background: "rgba(40, 17, 54, 0.9)",
            }}
          >
            Sentenciar “hasta ahora” empata en soberbia al “será”, lo asumo,
            pero no sin pena o incluso culpa. Así entonces me presento como
            Prólogo Repudiable a un sueño que no es tal. Hay en mí un preferir
            existir como prólogo repudiable a no ser (como si hubiese la
            posibilidad de no ser siendo).
            <br />
            <br />
            Andaba yo en las pasarelas de otros prólogos con la expectativa de
            que un urdidor de prólogos y sueños me soborne y me proponga
            prologar una mera pieza literaria usadora de Unsueñoparaser.
            <br />
            <br />
            He mentido para ganar esta existencia gloriosa de Prólogo Repudiable
            pero no volverá a ocurrir algo semejante, a excepción que otra
            ocasión así lo amerite. Sin embargo, está lejos esta afirmación de
            eximirme como cómplice de la mentira General y Necesaria.
            <br />
            <br />
            Como una minúscula rebeldía me anima (¿toda rebeldía es una
            Dignidad?) decidí epilogar un hecho de la realidad disfrazado de
            fantasía…
            <br />
            <br />
            Sueño #7
            <br />
            <br />
            Ahora sé que era San Petersburgo pero me costó llegar a la tarde. Me
            di cuenta más por el ambiente que por la arquitectura (sólo
            compartía con la ciudad de no-sueño la altura de sus
            construcciones). Un día fuimos a ver la casa, por las citaciones a
            la que los turistas acuden invitados por los mapas y las
            recomendaciones. Era una casa roja, como si estuviera en el medio de
            la manzana (pero no estaba en el medio de la manzana porque no se
            regían por ese des-orden) tirando a bordó. Era un palacete ruso, con
            sus simetrías y sus ventanas. Habían estado un día o una noche o una
            semana, la Negra Poli, el Indio y Skay.
            <br />
            <br />
            Otro día volví a ir, ya sólo. Tuve la oportunidad de agarrar un
            atajo arbolado y solitario pero respeté mi miedo y decidí caminar
            por un lugar más público. Nuevamente tenía frente a mí esa casa que
            la miraba para arriba, en forma oblicua. Estaba abandonado a eso,
            con un sol tibio de invierno porteño que resaltaba el antesrojo y
            ahora bordó de la pintura de la casa y la amistad entre el amarillo,
            marrón y verde de las hojas, cuando apareció mi hermano con las dos
            mochilas grandes, las viajeras. Supe que nos teníamos que ir al
            aeropuerto. Siempre es agotador ir al aeropuerto y cargar con las
            mochilas. Como para complacer ese pensamiento caprichoso apareció el
            griego con un trineo de madera muy lustrada que lo usaba para llevar
            el equipaje de la gente que pagaba por ello. El trineo sólo tenía un
            bolso El griego nos dijo que pongamos las nuestras que él las
            llevaba. Caminamos menos de cien metros y miramos para atrás,
            seguros de la desconfianza. El griego aún no se había movido de ahí
            pero lo divisábamos a lo lejos maniobrando y examinando el trineo.
            Retrocedimos hasta el lugar y nos dimos cuenta que no estaban
            nuestras mochilas. Lo misterioso del asunto era que nadie estuvo
            cerca del trineo más que nosotros tres. Desaparecieron. En un
            momento estuvieron y después ya no. Las buscamos por inercia, por
            compromiso de pérdida, pero sin optimismo ni esperanza alguna. Lo
            único de lo que estoy seguro es que la mochila la dejé ahí, hasta me
            acuerdo (además de la imagen del dorso de la mochila contra la
            madera brillosa) de la sensación de descarga cuando liberé ese peso
            y me la saqué de la espalda. Después ya me dio curiosidad saber
            quién ejecutaba ese truco desvaneciente. En la siguiente escena ya
            estábamos en el aeropuerto y gastábamos nuestras últimas búsquedas
            atrás de las macetas o las maletas de otros y disipábamos la bronca
            que nos generaba, o a mí por lo menos, haber perdido el neceser.
            Antes de embarcar, incluso antes de hacer aduana, decidí despertarme
            porque me daba mucha angustia aquella pérdida.
          </p>
          <BackgroundSlider
            className=" bgslider"
            initDelay={3}
            images={[
              "No-prologo-para-resolver-el-mundo.jpg",
              "prologo-para-existir-de-un-sueno-el-7.jpg",
            ]}
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

export default ParaexistirPage

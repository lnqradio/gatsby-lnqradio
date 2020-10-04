import React from "react"
import Layout from "../../../components/layout"
import { Helmet } from "react-helmet"

import SEO from "../../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundSlider from "gatsby-image-background-slider"

const TrinchePage = () => {
  return (
    <Layout>
      <SEO title="No-Prólogo para resolver el mundo." />
      <Helmet>
        <body className="domFiber" />
      </Helmet>
      <div className="flex items-center justify-center pt-32 carlovich">
        <div className="w-full max-w-xl m-auto my-0 ">
          <h1 className="inline-block max-w-4xl px-6 py-3 text-xl text-center text-gray-400 bg-gray-800 shadow-2xl tarantos-title">
            No-Prólogo para resolver el mundo.
          </h1>
          <iframe
            width="100%"
            height="300"
            title="No-Prólogo para resolver el mundo."
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/603306345&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
          ></iframe>
          <p
            className="px-8 py-12 mb-6 font-sans text-base"
            style={{
              background: "rgba(40, 17, 54, 0.9)",
            }}
          >
            Al ser Prólogo escapo de las responsabilidades del texto: su
            profundidad, coherencia y lo demás. Escapo de esa parálisis que
            sufre el texto cuando le piden que resuelva el mundo con todas las
            herramientas, las formas, los colores y las ideas al servicio de su
            imaginación. Aunque no escapo del todo y es por eso que ni siquiera
            soy Prólogo y al momento soy No-Prólogo, porque no he hallado texto
            que resuelva el mundo, ni siquiera uno que lo intente. Di con tres
            No-Textos pero todos padecían La Manta Corta y ninguno llegaba a
            Texto. Más por aburrido que por interesado propongo Medidas de un
            No-Prólogo a un No-Texto para Resolver el mundo. La primera es de
            whisky, la segunda abolir los círculos. Debemos liberarnos de la
            lógica y de la comida sin sal. También es de cabal importancia
            declararnos enemigos de toda abstracción y desconocer esa enemistad
            ya que es una abstracción y por lo tanto enemigos de nuestra
            declaración. Frente a los problemas, dos soluciones: que no se
            puedan resolver, para así esquivar la espantosa situación de que
            alguien tenga razón; la otra, producir una alfombra gigante donde
            esconder todos los problemas. Sugiero, además, obligar a la ¿gente?
            a caminar constantemente para comprender los cambios. Para aquellos
            No-Textos que prefieran el azar, les inspiro: eliminar los números,
            6, 4, y 1 y ver qué sucede; el mismo procedimiento se puede
            aventurar con algunas letras del abecedario. <br />
            <br /> Hay una medida que busca traer a Futuro al presente: consiste
            en simular muertes y constatar así el afecto de las posteridades.
            <br />
            <br />
            Las medidas anteriores son todas para Vigilia, tiempo de los Textos;
            las próximas dos son propiedad (en el Mundo Resuelto no habrá
            propiedad (o habrá poca y espero ser un No-Prólogo propietario)) de
            Ensueño, ellas son: perder en simultáneo la memoria y empezar como
            De Nuevo (¿pero no es que el Mundo nació viejo?); la otra, dormirnos
            todos a la vez y que lo soñado sea lo único cierto.
            <br />
            <br /> Mientras tanto, espero en compañía de Soledad.
            <br />
            <br /> Y un Antiguo Ludwing responde: <br />
            <br />
            ¿Quien alza su verdad y acierta? Tal vez esto, su ambigua e
            inteligente razón junto conmigo seamos productos de un sueño, una
            realidad creada por usted. Algunos mas comprensivos dicen que todo
            esto es un gran sueño de la mente creadora, algo por lo que morir y
            reir ja!
            <br />
            <br />
            (Una manera de desvelar directo y continuar con estas "legibles
            certezas ofensas")
            <br />
            <br />
            Con coherencia: ¡El mundo te tira con palos y uno juntando astillas!
            Otro ¡Normatear el craneo te exonera de la calva ignorancia pibe!
            <br />
            <br />
            Que ligero se le siente compadre No-progolo en esta ocasión ¿Acaso
            notó que no está encadenado a la norma catedrática? Verá que solo
            tuvo que soltar las cadenas para erguirse. Y esto lo consigue
            desvelando que se sabe prisionero, y a la vez condena como su propio
            carcelero.
            <br />
            <br />
            - ¡El mundo nació hastiado, cabizbajo y mas viejo que el tiempo
            mismo! - Me dijo un anciano de cabeza, un antiguo. (Temo confundirlo
            con el miedo)
            <br />
            <br />
            ¡Con que fuerza impera su divague! La redundancia a la que es
            expuesto puede dejarlo desnudo y justo hoy llueve... A todo esto se
            me cruzó otro divague de este incomprendido tambien!
          </p>
          <BackgroundSlider
            className=" bgslider"
            initDelay={3}
            images={["Sueño7.jpg"]}
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

export default TrinchePage

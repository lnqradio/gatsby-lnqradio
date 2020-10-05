import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import {Link } from "gatsby"
//import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"
import OpenLight from "../../components/OpenLightbox"
import SimpleReactLightbox from "simple-react-lightbox"

const options = {
  buttons: {
    iconPadding: "5px",
    showDownloadButton: false,
    backgroundColor: "rgba(0, 0, 0, 1)",
    iconColor: "rgb(255, 255, 255)",
  },
  caption: {
    captionFontFamily: "Josefin Sans,sans",
    captionFontSize: "22px",
    captionColor: "#8D99AE",
    captionFontWeight: 300,
    showCaption: true,
  },
  settings: {
    overlayColor: "rgba(0, 0, 0, 1)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 3.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    disablePanzoom: true,
    autoplaySpeed: 3000,
    hideControlsAfter: true,
  },
  translations: {
    autoplayText: "Play",
    closeText: "Cerrar",
    downloadText: "Descargar",
    fullscreenText: "Pantalla completa",
    nextText: "Siguiente",
    pauseText: "Pausa",
    previousText: "Anterior",
    thumbnailsText: "Miniaturas",
    zoomOutText: "Zoom Out",
  },
  progressBar: {
    height: "4px",
    fillColor: "rgb(255, 255, 255)",
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  thumbnails: {
    showThumbnails: true,
  },
}

const GaleriaPage = () => {
  const data = useStaticQuery(graphql`
    query QueryGaleriaQuery {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(
                maxWidth: 1000
                quality: 70
                traceSVG: { color: "#281136" }
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      autores: allContentfulAutores(
        sort: { fields: [name], order: DESC }
        skip: 1
      ) {
        edges {
          node {
            id
            name
            columnas {
              id
              title
              description {
                description
              }
              soundcloud {
                soundcloud
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="pt-24">
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <div className="flex justify-between w-full py-12 mx-auto text-white md:px-12">
              <iframe
                width="100%"
                height="80"
                title="Prólogo-para existir- de un sueño, el #7."
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/619154232&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
              ></iframe>
            </div>
            <OpenLight />
            <div className="grid grid-cols-1 gap-10 mx-auto md:px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.backgrounds.edges.map(({ node }) => {
                return (
                  <div
                    className="relative w-full h-64 overflow-hidden bg-gray-800 cursor-pointer link"
                    key={node.id}
                  >
                    <Img
                      fluid={node.childImageSharp.fluid}
                      className="h-64"
                      alt="@protojulieta"
                    />
                  </div>
                )
              })}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </>
  )
}

export default GaleriaPage

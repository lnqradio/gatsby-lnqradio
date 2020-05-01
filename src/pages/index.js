import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Img from "gatsby-image"
import AwesomeSlider from "react-awesome-slider"
import { GoLinkExternal } from "react-icons/go"

import "./index.css"
import Helmet from "react-helmet"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query DestacadosQuery {
      destacados: allContentfulColumnas(
        sort: { order: DESC, fields: [publishDate] }
        filter: { author: {}, destacar: { eq: "Si" } }
        limit: 3
      ) {
        edges {
          node {
            id
            title
            slug
            tipoDePodcast
            heroImage {
              fixed(width: 600, height: 300) {
                ...GatsbyContentfulFixed
              }
            }
            description {
              description
            }

            soundcloud {
              soundcloud
            }
            author {
              id
              name
            }
          }
        }
      }
      lastShow: allContentfulProgramas(
        limit: 1
        sort: { order: DESC, fields: [episode] }
      ) {
        edges {
          node {
            id
            title
            slug
            episode
            publishDate(formatString: "MMMM Do, YYYY", locale: "es")
            description {
              description
            }
            soundcloud {
              soundcloud
            }
            soundcloudTrackId
            temporada
            heroImage {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
            podcastRelacionados {
              title
              slug
              description {
                description
              }
              heroImage {
                fixed(width: 600, height: 300) {
                  ...GatsbyContentfulFixed
                }
              }
              tipoDePodcast
              soundcloudTrackID
              author {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Inicio" />
      <Helmet>
        <body className="home headroom-top-transparent" />
      </Helmet>
      <h1 className="w-full px-3 pt-8 pb-3 mb-2 font-mono text-2xl text-center text-red-500 ">
        Un nuevo episodio cada viernes a las 20hs
      </h1>
      <div className="mt-8 text-center solumedia">
        <iframe
          border="0"
          frameborder="NO"
          width="300px"
          title="En vivo"
          height="100px"
          className="m-auto min-w-64"
          scrolling="NO"
          allowtransparency="yes"
          src="https://www.solumedia.com.ar/radios/8772"
        ></iframe>
        <a
          href="https://www.solumedia.com.ar/radios/8772/"
          target="_blank"
          className="relative z-50 block mt-2 mb-12 text-xs text-white hover:underline"
          rel="noopener noreferrer"
        >
          Si no se reproduce, probá con un click aquí
          <GoLinkExternal className="inline-block ml-3 text-white text-xm" />
        </a>
      </div>

      <div className="flex-wrap hidden w-full pb-6 m-auto mt-0 home-post">
        <AwesomeSlider>
          {data.destacados.edges.map((item, i) => (
            <div key={item.node.slug} className="post ">
              <div className="relative inset-0 z-40 flex flex-col justify-end text-center md:absolute description">
                <div className="mb-2 actions">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.name
                    )}/${kebabCase(item.node.slug)}`}
                    className="font-mono text-xl text-white title"
                    style={{ marginLeft: "0" }}
                  >
                    {item.node.title}
                  </Link>
                  <h3 className="block mb-3 font-mono text-gray-500">
                    {item.node.tipoDePodcast}
                  </h3>
                </div>
              </div>

              <Img
                alt="{item.node.title}"
                fixed={item.node.heroImage.fixed}
                className="absolute inset-0 m-0 opacity-50 hover:opacity-75"
                style={{ opacity: ".5" }}
              />
            </div>
          ))}
        </AwesomeSlider>
      </div>
      <div className="max-w-5xl m-auto mb-24 md:mt-6 lg:mt-12 last-show ">
        {data.lastShow.edges.map((show, i) => (
          <div key={show.node.slug} className="md:px-2 ">
            <h1 className="flex justify-start p-6 pb-1 font-mono text-sm text-left text-white bg-gray-800">
              Escuchá el último episodio completo{" "}
              <b className="mb-2 ml-2 font-mono text-sm text-left text-gray-500 capitalize">
                {show.node.publishDate}
              </b>
            </h1>
            <div className="relative w-auto px-0 pt-0 pb-0 text-left bg-gray-800">
              <Link
                to={`/episodios/`}
                className="relative right-0 block px-6 pt-2 pb-3 font-mono text-gray-400 transition-all duration-200 ease-in-out md:absolute md:pt-0 hover:text-white hover:underline"
              >
                Temporada {show.node.temporada}
              </Link>

              <h2 className="max-w-sm px-6 text-2xl leading-normal text-red-500 hover:no-underline">
                {show.node.title}{" "}
                <span className="text-gray-500 opacity-50">
                  ({show.node.episode})
                </span>
              </h2>

              <p className="max-w-6xl px-6 pb-6 mt-3">
                {show.node.description.description}
              </p>
              <div className="relative bottom-0 left-0 right-0 flex items-center justify-between px-2 py-3 bg-red-800 listen">
                <iframe
                  width="78%"
                  height="20"
                  scrolling="no"
                  title={show.node.title}
                  className="px-1 m-auto transform scale-125 sm:px-0"
                  frameborder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                    show.node.soundcloudTrackId
                  )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                ></iframe>
                <Img
                  alt="{item.node.title}"
                  fluid={show.node.heroImage.fluid}
                  className="absolute inset-0 m-0 opacity-50 hover:opacity-75"
                  style={{ opacity: ".5" }}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center py-8 ">
              {show.node.podcastRelacionados.map((slider, i) => (
                <div
                  key={slider.slug}
                  className="w-full max-w-md m-2 bg-gray-800"
                >
                  <div className="relative flex h-56 p-0 m-0 overflow-hidden text-center p slider-item">
                    <div className="relative z-40 w-full pt-2 mt-2 text-left ">
                      <Link
                        to={`/columnas/${kebabCase(
                          slider.author.name
                        )}/${kebabCase(slider.slug)}`}
                        className="block px-5 mt-0 mb-2 font-mono text-2xl text-left text-red-500 lg:pr-12 hover:text-white"
                      >
                        {slider.title}
                      </Link>
                      <Link
                        to={`/columnas/${kebabCase(slider.author.name)}/`}
                        className="block px-6 pb-1 mb-2 font-mono text-base text-gray-500 hover:text-white"
                      >
                        x {slider.author.name}
                      </Link>
                      <p className="hidden px-5 pb-6 sm:block description">
                        {slider.description.description}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-3 bg-gray-800 listen">
                        <iframe
                          width="80%"
                          height="20"
                          scrolling="no"
                          title={slider.title}
                          className="m-auto transform scale-125"
                          frameborder="no"
                          allow="autoplay"
                          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                            slider.soundcloudTrackID
                          )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                        ></iframe>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 bg-image-hover-opacity"
                      style={{ opacity: ".2" }}
                    >
                      <Img
                        alt="{slider.title}"
                        fixed={slider.heroImage.fixed}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

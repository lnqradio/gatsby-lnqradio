import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Img from "gatsby-image"
import AwesomeSlider from "react-awesome-slider"

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

            temporada
            podcastRelacionados {
              title
              slug

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
                    className="font-mono text-2xl text-white title"
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
      <div className="max-w-5xl m-auto mt-12 mb-24 last-show ">
        {data.lastShow.edges.map((show, i) => (
          <div key={show.node.slug} className="md:px-2 ">
            <h1 className="flex justify-start p-6 pb-1 font-mono text-sm text-left text-white bg-gray-800">
              Escuchá el último episodio completo{" "}
              <b className="mb-2 ml-2 font-mono text-sm text-left text-gray-500 capitalize">
                {show.node.publishDate}
              </b>
            </h1>
            <div className="relative w-auto px-0 pt-0 pb-0 text-left bg-gray-800">
              <b className="relative right-0 block px-6 pt-2 pb-3 font-mono text-gray-400 md:absolute md:pt-0">
                Temporada {show.node.temporada}
              </b>

              <h2 className="max-w-sm px-6 text-2xl leading-normal text-red-500 hover:no-underline">
                {show.node.title}
              </h2>

              <p className="max-w-6xl px-6 pb-6 mt-3">
                {show.node.description.description}
              </p>
              <div
                className="border-b-4 border-orange-700 soundcloud-player"
                dangerouslySetInnerHTML={{
                  __html: show.node.soundcloud.soundcloud,
                }}
              />
            </div>
            <div className="flex flex-wrap justify-center py-8 ">
              {show.node.podcastRelacionados.map((slider, i) => (
                <div
                  key={slider.slug}
                  className="w-full max-w-md m-2 bg-gray-800"
                >
                  <div className="relative flex h-56 p-0 m-0 overflow-hidden text-center p slider-item">
                    <div className="relative z-40 w-full pt-2 mt-2 text-left description">
                      <Link
                        to={`/columnas/${kebabCase(
                          slider.author.name
                        )}/${kebabCase(slider.slug)}`}
                        className="block px-5 mt-0 mb-2 font-mono text-3xl text-left text-red-500 hover:text-white"
                      >
                        {slider.title}
                      </Link>
                      <h3 className="block px-5 font-mono text-left text-gray-500">
                        {slider.tipoDePodcast} x {slider.author.name}
                      </h3>
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-3 bg-gray-800 listen">
                        <iframe
                          width="100%"
                          height="20"
                          scrolling="no"
                          title={slider.title}
                          className="w-full px-12 transform scale-125 md:px-18"
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

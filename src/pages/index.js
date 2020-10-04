import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/SoundCard"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"

import "./index.css"
import { Helmet } from "react-helmet"

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
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(
              maxWidth: 1155
              quality: 100
              duotone: { highlight: "#f00e2e", shadow: "#281136" }
              traceSVG: { color: "#f00e2e" }
            ) {
              ...GatsbyImageSharpFluid
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
      <div
        className="relative flex items-center justify-center w-full ml-auto mr-auto overflow-hidden solumedia"
        style={{
          minHeight: "70vh",
        }}
      >
        <div
          className="relative block w-full max-w-lg mx-auto my-6 mt-20 font-mono shadow-sm"
          style={{
            background: "rgba(40, 17, 54, 0.8)",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 z-50 w-48 p-2 py-1 mx-auto -mb-5 text-base text-center uppercase bg-red-600 shadow-xl">
            último episodio
            <span className="ml-1 opacity-75">(458)</span>
          </div>
          <div className="relative flex flex-col items-center justify-center px-4 pb-3">
            <h2 className="flex flex-col w-full pt-2 text-2xl leading-normal text-center text-white uppercase">
              Fuegos De Artificio
              <small className="ml-3 opacity-50">Domingo 4 de octubre</small>
            </h2>
          </div>
          <div
            className="flex items-center justify-between listen"
            style={{
              opacity: 0.9,
            }}
          >
            <iframe
              width="100%"
              height="250"
              scrolling="no"
              title="Fuegos De Artificio"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904279798%3Fsecret_token%3Ds-aUaABkJkkRi&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>
        </div>

        <BackgroundSlider
          className="bg-gray-800 "
          style={{
            top: "0",
            maxHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initDelay={1}
          images={[
            "suenio-numero-cuatro.jpg",
            "No-prologo-confuso-de-procedimiento-lyncheano-para-el-lector-de-frases.jpg",
            "No-prologo-que-admira.jpg",
            "principe-de-persia.jpg",
          ]}
          transition={2}
          duration={5}
          query={data}
        />
      </div>

      <div className="max-w-5xl m-auto mb-24 md:mt-6 lg:mt-12 last-show ">
        {data.lastShow.edges.map((show, i) => (
          <div key={show.node.slug} className="">
            <h1 className="flex justify-start p-6 pb-1 font-mono text-sm text-left text-white bg-gray-800">
              <b className="mb-2 ml-0 font-mono text-sm text-left text-gray-500 capitalize">
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

              <h2 className="max-w-lg px-6 text-2xl leading-normal text-white hover:no-underline">
                {show.node.title}{" "}
                <span className="text-gray-500 opacity-50">
                  ({show.node.episode})
                </span>
              </h2>

              <p className="max-w-6xl px-6 pb-6 mt-3">
                {show.node.description.description}
              </p>
              <div className="relative bottom-0 left-0 right-0 flex items-center justify-between listen">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  title={show.node.title}
                  className=""
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                    show.node.soundcloudTrackId
                  )}&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
                ></iframe>
                <Img
                  alt="{item.node.title}"
                  fluid={show.node.heroImage.fluid}
                  className="absolute inset-0 m-0 opacity-50 hover:opacity-75"
                  style={{ opacity: ".5" }}
                />
              </div>
            </div>

            {show.node.podcastRelacionados && (
              <div className="grid grid-cols-1 gap-5 row-gap-5 pt-6 mb-12 sm:grid-cols-2 ">
                {show.node.podcastRelacionados.map((slider, i) => (
                  <Card card={slider} key={slider.slug} />
                ))}
              </div>
            )}

            <div className="mt-16 text-center blocks">
              <Link
                to={`/podcasts/`}
                className="px-4 py-2 my-6 font-mono text-lg text-white uppercase transition duration-150 ease-in-out bg-red-700 hover:text-red-100 hover:bg-red-800"
              >
                escuchá los últimas
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

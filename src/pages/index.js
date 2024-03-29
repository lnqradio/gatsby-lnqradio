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
import PodcastCategorias from "../components/PodcastCategoria"
import tw from "twin.macro"
import styled from "@emotion/styled"

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
        className="relative flex flex-col items-center justify-center w-full mx-auto overflow-hidden solumedia"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col w-full mt-24 text-white ">
          <div
            className="inline-block font-mono text-6xl font-bold text-center hover:text-red-300"
          >
            LNQESCECH - Temporada 08
          </div>
          <div className="relative overflow-hidden text-center solumedia">
            <iframe
              title="En vivo"
              border="0"
              frameBorder="NO"
              className="relative m-0 mx-auto bg-gray-800"
              width="350px"
              height="495px"
              scrolling="NO"
              marginheight="0px"
              marginwidth="0px"
              allowtransparency="yes"
              src="https://www.solumedia.com.ar/radios/6320/index.html"
            />
          </div>
          
        </div>
        <HomeHeroLinks className="home-hero-links">
          <PodcastCategorias />
        </HomeHeroLinks>

        <BackgroundSlider
          className="fixed inset-0 bg-gray-800 "
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

      <div className="hidden max-w-5xl m-auto mb-24 md:mt-6 lg:mt-12 last-show ">
        {data.lastShow.edges.map((show, i) => (
          <div key={show.node.slug} className="">
            <h1 className="flex justify-start p-6 pb-1 font-mono text-sm text-left text-white bg-gray-800">
              <b className="hidden mb-2 ml-0 font-sans text-xl text-left text-gray-500 capitalize">
                {show.node.publishDate}
              </b>
            </h1>
            <div className="relative w-auto px-0 pt-0 pb-0 text-left bg-gray-800">
              <Link
                to={`/episodios/`}
                className="relative right-0 block px-6 pt-2 pb-3 font-sans text-gray-400 transition-all duration-200 ease-in-out md:absolute md:pt-0 hover:text-white hover:underline"
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
                className="px-4 py-2 my-6 font-sans text-lg text-white uppercase transition duration-150 ease-in-out bg-red-700 hover:text-red-100 hover:bg-red-800"
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

const HomeHeroLinks = styled.div`
  ${tw`grid w-full max-w-6xl grid-cols-2 gap-1 py-6 md:grid-cols-4 md:pt-4`}
`

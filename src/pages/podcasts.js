import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import Img from "gatsby-image"

import "react-awesome-slider/dist/styles.css"
import {
  GiSpellBook,
  GiAstronautHelmet,
  GiPestleMortar,
  GiRomanToga,
} from "react-icons/gi"
import { MdPersonPin, MdLocalMovies } from "react-icons/md"
import { IoMdMicrophone, IoMdMusicalNotes } from "react-icons/io"

const ColumnasPage = () => {
  const data = useStaticQuery(graphql`
    query ColumnasQuery {
      contenful: allContentfulColumnas(
        sort: { order: DESC, fields: [publishDate] }
        filter: { author: {}, destacar: { eq: "Si" } }
      ) {
        edges {
          node {
            id
            title
            soundcloud {
              soundcloud
            }
            tipoDePodcast
            spotify {
              spotify
            }
            heroImage {
              fixed(width: 600, height: 300) {
                ...GatsbyContentfulFixed
              }
            }
            soundcloudTrackID
            slug
            author {
              name
            }
            publishDate(locale: "es", fromNow: true)
            description {
              description
            }
          }
        }
      }

      autores: allContentfulAutores(sort: { fields: [name], order: DESC }) {
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
    <Layout>
      <SEO title="Podcasts" />
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center w-full p-0 m-auto posts animation columnas soundcloud ">
          <div className="flex justify-center w-full py-6 bg-gray-800 home-hero-links md:py-8">
            <Link
              to={`/podcasts/musicales`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <IoMdMusicalNotes />

              <span>musicales</span>
            </Link>
            <Link
              to={`/podcasts/cine`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <MdLocalMovies />

              <span>cine</span>
            </Link>

            <Link
              to={`/podcasts/entrevistas/`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <IoMdMicrophone />
              <span>entrevistas</span>
            </Link>
            <Link
              to={`/podcasts/perfiles`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <MdPersonPin />

              <span>perfiles</span>
            </Link>
            <Link
              to={`/podcasts/historias`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <GiSpellBook />

              <span>historias</span>
            </Link>
            <Link
              to={`/podcasts/psiconautica`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <GiAstronautHelmet />

              <span>psiconáutica</span>
            </Link>
            <Link
              to={`/podcasts/politica`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <GiRomanToga />

              <span>política</span>
            </Link>
            <Link
              to={`/podcasts/intermezzo`}
              className="block font-mono text-base text-red-500 hover:text-white"
            >
              <GiPestleMortar />

              <span>intermezzo</span>
            </Link>
          </div>
          <h2
            className="block w-full p-4 font-mono text-3xl text-center text-white"
            id="destacadas"
          >
            Destacadas
          </h2>
          {data.contenful.edges.map((item, i) => (
            <div
              key={item.node.slug}
              className="relative flex-auto w-full max-w-md m-3 overflow-hidden bg-gray-800 post animated fadeIn slow"
            >
              <div className="relative z-50 h-full px-0 pt-4 mb-20 shadow">
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.name
                  )}/${kebabCase(item.node.slug)}/`}
                  className="inline-block px-6 pt-2 mb-1 font-mono text-2xl text-red-500 title hover:text-white min-h-20"
                >
                  {item.node.title}
                </Link>
                <Link
                  to={`/columnas/${kebabCase(item.node.author.name)}/`}
                  className="inline-block px-6 pb-1 mb-2 font-mono text-base text-gray-500 hover:text-white"
                >
                  x {item.node.author.name}
                </Link>

                <p className="px-6 pb-6 description">
                  {item.node.description.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-3 bg-gray-800 listen">
                  <iframe
                    width="100%"
                    height="20"
                    scrolling="no"
                    frameborder="no"
                    title={item.node.title}
                    className="w-full px-12 transform scale-125 md:px-18"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                      item.node.soundcloudTrackID
                    )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                  ></iframe>
                </div>
              </div>
              <div
                className="absolute inset-0 bg-image-hover-opacity"
                style={{ opacity: ".2" }}
              >
                <Img
                  alt="{item.node.title}"
                  fixed={item.node.heroImage.fixed}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ColumnasPage

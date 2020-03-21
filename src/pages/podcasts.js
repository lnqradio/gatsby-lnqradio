import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import { FaSpotify } from "react-icons/fa"
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
        sort: { order: ASC, fields: [title] }
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
        <div className="posts animation columnas soundcloud flex flex-wrap  w-full m-auto p-0 justify-center ">
          <div className="home-hero-links bg-gray-800 flex justify-center py-6 w-full md:py-8">
            <Link
              to={`/podcasts/musicales`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <IoMdMusicalNotes />

              <span>musicales</span>
            </Link>
            <Link
              to={`/podcasts/cine`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <MdLocalMovies />

              <span>cine</span>
            </Link>

            <Link
              to={`/podcasts/entrevistas/`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <IoMdMicrophone />
              <span>entrevistas</span>
            </Link>
            <Link
              to={`/podcasts/perfiles`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <MdPersonPin />

              <span>perfiles</span>
            </Link>
            <Link
              to={`/podcasts/historias`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <GiSpellBook />

              <span>historias</span>
            </Link>
            <Link
              to={`/podcasts/psiconautica`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <GiAstronautHelmet />

              <span>psiconáutica</span>
            </Link>
            <Link
              to={`/podcasts/politica`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <GiRomanToga />

              <span>política</span>
            </Link>
            <Link
              to={`/podcasts/intermezzo`}
              className="text-base block text-red-500 hover:text-white font-mono"
            >
              <GiPestleMortar />

              <span>intermezzo</span>
            </Link>
          </div>
          <h2 className="text-white block w-full p-4 text-3xl font-mono text-center">
            Destacadas
          </h2>
          {data.contenful.edges.map((item, i) => (
            <div
              key={item.node.slug}
              className="post border-red-500 border-t-4 animated fadeIn relative slow max-w-md w-full m-3 flex-auto"
            >
              <div className="px-0 pt-4 shadow bg-gray-800 mb-20 h-full">
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.name
                  )}/${kebabCase(item.node.slug)}/`}
                  className="title block px-6 pt-2 text-red-500 mb-1 text-2xl font-mono hover:text-white min-h-20"
                >
                  {item.node.title}
                </Link>
                <Link
                  to={`/columnas/${kebabCase(item.node.author.name)}/`}
                  className="block px-6 pb-1 text-gray-500 hover:text-white font-mono text-base"
                >
                  x {item.node.author.name}
                </Link>
                <p className="title px-6 pb-6">
                  {item.node.description.description}
                  <time className="text-sm block pt-2 text-gray-500 italic hidden">
                    {item.node.publishDate}
                  </time>
                </p>
                <div className="listen flex justify-between items-center bg-gray-900 absolute bottom-0 left-0 right-0">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.name
                    )}/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <h2 className="hover:text-white font-mono text-xl px-6 text-red-500 font-mono">
                      Escuchar columna
                    </h2>
                  </Link>

                  <a
                    href={`${item.node.spotify.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" block text-2xl hover:text-white  hover:bg-green-700 p-6"
                  >
                    <FaSpotify className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ColumnasPage

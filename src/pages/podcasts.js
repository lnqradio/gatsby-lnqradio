import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import { FaSpotify } from "react-icons/fa"
import "react-awesome-slider/dist/styles.css"
import { GiSpellBook } from "react-icons/gi"
import { MdPersonPin, MdLocalMovies } from "react-icons/md"
import { IoMdMicrophone, IoMdMusicalNotes } from "react-icons/io"

const ColumnasPage = () => {
  const data = useStaticQuery(graphql`
    query ColumnasQuery {
      contenful: allContentfulColumnas(
        sort: { order: DESC, fields: [publishDate] }
        limit: 12
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
      destacados: allContentfulDestacados(
        sort: { fields: [createdAt], order: DESC }
        filter: { slider: { eq: "Hero" } }
      ) {
        edges {
          node {
            homePage {
              id
              title
              slug
              heroImage {
                fixed(width: 400, height: 200) {
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
          <div className="home-hero-links bg-gray-800 flex justify-around py-6 w-full">
            <Link
              to={`/podcasts/musicales`}
              className="text-base block text-red-500 hover:text-white font-mono my-3"
              data-tip="Podcasts de Musicales"
            >
              <IoMdMusicalNotes />

              <span>musicales</span>
            </Link>
            <Link
              to={`/podcasts/cine`}
              data-tip="Podcasts de Cine"
              className="text-base block text-red-500 hover:text-white font-mono my-3"
            >
              <MdLocalMovies />

              <span>cine</span>
            </Link>

            <Link
              to={`/podcasts/entrevistas/`}
              className="text-base block text-red-500 hover:text-white font-mono my-3"
              data-tip="Podcasts de Entrevistas"
            >
              <IoMdMicrophone />
              <span>entrevistas</span>
            </Link>
            <Link
              to={`/podcasts/perfiles`}
              data-tip="Podcasts de Perfiles"
              className="text-base block text-red-500 hover:text-white font-mono my-3"
            >
              <MdPersonPin />

              <span>perfiles</span>
            </Link>
            <Link
              to={`/podcasts/historias`}
              data-tip="Podcasts de Historias"
              className="text-base block text-red-500 hover:text-white font-mono my-3"
            >
              <GiSpellBook />

              <span>historias</span>
            </Link>
          </div>
          <h2 className="text-white block w-full p-4 text-3xl font-mono text-center">
            Últimas actualizaciones
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
                  <time className="text-sm block pt-2 text-gray-500 italic">
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

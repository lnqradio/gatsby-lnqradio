import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FaSpotify } from "react-icons/fa"
import ReactTooltip from "react-tooltip"
import Img from "gatsby-image"

const CarlinPage = () => {
  const data = useStaticQuery(graphql`
    query CarlinQuery {
      contenful: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "Carlín" } } }
      ) {
        edges {
          node {
            id
            title
            slug
            spotify {
              spotify
            }
            soundcloud {
              soundcloud
            }
            author {
              name
              slug
            }
            description {
              description
            }
          }
        }
      }
      allContentfulAutores(filter: { name: { eq: "Carlín" } }) {
        edges {
          node {
            id
            imagen {
              fluid(maxWidth: 1200, maxHeight: 1000) {
                ...GatsbyContentfulFluid
              }
            }
            allTracksPlayer {
              allTracksPlayer
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
      <SEO title="Carlín" />
      <div className="flex flex-col md:flex-row">
        <div className="hero bg-gray-800 p-6 md:p-0 xl:sticky inset-x-0 top-0 z-50 mb-0 w-full md:w-48 hidden md:block">
          <div className="authors flex justify-center md:pt-6 flex-wrap md:justify-start md:px-0 md:sticky md:top-0 m-auto max-w-4xl ">
            <h4 className="px-3 hidden md:inline-block md:pb-3 pt-3 text-white ">
              <Link to={`/columnas/`} className="hover:text-gray-200">
                Columnas
              </Link>
            </h4>
            {data.autores.edges.map((item, i) => (
              <Link
                to={`/columnas/${kebabCase(item.node.name)}/`}
                activeClassName="active"
                className="hover:text-white py-3 md:py-2 md:px-3 md:w-full px-4 text-red-500 text-sm font-mono min-w-xm"
              >
                {item.node.name}
              </Link>
            ))}
          </div>
        </div>

        <section className="flex flex-col justify-center  w-full ">
          <div className="flex-col items-center md:flex-row flex w-full md:w-2/3 max-w-6xl p-8 m-auto bg-gray-900 md:my-12">
            {data.allContentfulAutores.edges.map((image, i) => (
              <div className="w-full md:w-56">
                <Img
                  alt=""
                  fluid={image.node.imagen.fluid}
                  className="mb-6 w-full"
                />
              </div>
            ))}
            <div className="text-3xl text-left px-3 pl-10 text-white m-0 w-full">
              <h1 className="text-white pb-3 mb-2 border-b">Carlín</h1>
              <AnchorLink
                href={`#author-player`}
                className="text-base block text-red-500 hover:text-white font-mono my-3"
              >
                <i className="text-xl fa fa-soundcloud" aria-hidden="true"></i>
                <span className="pl-3 pt-0">Escuchar Playlist</span>
              </AnchorLink>
              <a
                href="https://open.spotify.com/search/lnqradio%20carl%C3%ADn/episodes"
                target="_blank"
                className=" flex items-center text-base hover:text-white p-2 pl-0 font-mono text-green-700"
              >
                <FaSpotify className=" text-xl" />
                <span className="pl-3 pt-0">Reproducir en Spotify</span>
              </a>
            </div>
          </div>
          <div className="posts soundcloud flex flex-wrap w-full md:w-2/3 max-w-6xl px-6 m-auto">
            {data.contenful.edges.map((item, i) => (
              <div className="post px-0 pt-4 shadow bg-gray-800 mb-12 w-full">
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.slug
                  )}/${kebabCase(item.node.slug)}/`}
                  className="title "
                >
                  <h2 className="title px-6 pt-6 text-red-500 mb-3 text-2xl font-mono hover:text-white mr-32 font-mono">
                    {item.node.title}
                  </h2>
                </Link>
                <p className="title px-6 pb-6">
                  {item.node.description.description}
                </p>
                <div className="listen flex justify-between items-center bg-gray-900">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.slug
                    )}/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <h2 className="hover:text-white font-mono text-xl px-6 text-red-500 font-mono">
                      Escuchar columna
                    </h2>
                  </Link>
                  <ReactTooltip
                    place="bottom"
                    type="dark"
                    effect="solid"
                    className="shadow bg-red-500"
                  />
                  <a
                    href={`${item.node.spotify.spotify}`}
                    target="_blank"
                    data-tip="¿Te vas a Spotify?"
                    className=" block text-2xl hover:text-white  hover:bg-green-700 p-6"
                  >
                    <FaSpotify className="text-green-100" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <aside
            id="author-player"
            className="w-full  px-6 max-w-2xl min-h-64 relative md:sticky m-auto pt-6"
          >
            {data.allContentfulAutores.edges.map((item, i) => (
              <div className="post mb-12 w-full">
                <h2 className="text-center text-white text-2xl my-6">
                  Colecciones
                </h2>
                <div
                  className="soundcloud-player"
                  dangerouslySetInnerHTML={{
                    __html: item.node.allTracksPlayer.allTracksPlayer,
                  }}
                />
              </div>
            ))}
          </aside>
        </section>
      </div>
    </Layout>
  )
}

export default CarlinPage

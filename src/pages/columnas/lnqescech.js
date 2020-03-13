import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import Img from "gatsby-image"
const LnqescechPage = () => {
  const data = useStaticQuery(graphql`
    query LnqescechQuery {
      contenful: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "lnqescech" } } }
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
      allContentfulAutores(filter: { name: { eq: "lnqescech" } }) {
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
    <Layout>
      <SEO title="La Noche que Ella soño con el Centro Half" />
      <div className="flex flex-col md:flex-row">
        <div className="inset-x-0 top-0 z-50 hidden w-full p-6 mb-0 bg-gray-800 hero md:p-0 xl:sticky md:w-48 md:block">
          <div className="flex flex-wrap justify-center max-w-4xl m-auto authors md:pt-6 md:justify-start md:px-0 md:sticky md:top-0 ">
            <h4 className="hidden px-3 pt-3 text-white md:inline-block md:pb-3">
              Autores
            </h4>
            {data.autores.edges.map((item, i) => (
              <Link
                to={`/columnas/${kebabCase(item.node.name)}/`}
                activeClassName="active"
                className="px-4 py-3 font-mono text-sm text-red-500 hover:text-white md:py-2 md:px-3 md:w-full min-w-xm"
              >
                {item.node.name}
              </Link>
            ))}
          </div>
        </div>

        <section className="flex flex-col justify-center w-full">
          <div className="flex flex-col items-center w-full max-w-6xl p-8 m-auto bg-gray-900 md:flex-row md:w-2/3 md:my-12">
            {data.allContentfulAutores.edges.map((image, i) => (
              <div className="w-full md:w-56">
                <Img
                  alt=""
                  fluid={image.node.imagen.fluid}
                  className="w-full mb-6"
                />
              </div>
            ))}
            <div className="w-full px-3 pl-10 m-0 text-3xl text-left text-white">
              <h1 className="pb-3 mb-2 font-mono text-white border-b">
                La Noche que Ella soño con el Centro Half
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap w-full max-w-6xl px-6 m-auto posts soundcloud md:w-2/3">
            {data.contenful.edges.map((item, i) => (
              <div className="w-full px-0 pt-4 mb-12 bg-gray-800 shadow post">
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.slug
                  )}/${kebabCase(item.node.slug)}/`}
                  className="title "
                >
                  <h2 className="px-6 pt-6 mb-3 mr-32 font-mono text-2xl text-red-500 title hover:text-white">
                    {item.node.title}
                  </h2>
                </Link>
                <p className="px-6 pb-6 title">
                  {item.node.description.description}
                </p>
                <div className="flex items-center justify-between bg-gray-900 listen">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.slug
                    )}/${kebabCase(item.node.slug)}/`}
                    className="w-full title "
                  >
                    <h2 className="px-6 font-mono text-xl text-red-500 hover:text-white">
                      Escuchar columna
                    </h2>
                  </Link>

                  <a
                    href={`${item.node.spotify.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip="¿Te vas para Spotify?"
                    className="block p-6 text-2xl hover:text-white hover:bg-green-700"
                  >
                    <FaSpotify className="text-white" />
                  </a>

                  <a
                    href={`${item.node.soundcloud.soundcloud}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip="Escuchár en Soundcloud"
                    className="block p-6 text-2xl hover:text-white hover:bg-orange-700"
                  >
                    <FaSoundcloud className="text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default LnqescechPage

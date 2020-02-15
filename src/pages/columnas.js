import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import { FaSpotify } from "react-icons/fa"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import Img from "gatsby-image"

const ColumnasPage = () => {
  const data = useStaticQuery(graphql`
    query ColumnasQuery {
      contenful: allContentfulColumnas(
        sort: { order: DESC, fields: [updatedAt] }
        skip: 3
        limit: 12
      ) {
        edges {
          node {
            id
            title
            soundcloud {
              soundcloud
            }
            spotify {
              spotify
            }
            slug
            author {
              name
            }
            description {
              description
            }
          }
        }
      }
      destacados: allContentfulDestacados(
        sort: { fields: [createdAt], order: DESC }
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
      <SEO title="Columnas" />
      <div className="flex flex-col-reverse md:flex-row">
        <div className=" bg-gray-800 p-6 md:p-0 xl:sticky inset-x-0 top-0 z-50 mb-0 w-full md:w-56 border-r border-red-600 hover:border-red-800 duration-500 transition-all">
          <div className="authors flex justify-center md:pt-6 flex-wrap md:justify-start md:px-0 md:sticky md:top-0 m-auto max-w-4xl">
            <h4 className="px-3 hidden md:inline-block md:pb-3 pt-3 text-white">
              <Link className="hover:text-white" to={`/entrevistas/`}>
                Entrevistas
              </Link>
            </h4>
            <h4 className="px-3 hidden md:inline-block md:pb-3 pt-3 text-white">
              Columnas
            </h4>
            {data.autores.edges.map((item, i) => (
              <Link
                to={`/columnas/${kebabCase(item.node.name)}/`}
                className="hover:text-white py-3 md:py-2 md:px-3 md:w-full px-4 text-red-500 text-sm font-mono min-w-xm"
              >
                {item.node.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="posts animation columnas soundcloud flex flex-wrap  w-full m-auto p-0 justify-center ">
          {data.destacados.edges.map((item, i) => (
            <AwesomeSlider className=" mb-12" style={{ maxHeight: "50vh" }}>
              {item.node.homePage.map((slider, i) => (
                <div key={slider.slug} className="post max-w-4xl pt-6">
                  <div className="slider-item p-6 flex text-center bg-gray-800">
                    <Img
                      alt=""
                      fixed={slider.heroImage.fixed}
                      className="mb-6 max-w-lg mr-3 mt-2"
                    />
                    <div className="description text-left pl-3 max-w-sm">
                      <Link
                        to={`/columnas/${kebabCase(slider.author.name)}/`}
                        className="block mb-3 text-gray-500 hover:text-white font-mono"
                      >
                        Columna x {slider.author.name}
                      </Link>
                      <h2 className="title text-white text-2xl">
                        {slider.title}
                      </h2>
                      <p className="mt-3 max-w-xl">
                        {slider.description.description}
                      </p>
                      <div className="actions my-6">
                        <Link
                          to={`/columnas/${kebabCase(
                            slider.author.name
                          )}/${kebabCase(slider.slug)}`}
                          className="btn scale-0 hover:scale-95 text-lg hover:text-white text-red-600 transition duration-500 ease-in-out font-bold font-mono transform hover:scale-110"
                          style={{ marginLeft: "0" }}
                        >
                          Escuchar columna
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </AwesomeSlider>
          ))}
          <h2 className="text-white block w-full p-4 text-3xl font-mono text-center">
            Últimas
          </h2>
          {data.contenful.edges.map((item, i) => (
            <div
              key={item.node.id}
              className="post border-red-500 border-t-4 animated fadeInUp slow max-w-md w-full m-3 flex-auto"
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
                    <FaSpotify className="text-green-100" />
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

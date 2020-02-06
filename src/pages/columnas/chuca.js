import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"

const ChucaPage = () => {
  const data = useStaticQuery(graphql`
    query ChucaQuery {
      contenful: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "Chuca" } } }
      ) {
        edges {
          node {
            id
            title
            slug
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
      allContentfulAutores(filter: { name: { eq: "Chuca" } }) {
        edges {
          node {
            id
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
      <SEO title="Chuca" />
      <div className="flex flex-col md:flex-row">
        <div className="hero bg-gray-800 p-6 md:p-0 xl:sticky inset-x-0 top-0 z-50 mb-0 w-full md:w-48 hidden md:block">
          <div className="authors flex justify-center md:pt-6 flex-wrap md:justify-start md:px-0 md:sticky md:top-0 m-auto max-w-4xl ">
            <h4 className="px-3 hidden md:inline-block md:pb-3 pt-3 text-white">
              Columnas
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

        <section className="flex flex-col justify-center w-full">
          <div className="hero bg-orange-900  h-64 flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center px-3 text-white m-0 w-full font-mono">
              Chuca
            </h1>
            <AnchorLink
              href={`#author-player`}
              className="text-base text-red-500 hover:text-white  font-mono my-3"
            >
              Playlist listo para escuchar
            </AnchorLink>
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
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.slug
                  )}/${kebabCase(item.node.slug)}/`}
                  className="title "
                >
                  <h2 className="hover:text-white font-mono text-xl mb-6 px-6 text-red-500 font-mono">
                    Escuchar columna
                  </h2>
                </Link>
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

export default ChucaPage

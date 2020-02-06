import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ExpasantePage = () => {
  const data = useStaticQuery(graphql`
    query ExpasanteQuery {
      contenful: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "Ex-Pasante" } } }
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
      <SEO title="Ex-Pasante" />
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
              Ex-Pasante
            </h1>
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
        </section>
      </div>
    </Layout>
  )
}

export default ExpasantePage

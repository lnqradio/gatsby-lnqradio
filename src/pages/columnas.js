import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"

const ColumnasPage = () => {
  const data = useStaticQuery(graphql`
    query ColumnasQuery {
      contenful: allContentfulColumnas(sort: { fields: [title], order: DESC }) {
        edges {
          node {
            id
            title
            soundcloud {
              soundcloud
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
      <div className="flex flex-col md:flex-row">
        <div className="hero bg-gray-800 p-6 md:p-0 xl:sticky inset-x-0 top-0 z-50 mb-0 w-full md:w-48">
          <div className="authors flex justify-center md:pt-6 flex-wrap md:justify-start md:px-0 md:sticky md:top-0 m-auto max-w-4xl ">
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
        <div className="posts columnas soundcloud flex flex-wrap  w-full m-auto p-4 justify-center">
          <h2 className="text-white block w-full p-4 text-3xl font-mono text-center">
            Destacadas
          </h2>
          {data.contenful.edges.map((item, i) => (
            <div
              key={item.node.id}
              className="post border-red-500 border-t-4 animated fadeIn slow max-w-md w-full m-3 flex-auto"
            >
              <div className="px-0 pt-4 shadow bg-gray-800 mb-12 h-full">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ColumnasPage

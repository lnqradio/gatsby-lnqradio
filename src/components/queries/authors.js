import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

const QueryCategoriesComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryCategoriesQuery {
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
    <>
      {data.autores.edges.map(({ node }) => {
        return (
          <Link
            key={node.slug}
            to={`/columnas/${kebabCase(node.name)}/`}
            activeClassName="active"
            className="px-4 py-3 font-mono text-sm text-center text-red-500 hover:text-white md:py-2 md:px-3 md:w-full min-w-xm"
          >
            {node.name}
          </Link>
        )
      })}
    </>
  )
}

export default QueryCategoriesComponent

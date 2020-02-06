import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import AnchorLink from "react-anchor-link-smooth-scroll"

const AutoresPage = () => {
  const data = useStaticQuery(graphql`
    query AutoresQuery {
      contenful: allContentfulAutores(
        sort: { fields: [createdAt], order: ASC }
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
      <SEO title="Columnas" />
      <div className="hero bg-gray-800 p-6 xl:sticky inset-x-0 top-0 z-50 mb-0">
        <div className="authors flex flex-wrap justify-start md:px-12 m-auto max-w-4xl ">
          {data.contenful.edges.map((item, i) => (
            <AnchorLink
              key={item.node.id}
              href={`#${item.node.name}`}
              className="hover:text-white py-3 pl-0 text-red-500 font-mono min-w-xm"
            >
              {item.node.name}
            </AnchorLink>
          ))}
        </div>
      </div>

      <div className="posts authors flex flex-wrap justify-center  pt-6">
        {data.contenful.edges.map((item, i) => (
          <div
            key={item.node.id}
            className="post max-w-5xl w-full shadow-md m-6 border-gray-500 pt-6 pb-6 min-h-screen mt-0"
            id={item.node.name}
          >
            <div className="p-0 relative">
              <AwesomeSlider className="mb-12 ">
                {item.node.columnas.map((columnas, i) => (
                  <div className="pt-6 h-full flex  flex-col items-center justify-center">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: columnas.soundcloud.soundcloud,
                      }}
                    />
                    <h2 className="title text-white text-xl my-6 text-center">
                      {columnas.title}
                    </h2>
                    <div className="heading z-10 mb-5 md:m-0 text-center pt-10">
                      <Link
                        to={`/columnas/${kebabCase(item.node.name)}/`}
                        className="hover:text-red-500 text-gray-100 font-mono text-base pt-5"
                      >
                        Escuchá las columnas de {item.node.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </AwesomeSlider>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default AutoresPage

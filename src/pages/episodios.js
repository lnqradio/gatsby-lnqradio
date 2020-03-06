import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"

const EpisodiosPage = () => {
  const data = useStaticQuery(graphql`
    query EpisodiosQuery {
      contenful: allContentfulProgramas(
        sort: { fields: [episode], order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            soundcloud {
              soundcloud
            }
            episode
            description {
              description
            }
            publishDate(formatString: "MMMM Do, YYYY", locale: "es")
            heroImage {
              fluid(maxWidth: 1200, maxHeight: 1000) {
                ...GatsbyContentfulFluid
              }
            }
            body {
              body
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Episodios" />
      <div className="z-10 flex items-center justify-center h-24 px-6 m-0 mb-6 bg-gray-900 md:sticky md:top-0 hero">
        <h1 className="text-xl text-center text-white ">
          Listado de episodios completos
        </h1>
      </div>
      <div className="flex flex-wrap max-w-3xl m-auto posts">
        {data.contenful.edges.map((item, i) => (
          <div
            key={item.node.id}
            className="w-full mb-6 bg-gray-800 border-t-4 border-red-500 post"
          >
            <div className="p-0 shadow-lg">
              <div className="flex flex-col-reverse heading md:flex-row md:p-6">
                <div className>
                  <Link
                    to={`/episodios/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <b className="block w-40 px-5 pb-5 mb-2 font-mono text-left text-indigo-300">
                      Episodio {item.node.episode}
                    </b>
                  </Link>
                </div>
                <div className="w-full content md:pl-3 md:flex-1">
                  <Link
                    to={`/episodios/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <h2 className="px-5 mb-3 text-xl text-red-500 hover:text-white">
                      {item.node.title}{" "}
                      <b className="inline-block pt-2 mb-2 font-mono text-sm text-left text-gray-500 capitalize">
                        / {item.node.publishDate}
                      </b>
                    </h2>
                  </Link>

                  <p className="px-5 pb-3 mb-3 text-base title">
                    {item.node.description.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default EpisodiosPage

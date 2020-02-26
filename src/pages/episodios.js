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
      <div className="h-24 md:sticky md:top-0 bg-gray-900 flex items-center justify-center z-10 hero px-6 m-0 mb-6">
        <h1 className="  text-xl text-white  text-center ">
          Listado de episodios completos
        </h1>
      </div>
      <div className="posts flex flex-wrap max-w-3xl m-auto">
        {data.contenful.edges.map((item, i) => (
          <div
            key={item.node.id}
            class="post mb-6 w-full bg-gray-800 border-red-500 border-t-4"
          >
            <div className="p-0 shadow-lg">
              <div className="heading flex flex-col-reverse md:flex-row md:p-6">
                <div className>
                  <Link
                    to={`/episodios/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <b className="text-indigo-300 font-mono block mb-2 w-40 px-5 text-left pb-5">
                      Episodio {item.node.episode}
                    </b>
                  </Link>
                </div>
                <div className="content md:pl-3 w-full md:flex-1">
                  <Link
                    to={`/episodios/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <h2 className="text-red-500 text-xl mb-3 hover:text-white px-5">
                      {item.node.title}{" "}
                      <b className="text-gray-500 font-mono text-sm pt-2 mb-2  text-left capitalize inline-block">
                        / {item.node.publishDate}
                      </b>
                    </h2>
                  </Link>

                  <p className="title text-base mb-3  pb-3 px-5">
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

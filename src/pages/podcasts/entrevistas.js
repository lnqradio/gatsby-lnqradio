import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaSpotify } from "react-icons/fa"
import { IoMdMicrophone } from "react-icons/io"

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query Entrevistas2Query {
      collection: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Entrevistas" } }
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
    }
  `)

  return (
    <Layout>
      <SEO title="Entrevistas" />
      <div className="z-10 flex items-center justify-center h-64 px-6 m-0 mb-2 bg-gray-900 md:sticky md:top-0 hero">
        <h1 className="flex flex-col items-center justify-center text-xl text-center text-white ">
          <IoMdMicrophone className="text-6xl" />
          <span className="block pt-3 font-mono text-2xl">Entrevistas</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center w-full m-auto posts animation ">
        {data.collection.edges.map((item, i) => (
          <div
            key={item.node.id}
            className="relative flex-auto w-full max-w-md m-3 border-t-4 border-red-500 post animated fadeIn slow"
          >
            <div className="h-full px-0 pt-4 mb-20 bg-gray-800 shadow">
              <Link
                to={`/columnas/${kebabCase(item.node.author.name)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="block px-6 pt-2 mb-1 font-mono text-2xl text-red-500 title hover:text-white min-h-20"
              >
                {item.node.title}
              </Link>

              <span className="px-6">{item.node.tipoDePodcast}</span>
              <p className="px-6 pb-6 title">
                {item.node.description.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gray-900 listen">
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.name
                  )}/${kebabCase(item.node.slug)}/`}
                  className="title "
                >
                  <h2 className="px-6 font-mono text-xl text-red-500 hover:text-white">
                    Escuchar podcast
                  </h2>
                </Link>

                <a
                  href={`${item.node.spotify.spotify}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 text-2xl  hover:text-white hover:bg-green-700"
                >
                  <FaSpotify className="text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PodcastPage

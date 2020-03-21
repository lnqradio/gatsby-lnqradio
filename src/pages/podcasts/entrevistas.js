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
        sort: { fields: [destacar], order: ASC }
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
            destacar
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
            {item.node.destacar ? (
              <div className="px-0 pt-4 shadow bg-gray-900 mb-20 h-full">
                <Link
                  to={`/columnas/${kebabCase(
                    item.node.author.name
                  )}/${kebabCase(item.node.slug)}/`}
                  className="title block px-6 pt-2 text-red-300 mb-1 text-2xl font-mono hover:text-white min-h-20"
                >
                  {item.node.title}
                </Link>
                <Link
                  to={`/columnas/${kebabCase(item.node.author.name)}/`}
                  className="block px-6 pb-1 text-red-300 hover:text-white font-mono text-base"
                >
                  x {item.node.author.name}
                  <p className="title ml-1 sm:ml-6 px-2  bg-red-400 rounded-full inline-block text-white uppercase font-serif font-bold text-xs">
                    contenido destacado
                  </p>
                </Link>

                <p className="title px-6 pb-6 text-gray-400">
                  {item.node.description.description}
                </p>
                <div className="listen flex justify-between items-center bg-gray-900 absolute bottom-0 left-0 right-0">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.name
                    )}/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <h2 className="hover:underline font-mono text-xl px-6 text-red-100 font-mono">
                      Escuchar podcast
                    </h2>
                  </Link>

                  <a
                    href={`${item.node.spotify.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" block text-2xl hover:text-white  hover:bg-green-700 p-6"
                  >
                    <FaSpotify className="text-white" />
                  </a>
                </div>
              </div>
            ) : (
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
                      Escuchar podcast
                    </h2>
                  </Link>

                  <a
                    href={`${item.node.spotify.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" block text-2xl hover:text-white  hover:bg-green-700 p-6"
                  >
                    <FaSpotify className="text-white" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PodcastPage

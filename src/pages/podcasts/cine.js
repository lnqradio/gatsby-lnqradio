import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FaSpotify } from "react-icons/fa"
import ReactTooltip from "react-tooltip"
import Img from "gatsby-image"

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query CineQuery {
      collection: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Cine" } }
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
      <SEO title="Cine" />

      <div className="h-64 md:sticky md:top-0 bg-gray-900 flex items-center justify-center hero z-10 px-6 m-0 mb-2">
        <h1 className="  text-xl text-white  text-center ">
          <span className="text-red-500">Podcasts:</span> Cine
        </h1>
      </div>
      <div className="posts animation flex flex-wrap w-full m-auto justify-center ">
        {data.collection.edges.map((item, i) => (
          <div
            key={item.node.id}
            className="post border-red-500 border-t-4 animated fadeInUp slow max-w-md w-full m-3 flex-auto"
          >
            <div className="px-0 pt-4 shadow bg-gray-800 mb-20 h-full">
              <Link
                to={`/columnas/${kebabCase(item.node.author.name)}/${kebabCase(
                  item.node.slug
                )}/`}
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
              <span className="px-6">{item.node.tipoDePodcast}</span>
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
                  <FaSpotify className="text-green-100" />
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

import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import get from "lodash/get"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"
import "./columna.css"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="my-3 text-lg">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: embedded => (
      <div dangerouslySetInnerHTML={{ __html: embedded }} />
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      }
      return (
        <img
          className="w-full"
          src={node.data.target.fields.file["es-AR"].url}
        />
      )
    },

    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

class ColumnaTemplate extends React.Component {
  render() {
    const columna = get(this.props, "data.contentfulColumnas")
    const columnas = get(this.props, "data.allContentfulColumnas")
    const url = typeof window !== "undefined" ? window.location.href : ""
    return (
      <Layout>
        <SEO
          title={`${columna.title} x ${columna.author.name}`}
          description={columna.description.description}
        />
        <Helmet
          meta={[
            {
              property: `og:image`,
              content: `https:${columna.heroImage.file.url}`,
            },
            {
              name: `twitter:image`,
              content: `https:${columna.heroImage.file.url}`,
            },
            {
              property: `og:url`,
              content: url,
            },
          ]}
        />

        <div className="flex flex-col flex-wrap px-2 pt-0 m-auto posts soundcloud">
          <div className="flex flex-col w-full pt-0 m-auto mb-12 shadow post">
            {columna.destacar ? (
              <div
                class="bg-gray-900 border-t-4 border-gray-800 font-mono rounded-b text-red-00 px-4 py-3 shadow-md"
                role="alert"
              >
                <div class="flex justify-center">
                  <p class="font-bold">Contenido destacado</p>
                </div>
              </div>
            ) : (
              <span className="hidden"></span>
            )}
            <div className="w-full bg-indigo-900 post-hero bg-pattern">
              <div
                className="w-full max-w-2xl m-auto mt-0 text-lg md:mt-6 columna-article animated fadeIn delay-1s slower "
                dangerouslySetInnerHTML={{
                  __html: columna.soundcloudPlayer.soundcloudPlayer,
                }}
              />

              <div className="flex flex-col items-center justify-between w-full max-w-2xl m-auto mb-6 text-3xl md:flex-row listen">
                <a
                  href={`${columna.spotify.spotify}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-5 m-0 text-lg bg-gray-800 rounded-sm md:mt-3 md:mr-2 hover:text-white hover:bg-green-800"
                >
                  <h2 className="flex items-center font-mono text-base font-bold text-white ">
                    <FaSpotify className="w-6 h-6 mr-3 text-white" />
                    <span className="w-full">Player Spotify</span>
                    <GoLinkExternal className="ml-3 text-base text-white" />
                  </h2>
                </a>
                <a
                  href={`${columna.soundcloud.soundcloud}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-5 text-lg bg-gray-800 rounded-sm md:mt-3 md:ml-2 hover:text-white hover:bg-orange-800"
                >
                  <h2 className="flex items-center font-mono text-base font-bold text-white ">
                    <FaSoundcloud className="w-6 h-6 mr-3 text-orange-100" />
                    <span className="w-full">Player Soundcloud</span>
                    <GoLinkExternal className="ml-3 text-base text-orange-100" />
                  </h2>
                </a>
              </div>
            </div>
            <h1 className="w-full max-w-2xl m-auto mt-6 font-mono text-3xl text-left text-white ">
              {columna.title}
              <Link
                to={`/columnas/${kebabCase(columna.author.slug)}/`}
                className="pl-3 mt-1 font-mono text-sm text-left text-gray-500 "
              >
                x {columna.author.name}
              </Link>
            </h1>

            <div className="w-full max-w-2xl m-auto mt-2 text-white article">
              {documentToReactComponents(
                columna.childContentfulColumnasContenidoRichTextNode.json,
                options
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full m-auto posts animation ">
            <h1 className="block w-full mb-3 text-3xl text-center text-white">
              Destacadas
            </h1>
            {columnas.edges.map((item, i) => (
              <div
                key={item.node.id}
                className="relative flex-auto w-full max-w-md m-3 border-t-4 border-red-500 post animated fadeIn slow"
              >
                <div className="h-full px-0 pt-4 mb-20 bg-gray-800 shadow">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.name
                    )}/${kebabCase(item.node.slug)}/`}
                    className="block px-6 pt-2 mb-1 font-mono text-2xl text-red-500 title hover:text-white min-h-20"
                  >
                    {item.node.title}
                  </Link>
                  <Link
                    to={`/columnas/${kebabCase(item.node.author.name)}/`}
                    className="block px-6 pb-1 font-mono text-base text-gray-500 hover:text-white"
                  >
                    x {item.node.author.name}
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
                      className="block p-6 text-2xl hover:text-white hover:bg-green-700"
                    >
                      <FaSpotify className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default ColumnaTemplate

export const pageQuery = graphql`
  query ColumnaBySlug($slug: String!) {
    contentfulColumnas(slug: { eq: $slug }) {
      slug
      title
      createdAt
      author {
        slug
        name
      }
      destacar
      spotify {
        spotify
      }
      publishDate(locale: "es", fromNow: true)

      heroImage {
        fluid(maxWidth: 1600, maxHeight: 500) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
      childContentfulColumnasContenidoRichTextNode {
        json
      }
      description {
        description
      }
      soundcloudPlayer {
        soundcloudPlayer
      }

      soundcloud {
        soundcloud
      }
    }
    allContentfulColumnas(
      sort: { order: DESC, fields: [updatedAt] }
      filter: { author: {}, destacar: { eq: "Si" } }
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
`

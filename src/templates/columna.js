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
import Img from "gatsby-image"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="my-3 text-lg">{children}</p>
const website_url = "https://www.lnqradio.com"
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
          alt={node.data.target.fields.title["es-AR"]}
          src={node.data.target.fields.file["es-AR"].url}
        />
      )
    },
    [INLINES.HYPERLINK]: node => {
      return (
        <a
          href={node.data.uri}
          className="font-bold border-b border-red-500 hover:bg-red-700 hover:text-white"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
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
            <div className="w-full bg-indigo-900 post-hero bg-pattern">
              <div className="w-full max-w-2xl m-auto mt-0 text-lg md:mt-6 columna-article animated fadeIn delay-1s slower ">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameborder="no"
                  title={columna.title}
                  className=""
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                    columna.soundcloudTrackID
                  )}&color=%23281136&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
                ></iframe>
              </div>
              <div className="flex flex-col items-center justify-between w-full max-w-2xl m-auto mb-6 text-3xl md:flex-row listen">
                <a
                  href={`${columna.spotify.spotify}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-5 m-0 text-lg bg-gray-800 rounded-sm md:mt-3 md:mr-2 hover:text-white hover:bg-green-800"
                >
                  <h2 className="flex items-center font-mono text-base font-bold text-white ">
                    <FaSpotify className="w-6 h-6 mr-3 text-white" />
                    <span className="w-full">Reproducir en Spotify</span>
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
                    <span className="w-full">Reproducir en Soundcloud</span>
                    <GoLinkExternal className="ml-3 text-base text-orange-100" />
                  </h2>
                </a>
              </div>
            </div>

            <h1 className="w-full max-w-2xl m-auto mt-6 font-mono text-3xl text-left text-white ">
              {columna.title}

              {columna.destacar ? (
                <Link
                  to={`/podcasts/`}
                  class="pl-3 mt-1 font-mono text-sm text-left text-gray-500 font-bold "
                >
                  Contenido destacado
                </Link>
              ) : (
                <Link
                  to={`/columnas/${kebabCase(columna.author.slug)}/`}
                  className="pl-3 mt-1 font-mono text-sm text-left text-gray-500 "
                >
                  x {columna.author.name}
                </Link>
              )}
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
                className="relative flex-auto w-full max-w-md m-3 overflow-hidden bg-gray-800 post animated fadeIn slow"
              >
                <div className="relative z-50 h-full px-0 pt-4 mb-20 shadow">
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
                    className="block px-6 pb-1 mb-2 font-mono text-base text-gray-500 hover:text-white"
                  >
                    x {item.node.author.name}
                  </Link>
                  <p className="px-6">{item.node.description.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-3 bg-gray-800 listen">
                    <iframe
                      width="100%"
                      height="20"
                      scrolling="no"
                      frameborder="no"
                      title={item.node.title}
                      className="w-full px-8 transform scale-125 sm:px-12"
                      allow="autoplay"
                      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                        item.node.soundcloudTrackID
                      )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                    ></iframe>
                  </div>
                </div>
                <div
                  className="absolute inset-0 bg-image-hover-opacity"
                  style={{ opacity: ".05" }}
                >
                  <Img
                    alt="{item.node.title}"
                    fixed={item.node.heroImage.fixed}
                  />
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
      soundcloudTrackID

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
          heroImage {
            fixed(width: 600, height: 300) {
              ...GatsbyContentfulFixed
            }
          }
          soundcloudTrackID
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

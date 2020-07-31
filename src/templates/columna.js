import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"
import get from "lodash/get"
import SEO from "../components/seo"
import Card from "../components/SoundCard"
import Layout from "../components/layout"
import PodcastCategorias from "../components/PodcastCategoria"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./columna.css"

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
            <div className="w-full bg-pattern ">
              <div className="w-full max-w-2xl m-auto mt-0 text-lg md:mt-6 columna-article animated fadeIn delay-1s slower ">
                <iframe
                  width="100%"
                  height="160"
                  scrolling="no"
                  frameborder="no"
                  title={columna.title}
                  className=""
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                    columna.soundcloudTrackID
                  )}&color=%23000000&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
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

            {columna.destacar ? (
              <div className="w-full max-w-2xl m-auto mt-6 text-left">
                <Link
                  to={`/podcasts/`}
                  class=" px-3 py-1 text-xs uppercase bg-red-500 rounded-full font-bold tracking-wide"
                >
                  Subido recientemente
                </Link>
              </div>
            ) : (
              <span className="hidden"></span>
            )}

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
          <div className="flex justify-center w-full max-w-6xl px-6 py-6 m-auto bg-gray-800 home-hero-links md:px-4 md:py-8">
            <PodcastCategorias />
          </div>
          <div className="max-w-4xl mx-auto">
            <h1 className="block w-full mb-3 text-3xl text-center text-white">
              Últimas subidas
            </h1>
            <div className="grid grid-cols-1 gap-5 row-gap-5 pt-6 mb-12 sm:grid-cols-2 ">
              {columnas.edges.map((item, i) => (
                <Card key={item.node.id} card={item.node} />
              ))}
            </div>
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
      filter: { slug: { ne: $slug }, destacar: { eq: "Si" } }
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

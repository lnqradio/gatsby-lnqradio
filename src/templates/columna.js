import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import get from "lodash/get"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"

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
              <div
                className="w-full max-w-2xl m-auto mt-0 text-lg columna-article animated fadeIn delay-1s slower "
                dangerouslySetInnerHTML={{
                  __html: columna.soundcloudPlayer.soundcloudPlayer,
                }}
              />

              <div className="flex items-center justify-between w-full max-w-2xl m-auto mb-6 text-3xl listen">
                <a
                  href={`${columna.spotify.spotify}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-5 mt-3 mr-2 text-lg bg-gray-800 rounded-sm hover:text-white hover:bg-green-800"
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
                  className="block w-full p-5 mt-3 ml-2 text-lg bg-gray-800 rounded-sm hover:text-white hover:bg-orange-800"
                >
                  <h2 className="flex items-center font-mono text-base font-bold text-white ">
                    <FaSoundcloud className="w-6 h-6 mr-3 text-orange-100" />
                    <span className="w-full">Player Soundcloud</span>
                    <GoLinkExternal className="ml-3 text-base text-orange-100" />
                  </h2>
                </a>
              </div>
              <Link
                to={`/columnas/${kebabCase(columna.author.slug)}/`}
                className="block w-full max-w-2xl px-0 py-6 m-auto mb-5 font-mono text-center text-gray-500 bg-gray-900 title hover:text-white"
              >
                Escuchá todas las columnas de {columna.author.name}
              </Link>
            </div>
            <h1 className="w-full max-w-2xl m-auto mt-6 font-mono text-3xl text-left text-white ">
              {columna.title}
            </h1>
            <div className="w-full max-w-2xl m-auto mt-1 font-mono text-left text-gray-500 text-md ">
              x {columna.author.name} - <i>publicado {columna.publishDate}</i>
            </div>
            <p
              className="w-full max-w-2xl pb-20 m-auto mt-6 text-lg columna-article"
              dangerouslySetInnerHTML={{
                __html: columna.body.body,
              }}
            />
          </div>
          <div className="posts animation flex flex-wrap w-full m-auto justify-center ">
            {columnas.edges.map((item, i) => (
              <div
                key={item.node.id}
                className="post border-red-500 border-t-4 relative animated fadeIn slow max-w-md w-full m-3 flex-auto"
              >
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
      description {
        description
      }
      soundcloudPlayer {
        soundcloudPlayer
      }
      body {
        body
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

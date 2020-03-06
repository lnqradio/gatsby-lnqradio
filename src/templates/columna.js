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
  }
`

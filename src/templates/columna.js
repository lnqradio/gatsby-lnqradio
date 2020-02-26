import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import get from "lodash/get"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"

class ColumnaTemplate extends React.Component {
  render() {
    const columna = get(this.props, "data.contentfulColumnas")

    return (
      <Layout>
        <SEO title={`${columna.title} x ${columna.author.name}`} />

        <div className="posts soundcloud flex flex-wrap flex-col m-auto pt-0 px-2">
          <div className="post flex pt-0 shadow  flex-col mb-12 m-auto w-full">
            <div className="post-hero w-full bg-pattern bg-indigo-900">
              <div
                className="columna-article mt-0 w-full max-w-2xl m-auto text-lg animated fadeIn delay-1s slower "
                dangerouslySetInnerHTML={{
                  __html: columna.soundcloudPlayer.soundcloudPlayer,
                }}
              />

              <div className="listen text-3xl flex mb-6 justify-between items-center max-w-2xl m-auto w-full">
                <a
                  href={`${columna.spotify.spotify}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 block w-full text-lg hover:text-white bg-gray-800 p-5 mt-3 rounded-sm hover:bg-green-800"
                >
                  <h2 className=" flex font-mono text-base font-bold text-white  font-mono items-center">
                    <FaSpotify className="text-white mr-3 w-6 h-6" />
                    <span className="w-full">Player Spotify</span>
                    <GoLinkExternal className="text-white ml-3 text-base" />
                  </h2>
                </a>
                <a
                  href={`${columna.soundcloud.soundcloud}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 block w-full text-lg hover:text-white  bg-gray-800 p-5 mt-3 rounded-sm hover:bg-orange-800"
                >
                  <h2 className=" flex font-mono text-base font-bold text-white  font-mono  items-center">
                    <FaSoundcloud className="text-orange-100 mr-3 w-6 h-6" />
                    <span className="w-full">Player Soundcloud</span>
                    <GoLinkExternal className="text-orange-100 ml-3 text-base" />
                  </h2>
                </a>
              </div>
              <Link
                to={`/columnas/${kebabCase(columna.author.slug)}/`}
                className="title font-mono block max-w-2xl m-auto text-center px-0 py-6 mb-5 w-full hover:text-white text-gray-500 m-auto bg-gray-900"
              >
                Escuchá todas las columnas de {columna.author.name}
              </Link>
            </div>
            <h1 className="text-3xl text-white mt-6 w-full max-w-2xl m-auto font-mono  text-left ">
              {columna.title}
            </h1>
            <div className="text-md text-gray-500 mt-1 w-full max-w-2xl m-auto font-mono  text-left ">
              x {columna.author.name} - <i>publicado {columna.publishDate}</i>
            </div>
            <p
              className="columna-article mt-6 w-full max-w-2xl m-auto text-lg pb-20"
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

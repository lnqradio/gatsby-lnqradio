import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import get from "lodash/get"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"

class ColumnaTemplate extends React.Component {
  render() {
    const columna = get(this.props, "data.contentfulColumnas")

    return (
      <Layout>
        <SEO title={`${columna.title} - ${columna.author.name}`} />
        <div className="hero bg-gray-900 h-24 pt-4 flex flex-col items-center mb-0 justify-center hover:bg-gray-800">
          <Link
            to={`/columnas/${kebabCase(columna.author.slug)}/`}
            className="title font-mono text-center px-3 mb-5 hover:text-white text-red-500"
          >
            Escuchá todas las columnas de {columna.author.name}
          </Link>
        </div>
        <div className="posts soundcloud flex flex-wrap flex-col m-auto pt-0 px-2">
          <div className="post flex pt-0 shadow max-w-6xl flex-col mb-12 m-auto w-full">
            <h1 className="text-3xl text-white mt-6 w-full max-w-2xl m-auto font-mono  text-left ">
              {columna.title}
            </h1>
            <h2 className="title pt-6 text-white mb-3 text-xl font-sans font-normal leading-relaxed w-full text-left max-w-2xl m-auto">
              {columna.description.description}
            </h2>
            <div className="listen text-3xl flex  justify-between items-center max-w-2xl m-auto w-full">
              <a
                href={`${columna.spotify.spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 block w-full text-lg hover:text-white bg-green-700 p-5 mt-3 rounded-sm hover:bg-green-800"
              >
                <h2 className=" flex font-mono text-base font-bold text-white  font-mono">
                  <span className="w-full">Escuchar en Spotify</span>
                  <FaSpotify className="text-green-100 ml-3" />
                </h2>
              </a>
              <a
                href={`${columna.spotify.spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 block w-full text-lg hover:text-white bg-orange-700 p-5 mt-3 rounded-sm hover:bg-orange-800"
              >
                <h2 className=" flex font-mono text-base font-bold text-white  font-mono">
                  <span className="w-full">Escuchar en Soundcloud</span>
                  <FaSoundcloud className="text-orange-100 ml-3" />
                </h2>
              </a>
            </div>
          </div>
          <div
            id="soundcloud"
            className="mt-0 w-full max-w-2xl m-auto "
            dangerouslySetInnerHTML={{
              __html: columna.soundcloud.soundcloud,
            }}
          />
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
      heroImage {
        fluid(maxWidth: 1600, maxHeight: 500) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
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

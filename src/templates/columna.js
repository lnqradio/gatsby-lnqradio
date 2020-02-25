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
        <SEO title={`${columna.title} x ${columna.author.name}`} />

        <div className="posts soundcloud flex flex-wrap flex-col m-auto pt-0 px-2">
          <div className="post flex pt-0 shadow max-w-6xl flex-col mb-12 m-auto w-full">
            <div className="listen text-3xl flex mb-6 justify-between items-center max-w-2xl m-auto w-full">
              <a
                href={`${columna.spotify.spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 block w-full text-lg hover:text-white bg-gray-800 p-5 mt-3 rounded-sm hover:bg-green-800"
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
                className="ml-2 block w-full text-lg hover:text-white  bg-gray-800 p-5 mt-3 rounded-sm hover:bg-orange-800"
              >
                <h2 className=" flex font-mono text-base font-bold text-white  font-mono">
                  <span className="w-full">Escuchar en Soundcloud</span>
                  <FaSoundcloud className="text-orange-100 ml-3" />
                </h2>
              </a>
            </div>
            <h1 className="text-3xl text-white mt-6 w-full max-w-2xl m-auto font-mono  text-left ">
              {columna.title}
            </h1>
          </div>

          <p
            className="columna-article mt-0 w-full max-w-2xl m-auto text-lg "
            dangerouslySetInnerHTML={{
              __html: columna.body.body,
            }}
          />
        </div>
        <div>
          <div className="hero bg-gray-900 mt-12 py-12 flex flex-col items-center mb-0 justify-center hover:bg-gray-800">
            <Link
              to={`/columnas/${kebabCase(columna.author.slug)}/`}
              className="title font-mono text-left px-3 mb-5 hover:text-white text-red-500"
            >
              Escuchá todas las columnas de {columna.author.name}
            </Link>
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

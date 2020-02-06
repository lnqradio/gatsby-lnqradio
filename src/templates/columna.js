import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import get from "lodash/get"
import SEO from "../components/seo"
import Layout from "../components/layout"

class ColumnaTemplate extends React.Component {
  render() {
    const columna = get(this.props, "data.contentfulColumnas")

    return (
      <Layout>
        <SEO title={`${columna.title} - ${columna.author.name}`} />
        <div className="hero bg-orange-900 h-24 pt-4 flex flex-col items-center justify-center hover:bg-gray-800">
          <Link
            to={`/columnas/${kebabCase(columna.author.slug)}/`}
            className="title font-mono text-center px-3 mb-5 hover:text-white text-red-500"
          >
            Escuchá todas las columnas de {columna.author.name}
          </Link>
        </div>
        <div className="posts soundcloud flex flex-wrap max-w-md m-auto pt-0 px-2">
          <div className="post  pt-0 shadow  mb-12 w-full">
            <div
              className="mt-0 w-full max-w-md m-auto"
              dangerouslySetInnerHTML={{
                __html: columna.soundcloud.soundcloud,
              }}
            />
            <h1 className="text-3xl text-white mt-6 w-full max-w-md m-auto font-mono  text-left ">
              {columna.title}
            </h1>
            <h2 className="title pt-6 text-white mb-3 text-xl font-sans font-normal leading-relaxed w-full text-left max-w-md m-auto">
              {columna.description.description}
            </h2>
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

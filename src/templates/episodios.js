import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"

class EpisodiosTemplate extends React.Component {
  render() {
    const episodios = get(this.props, "data.contentfulProgramas")

    return (
      <Layout>
        <SEO title={`${episodios.title} - Episodio ${episodios.episode}`} />
        <div className=" bg-gray-900 py-6 flex items-center justify-center">
          <div className="text-3xl text-white m-0 w-full font-mono  text-left max-w-4xl px-12 flex justify-between items-center">
            <b className="text-gray-500  text-xl">
              Episodio {episodios.episode}
            </b>
            <b className="text-gray-600 font-mono text-base text-right capitalize">
              del {episodios.publishDate}
            </b>
          </div>
          <Img
            alt=""
            fluid={episodios.heroImage.fluid}
            className="mb-6 absolute z-10"
          />
        </div>
        <section className="flex flex-col md:flex-row">
          <div className="posts soundcloud flex flex-wrap w-full m-auto max-w-4xl px-6">
            <div className="post px-0 p-0 shadow bg-gray-800 mb-12 w-full">
              <h2 className="title px-6 pt-6 text-white mb-3 text-2xl">
                {episodios.title}
              </h2>
              <p className="title px-6 pb-6">
                {episodios.description.description}
              </p>

              <div
                className="soundcloud-player  "
                dangerouslySetInnerHTML={{
                  __html: episodios.soundcloud.soundcloud,
                }}
              />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default EpisodiosTemplate

export const pageQuery = graphql`
  query EpisodiosBySlug($slug: String!) {
    contentfulProgramas(slug: { eq: $slug }) {
      slug
      title
      episode
      publishDate(formatString: "MMMM Do, YYYY", locale: "es")
      heroImage {
        fluid(maxWidth: 1600, maxHeight: 500) {
          ...GatsbyContentfulFluid
        }
      }
      audio {
        id
        file {
          url
        }
      }
      description {
        description
      }
      soundcloud {
        soundcloud
      }
    }
  }
`

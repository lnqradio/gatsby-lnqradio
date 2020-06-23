import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

class EpisodiosTemplate extends React.Component {
  render() {
    const episodios = get(this.props, "data.contentfulProgramas")

    return (
      <Layout>
        <SEO title={`${episodios.title} - Episodio ${episodios.episode}`} />

        <section className="flex flex-col md:flex-row">
          <div className="flex flex-wrap w-full max-w-6xl px-6 m-auto posts soundcloud">
            <div className="w-full max-w-4xl p-0 px-0 m-auto mt-6 mb-2 bg-gray-800 shadow post">
              <div className="relative flex items-center justify-between listen">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  title={episodios.title}
                  className=""
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                    episodios.soundcloudTrackId
                  )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                ></iframe>
              </div>
              <h2 className="px-6 pt-6 mb-3 text-2xl text-white title">
                {episodios.title}
                <b className="inline-block pt-2 pl-2 mb-2 font-mono text-sm text-left text-gray-500 capitalize">
                  / {episodios.publishDate}
                </b>
              </h2>
              <p className="px-6 pb-6 title">
                {episodios.description.description}
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-6xl p-6 pt-6 m-auto">
          <h2 className="mt-3 text-xl text-center text-gray-700">
            Columnas del Programa Nº{episodios.episode}
          </h2>
          {episodios.podcastRelacionados ? (
            <div className="flex flex-wrap justify-center py-8 ">
              {episodios.podcastRelacionados.map((slider, i) => (
                <div
                  key={slider.slug}
                  className="relative flex-auto w-full max-w-md m-3 overflow-hidden bg-gray-800 post animated fadeIn slow"
                >
                  <div className="relative z-50 h-full px-0 pt-4 mb-20 shadow">
                    <Link
                      to={`/columnas/${kebabCase(
                        slider.author.name
                      )}/${kebabCase(slider.slug)}/`}
                      className="block px-6 pt-2 mb-1 font-mono text-2xl text-red-500 title hover:text-white min-h-20"
                    >
                      {slider.title}
                    </Link>
                    <Link
                      to={`/columnas/${kebabCase(slider.author.name)}/`}
                      className="block px-6 pb-12 mb-2 font-mono text-base text-gray-500 hover:text-white"
                    >
                      x {slider.author.name}
                    </Link>

                    <p className="hidden px-6 pb-6 description">
                      {slider.description.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-3 bg-gray-800 listen">
                      <iframe
                        width="100%"
                        height="20"
                        scrolling="no"
                        frameborder="no"
                        title={slider.title}
                        className="w-full px-12 transform scale-125 md:px-18"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                          slider.soundcloudTrackID
                        )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                      ></iframe>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 bg-image-hover-opacity"
                    style={{ opacity: ".2" }}
                  >
                    <Img alt="{slider.title}" fixed={slider.heroImage.fixed} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
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
      soundcloudTrackId
      description {
        description
      }
      soundcloud {
        soundcloud
      }
      podcastRelacionados {
        title
        slug
        soundcloudTrackID
        author {
          name
        }
        description {
          description
        }
        heroImage {
          fixed(width: 600, height: 300) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

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
        <div className="flex items-center justify-center py-6 bg-gray-900 ">
          <div className="flex items-center justify-between w-full max-w-6xl px-12 m-0 font-mono text-3xl text-left text-white">
            <b className="text-xl text-gray-500">
              Episodio {episodios.episode}
            </b>
            <b className="font-mono text-base text-right text-gray-600 capitalize">
              del {episodios.publishDate}
            </b>
          </div>
          <Img
            alt=""
            fluid={episodios.heroImage.fluid}
            className="absolute z-10 mb-6"
          />
        </div>
        <section className="flex flex-col md:flex-row">
          <div className="flex flex-wrap w-full max-w-6xl px-6 m-auto posts soundcloud">
            <div className="w-full p-0 px-0 mb-12 bg-gray-800 shadow post">
              <h2 className="px-6 pt-6 mb-3 text-2xl text-white title">
                {episodios.title}
              </h2>
              <p className="px-6 pb-6 title">
                {episodios.description.description}
              </p>

              <div
                className="relative soundcloud-player"
                dangerouslySetInnerHTML={{
                  __html: episodios.soundcloud.soundcloud,
                }}
              />
            </div>
          </div>
        </section>
        <div className="max-w-6xl p-6 m-auto">
          {episodios.podcastRelacionados ? (
            <div className="flex flex-wrap justify-around py-8 ">
              {episodios.podcastRelacionados.map((slider, i) => (
                <div
                  key={slider.slug}
                  className="w-full max-w-md m-2 bg-gray-800"
                >
                  <div className="relative flex h-56 p-0 m-0 overflow-hidden text-center p slider-item">
                    <div className="relative z-40 w-full pt-2 mt-2 text-left description">
                      <Link
                        to={`/columnas/${kebabCase(
                          slider.author.name
                        )}/${kebabCase(slider.slug)}`}
                        className="block px-5 mt-0 mb-2 font-mono text-3xl text-left text-red-500 hover:text-white"
                      >
                        {slider.title}
                      </Link>
                      <Link
                        to={`/columnas/${kebabCase(slider.author.name)}/`}
                        className="inline-block px-5 font-mono text-left text-gray-500 hover:text-white"
                      >
                        x {slider.author.name}
                      </Link>
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-3 bg-gray-800 listen">
                        <iframe
                          width="100%"
                          height="20"
                          scrolling="no"
                          title={slider.title}
                          className="w-full px-12 transform scale-125 md:px-18"
                          frameborder="no"
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
                      <Img
                        alt="{slider.title}"
                        fixed={slider.heroImage.fixed}
                      />
                    </div>
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
        heroImage {
          fixed(width: 600, height: 300) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

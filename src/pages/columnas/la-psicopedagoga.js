import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Img from "gatsby-image"
import Authors from "../../components/queries/authors"

const PsicopedagogaPage = () => {
  const data = useStaticQuery(graphql`
    query PsicopedagogaQuery {
      contenful: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "La Psicopedagoga" } } }
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
      allContentfulAutores(filter: { name: { eq: "La Psicopedagoga" } }) {
        edges {
          node {
            id
            imagen {
              fluid(maxWidth: 1200, maxHeight: 1200) {
                ...GatsbyContentfulFluid
              }
            }
            allTracksPlayer {
              allTracksPlayer
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Psicopedagoga" />
      <div className="flex flex-col md:flex-row">
        <div className="inset-x-0 top-0 z-50 hidden w-full p-6 mb-0 bg-gray-800 hero md:p-0 xl:sticky md:w-48 md:inline-block">
          <div className="flex flex-wrap justify-center max-w-4xl m-auto authors md:pt-40 md:justify-center md:px-0 md:sticky md:top-0 ">
            <h4 className="hidden px-3 pt-3 text-white md:inline-block md:pb-3">
              Autores
            </h4>
            <Authors />
          </div>
        </div>

        <section className="flex flex-col justify-center w-full pt-24">
          <div className="flex flex-col items-center w-full p-8 m-auto jutify-center md:my-12">
            {data.allContentfulAutores.edges.map((image, i) => (
              <div
                className="flex items-center justify-center w-full "
                key={image.node.id}
              >
                <Img
                  alt={image.node.name}
                  fluid={image.node.imagen.fluid}
                  className="w-48 h-48 m-0 rounded-full"
                />
              </div>
            ))}
            <div className="w-full px-3 mt-6 text-3xl text-center text-white">
              <h1 className="font-sans text-white ">La Psicopedagoga</h1>
              <AnchorLink
                href={`#author-player`}
                className="block my-1 font-sans text-base text-red-500 hover:text-white"
              >
                <i className="text-xl fa fa-soundcloud" aria-hidden="true"></i>
                <span className="pt-0">Escuchar Playlist</span>
              </AnchorLink>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full m-auto sm:px-6 posts soundcloud">
            {data.contenful.edges.map((item, i) => (
              <div
                key={item.node.slug}
                className="relative flex-auto w-full max-w-md m-3 overflow-hidden bg-gray-800 post animated fadeIn slow"
              >
                <div className="relative z-50 h-full px-0 pt-4 mb-20 shadow">
                  <Link
                    to={`/columnas/${kebabCase(
                      item.node.author.name
                    )}/${kebabCase(item.node.slug)}/`}
                    className="block px-6 pt-2 mb-1 font-sans text-2xl text-red-500 title hover:text-white min-h-20"
                  >
                    {item.node.title}
                  </Link>
                  <Link
                    to={`/columnas/${kebabCase(item.node.author.name)}/`}
                    className="block px-6 pb-1 mb-32 font-sans text-base text-gray-500 hover:text-white"
                  >
                    x {item.node.author.name}
                  </Link>
                  <p className="hidden px-6 pb-6 title">
                    {item.node.description.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-3 bg-gray-800 listen">
                    <iframe
                      width="100%"
                      height="20"
                      scrolling="no"
                      frameborder="no"
                      title={item.node.title}
                      className="w-full px-12 transform scale-125 md:px-18"
                      allow="autoplay"
                      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                        item.node.soundcloudTrackID
                      )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                    ></iframe>
                  </div>
                </div>
                <div
                  className="absolute inset-0 bg-image-hover-opacity"
                  style={{ opacity: ".1" }}
                >
                  <Img
                    alt="{item.node.title}"
                    fixed={item.node.heroImage.fixed}
                  />
                </div>
              </div>
            ))}
          </div>
          <aside
            id="author-player"
            className="relative flex items-center justify-center w-full min-h-screen px-6 m-auto bg-gray-800"
          >
            {data.allContentfulAutores.edges.map((item, i) => (
              <div className="w-full max-w-xl m-auto post" key={item.node.id}>
                <h2 className="font-sans text-2xl text-center text-white">
                  Playlist de La Psicopedagoga
                </h2>
                <div
                  className="mt-2 soundcloud-player"
                  dangerouslySetInnerHTML={{
                    __html: item.node.allTracksPlayer.allTracksPlayer,
                  }}
                />
              </div>
            ))}
          </aside>
        </section>
      </div>
    </Layout>
  )
}

export default PsicopedagogaPage

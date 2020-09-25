import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Img from "gatsby-image"
import Card from "../../components/SoundCard"
import Authors from "../../components/queries/authors"

const AstrologoPage = () => {
  const data = useStaticQuery(graphql`
    query AstrologoQuery {
      contenful: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "El Astrólogo" } } }
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
      allContentfulAutores(filter: { name: { eq: "El Astrólogo" } }) {
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
      <SEO title="Astrologo" />
      <div className="flex flex-col md:flex-row">
        <div className="inset-x-0 top-0 z-50 hidden w-full p-6 mb-0 bg-gray-800 hero md:p-0 xl:sticky md:w-48 md:inline-block">
          <div className="flex flex-wrap justify-center max-w-4xl m-auto authors md:pt-40 md:justify-center md:px-0 md:sticky md:top-0 ">
            <h4 className="hidden px-3 pt-6 text-white md:inline-block md:pb-3">
              Autores
            </h4>
            <Authors />
          </div>
        </div>

        <section className="flex flex-col justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full p-8 m-auto md:my-12">
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
              <h1 className="font-mono text-white ">El Astrólogo</h1>
              <AnchorLink
                href={`#author-player`}
                className="block my-1 font-mono text-base text-red-500 hover:text-white"
              >
                <i className="text-xl fa fa-soundcloud" aria-hidden="true"></i>
                <span className="pt-0">Escuchar Playlist</span>
              </AnchorLink>
            </div>
          </div>
          <div className="grid max-w-6xl grid-cols-1 gap-5 row-gap-5 px-6 pt-6 m-auto mb-12 md:grid-cols-1 lg:grid-cols-2">
            {data.contenful.edges.map((item, i) => (
              <Card key={item.node.id} card={item.node} />
            ))}
          </div>

          <aside
            id="author-player"
            className="relative flex items-center justify-center w-full min-h-screen px-6 m-auto bg-gray-800"
          >
            {data.allContentfulAutores.edges.map((item, i) => (
              <div className="w-full max-w-xl m-auto post" key={item.node.id}>
                <h2 className="font-mono text-2xl text-center text-white">
                  Playlist de el Astrólogo
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

export default AstrologoPage

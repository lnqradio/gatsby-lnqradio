import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaSpotify } from "react-icons/fa"
import { IoMdMicrophone } from "react-icons/io"
import Img from "gatsby-image"

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query Entrevistas2Query {
      collection: allContentfulColumnas(
        sort: { fields: [destacar], order: ASC }
        filter: { author: {}, tipoDePodcast: { eq: "Entrevistas" } }
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
            destacar
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
    }
  `)

  return (
    <Layout>
      <SEO title="Entrevistas" />
      <div className="z-10 flex items-center justify-center h-64 px-6 m-0 mb-2 bg-gray-900 md:sticky md:top-0 hero">
        <h1 className="flex flex-col items-center justify-center text-xl text-center text-white ">
          <IoMdMicrophone className="text-6xl" />
          <span className="block pt-3 font-mono text-2xl">Entrevistas</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center w-full m-auto posts animation ">
        {data.collection.edges.map((item, i) => (
          <div
            key={item.node.id}
            className="relative flex-auto w-full max-w-md m-3 overflow-hidden bg-gray-800 post animated fadeIn slow"
          >
            <div className="relative z-50 h-full px-0 pt-4 mb-20 shadow">
              <Link
                to={`/columnas/${kebabCase(item.node.author.name)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="block px-6 pt-2 mb-1 font-mono text-2xl text-red-500 title hover:text-white min-h-20"
              >
                {item.node.title}
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.name)}/`}
                className="block px-6 pb-1 mb-2 font-mono text-base text-gray-500 hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="px-6">{item.node.description.description}</p>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-3 bg-gray-800 listen">
                <iframe
                  width="100%"
                  height="20"
                  scrolling="no"
                  frameborder="no"
                  className="w-full px-8 transform scale-125 sm:px-12"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                    item.node.soundcloudTrackID
                  )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
                ></iframe>
              </div>
            </div>
            <div
              className="absolute inset-0 bg-image-hover-opacity"
              style={{ opacity: ".05" }}
            >
              <Img alt="{item.node.title}" fixed={item.node.heroImage.fixed} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PodcastPage

import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PodcastCategorias from "../components/PodcastCategoria"
import Card from "../components/SoundCard"
//import tw from "tailwind.macro"
import tw from "twin.macro"
import styled from "@emotion/styled"

const ColumnasPage = () => {
  const data = useStaticQuery(graphql`
    query ColumnasQuery {
      contenful: allContentfulColumnas(
        sort: { order: DESC, fields: [publishDate] }
        filter: { author: {}, destacar: { eq: "Si" } }
      ) {
        edges {
          node {
            id
            title
            soundcloud {
              soundcloud
            }
            tipoDePodcast
            spotify {
              spotify
            }
            heroImage {
              fixed(width: 600, height: 300) {
                ...GatsbyContentfulFixed
              }
            }
            soundcloudTrackID
            slug
            author {
              name
            }
            updatedAt
            publishDate(locale: "es", fromNow: true)
            description {
              description
            }
          }
        }
      }

      autores: allContentfulAutores(sort: { fields: [name], order: DESC }) {
        edges {
          node {
            id
            name
            columnas {
              id
              title
              description {
                description
              }
              soundcloud {
                soundcloud
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Podcasts" />
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center w-full p-0 m-auto posts animation columnas soundcloud ">
          <div className="flex justify-center w-full py-6 bg-gray-800 border-b border-red-600 home-hero-links md:pt-8">
            <PodcastCategorias />
          </div>
          <h2
            className="block w-full pb-4 mt-0 font-mono text-3xl text-center text-white"
            id="destacadas"
          >
            Últimas Subidas
          </h2>
          <PodcastGrid>
            {data.contenful.edges.map((item, i) => (
              <Card key={item.node.id} card={item.node} />
            ))}
          </PodcastGrid>
        </div>
      </div>
    </Layout>
  )
}

export default ColumnasPage

const PodcastGrid = styled.div`
  ${tw`grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}
`

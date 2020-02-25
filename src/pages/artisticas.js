import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArtisticasPage = () => {
  const data = useStaticQuery(graphql`
    query ArtisticasQuery {
      contenful: allContentfulProgramas(
        sort: { fields: [episode], order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            soundcloud {
              soundcloud
            }
            episode
            description {
              description
            }
            publishDate(formatString: "MMMM Do, YYYY", locale: "es")
            heroImage {
              fluid(maxWidth: 1200, maxHeight: 1000) {
                ...GatsbyContentfulFluid
              }
            }
            body {
              body
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Artisticas" />
      <div className="posts flex flex-wrap max-w-3xl m-auto">
        <div className="max-w-4xl pt-32 m-auto text-center">
          <h1 className="text-white text-3xl font-thin">Artisticas</h1>
          <p className="animated flash infinite slower pt-6 text-xl">
            Proximamente
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ArtisticasPage

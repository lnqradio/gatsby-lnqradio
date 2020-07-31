import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Card from "../../components/SoundCard"
import PodcastHero from "../../components/PodcastHero"
import { GiBookCover } from "react-icons/gi"

const LiteraturaPage = () => {
  const data = useStaticQuery(graphql`
    query LiteraturaQuery {
      collection: allContentfulColumnas(
        sort: { fields: [destacar], order: ASC }
        filter: { author: {}, tipoDePodcast: { eq: "Literatura" } }
      ) {
        edges {
          node {
            id
            title
            slug
            spotify {
              spotify
            }
            destacar
            soundcloud {
              soundcloud
            }
            tipoDePodcast
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
    }
  `)

  return (
    <Layout>
      <SEO title="Literatura" />
      <PodcastHero
        heading="Literatura"
        icon={<GiBookCover className="text-6xl" />}
      />
      <div className="grid max-w-6xl grid-cols-1 gap-5 row-gap-5 px-3 pt-6 m-auto mb-12 sm:grid-cols-2 md:grid-cols-3">
        {data.collection.edges.map((item, i) => (
          <Card key={item.node.id} card={item.node} />
        ))}
      </div>
    </Layout>
  )
}

export default LiteraturaPage

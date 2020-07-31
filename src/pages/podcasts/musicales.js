import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { IoMdMusicalNotes } from "react-icons/io"
import PodcastHero from "../../components/PodcastHero"

import Card from "../../components/SoundCard"
const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query MusicalesQuery {
      collection: allContentfulColumnas(
        sort: { fields: [destacar], order: ASC }
        filter: { author: {}, tipoDePodcast: { eq: "Musicales" } }
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
      <SEO title="Musicales" />
      <PodcastHero
        heading="Musicales"
        icon={<IoMdMusicalNotes className="text-6xl" />}
      />
      <div className="grid max-w-6xl grid-cols-1 gap-5 row-gap-5 px-3 pt-6 m-auto mb-12 sm:grid-cols-2 md:grid-cols-3">
        {data.collection.edges.map((item, i) => (
          <Card key={item.node.id} card={item.node} />
        ))}
      </div>
    </Layout>
  )
}

export default PodcastPage

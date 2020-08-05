import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { MdPersonPin } from "react-icons/md"
import Card from "../../components/SoundCard"
import PodcastHero from "../../components/PodcastHero"

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query PerfilesQuery {
      collection: allContentfulColumnas(
        sort: { fields: [updatedAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Perfiles" } }
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
      <SEO title="Perfiles" />
      <PodcastHero
        heading="Perfiles"
        icon={<MdPersonPin className="text-6xl" />}
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

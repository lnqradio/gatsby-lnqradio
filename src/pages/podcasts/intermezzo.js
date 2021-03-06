import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { GiPestleMortar } from "react-icons/gi"
import Card from "../../components/SoundCard"
import PodcastHero from "../../components/PodcastHero"

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query IntermezzoQuery {
      collection: allContentfulColumnas(
        sort: { fields: [destacar], order: ASC }
        filter: { author: {}, tipoDePodcast: { eq: "Intermezzo" } }
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
      <SEO title="Intermezzo" />
      <PodcastHero
        heading="Intermezzo"
        icon={<GiPestleMortar className="text-6xl" />}
      />
      <div className="flex flex-wrap justify-center w-full m-auto posts animation ">
        {data.collection.edges.map((item, i) => (
          <Card key={item.node.id} card={item.node} />
        ))}
      </div>
    </Layout>
  )
}

export default PodcastPage

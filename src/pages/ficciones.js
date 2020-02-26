import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FiccionesPage = () => {
  const data = useStaticQuery(graphql`
    query FiccionesQuery {
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
      <SEO title="Ficciones" />
      <div className="posts flex  flex-wrap max-w-full m-auto">
        <div className=" max-w-6xl pt-12 m-auto text-center">
          <h1 className="text-white text-3xl mb-5 font-thin">Ficciones</h1>
          <div className="flex flex-col flex-wrap lg:flex-row justify-center">
            <iframe
              width="300"
              height="450"
              scrolling="no"
              className="m-2"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/753485889&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <iframe
              width="300"
              height="450"
              className="m-2"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758502684&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FiccionesPage

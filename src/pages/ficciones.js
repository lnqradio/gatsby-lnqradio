import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from "gatsby-image-background-slider"

const FiccionesPage = () => {
  return (
    <Layout>
      <SEO title="Ficciones" />
      <BackgroundSlider
        className="bg-gray-800 bgslider "
        initDelay={1}
        transition={2}
        duration={5}
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { relativePath: { eq: "img233.jpg" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(
                    maxWidth: 2000
                    quality: 100
                    duotone: { highlight: "#f00e2e", shadow: "#281136" }
                    traceSVG: { color: "#281136" }
                  ) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        `)}
      />
      <div className="flex flex-wrap max-w-full pt-12 m-auto my-8 md:pt-2 posts animated fadeIn delay-1s">
        <div
          className="max-w-6xl m-auto mt-12 text-center md:p-8 "
          style={{
            background: "rgba(40, 17, 54, 0.9)",
          }}
        >
          <div className="flex flex-col flex-wrap justify-center lg:flex-row">
            <iframe
              width="300"
              height="450"
              scrolling="no"
              className="m-2"
              title="Radioteatro - Distopia Feminista"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/753485889&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="300"
              height="450"
              className="m-2"
              title="Sketch - Informe academia Paraguaya"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758502684&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FiccionesPage

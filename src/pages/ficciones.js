import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from "gatsby-image-background-slider"
import AwesomeSlider from "react-awesome-slider"
import { Helmet } from "react-helmet"


import "react-awesome-slider/dist/styles.css"
const FiccionesPage = () => {
  return (
    <Layout>
      <SEO title="Ficciones" />
      <Helmet>
        <body className="page-ficciones" />
      </Helmet>
      <BackgroundSlider
        className=" bgslider"
        initDelay={1}
        transition={2}
        duration={5}
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(filter: { relativePath: { eq: "4511.jpg" } }) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(
                    maxWidth: 2000
                    quality: 100
                    duotone: { highlight: "#281136", shadow: "#f00e2e" }
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
      <AwesomeSlider className="ficciones">
        <div>
          <h2
            className="relative inline-block p-3 text-lg text-center text-white bg-gray-800 shadow-xl"
            style={{ top: "25px" }}
          >
            Radioteatros
          </h2>
          <iframe
            width="100%"
            height="400"
            scrolling="no"
            className="px-4"
            title="Radioteatro - Distopia Feminista"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/753485889&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
        <div>
          <h2
            className="relative inline-block p-3 text-lg text-center text-white bg-gray-800 shadow-xl"
            style={{ top: "25px" }}
          >
            Sketchs
          </h2>
          <iframe
            width="100%"
            height="400"
            className="px-4"
            title="Sketch - Informe academia Paraguaya"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758502684&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </AwesomeSlider>
      <div className="flex flex-wrap hidden max-w-full pt-12 m-auto my-8 md:pt-2 posts animated fadeIn delay-1s">
        <div
          className="max-w-6xl m-auto mt-12 text-center md:p-8 "
          style={{
            background: "rgba(40, 17, 54, 0.9)",
          }}
        >
          <div className="flex flex-col flex-wrap justify-center lg:flex-row">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              className="p-4"
              title="Radioteatro - Distopia Feminista"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/753485889&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="100%"
              height="450"
              className="p-4"
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

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const PodcastHero = (props) => (
  <div className="relative z-10 flex items-center justify-center px-6 py-24 pt-32 m-0 mb-2 bg-transparent md:bg-gray-900">
    <h1 className="flex flex-col items-center justify-center text-xl text-center text-white ">
      {props.icon}
      {props.heading}
    </h1>

    <BackgroundSlider
      initDelay={3}
      transition={3}
      duration={6}
      images={[
        "rotring2.jpg",
        "rotring10.jpg",
        "rotring12.jpg",
        "rotring13.jpg",
      ]}
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(
                  maxWidth: 1800
                  quality: 100
                  duotone: { highlight: "#f00e2e", shadow: "#281136" }
                  traceSVG: { color: "#281136" }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
  </div>
)

export default PodcastHero

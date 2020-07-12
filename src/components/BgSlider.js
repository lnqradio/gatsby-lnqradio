import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundSlider from "gatsby-image-background-slider"

const HomeSlider = props => (
  <BackgroundSlider
    className="bgslider"
    initDelay={3}
    transition={3}
    duration={6}
    images={["rotring2.jpg", "rotring10.jpg", "rotring12.jpg", "rotring13.jpg"]}
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
)

export default HomeSlider

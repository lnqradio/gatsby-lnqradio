import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from "gatsby-image-background-slider"
const EpisodiosPage = () => {
  const data = useStaticQuery(graphql`
    query EpisodiosQuery {
      contenful: allContentfulProgramas(
        sort: { fields: [episode], order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            soundcloudTrackId
            episode
            description {
              description
            }
            temporada
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
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(
              maxWidth: 1155
              quality: 100
              duotone: { highlight: "#281136", shadow: "#f00e2e" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Episodios" />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-40 m-0 mb-6 bg-gray-900 md:sticky md:top-0 hero">
        <h1 className="text-3xl font-thin text-center text-white uppercase">
          Sexta temporada
        </h1>

        <BackgroundSlider
          className="bg-gray-800 "
          style={{
            top: "0",
            maxHeight: "80vh",
            opacity: "0.5",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initDelay={1}
          images={["img233.jpg"]}
          transition={2}
          duration={5}
          query={data}
        />
      </div>
      <div className="max-w-6xl py-3 pb-12 m-auto text-center">
        <Link
          to={`/notanenvivo/`}
          className="px-4 pb-1 my-3 font-mono text-lg text-white transition duration-150 ease-in-out bg-red-700 hover:text-red-100 hover:bg-red-800"
        >
          Escuchar temporadas anteriores
        </Link>
      </div>
      <div className="flex flex-wrap justify-center m-auto mb-12 posts">
        {data.contenful.edges.map((item, i) => (
          <div
            key={item.node.id}
            className="w-full m-2 bg-gray-800 border-t-4 border-red-500 lg:w-1/3 post"
          >
            <div className="p-0 shadow-lg">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                title={item.node.title}
                className=""
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
                  item.node.soundcloudTrackId
                )}&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
              ></iframe>
              <div className="flex flex-col-reverse p-6 heading md:flex-row">
                <div className="w-full content md:pl-0 md:flex-1">
                  <Link
                    to={`/episodios/${kebabCase(item.node.slug)}/`}
                    className="title "
                  >
                    <h2 className="px-0 mb-3 text-xl text-red-500 hover:text-white">
                      {item.node.title}{" "}
                      <b className="inline-block pt-2 mb-2 font-mono text-sm text-left text-gray-500 capitalize">
                        / {item.node.publishDate}
                      </b>
                    </h2>
                  </Link>

                  <p className="px-0 pb-3 mb-3 text-base title">
                    {item.node.description.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default EpisodiosPage

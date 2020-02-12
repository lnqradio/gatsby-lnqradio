import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "./index.css"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query DestacadosQuery {
      contenful: allContentfulDestacados(
        sort: { fields: [createdAt], order: DESC }
      ) {
        edges {
          node {
            homePage {
              id
              title
              slug
              heroImage {
                fixed(width: 400, height: 200) {
                  ...GatsbyContentfulFixed
                }
              }
              description {
                description
              }
              soundcloud {
                soundcloud
              }
              author {
                id
                name
              }
            }
          }
        }
      }
      lastShow: allContentfulProgramas(
        limit: 1
        sort: { order: DESC, fields: [episode] }
      ) {
        edges {
          node {
            id
            title
            slug
            episode
            publishDate(formatString: "MMMM Do, YYYY", locale: "es")
            description {
              description
            }
            soundcloud {
              soundcloud
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Destacados" />
      <div className="home-post flex flex-wrap w-full m-auto pb-6">
        {data.contenful.edges.map((item, i) => (
          <AwesomeSlider>
            {item.node.homePage.map((slider, i) => (
              <div key={slider.slug} className="post ">
                <div className="slider-item p-6 flex text-center bg-gray-800">
                  <Img
                    alt=""
                    fixed={slider.heroImage.fixed}
                    className="mb-6 max-w-lg mr-3 mt-2"
                  />
                  <div className="description text-left pl-3 max-w-sm">
                    <Link
                      to={`/columnas/${kebabCase(slider.author.name)}/`}
                      className="block mb-3 text-gray-500 hover:text-white font-mono"
                    >
                      Columna x {slider.author.name}
                    </Link>
                    <h2 className="title text-white text-2xl">
                      {slider.title}
                    </h2>
                    <p className="mt-3 max-w-xl">
                      {slider.description.description}
                    </p>
                    <div className="actions my-6">
                      <Link
                        to={`/columnas/${kebabCase(
                          slider.author.name
                        )}/${kebabCase(slider.slug)}`}
                        className="btn bg-red-700 scale-0 hover:scale-95  hover:text-white hover:bg-red-600 transition duration-500 ease-in-out hover:bg-red-500 transform hover:scale-110"
                        style={{ marginLeft: "0" }}
                      >
                        Escuchar columna
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AwesomeSlider>
        ))}
      </div>
      <div className="last-show max-w-xl m-auto mt-12 mb-24 bg-gray-700 ">
        <h1 className="text-white text-sm bg-gray-800 p-6 pb-1 text-left  font-mono flex justify-between border-gray-900 border-t">
          Escuchá el último episodio completo
        </h1>
        {data.lastShow.edges.map((show, i) => (
          <div key={show.node.slug} className="post">
            <div className="px-0 pb-0 pt-3 text-left bg-gray-800 w-auto relative">
              <b className="block pb-3 text-gray-400 font-mono relative md:absolute right-0 pt-6 md:pt-0 px-6">
                Episodio {show.node.episode}
              </b>
              <Link
                to={`/episodios/${kebabCase(show.node.slug)}/`}
                className="title "
              >
                <h2 className="title text-red-500 hover:text-white text-2xl leading-normal max-w-sm px-6">
                  {show.node.title}
                  <b className="text-gray-500 block font-mono text-sm mb-2  text-left capitalize">
                    {show.node.publishDate}
                  </b>
                </h2>
              </Link>
              <p className="mt-3 max-w-xl pb-6 px-6">
                {show.node.description.description}
              </p>
            </div>
            <Link to={`/episodios/`} className="title ">
              <h2 className="bg-red-600  hover:bg-red-700 text-white w-full text-base font-mono px-6 text-left p-3 flex justify-between">
                Escuchar todos
                <svg
                  class="svg-icon stroke-current text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="none"
                    d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"
                  ></path>
                </svg>
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

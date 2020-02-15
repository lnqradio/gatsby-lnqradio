import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import "./index.css"
import { FaSpotify } from "react-icons/fa"
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip"

import Swiper from "react-id-swiper"

const IndexPage = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,

    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  }
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
      destacados: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "Carlín" } } }
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
      musica: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "Ex-Pasante" } } }
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
      perfiles: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: { name: { eq: "Rasputín" } } }
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
      ></link>

      <div className="homeHero py-12 pb-2 bg-gray-800 flex flex-col justify-center items-center">
        <h1 className="text-2xl pt-0 pb-12 text-white font-mono w-full text-center">
          La Noche Que ella soño con el Centro Half
        </h1>
        <iframe
          width="300px"
          height="200px"
          title="live"
          className="h-40"
          name="htmlComp-iframe"
          scrolling="auto"
          src="https://www-lnqradio-com.filesusr.com/html/80866a_abf8a98d014638b9f83f01f283f520d3.html"
        ></iframe>
        <h1 className="text-white text-center text-3xl w-full animated fadeIn  slow px-0 pt-0 ">
          Escuchá el programa en vivo
        </h1>
        <h2 className="text-red-500 text-xl w-full text-center animated fadeIn slow px-0 pt-3 mb-12 ">
          Todos los viernes a las 20hs
        </h2>
      </div>
      <div className="categories"></div>
      <div className="last-show max-w-xl m-auto mt-12 mb-24 bg-gray-700 hidden">
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
                  className="svg-icon stroke-current text-white"
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
      <div className="max-w-6xl px-3 m-auto pt-12">
        <h2 className="text-white text-2xl font-mono pb-3">Historias</h2>
        <Swiper {...params}>
          {data.destacados.edges.map((item, i) => (
            <div className="post h-full px-0 pt-4 shadow bg-gray-800 mb-12 w-full">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title "
              >
                <h2 className="title px-6 pt-6 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <p className="title px-6 pb-6">
                {item.node.description.description}
              </p>
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <h2 className="text-white text-2xl font-mono pb-3">Cine</h2>
        <Swiper {...params}>
          {data.perfiles.edges.map((item, i) => (
            <div className="post h-full px-0 pt-4 shadow bg-gray-800 mb-12 w-full">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title "
              >
                <h2 className="title px-6 pt-6 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <p className="title px-6 pb-6">
                {item.node.description.description}
              </p>
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <h2 className="text-white text-2xl font-mono pb-3">Musicales</h2>
        <Swiper {...params}>
          {data.musica.edges.map((item, i) => (
            <div className="post h-full px-0 pt-4 shadow bg-gray-800 mb-12 w-full">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title "
              >
                <h2 className="title px-6 pt-6 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <p className="title px-6 pb-6">
                {item.node.description.description}
              </p>
            </div>
          ))}
        </Swiper>
      </div>
    </Layout>
  )
}

export default IndexPage

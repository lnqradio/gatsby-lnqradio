import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Img from "gatsby-image"

import "./index.css"

import { FiChevronsDown } from "react-icons/fi"

import Swiper from "react-id-swiper"

const IndexPage = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,

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
      musica: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Musicales" } }
        limit: 3
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
            heroImage {
              fixed(width: 400, height: 300) {
                ...GatsbyContentfulFixed
              }
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
      historias: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Historias" } }
        limit: 3
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
            heroImage {
              fixed(width: 400, height: 300) {
                ...GatsbyContentfulFixed
              }
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
        filter: { author: {}, tipoDePodcast: { eq: "Perfiles" } }
        limit: 3
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
            heroImage {
              fixed(width: 400, height: 300) {
                ...GatsbyContentfulFixed
              }
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
      cine: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Cine" } }
        limit: 3
      ) {
        edges {
          node {
            id
            title
            slug
            spotify {
              spotify
            }
            heroImage {
              fixed(width: 400, height: 300) {
                ...GatsbyContentfulFixed
              }
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
      entrevistas: allContentfulColumnas(
        sort: { fields: [publishDate], order: ASC }
        filter: { author: {}, tipoDePodcast: { eq: "Entrevistas" } }
        limit: 3
      ) {
        edges {
          node {
            id
            title
            slug
            spotify {
              spotify
            }
            heroImage {
              fixed(width: 400, height: 300) {
                ...GatsbyContentfulFixed
              }
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
    }
  `)

  return (
    <Layout>
      <SEO title="Destacados" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
      ></link>

      <div className="relative flex flex-col items-center justify-center py-12 pb-12 bg-gray-800 homeHero">
        <h1 className="w-full px-6 pt-0 pb-12 font-mono text-2xl leading-10 text-left text-white md md:text-center">
          <span className="block text-gray-400">La Noche Que </span>
          ella soño con el Centro Half
        </h1>
        <div className="solumedia">
          <iframe
            border="0"
            frameborder="NO"
            width="300px"
            title="En vivo"
            height="200px"
            className="h-40"
            scrolling="NO"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/8772/index.html"
          ></iframe>
        </div>

        <h1 className="w-full px-0 pt-0 text-3xl text-center text-white animated fadeIn slow ">
          Escuchá el programa en vivo
        </h1>
        <h2 className="w-full px-0 pt-3 mb-12 text-xl text-center text-red-500 animated fadeIn slow ">
          Todos los viernes a las 20hs
        </h2>
        <FiChevronsDown className="absolute bottom-0 text-5xl text-gray-400 md:hidden animated bounce infinite slower delay-2s" />
      </div>

      <div className="max-w-6xl px-3 pt-12 m-auto">
        <Link
          to={`/podcasts/entrevistas/`}
          className="pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
        >
          Entrevistas
        </Link>
        <Swiper {...params}>
          {data.entrevistas.edges.map((item, i) => (
            <div className="relative w-full h-full p-0 mb-12 overflow-hidden font-mono bg-gray-800 shadow entrevista-item post ">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title"
              >
                {item.node.title}
              </Link>
              <p className="description ">
                {item.node.description.description}
              </p>

              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".5" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>

      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/musicales`}
          className="pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
        >
          Musicales
        </Link>
        <Swiper {...params}>
          {data.musica.edges.map((item, i) => (
            <div className="relative w-full h-64 h-full px-0 pt-4 mb-12 overflow-hidden font-mono bg-gray-800 shadow post">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="relative z-10 title "
              >
                <h2 className="relative z-10 px-6 py-6 pb-1 mb-3 font-mono text-2xl text-red-500 title hover:text-white lg:mr-32">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="block px-6 pb-6 font-mono text-gray-500 hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="relative z-10 hidden px-6 pb-6 title">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/historias`}
          className="pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
        >
          Historias
        </Link>
        <Swiper {...params}>
          {data.historias.edges.map((item, i) => (
            <div className="relative w-full h-64 h-full px-0 pt-4 mb-12 overflow-hidden font-mono bg-gray-800 shadow post">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="relative z-10 title "
              >
                <h2 className="relative z-10 px-6 py-6 pb-1 mb-3 font-mono text-2xl text-red-500 title hover:text-white lg:mr-32">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="relative z-10 block px-6 pb-6 font-mono text-gray-500 hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="relative z-10 hidden px-6 pb-6 title">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/perfiles`}
          className="pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
        >
          Perfiles
        </Link>
        <Swiper {...params}>
          {data.perfiles.edges.map((item, i) => (
            <div className="relative w-full h-64 h-full px-0 pt-4 mb-12 overflow-hidden font-mono bg-gray-800 shadow post">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="relative z-10 title "
              >
                <h2 className="relative z-10 px-6 py-6 pb-1 mb-3 font-mono text-2xl text-red-500 title hover:text-white lg:mr-32">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="block px-6 pb-6 font-mono text-gray-500 hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="relative z-10 hidden px-6 pb-6 title">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/cine`}
          className="pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
        >
          Cine
        </Link>
        <Swiper {...params}>
          {data.cine.edges.map((item, i) => (
            <div className="relative w-full h-64 h-full px-0 pt-4 mb-12 overflow-hidden font-mono bg-gray-800 shadow post">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="relative z-10 title "
              >
                <h2 className="relative z-10 px-6 py-6 pb-1 mb-3 font-mono text-2xl text-red-500 title hover:text-white lg:mr-32">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="relative z-10 block px-6 pb-6 font-mono text-gray-500 hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="relative z-10 hidden px-6 pb-6 title">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
    </Layout>
  )
}

export default IndexPage

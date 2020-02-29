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

      <div className="homeHero py-12 pb-12 bg-gray-800 flex flex-col justify-center items-center relative">
        <h1 className="text-2xl pt-0 pb-12 px-6 md text-white font-mono w-full text-left md:text-center leading-10">
          <span className="block text-gray-400">La Noche Que </span>
          ella soño con el Centro Half
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
        <FiChevronsDown className="md:hidden text-5xl absolute bottom-0 animated bounce infinite slower delay-2s text-gray-400" />
      </div>

      <div className="max-w-6xl px-3 m-auto pt-12">
        <Link
          to={`/podcasts/entrevistas/`}
          className="text-red-500 text-2xl font-mono pb-3 pt-12 hover:text-white"
        >
          Entrevistas
        </Link>
        <Swiper {...params}>
          {data.entrevistas.edges.map((item, i) => (
            <div className="entrevista-item post font-mono h-full p-0 shadow bg-gray-800 mb-12 w-full relative overflow-hidden ">
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
                className="absolute hover:opacity-75 inset-0"
              />
            </div>
          ))}
        </Swiper>
      </div>

      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/musicales`}
          className="text-red-500 text-2xl font-mono pb-3 pt-12 hover:text-white"
        >
          Musicales
        </Link>
        <Swiper {...params}>
          {data.musica.edges.map((item, i) => (
            <div className="post font-mono h-full px-0 pt-4 shadow bg-gray-800 h-64 mb-12 w-full relative overflow-hidden">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title  z-10 relative  "
              >
                <h2 className="title  z-10 relative  px-6 py-6 pb-1 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="text-gray-500 px-6 pb-6 block font-mono hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="title  z-10 relative  px-6 pb-6 hidden">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute hover:opacity-75 inset-0"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/historias`}
          className="text-red-500 text-2xl font-mono pb-3 pt-12 hover:text-white"
        >
          Historias
        </Link>
        <Swiper {...params}>
          {data.historias.edges.map((item, i) => (
            <div className="post font-mono h-full px-0 pt-4 shadow bg-gray-800 h-64 mb-12 w-full relative overflow-hidden">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title  z-10 relative  "
              >
                <h2 className="title  z-10 relative  px-6 py-6 pb-1 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="text-gray-500  z-10 relative  px-6 pb-6 block font-mono hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="title  z-10 relative  px-6 pb-6 hidden">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute hover:opacity-75 inset-0"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/perfiles`}
          className="text-red-500 text-2xl font-mono pb-3 pt-12 hover:text-white"
        >
          Perfiles
        </Link>
        <Swiper {...params}>
          {data.perfiles.edges.map((item, i) => (
            <div className="post font-mono h-full px-0 pt-4 shadow bg-gray-800 h-64 mb-12 w-full relative overflow-hidden">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title  z-10 relative  "
              >
                <h2 className="title  z-10 relative  px-6 py-6 pb-1 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="text-gray-500 px-6 pb-6 block font-mono hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="title  z-10 relative  px-6 pb-6 hidden">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute hover:opacity-75 inset-0"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/cine`}
          className="text-red-500 text-2xl font-mono pb-3 pt-12 hover:text-white"
        >
          Cine
        </Link>
        <Swiper {...params}>
          {data.cine.edges.map((item, i) => (
            <div className="post font-mono h-full px-0 pt-4 shadow bg-gray-800 h-64 mb-12 w-full relative overflow-hidden">
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/${kebabCase(
                  item.node.slug
                )}/`}
                className="title  z-10 relative  "
              >
                <h2 className="title  z-10 relative  px-6 py-6 pb-1 text-red-500 mb-3 text-2xl font-mono hover:text-white lg:mr-32 font-mono">
                  {item.node.title}
                </h2>
              </Link>
              <Link
                to={`/columnas/${kebabCase(item.node.author.slug)}/`}
                className="text-gray-500  z-10 relative  px-6 pb-6 block font-mono hover:text-white"
              >
                x {item.node.author.name}
              </Link>
              <p className="title  z-10 relative  px-6 pb-6 hidden">
                {item.node.description.description}
              </p>
              <Img
                alt=""
                fixed={item.node.heroImage.fixed}
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute hover:opacity-75 inset-0"
              />
            </div>
          ))}
        </Swiper>
      </div>
    </Layout>
  )
}

export default IndexPage

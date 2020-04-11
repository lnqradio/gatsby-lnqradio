import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Particles from "react-particles-js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Img from "gatsby-image"

import "./index.css"
import Helmet from "react-helmet"

import { FiChevronsDown } from "react-icons/fi"

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
      musica: allContentfulColumnas(
        sort: { fields: [createdAt], order: DESC }
        filter: { author: {}, tipoDePodcast: { eq: "Musicales" } }
        limit: 6
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
        limit: 6
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
        limit: 6
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
        limit: 6
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
        limit: 6
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
      <SEO title="Inicio" />
      <Helmet>
        <body className="home headroom-top-transparent" />
      </Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
      ></link>

      <div
        className="relative flex flex-col items-center justify-center md:mt-0 md:pt-0 homeHero"
        style={{ minHeight: "90vh" }}
      >
        <h2 className="relative z-50 w-full max-w-lg px-6 pt-0 pb-3 m-auto my-0 font-mono text-lg text-center text-red-500 md:text-2xl md:leading-10">
          La Noche Que ella soño con el Centro Half
        </h2>
        <h2 className="relative z-50 w-full max-w-lg px-0 pt-0 pb-3 m-auto my-0 font-mono text-lg text-center text-white md:text-3xl animated fadeIn slow">
          Un nuevo episodio cada viernes
        </h2>

        <div className="relative z-50 justify-center block w-full max-w-lg m-auto my-0 sm:flex">
          <Link
            activeClassName="active"
            className="block px-6 py-2 mt-2 font-mono font-bold text-center text-white bg-red-800 md:inline-block sm:mr-2 hover:bg-red-700 hover:text-white md:w-64"
            to="/vivo/"
          >
            Último episodio
          </Link>
          <Link
            activeClassName="active"
            className="block px-6 py-2 mt-2 font-mono font-bold text-center text-white border border-indigo-100 md:inline-block sm:mr-2 hover:bg-indigo-800 hover:text-white hover:border-indigo-800 md:w-64"
            to="/notanenvivo/"
          >
            Episodios anteriores
          </Link>
        </div>

        <FiChevronsDown
          style={{ bottom: "30px" }}
          className="absolute bottom-0 text-5xl text-gray-400 animated bounce infinite slower delay-2s"
        />
        <Particles
          style={{ cursor: "crosshair" }}
          className="fixed inset-0 z-10 opacity-75"
          params={{
            particles: {
              number: {
                value: 190,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.2,
              },
              move: {
                direction: "random",
                speed: 1,
              },
              size: {
                value: 2,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
                onhover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>

      <div className="relative z-50 max-w-6xl px-3 pt-12 m-auto">
        <Link
          to={`/podcasts/entrevistas/`}
          style={{ zIndex: "9999" }}
          className="relative inline-block pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
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
              >
                <h3 className="mt-6 title ">{item.node.title}</h3>
                <p className="text-white description ">
                  {item.node.description.description}
                </p>
              </Link>

              <Img
                alt="{item.node.title}"
                fixed={item.node.heroImage.fixed}
                loading="lazy"
                style={{ position: "absolute", opacity: ".5" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>

      <div className="relative z-50 max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/musicales`}
          style={{ zIndex: "9999" }}
          className="relative inline-block pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
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
                alt="{item.node.title}"
                fixed={item.node.heroImage.fixed}
                loading="lazy"
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="relative z-50 max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/historias`}
          style={{ zIndex: "9999" }}
          className="relative inline-block pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
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
                alt="{item.node.title}"
                fixed={item.node.heroImage.fixed}
                loading="lazy"
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="relative z-50 max-w-6xl px-3 m-auto">
        <Link
          to={`/podcasts/perfiles`}
          style={{ zIndex: "9999" }}
          className="relative inline-block pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
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
                alt="{item.node.title}"
                fixed={item.node.heroImage.fixed}
                loading="lazy"
                style={{ position: "absolute", opacity: ".1" }}
                className="absolute inset-0 hover:opacity-75"
              />
            </div>
          ))}
        </Swiper>
      </div>
      <div className="relative z-50 max-w-6xl px-3 m-auto mb-20 md:mb-40">
        <Link
          to={`/podcasts/cine`}
          style={{ zIndex: "9999" }}
          className="relative inline-block pt-12 pb-3 font-mono text-2xl text-red-500 hover:text-white"
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
                alt="{item.node.title}"
                fixed={item.node.heroImage.fixed}
                loading="lazy"
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

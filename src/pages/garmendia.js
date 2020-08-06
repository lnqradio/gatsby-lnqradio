import React from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"
import { GiAstronautHelmet } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

//import ReactPlayer from "react-player"
const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <Helmet>
      <body className="domFiber" />
    </Helmet>
    <div className="relative z-50 max-w-2xl p-6 m-auto text-left md:p-12">
      <h3 className="flex flex-col items-center w-full py-6 mt-24 text-2xl text-center text-white uppercase">
        <GiAstronautHelmet className="my-3 text-6xl" />
        Artisticas Flaming Lips
      </h3>
      <div className="grid grid-cols-3 gap-2">
        <Link
          to={`/artisticas/flaming-lynch/`}
          className="font-mono uppercase artistica-card"
        >
          Flaming Lynch
        </Link>
        <Link
          to={`/artisticas/human-beings/`}
          className="font-mono uppercase artistica-card"
        >
          Human beings
        </Link>

        <Link
          to={`/artisticas/loloapps/`}
          className="font-mono uppercase artistica-card"
        >
          Lolo App
        </Link>
        <Link
          to={`/artisticas/elastrologo/`}
          className="font-mono uppercase artistica-card"
        >
          El Astrólogo
        </Link>
        <Link
          to={`/artisticas/movimiento/`}
          className="font-mono uppercase artistica-card"
        >
          movimiento
        </Link>
        <Link
          to={`/artisticas/lamuerte/`}
          className="font-mono uppercase artistica-card"
        >
          La Muerte
        </Link>
      </div>
    </div>
    <Particles
      style={{ cursor: "crosshair" }}
      className="fixed inset-0 z-10 opacity-75"
      params={{
        particles: {
          number: {
            value: 31,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 1,
          },
          move: {
            direction: "top",
            speed: 1,
            straight: true,
          },
          size: {
            value: 3,
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
  </Layout>
)

export default NotFoundPage

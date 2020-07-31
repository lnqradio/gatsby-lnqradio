import React from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import ReactPlayer from "react-player"
const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <div className="relative z-50 max-w-2xl p-6 m-auto text-left md:p-12">
      <h3 className="w-full py-6 text-2xl text-center text-white uppercase">
        Artisticas Flaming Lips
      </h3>
      <div className="grid grid-cols-3 gap-2">
        <Link to={`/artisticas/positional-audio/`} className="artistica-card">
          Audio posicional
          <span className="pl-2 text-xs text-white">Nuevo!</span>
        </Link>
        <Link to={`/artisticas/flaming-lynch/`} className="artistica-card">
          Flaming Lynch
        </Link>
        <Link to={`/artisticas/jesus/`} className="artistica-card">
          Jesús
        </Link>
        <Link to={`/artisticas/loloapps/`} className="artistica-card">
          Lolo App
        </Link>
        <Link to={`/artisticas/trinche/`} className="artistica-card">
          Trinche
        </Link>
        <Link to={`/artisticas/fiber/`} className="artistica-card">
          Fiber
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

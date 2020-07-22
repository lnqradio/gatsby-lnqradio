import React from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"
const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <div className="relative z-50 max-w-2xl p-6 m-auto text-left md:p-12">
      <h2 className="w-full py-6 text-xl italic text-white">
        Laboratorios Garmendia
      </h2>
      <h3 className="w-full py-6 text-base italic text-white">Flaming Lips</h3>
      <Link
        to={`/artisticas/flaming-lynch/`}
        className="block my-2 mr-3 font-bold text-red-600 hover:text-white "
      >
        Flaming Lynch
      </Link>
      <Link
        to={`/artisticas/jesus/`}
        className="block my-2 mr-3 font-bold text-red-600 hover:text-white "
      >
        Jesús
      </Link>
      <Link
        to={`/artisticas/loloapps/`}
        className="block my-2 mr-3 font-bold text-red-600 hover:text-white "
      >
        Lolo App
      </Link>

      <ReactPlayer
        url={[
          "https://www.youtube.com/watch?v=CJgRT8dbv2o",
          "https://www.youtube.com/watch?v=CYtKeQsudeE",
        ]}
      />
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

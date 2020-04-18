import React from "react"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <div className="relative z-50 max-w-6xl pt-6 m-auto text-left md:pt-12">
      <article className="max-w-sm text-center changelog ">
        <a
          href="https://github.com/lnqradio/gatsby-lnqradio"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-6 text-xl italic text-red-500"
        >
          # Registro de cambios. v.0.2.1
        </a>
      </article>
      <div className="flex flex-col justify-center max-w-2xl m-auto mt-6">
        <iframe
          border="0"
          frameborder="NO"
          width="100%"
          title="En vivo"
          height="100px"
          className="m-auto min-w-64"
          scrolling="NO"
          allowtransparency="yes"
          src="https://www.solumedia.com.ar/radios/8772"
        ></iframe>
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

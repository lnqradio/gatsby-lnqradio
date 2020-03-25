import React from "react"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <div className="max-w-6xl pt-6  md:pt-12 m-auto text-left relative z-50">
      <div className="flex flex-col justify-center mt-6 max-w-2xl m-auto">
        <iframe
          src="https://mixlr.com/users/7718965/embed?color=0d0314&autoplay=true"
          width="100%"
          className="max-w-sm m-auto my-6"
          height="150px"
          scrolling="no"
          frameborder="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <h1 className="text-white text-xl font-thin animated fadeInUp slow text-center pt-6">
          <span className="animated block flash infinite slower text-red-500  pt-2 text-xl uppercase mb-3 font-mono tracking-widest">
            Ensayo sobre formas de ver
          </span>
        </h1>
        <iframe
          src="https://player.twitch.tv/?autoplay=false&video=v571546383"
          frameborder="0"
          allowfullscreen="true"
          title="Video transmisión"
          scrolling="no"
          height="426"
          width="100%"
        ></iframe>
      </div>
      <article className="changelog">
        <a
          href="https://github.com/lnqradio/gatsby-lnqradio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-xl py-6 italic"
        >
          # Registro de cambios. v.0.1.3
        </a>
      </article>
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

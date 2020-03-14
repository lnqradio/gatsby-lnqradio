import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Particles from "react-particles-js"
import "./vivo.css"
import { GoLinkExternal } from "react-icons/go"
import Helmet from "react-helmet"

const VivoPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <Helmet>
      <body className="app-vivo" />
    </Helmet>
    <div className="max-w-lg pt-6 m-auto text-center live-stream md:pt-6">
      <div className="relative z-50 pt-6 pb-3 text-xl">
        <h1 className="w-full px-6 pt-0 pb-12 font-mono text-2xl leading-10 text-left text-white md md:text-center">
          <span className="block text-gray-400">La Noche Que </span>
          ella soño con el Centro Half
        </h1>
        <div className="text-center solumedia">
          <iframe
            border="0"
            frameborder="NO"
            width="300px"
            title="En vivo"
            height="100px"
            className="m-auto min-w-64"
            scrolling="NO"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/8772"
          ></iframe>
          <a
            href="https://www.solumedia.com.ar/radios/8772/"
            target="_blank"
            className="relative z-50 block mt-6 mb-12 text-sm text-red-200 underline hover:text-white"
            rel="noopener noreferrer"
          >
            Si no se reproduce probá, con un click aqui
            <GoLinkExternal className="inline-block ml-3 text-base text-white" />
          </a>
        </div>
        <h1 className="w-full px-0 pt-0 pb-3 font-mono text-3xl text-center text-red-500 animated fadeIn slow ">
          Un nuevo episodio en vivo cada viernes a las 20hs
        </h1>

        <Link
          activeClassName="active"
          className="block px-6 py-2 mt-2 mb-12 mx-2 font-mono text-white bg-indigo-800 md:inline-block hover:bg-indigo-900 hover:text-white"
          to="/notanenvivo/"
        >
          Episodios anteriores
        </Link>
      </div>
      <Particles
        style={{ cursor: "crosshair" }}
        className="fixed inset-0 z-10 opacity-75"
        params={{
          particles: {
            number: {
              value: 90,
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
  </Layout>
)

export default VivoPage

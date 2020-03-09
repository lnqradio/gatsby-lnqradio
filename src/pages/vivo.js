import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"

const VivoPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="max-w-4xl pt-6 m-auto text-center live-stream md:pt-6">
      <div
        className="relative pt-6 pb-3 text-xl"
        style={{ background: "#281136" }}
      >
        <div className="solumedia text-center ">
          <iframe
            border="0"
            frameborder="NO"
            width="300px"
            title="En vivo"
            height="200px"
            className="h-40 min-w-64 m-auto"
            scrolling="NO"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/8772"
          ></iframe>
        </div>
        <h1 className="w-full px-0 pt-0 text-3xl text-center text-red-500 animated fadeIn slow font-mono pb-3 ">
          Todos los viernes a las 20hs en vivo
        </h1>
        <h1 className="w-full px-6 pt-0 pb-12 font-mono text-2xl leading-10 text-left text-white md md:text-center">
          <span className="block text-gray-400">La Noche Que </span>
          ella soño con el Centro Half
        </h1>
      </div>
    </div>
  </Layout>
)

export default VivoPage

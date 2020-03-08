import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"

const VivoPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="max-w-4xl pt-6 m-auto text-center live-stream md:pt-6">
      <div className="relative pt-6 pb-3 text-xl">
        <h1 className="w-full px-0 pt-0 text-3xl text-center text-white animated fadeIn slow ">
          Escuchá el programa en vivo
        </h1>
        <h2 className="w-full px-0 pt-3 mb-6 text-xl text-center text-red-500 animated fadeIn slow ">
          Todos los viernes a las 20hs
        </h2>
        <div className="text-center solumedia ">
          <iframe
            border="0"
            width="300px"
            title="En vivo"
            height="200px"
            className="h-40 m-auto"
            scrolling="NO"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/8772"
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default VivoPage

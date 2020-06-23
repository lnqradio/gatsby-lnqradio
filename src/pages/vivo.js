import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./vivo.css"
import { Helmet } from "react-helmet"

import BgSlider from "../components/BgSlider"

const VivoPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <Helmet>
      <body className="" />
    </Helmet>
    <div className="max-w-lg pt-6 m-auto text-center live-stream md:pt-24">
      <div className="relative z-50 pt-6 pb-3 text-xl">
        <h1 className="inline-block p-6 py-2 my-0 font-mono text-2xl leading-10 text-left text-white bg-gray-800 md:text-left">
          La Noche Que ella soño con el Centro Half
        </h1>
        <h1 className="inline-block p-6 py-4 mt-2 mb-2 font-mono text-2xl text-left text-red-500 bg-gray-800 ">
          <span className="inline-block mr-1 text-gray-200">
            Nuevos episodios
          </span>{" "}
          los Viernes a las 20hs
        </h1>
        <div className="text-center solumedia">
          <iframe
            border="0"
            frameborder="NO"
            width="390px"
            title="En vivo"
            height="160px"
            className="pt-6 pl-0 m-auto mb-12 bg-gray-800"
            scrolling="NO"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/8772"
          ></iframe>
        </div>

        <Link
          activeClassName="active"
          className="hidden px-6 py-2 mx-2 mt-2 mb-12 font-mono text-white bg-red-700 border-4 border-purple-900 shadow-xl md:hidden hover:bg-red-800 hover:text-white"
          to="/notanenvivo/"
        >
          Episodios anteriores
        </Link>
      </div>
    </div>
    <BgSlider />
  </Layout>
)

export default VivoPage

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
      <body className="domFiber" />
    </Helmet>

    <div className="max-w-lg pt-6 m-auto text-center live-stream md:pt-24">
      <div className="relative z-50 pt-6 pb-3 text-xl">
        <h1 className="inline-block mt-2 font-mono text-6xl text-left text-white ">
          En Vivo
        </h1>
        <div className="relative overflow-hidden text-center solumedia">
          <iframe
            title="En vivo"
            border="0"
            frameBorder="NO"
            className="relative m-0 mx-auto bg-gray-800"
            width="350px"
            height="500px"
            scrolling="NO"
            marginheight="0px"
            marginwidth="0px"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/6320/index.html"
          />
        </div>
        <Link
          activeClassName="active"
          className="flex items-center justify-center max-w-xs px-6 py-2 pt-3 mx-auto mt-3 mb-12 font-sans text-white uppercase transition-all duration-500 bg-gray-800 rounded shadow-xl hover:bg-red-700 hover:text-white"
          to="/"
        >
          Volver al inicios
        </Link>
      </div>
    </div>
    <BgSlider />
  </Layout>
)

export default VivoPage

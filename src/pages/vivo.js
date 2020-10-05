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
        <h1 className="inline-block p-6 py-4 mt-2 mb-2 font-sans text-2xl text-left text-white bg-gray-800 ">
          Todos los Viernes a las 20hs un nuevo episodio
        </h1>
        <h1 className="inline-block p-6 py-2 my-0 font-sans text-2xl leading-10 text-left text-red-500 bg-gray-800 md:text-left">
          La Noche Que ella soño con el Centro Half
        </h1>
        <div className="text-center solumedia">
          <iframe
            border="0"
            frameborder="NO"
            width="390px"
            title="En vivo"
            height="160px"
            className="pt-6 pl-0 m-auto mb-8 bg-gray-800"
            scrolling="NO"
            allowtransparency="yes"
            src="https://www.solumedia.com.ar/radios/8772"
          ></iframe>
        </div>

        <Link
          activeClassName="active"
          className="px-6 py-2 mx-2 mt-0 mb-12 font-sans text-white uppercase transition-all duration-500 bg-gray-800 shadow-xl hover:bg-transparent hover:text-white"
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

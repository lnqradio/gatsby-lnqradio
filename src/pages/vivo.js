import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="py-4 text-center bg-red-900 lg:px-4">
      <Link
        className="flex items-center p-2 leading-none text-red-100 transition-all duration-200 bg-red-800 hover:text-white hover:bg-red-600 lg:rounded-full lg:inline-flex"
        role="alert"
        to="/"
      >
        <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-red-500 rounded-full">
          En vivo
        </span>
        <span className="flex-auto mr-2 font-semibold text-left">
          Todos los viernes a las 20hs
        </span>
        <svg
          className="w-4 h-4 opacity-75 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </Link>
    </div>
    <div className="max-w-4xl pt-6 m-auto text-center live-stream md:pt-6">
      <div className="relative pt-6 pb-3 text-xl border-b-2 border-purple-900 animated fadeIn slower">
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
            src="https://www.solumedia.com.ar/radios/8772/index.html"
          ></iframe>
        </div>

      </div>
    </div>
  </Layout>
)

export default NotFoundPage

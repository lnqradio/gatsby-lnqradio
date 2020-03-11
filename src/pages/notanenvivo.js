import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="py-4 text-center bg-red-900 lg:px-4">
      <Link
        className="flex items-center p-2 leading-none text-red-100 transition-all duration-200 bg-red-800 hover:text-white hover:bg-red-600 lg:rounded-full lg:inline-flex"
        role="alert"
        to="/vivo"
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
    <div className="max-w-4xl pt-6 m-auto text-left live-stream md:pt-6">
      <div className="relative hidden pt-6 pb-3 text-xl border-b-2 border-purple-900 animated fadeIn slower">
        <h1 className="w-full px-0 pt-0 text-3xl text-left text-white animated fadeIn slow ">
          Escuchá el programa en vivo
        </h1>
        <h2 className="w-full px-0 pt-3 mb-6 text-xl text-left text-red-500 animated fadeIn slow ">
          Todos los viernes a las 20hs
        </h2>
      </div>

      <div className="pt-6 text-xl animated fadeIn slower">
        <div className="relative live">
          <h2 className="block w-full p-6 pb-0 font-mono text-right text-white">
            <span className="block pb-2 text-3xl text-red-500">
              No Tan en Vivo.
            </span>
            Todos los programas.
            <span className="block pl-2 text-gray-500">
              Muchas horas, muchos minutos y algunos segundos.
            </span>
          </h2>
          <div className="absolute top-0 right-0 hidden w-32 m-6 mt-1 mt-8 md:block logo">
            <Image />
          </div>
          <h2 className="w-full px-6 pt-3 pb-0 mb-0 font-mono text-xl text-right text-white animated fadeIn slow">
            Ponele play y escucha de todo.{" "}
            <span className="block py-3 text-red-500">
              Sin publicidad y gratarola.
            </span>
          </h2>
          <iframe
            width="100%"
            height="850"
            className=" w-full p-6 pt-2 my-6 mt-2"
            scrolling="no"
            title="soundcloud episodios"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/749768106&color=%23281136&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

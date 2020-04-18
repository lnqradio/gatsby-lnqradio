import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Notan En VIVO" />

    <div className="max-w-4xl pt-6 m-auto text-left live-stream md:pt-6">
      <div className="relative flex flex-col items-center pt-6 pb-3 text-xl animated fadeIn slower">
        <h1 className="w-full px-0 pt-0 text-3xl text-center text-white animated fadeIn slow">
          Un nuevo episodio cada viernes
        </h1>
        <Link
          to={`/episodios/`}
          className="px-4 my-3 font-mono text-lg text-white uppercase transition duration-150 ease-in-out bg-red-700 hover:text-red-100 hover:bg-red-800"
        >
          Escuchar temporada 6
        </Link>
      </div>

      <div className="pt-6 text-xl animated fadeIn slower">
        <div className="relative live">
          <h2 className="block w-full p-6 pb-0 font-mono text-center text-white md:text-right">
            <span className="block pt-4 pb-2 text-3xl ">
              Todos los episodios
            </span>
            <span className="block pl-2 text-gray-500">
              Muchas horas, minutos y segundos.
            </span>
          </h2>
          <div className="absolute top-0 right-0 hidden w-32 m-6 mt-1 mt-8 md:block logo">
            <Image />
          </div>
          <h2 className="w-full px-6 pt-3 pb-0 mb-0 font-mono text-xl text-center text-white md:text-right animated fadeIn slow">
            Ponele play y escucha de todo
            <span className="inline-block pl-2 text-red-500 ">gratarola.</span>
          </h2>
          <iframe
            width="100%"
            height="850"
            className="w-full p-6 pt-2 my-6 mt-2 "
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

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="bg-red-900 text-center py-4 lg:px-4">
      <Link
        className="p-2 bg-red-800 hover:text-white hover:bg-red-600  items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex transition-all duration-200"
        role="alert"
        to="/"
      >
        <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          En vivo
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          Todos los viernes a las 20hs
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </Link>
    </div>
    <div className="live-stream max-w-4xl pt-6 md:pt-6 m-auto text-left">
      <div className="animated fadeIn slower pt-6 text-xl relative border-purple-900 pb-3 border-b-2 hidden">
        <h1 className="text-white text-left text-3xl w-full animated fadeIn  slow px-0 pt-0 ">
          Escuchá el programa en vivo
        </h1>
        <h2 className="text-red-500 text-xl w-full text-left animated fadeIn slow px-0 pt-3 mb-6 ">
          Todos los viernes a las 20hs
        </h2>
        <iframe
          width="300px"
          height="200px"
          title="LNQRadio en vivo"
          className="relative right-0 top-0 md:absolute"
          name="htmlComp-iframe"
          scrolling="auto"
          src="https://www-lnqradio-com.filesusr.com/html/80866a_abf8a98d014638b9f83f01f283f520d3.html"
        ></iframe>
      </div>

      <div className="animated fadeIn slower pt-6 text-xl">
        <div className="live relative">
          <h2 className="text-right font-mono block w-full text-white p-6 pb-0">
            <span className="text-red-500  text-3xl block pb-2">
              No Tan en Vivo.
            </span>
            Todos los programas.
            <span className="text-gray-500 pl-2 block">
              Muchas horas, muchos minutos y algunos segundos.
            </span>
          </h2>
          <div className="w-32 absolute hidden md:block right-0 top-0 m-6 mt-8 mt-1 logo">
            <Image />
          </div>
          <h2 className="text-white font-mono text-xl w-full text-right animated fadeIn slow px-6 pt-3 mb-0 pb-0">
            Ponele play y escucha de todo.{" "}
            <span className="text-red-500 block py-3">
              {" "}
              Sin publicidad y gratarola.
            </span>
          </h2>

          <iframe
            width="100%"
            height="850"
            className="w-full  my-6 mt-2 p-6 pt-2"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/749768106&color=%23f56565&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

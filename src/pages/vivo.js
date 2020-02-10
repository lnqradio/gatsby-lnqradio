import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="live-stream max-w-4xl pt-6 md:pt-16 m-auto text-left">
      <div className="animated fadeIn slower pt-6 text-xl relative border-purple-900 pb-3 border-b-2">
        <h1 className="text-white text-left text-3xl w-full animated fadeIn  slow px-0 pt-0 ">
          Escuchá el programa en vivo
        </h1>
        <h2 className="text-red-500 text-xl w-full text-left animated fadeIn slow px-0 pt-3 mb-6 ">
          Todos los viernes a las 20hs
        </h2>
        <iframe
          width="300px"
          height="200px"
          title="live"
          className="relative right-0 top-0 md:absolute"
          name="htmlComp-iframe"
          scrolling="auto"
          src="https://www-lnqradio-com.filesusr.com/html/80866a_abf8a98d014638b9f83f01f283f520d3.html"
        ></iframe>
      </div>
      <div className="animated fadeIn slower pt-6 text-xl">
        <div className="live relative">
          <h2 className="text-left block w-full text-white p-6 pb-0">
            Selección LNQRadio
          </h2>
          <iframe
            width="100%"
            height="850"
            scrolling="no"
            className="w-full  my-6 p-6"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/753004221&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>

          <div className="bg-gray-900 w-full text-center">
            <h2 className="text-white text-3xl mt-12">Beta: Twitch</h2>
            <iframe
              src="https://player.twitch.tv/?autoplay=false&video=v549655400"
              frameborder="0"
              allowfullscreen="true"
              scrolling="no"
              height="378"
              className="mb-12 m-auto"
              width="620"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./vivo.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="En VIVO" />
    <div className="live-stream max-w-4xl pt-6 md:pt-16 m-auto text-center">
      <div className="animated fadeIn slower pt-6 text-xl">
        <div className="live">
          <h1 className="text-white text-3xl font-thin animated fadeIn mt-12 slow px-4 ">
            Viernes a las 20hs
          </h1>
          <h3 className="animated fadeIn slower leading-relaxed">
            Próximo episodio: 22 de Noviembre
          </h3>
          <h4 className="text-red-500 py-6 animated fadeIn block slower">
            Episodio 31
          </h4>
          <iframe
            width="300px"
            height="200px"
            title="live"
            name="htmlComp-iframe"
            scrolling="auto"
            src="https://www-lnqradio-com.filesusr.com/html/80866a_abf8a98d014638b9f83f01f283f520d3.html"
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

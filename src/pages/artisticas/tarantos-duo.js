import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BgSlider from "../../components/BgSlider"

const TarantosPage = () => {
  return (
    <Layout>
      <SEO title="Tarantos Dúo" />
      <BgSlider />
      <div className="flex items-center justify-center tarantos">
        <div className="w-full max-w-xl m-auto my-0 ">
          <h1 className="inline-block max-w-4xl px-6 py-3 text-xl text-center text-gray-400 bg-gray-800 shadow-2xl tarantos-title">
            En la Terraza: Tarantos Dúo
          </h1>
          <div className="video-container">
            <iframe
              width="100%"
              height="365"
              title="En la Terraza: Tarantos Dúo"
              src="https://www.youtube-nocookie.com/embed/videoseries?list=PL7X4WhEiBg4oiF4Mn5SUtRVr_vNTew-jg"
              frameborder="0"
              className="bg-gray-800 shadow-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TarantosPage

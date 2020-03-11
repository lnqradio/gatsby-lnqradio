import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FiccionesPage = () => {
  return (
    <Layout>
      <SEO title="Ficciones" />
      <div className="posts flex  flex-wrap max-w-full m-auto">
        <div className=" max-w-6xl pt-12 m-auto text-center">
          <h1 className="text-white text-3xl mb-5 font-thin">Ficciones</h1>
          <div className="flex flex-col flex-wrap lg:flex-row justify-center">
            <iframe
              width="300"
              height="450"
              scrolling="no"
              className="m-2"
              title="Radioteatro - Distopia Feminista"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/753485889&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="300"
              height="450"
              className="m-2"
              title="Sketch - Informe academia Paraguaya"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758502684&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FiccionesPage

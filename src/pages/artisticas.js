import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import BgSlider from "../components/BgSlider"

const ArtisticasPage = () => {
  return (
    <Layout>
      <SEO title="Artisticas" />
      <BgSlider />
      <div className="flex justify-center pt-20 md:pt-0 md:items-center tarantos">
        <div className="w-full max-w-lg px-3 m-auto my-0">
          <h1 className="inline-block px-6 py-3 text-xl text-center text-gray-400 bg-gray-800 shadow-2xl tarantos-title">
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
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-w-full m-auto mb-12 posts">
        <div
          className="max-w-4xl px-0 py-8 m-auto text-center "
          style={{
            background: "rgba(40, 17, 54, 0.9)",
          }}
        >
          <Link
            activeClassName="active"
            className="hidden px-6 py-2 mt-2 font-mono font-bold text-center text-white bg-red-800 sm:mr-2 hover:bg-red-700 hover:text-white md:w-64"
            to="/artisticas/tarantos-duo"
          >
            La pereza
          </Link>
          <Link
            activeClassName="active"
            className="hidden px-6 py-2 mt-2 font-mono font-bold text-center text-white bg-red-800 sm:mr-2 hover:bg-red-700 hover:text-white md:w-64"
            to="/artisticas/aradio-a-dos-charlas"
          >
            A dos Charlas
          </Link>
          <div className="flex flex-col flex-wrap justify-center lg:flex-row">
            <iframe
              width="300"
              height="450"
              scrolling="no"
              title="La Pereza"
              className="m-2 search-item animated fadeIn"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/762926454&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="300"
              height="450"
              scrolling="no"
              title="aRadio - a dos charlas"
              className="m-2 search-item animated fadeIn"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/772452537&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="300"
              height="450"
              className="m-2 search-item animated fadeIn"
              scrolling="no"
              title="Claudicacion de un no-prólogo"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/708948864&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="300"
              height="450"
              className="m-2 search-item animated fadeIn"
              scrolling="no"
              title="Momento Flaming Lips"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/708878205&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="300"
              height="450"
              scrolling="no"
              title="Prologo"
              className="m-2 search-item animated fadeIn"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/761934822&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArtisticasPage

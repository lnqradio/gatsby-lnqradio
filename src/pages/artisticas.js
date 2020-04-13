import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ArtisticasPage = () => {
  return (
    <Layout>
      <SEO title="Artisticas" />
      <div className="flex flex-wrap max-w-full m-auto posts">
        <div className="max-w-6xl pt-12 m-auto text-center ">
          <h1 className="mb-5 text-3xl font-thin text-white">Artisticas</h1>
          <Link
            activeClassName="active"
            className="hidden px-6 py-2 mt-2 font-mono font-bold text-center text-white bg-red-800 sm:mr-2 hover:bg-red-700 hover:text-white md:w-64"
            to="/artisticas/pereza"
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

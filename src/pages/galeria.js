import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GaleriaPage = () => {
  return (
    <Layout>
      <SEO title="Galería" />
      <div className="flex flex-wrap max-w-full m-auto posts">
        <div className="max-w-6xl pt-12 m-auto text-center ">
          <h1 className="mb-5 text-3xl font-thin text-white">Galería</h1>
          <div className="flex flex-col flex-wrap justify-center lg:flex-row">
            <iframe
              width="100%"
              height="20"
              scrolling="no"
              title="La audio de la pereza"
              frameborder="no"
              className="block pr-2 my-3 bg-gray-800 rounded-full"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/610356171&color=%23ff5500&inverse=true&auto_play=true&show_user=false"
            ></iframe>
            <iframe
              width="100%"
              height="20"
              scrolling="no"
              title="La audio de la pereza"
              frameborder="no"
              className="block pr-2 my-3 bg-gray-800 rounded-full"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/610354974&color=%23ff5500&inverse=true&auto_play=true&show_user=false"
            ></iframe>
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

export default GaleriaPage
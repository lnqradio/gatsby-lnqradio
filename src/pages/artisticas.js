import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import BgSlider from "../components/BgSlider"
import { GiAstronautHelmet } from "react-icons/gi"
const ArtisticasPage = () => {
  return (
    <Layout>
      <SEO title="Artisticas" />
      <BgSlider />

      <div>
        <div className="relative z-50 hidden max-w-2xl p-6 m-auto text-left md:p-12 md:pt-12">
          <h3 className="flex flex-col items-center w-full py-6 mt-2 text-4xl text-center text-white uppercase">
            <GiAstronautHelmet className="my-3 text-6xl" />
            Psiconáutica
            <small className="px-4 py-2 mt-2 text-xs leading-5 text-red-100 bg-gray-800">
              Solo para PCs <br /> (¡puede fallar!)
            </small>
          </h3>

          <div className="grid gap-2 sm:grid-cols-3">
            <Link
              to={`/artisticas/flaming-lynch/`}
              className="font-sans uppercase artistica-card"
            >
              Flaming Lynch
            </Link>
            <Link
              to={`/artisticas/human-beings/`}
              className="font-sans uppercase artistica-card"
            >
              Human beings
            </Link>

            <Link
              to={`/artisticas/loloapps/`}
              className="font-sans uppercase artistica-card"
            >
              Lolo App
            </Link>
            <Link
              to={`/artisticas/elastrologo/`}
              className="font-sans uppercase artistica-card"
            >
              El Astrólogo
            </Link>
            <Link
              to={`/artisticas/movimiento/`}
              className="font-sans uppercase artistica-card"
            >
              El movimiento
            </Link>
            <Link
              to={`/artisticas/lamuerte/`}
              className="font-sans uppercase artistica-card"
            >
              La Muerte
            </Link>
          </div>
        </div>
      </div>

      <div className="justify-center hidden pt-24 pb-12 md:pt-40 md:items-center">
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
              frameBorder="0"
              className="bg-gray-800 shadow-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap max-w-full pt-24 m-auto mb-12 md:pt-40 posts">
        <h1 className="font-mono text-6xl text-center text-white ">
          aaaartisticas
        </h1>
        <div
          className="w-full max-w-lg px-0 py-8 m-auto mx-auto text-center"
          style={{
            background: "rgba(40, 17, 54, 0.9)",
          }}
        >
          <div className="grid gap-3 px-6 text-center md:grid-cols-1">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              title="Si la segunda guerra mundial hubiera ocurrido en un bar"
              className="w-full mx-auto search-item"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/844743511&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              title="La Pereza"
              className="w-full mx-auto search-item"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/610354974&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              title="La Pereza"
              className="w-full mx-auto search-item"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/575372265&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              title="Poemas"
              className="w-full mx-auto search-item"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1104169705&color=%23f56565&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>

            <iframe
              width="100%"
              height="166"
              scrolling="no"
              title="La Pereza"
              className="w-full mx-auto search-item"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/762926454&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              title="aRadio - a dos charlas"
              className="w-full mx-auto search-item"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/772452537&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              className="w-full mx-auto search-item"
              scrolling="no"
              title="Claudicacion de un no-prólogo"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/708948864&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              className="w-full mx-auto search-item"
              scrolling="no"
              title="Momento Flaming Lips"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/708878205&color=%23281136&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              title="Prologo"
              className="w-full mx-auto search-item"
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

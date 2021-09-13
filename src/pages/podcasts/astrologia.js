import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PodcastHero from "../../components/PodcastHero"
import {
  GiRingedPlanet
} from "react-icons/gi"

const AstrologiaPage = () => {
  return (
    <Layout>
      <SEO title="Astrología" />
      <PodcastHero
        heading="Cada Mente Un Planeta"
        icon={<GiRingedPlanet className="text-6xl" />}
      />
      <div className="grid max-w-6xl grid-cols-1 gap-6 pb-12 mx-auto">
        <div
          className="relative block w-full max-w-5xl mx-auto font-mono shadow-sm"
          style={{
            background: "rgba(40, 17, 54, 0.91)",
          }}
        >
          <div
            className="flex items-center justify-between listen"
            style={{
              opacity: 0.9,
            }}
          >
            <iframe
              width="100%"
              height="150"
              scrolling="no"
              title="La deuda"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1117475335&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>
          <div className="relative flex flex-col items-center justify-center px-4 pb-1">
            <h2 className="flex items-baseline w-full pt-2 text-3xl font-bold leading-normal text-center text-white uppercase">
              <span className="flex-1">
                2 - Eje Virgo/Piscis o las puertas de la percepción
              </span>
            </h2>
          </div>
        </div>
        <div
          className="relative block w-full max-w-5xl mx-auto font-mono shadow-sm"
          style={{
            background: "rgba(40, 17, 54, 0.91)",
          }}
        >
          <div
            className="flex items-center justify-between listen"
            style={{
              opacity: 0.9,
            }}
          >
            <iframe
              width="100%"
              height="250"
              scrolling="no"
              title="La deuda"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1114139371&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>
          <div className="relative flex flex-col items-center justify-center px-4 pb-1">
            <h2 className="flex items-baseline w-full pt-2 text-3xl font-bold leading-normal text-center text-white uppercase">
              <span className="flex-1">1 - Luna Nueva En Leo</span>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AstrologiaPage

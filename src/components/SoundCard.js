import React from "react"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import Toggle from "./Toggle"

export default ({ card }) => (
  <div
    key={card.id}
    className="relative flex-auto w-full h-56 max-w-lg overflow-hidden bg-gray-800 post animated fadeIn slow"
  >
    <div className="relative z-50 h-full px-0 pt-4 mb-20 shadow">
      <Link
        to={`/columnas/${kebabCase(card.author.name)}/${kebabCase(card.slug)}/`}
        className="inline-block px-4 pt-1 pr-16 mb-1 font-mono text-lg text-red-500 md:text-xl lg:text-2xl title hover:text-white min-h-20"
      >
        {card.title}
      </Link>
      <div>
        <Link
          to={`/columnas/${kebabCase(card.author.name)}/`}
          className="inline-block px-4 pb-1 mb-2 font-mono text-base text-gray-500 hover:text-white"
        >
          by {card.author.name}
        </Link>
      </div>

      <Toggle
        text={card.description.description}
        title={card.title}
        author={card.author.name}
        slug={card.slug}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-3 bg-gray-800 listen">
        <iframe
          width="100%"
          height="20"
          scrolling="no"
          frameBorder="no"
          title={card.title}
          className="w-full px-0 sm:px-12 inline-soundcloud"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
            card.soundcloudTrackID
          )}&color=%23f56565&inverse=true&auto_play=false&show_user=false`}
        ></iframe>
      </div>
    </div>
    <div
      className="absolute inset-0 bg-image-hover-opacity"
      style={{ opacity: ".2" }}
    >
      <Img alt="{card.title}" fixed={card.heroImage.fixed} />
    </div>
  </div>
)

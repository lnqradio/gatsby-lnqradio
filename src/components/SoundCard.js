import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"

import { Link } from "gatsby"

export default ({ card }) => (
  <div key={card.id} className="">
    <div className="relative z-50 h-full px-0 pt-0 shadow">
      <div className="relative h-64 overflow-hidden">
        <Img alt="{card.title}" fixed={card.heroImage.fixed} />
      </div>
      <h3 className="z-50 hidden px-4 py-4 text-base text-center text-gray-100 bg-gray-900 ">
        {card.title}
      </h3>
      <div className="flex items-center justify-between px-1 py-3 bg-gray-900 listen">
        <iframe
          width="100%"
          height="20"
          scrolling="no"
          frameborder="no"
          title={card.title}
          className="w-full px-2"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${kebabCase(
            card.soundcloudPlayer.soundcloudPlayer
          )}&color=%23281136&inverse=true&auto_play=false&show_user=false`}
        ></iframe>
      </div>
    </div>
  </div>
)

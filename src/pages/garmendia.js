import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <div className="max-w-2xl pt-6  md:pt-20 m-auto text-left">
      <h1 className="text-white text-3xl font-thin animated fadeInUp slow text-center md:text-left px-6">
        <span className="animated hinge delay-3s block slower  ">
          Laboratorios Garmendia
        </span>
        <span className="animated block flash infinite slower text-red-500  pt-2 text-xl uppercase mb-3 font-mono tracking-widest">
          Ensayo sobre las formas de ver
        </span>
      </h1>
      <div className="flex justify-center mt-6 max-w-2xl m-auto">
        <iframe
          src="https://player.twitch.tv/?autoplay=false&video=v566775017"
          frameborder="0"
          allowfullscreen="true"
          title="Video transmisión"
          scrolling="no"
          height="380"
          width="100%"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

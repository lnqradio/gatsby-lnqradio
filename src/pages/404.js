import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-2xl pt-6  md:pt-20 m-auto text-left">
      <h1 className="text-white pl-12 text-6xl font-thin animated fadeInUp slow text-center md:text-left px-6">
        <span className="animated hinge delay-3s block slower  ">404</span>
      </h1>
      <div className="flex justify-center mt-6 max-w-2xl m-auto">
        <iframe
          src="https://player.twitch.tv/?autoplay=false&video=v555746285"
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

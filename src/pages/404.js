import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-2xl pt-6 m-auto text-left md:pt-20">
      <h1 className="px-6 pl-12 text-6xl font-thin text-center text-white animated fadeInUp slow md:text-left">
        <span className="block animated hinge delay-3s slower ">404</span>
      </h1>
      <div className="flex justify-center max-w-2xl m-auto mt-6">
        <iframe
          src="https://player.twitch.tv/?autoplay=false&video=v555746285"
          frameborder="0"
          allowFullScreen="true"
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

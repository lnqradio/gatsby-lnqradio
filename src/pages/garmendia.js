import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Laboratorios Garmendia" />
    <div className="max-w-4xl pt-32 m-auto text-center">
      <h1 className="text-white text-3xl font-thin">Laboratorios Garmendia</h1>
      <p className="animated flash infinite slower pt-6 text-xl">
        Proximamente
      </p>
    </div>
  </Layout>
)

export default NotFoundPage

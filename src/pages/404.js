import React from "react"
import { Link } from "gatsby"

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
        <div className="max-w-6xl py-3 pb-12 m-auto text-left">
          <Link
            to={`/`}
            className="px-4 pb-1 my-3 font-mono text-lg text-white transition duration-150 ease-in-out bg-red-700 hover:text-red-100 hover:bg-red-800"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

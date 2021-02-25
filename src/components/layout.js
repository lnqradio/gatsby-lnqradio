/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from "../components/image"
import Mailchimp from "../components/mailchimp"
import SimpleReactLightbox from "simple-react-lightbox"
import ReactTooltip from "react-tooltip"
import "./layout.css"
import "./animate.css"
import {
  FaSoundcloud,
  FaSpotify,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
        buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
      }
    }
  `)

  return (
    <>
      <div className="w-full m-auto app-container">
        <AnchorLink
          href={`#top`}
          className="z-50 p-3 font-sans text-red-500 to-top hover:text-white min-w-xm"
        >
          <span className="z-50 block text-sm" role="img">
            Arriba!
          </span>
        </AnchorLink>
        <SimpleReactLightbox>
          <main className="pt-0 overflow-hidden">{children}</main>
        </SimpleReactLightbox>
        <footer className="relative z-40 pt-12">
          <div className="flex justify-center my-3 mb-3 text-5xl social">
            <a
              href="https://open.spotify.com/show/4ckNz9pdLNTunf82vBEfGm?si=kp7apoksQnmpTJ5ciITONA"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6"
            >
              <FaSpotify />
            </a>
            <a
              href="https://soundcloud.com/lnqescech"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6"
            >
              <FaSoundcloud />
            </a>
            <a
              href="https://www.instagram.com/lnqradio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/lnqradio"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.facebook.com/lnqradio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6"
            >
              <FaFacebookSquare />
            </a>
          </div>
          <div className="text-gray-500 ">
            <Link to="/artisticas" className="font-mono text-6xl text-center border-b border-transparent hover:border-red-500">
              escuchad donde y cuando gusteis
            </Link>
          </div>
          <Mailchimp />
          <p>© {new Date().getFullYear()}, Realizado con el apoyo de </p>
          <p className="font-bold text-red-600 ">Laboratorios Garmendia</p>
          <div className="w-48 max-w-xl py-6 m-auto text-center ">
            <Image />
          </div>
          <p className="pt-6 text-sm text-gray-500">
            Última actualización
            <span className="block pt-1 font-bold uppercase ">
              {data.site.buildTime}
            </span>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

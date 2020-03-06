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
import "./layout.css"
import "./animate.css"
import ReactTooltip from "react-tooltip"

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
          className="z-50 p-3 font-mono text-red-500 to-top hover:text-white min-w-xm"
        >
          <span className="block text-sm" role="img">
            Arriba!
          </span>
        </AnchorLink>

        <main className="pt-12 overflow-hidden md:pt-0">{children}</main>
        <footer>
          <div className="w-24 max-w-xl py-6 m-auto text-center">
            <Image />
            <h4 className="my-2 text-white">LNQRadio</h4>
          </div>
          <ReactTooltip
            place="bottom"
            type="dark"
            effect="solid"
            className="bg-red-500 shadow"
          />
          <div className="inline-block my-3 mb-12 text-3xl social">
            <a
              href="https://www.facebook.com/lnqradio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i
                className="fa fa-facebook "
                data-tip="Facebook"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://twitter.com/lnqradio"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i
                className="fa fa-twitter "
                data-tip="Twitter"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/lnqradio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i
                className="fa fa-instagram "
                data-tip="Instagram"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://open.spotify.com/show/4ckNz9pdLNTunf82vBEfGm?si=kp7apoksQnmpTJ5ciITONA"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i
                className="fa fa-spotify "
                data-tip="Spotify"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://soundcloud.com/lnqescech"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i
                className="fa fa-soundcloud "
                data-tip="Soundcloud"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <p>© {new Date().getFullYear()}, Realizado con el apoyo de </p>
          <Link to={`/garmendia/`} className="font-bold text-red-600 ">
            Laboratorios Garmendia
          </Link>
          <p className="pt-6 text-sm text-gray-500">
            Última: actualización
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

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
      <div className="app-container m-auto w-full">
        <AnchorLink
          href={`#top`}
          className="to-top hover:text-white p-3 text-red-500 z-50 font-mono min-w-xm"
        >
          <span className="text-sm  block" role="img">
            Arriba!
          </span>
        </AnchorLink>

        <main className="pt-12 md:pt-0 overflow-hidden">{children}</main>
        <footer>
          <div className="w-24 max-w-xl text-center m-auto py-6">
            <Image />
            <h4 className="text-white my-2">LNQRadio</h4>
          </div>
          <ReactTooltip
            place="bottom"
            type="dark"
            effect="solid"
            className="shadow bg-red-500"
          />
          <div className="social inline-block my-3 text-3xl mb-12">
            <a
              href="https://www.facebook.com/lnqradio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <i
                class="fa fa-facebook  "
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
                class="fa fa-twitter  "
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
                class="fa fa-instagram  "
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
                class="fa fa-spotify "
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
                class="fa fa-soundcloud "
                data-tip="Soundcloud"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <p>© {new Date().getFullYear()}, Realizado con el apoyo de </p>
          <Link to={`/garmendia/`} className=" font-bold text-red-600">
            Laboratorios Garmendia
          </Link>
          <p className="text-gray-500 pt-6 text-sm">
            Última: actualización
            <span className="block font-bold uppercase pt-1 ">
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

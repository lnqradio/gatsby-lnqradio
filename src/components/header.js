import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Headroom from "react-headroom"
import { IoMdSearch } from "react-icons/io"

import "./header.css"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <header className="top-0 left-0 right-0 z-10 header">
      <div className="inline-block pl-16 pr-3 text-left inner-header md:pl-20 md:flex md:items-center ">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div className="absolute w-24 p-1 mt-3 transition-all duration-500 ease-in-out transform lg:w-32 logo">
            <Image />
          </div>
          <h1 className="hidden max-w-lg p-0 m-0 text-white md:mr-12">
            {siteTitle}
          </h1>
        </Link>
        <nav className="justify-center hidden w-full pr-0 mt-0 text-base lg:flex">
          <Link
            className="cursor-pointer"
            activeClassName="font-bold active"
            to="/"
          >
            Inicio
          </Link>
          <Link
            className="cursor-pointer"
            activeClassName="font-bold active"
            to="/podcasts/"
          >
            Podcasts
          </Link>
          <Link
            className="cursor-pointer"
            activeClassName="font-bold active"
            to="/episodios/"
          >
            Episodios
          </Link>

          <Link
            className="cursor-pointer"
            activeClassName="font-bold active"
            to="/artisticas/"
          >
            Artisticas
          </Link>

          <Link
            className="cursor-pointer"
            activeClassName="font-bold active"
            to="/artisticas/galeria"
          >
            Galería
          </Link>

          <Link
            className="cursor-pointer"
            activeClassName="font-bold active"
            to="/ficciones/"
          >
            Ficciones
          </Link>
        </nav>

        <Link
          className="items-center justify-end hidden pl-3 text-right text-white nav-search lg:flex hover:text-red-600 "
          activeClassName="active"
          to="/search/"
        >
          <IoMdSearch className="w-6 h-6 mr-3" />
        </Link>
        <Link
          activeClassName="active"
          className="hidden px-6 pb-1 text-white bg-gray-600 live-link hover:text-gray-300"
          to="/notanenvivo/"
        >
          <svg
            className="inline-block pb-1 pr-1 text-2xl svg-icon"
            viewBox="0 0 20 20"
          >
            <path
              className="fill-current"
              d="M10.403,15.231v2.035h2.827c0.223,0,0.403,0.181,0.403,0.404c0,0.223-0.181,0.403-0.403,0.403H6.77c-0.223,0-0.404-0.181-0.404-0.403c0-0.224,0.181-0.404,0.404-0.404h2.826v-2.035C6.89,15.024,4.751,12.758,4.751,10c0-0.223,0.181-0.403,0.404-0.403S5.559,9.777,5.559,10c0,2.449,1.992,4.441,4.441,4.441c2.449,0,4.441-1.992,4.441-4.441c0-0.223,0.182-0.403,0.404-0.403s0.403,0.18,0.403,0.403C15.248,12.758,13.108,15.024,10.403,15.231 M13.026,4.953V10c0,1.669-1.357,3.027-3.027,3.027S6.972,11.669,6.972,10V4.953c0-1.669,1.358-3.028,3.028-3.028S13.026,3.284,13.026,4.953M12.221,4.953c0-1.225-0.996-2.22-2.221-2.22s-2.221,0.995-2.221,2.22V10c0,1.225,0.996,2.22,2.221,2.22s2.221-0.995,2.221-2.22V4.953z"
            ></path>
          </svg>
          <span className="inline-block px-1 pt-0">
            <span className="text-gray-400 ">No tan</span> en Vivo
          </span>
        </Link>
      </div>
      <Link
        activeClassName="active"
        to="/vivo"
        style={{ zIndex: "9999" }}
        className="fixed bottom-0 left-0 right-0 hidden p-0 animated fadeInUp delay-1s"
      >
        <div className="py-2 text-center bg-red-800 hover:bg-red-700 lg:px-4">
          <div
            className="flex items-center p-2 leading-normal text-red-100 lg:rounded-full lg:inline-flex "
            role="alert"
          >
            <span className="hidden px-2 py-1 mr-3 text-base font-bold leading-relaxed uppercase bg-red-700 rounded ">
              <small className="">Episodio 240</small>
            </span>
            <span className="flex-col flex-auto mr-2 text-sm font-bold text-left ">
              <span className="block pl-1 underline md:inline-block">
                Estamos ahora ao vivo
              </span>
            </span>
            <svg
              className="w-4 h-4 opacity-75 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </div>
      </Link>
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

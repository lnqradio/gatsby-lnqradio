import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header fixed z-10 top-0 right-0 left-0 md:relative">
    <div className="inner-header text-left pl-16 md:pl-20 block pr-3 md:flex md:items-baseline ">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div className="w-16 absolute p-1 mt-1 logo">
          <Image />
        </div>
        <h1 className="m-0 p-0 md:mr-12 text-white">{siteTitle}</h1>
      </Link>
      <nav className="w-full hidden md:flex">
        <Link className activeClassName="active" to="/columnas/">
          Podcasts
        </Link>
        <Link className activeClassName="active" to="/episodios/">
          Episodios
        </Link>
        <Link className activeClassName="active" to="/podcasts/">
          Buscar
        </Link>

        <span className="flex-1"></span>

        <Link
          activeClassName="active"
          to="/vivo/"
          className="live-btn animated fadeInUp delay-1s  hidden "
        >
          <div className="bg-red-800 hover:bg-red-700 text-center py-2 lg:px-4">
            <div
              className="p-2 items-center text-red-100 leading-normal  lg:rounded-full flex lg:inline-flex "
              role="alert"
            >
              <span className="flex rounded bg-red-700 uppercase leading-relaxed px-2 py-1 font-bold mr-3 text-base">
                <small className=" ">Episodio 31</small>
              </span>
              <span className="font-bold text-sm  mr-2 text-left flex-auto flex-col ">
                <span className="underline pl-1 block md:inline-block">
                  En vivo
                </span>
              </span>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          </div>
        </Link>
      </nav>
      <Link
        activeClassName="active"
        className="text-white live-link md:rounded px-6 bg-gray-800 pb-1"
        to="/vivo/"
      >
        <svg
          className="svg-icon inline-block  text-2xl pr-1  pb-1"
          viewBox="0 0 20 20"
        >
          <path
            className="fill-current"
            d="M10.403,15.231v2.035h2.827c0.223,0,0.403,0.181,0.403,0.404c0,0.223-0.181,0.403-0.403,0.403H6.77c-0.223,0-0.404-0.181-0.404-0.403c0-0.224,0.181-0.404,0.404-0.404h2.826v-2.035C6.89,15.024,4.751,12.758,4.751,10c0-0.223,0.181-0.403,0.404-0.403S5.559,9.777,5.559,10c0,2.449,1.992,4.441,4.441,4.441c2.449,0,4.441-1.992,4.441-4.441c0-0.223,0.182-0.403,0.404-0.403s0.403,0.18,0.403,0.403C15.248,12.758,13.108,15.024,10.403,15.231 M13.026,4.953V10c0,1.669-1.357,3.027-3.027,3.027S6.972,11.669,6.972,10V4.953c0-1.669,1.358-3.028,3.028-3.028S13.026,3.284,13.026,4.953M12.221,4.953c0-1.225-0.996-2.22-2.221-2.22s-2.221,0.995-2.221,2.22V10c0,1.225,0.996,2.22,2.221,2.22s2.221-0.995,2.221-2.22V4.953z"
          ></path>
        </svg>
        <span className="pt-0 inline-block px-1">No tan en Vivo</span>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

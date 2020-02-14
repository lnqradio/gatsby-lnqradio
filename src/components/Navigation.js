import { Link } from "gatsby"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav className="w-full flex flex-col">
    <Link
      activeClassName="active"
      to="/columnas/"
      className="my-2 text-gray-100 hover:text-red-700"
    >
      Podcasts
    </Link>
    <Link
      activeClassName="active"
      to="/episodios/"
      className="my-2 text-gray-100 hover:text-red-700"
    >
      Episodios
    </Link>
    <Link
      activeClassName="active"
      to="/podcasts/"
      className="my-2 text-gray-100 hover:text-red-700"
    >
      Buscar
    </Link>
  </nav>
)

export default Navigation

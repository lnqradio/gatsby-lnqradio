import { Link } from "gatsby"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav className="w-full flex flex-col">
    <Link
      activeClassName="active"
      to="/columnas/"
      className="my-2 text-gray-100 hover:text-red-700"
    >
      Columnas
    </Link>
    <Link
      activeClassName="active"
      to="/entrevistas/"
      className="my-2 text-gray-100 hover:text-red-700"
    >
      Entrevistas
    </Link>
    <Link
      activeClassName="active"
      to="/episodios/"
      className="my-2 text-gray-100 hover:text-red-700"
    >
      Episodios
    </Link>
  </nav>
)

export default Navigation

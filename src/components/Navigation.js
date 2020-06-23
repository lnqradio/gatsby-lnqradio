import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
  },
  {
    title: "Podcasts",
    slug: "/podcasts/",
  },
  {
    title: "Episodios",
    slug: "/episodios/",
  },
  //{
  //  title: "Entrevistas",
  //  slug: "/podcasts/entrevistas/",
  //},
  {
    title: "Ficciones",
    slug: "/ficciones/",
  },
  {
    title: "Artisticas",
    slug: "/artisticas/",
  },
  {
    title: "Buscar",
    slug: "/search/",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="text-red-600"
          to={route.slug}
          className="my-2 font-mono text-gray-100 cursor-pointer hover:text-red-700"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation

import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import SEO from "../components/seo"

const SearchIndex = (props) => {
  const { data } = props
  const allPosts = data.allContentfulColumnas.edges
  const totales = data.allContentfulColumnas.totalCount

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allContentfulColumnas.edges || []

    const filteredData = posts.filter((post) => {
      const { title } = post.node
      const { description } = post.node.description
      const { name } = post.node.author

      return (
        title
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        description
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <SEO title={totales} />
      <div className="w-full max-w-2xl p-2 pt-6 m-auto mt-24 mb-0 text-center searchBox md:pt-6 md:p-0 md:pb-6 animated fadeIn slower">
        <h2 className="flex flex-col items-center justify-center w-full py-3 pb-6 font-sans text-2xl text-center text-white">
          <span className="text-3xl">
            Soy un buscador,{" "}
            <span className="text-gray-300 opacity-50 cursor-wait hover:opacity-100">
              pero
            </span>{" "}
            <br /> ¿Que estás buscando&hellip; ?
          </span>
          <small className="text-gray-600">
            <span className="text-gray-400">Total de {totales} respuestas</span>
          </small>
        </h2>

        <input
          className="w-full p-3 text-left text-gray-900 placeholder-gray-800 bg-gray-300 border-2 tex-lg searchInput "
          type="text"
          tabindex="0"
          aria-label="Search"
          placeholder="¿ entonces ?  &hellip;"
          onChange={handleInputChange}
        />
      </div>

      <div className="grid max-w-6xl gap-6 pt-12 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {posts.map(({ node }) => {
          const { id, slug, title } = node
          const { description } = node.description
          const { name } = node.author
          const { spotify } = node.spotify
          const { soundcloud } = node.soundcloud

          return (
            <article
              key={id}
              className="relative w-full p-3 text-white bg-gray-800 border-b border-gray-800 search-item animated fadeIn"
            >
              <Link
                className="block font-sans text-lg font-bold text-red-500 e hover:text-white "
                to={`/columnas/${kebabCase(name)}/${kebabCase(slug)}/`}
              >
                {title}
              </Link>
              <Link
                className="block pt-3 pl-0 pr-2 font-sans text-sm font-bold text-gray-400 opacity-25 title hover:text-gray-200 hover:underline md:text-base"
                to={`/columnas/${kebabCase(name)}/`}
              >
                by {name}
              </Link>

              <p className="hidden">{description}</p>

              <div className="absolute bottom-0 right-0 flex items-center justify-start h-auto listen md:justify-end ">
               
                <a
                  href={`${spotify}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 text-base md:text-2xl"
                >
                  <FaSpotify className="text-base text-white hover:text-green-700" />
                </a>
                <a
                  href={`${soundcloud}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 text-base md:text-2xl"
                >
                  <FaSoundcloud className="text-base text-white hover:text-orange-700" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default SearchIndex

export const pageQuery = graphql`
  query {
    allContentfulColumnas(sort: { order: ASC, fields: [destacar] }) {
      edges {
        node {
          id
          title
          slug
          spotify {
            spotify
          }
          soundcloud {
            soundcloud
          }
          description {
            description
          }
          destacar
          author {
            name
          }
          publishDate(locale: "es", fromNow: true)
        }
      }
      totalCount
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import ReactTooltip from "react-tooltip"
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
        <h2 className="flex flex-col items-baseline py-3 pb-6 font-sans text-2xl text-left text-white md:flex-row">
          <span className="flex-1 text-3xl">Soy un buscador, pero <br/> ¿Que estás buscando&hellip; ?</span>

          <small className="text-gray-600">
            <span className="text-gray-400">{totales}</span> subidos
          </small>
        </h2>

        <input
          className="w-full p-3 text-left text-gray-900 placeholder-gray-500 bg-gray-300 border-2 searchInput "
          type="text"
          tabindex="0"
          aria-label="Search"
          placeholder="¿ belleza, Lou Reed, arte, economía?  &hellip;"
          onChange={handleInputChange}
        />
      </div>

      {posts.map(({ node }) => {
        const { id, slug, title, destacar } = node
        const { description } = node.description
        const { name } = node.author
        const { spotify } = node.spotify
        const { soundcloud } = node.soundcloud

        return (
          <article
            key={id}
            className="relative max-w-2xl p-2 pb-2 m-auto mb-2 text-white bg-gray-800 border-b border-gray-800 search-item md:p-2 sm:pr-32 animated fadeIn "
          >
            <Link
              className="block pr-8 mb-2 font-sans text-lg font-bold text-red-500 truncate md:break-normal md:pr-0 sm:overflow-visible md:mb-0 md:break-all hover:text-white sm:pr-0 sm:inline-block"
              to={`/columnas/${kebabCase(name)}/${kebabCase(slug)}/`}
            >
              {title}{" "}
            </Link>
            <Link
              className="hidden pl-0 pr-2 font-sans text-sm font-bold text-gray-400 title hover:text-gray-200 hover:underline md:text-base sm:pl-2 "
              to={`/columnas/${kebabCase(name)}/`}
            >
              x {name}
            </Link>

            <p className="hidden">{description}</p>

            <div className="absolute bottom-0 right-0 flex items-center justify-start h-auto listen md:justify-end md:top-0">
              {destacar ? (
                <span className="inline-block px-2 py-0 font-sans text-xs font-bold tracking-wider text-gray-500 uppercase bg-gray-800 rounded-full opacity-25">
                  destacado
                </span>
              ) : (
                <span className="hidden"></span>
              )}
              <ReactTooltip
                place="left"
                type="dark"
                effect="solid"
                className="bg-red-500 shadow"
              />
              <a
                href={`${spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                data-tip="¿Te vas para Spotify?"
                className="block p-3 text-base md:text-2xl"
              >
                <FaSpotify className="text-base text-white transition duration-200 ease-in-out hover:text-green-700" />
              </a>
              <a
                href={`${soundcloud}`}
                target="_blank"
                rel="noopener noreferrer"
                data-tip="¿Te vas para Soundcloud?"
                className="block p-3 text-base md:text-2xl"
              >
                <FaSoundcloud className="text-base text-white transition duration-200 ease-in-out hover:text-orange-700" />
              </a>
            </div>
          </article>
        )
      })}
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

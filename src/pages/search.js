import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import ReactTooltip from "react-tooltip"
import SEO from "../components/seo"

const SearchIndex = props => {
  const { data } = props
  const allPosts = data.allContentfulColumnas.edges
  const totales = data.allContentfulColumnas.totalCount

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allContentfulColumnas.edges || []

    const filteredData = posts.filter(post => {
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
      <div className="searchBox text-center mb-0 max-w-2xl m-auto w-full pt-6 md:pt-6 p-2 md:p-0 md:pb-6 animated fadeIn slower">
        <h2 className="text-white text-left py-3 pb-6 text-2xl font-mono flex items-baseline flex-col md:flex-row">
          <span className="flex-1">Buscador de podcasts</span>
          <SEO title={totales} />

          <small className="text-gray-600">
            <span className="text-gray-400">{totales}</span> subidos
          </small>
        </h2>

        <input
          className="searchInput bg-gray-800 text-gray-100 p-3 w-full  border-b-2 "
          type="text"
          tabindex="0"
          aria-label="Search"
          placeholder="Filtrá"
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
            className="search-item max-w-2xl m-auto mb-2 p-2 pb-2 md:p-2 md:pr-32 text-white relative border-b border-gray-800 bg-gray-800 animated fadeInUp "
          >
            <Link
              className="text-red-500 font-bold font-mono hover:text-white text-lg pr-20 mb-2 sm:pr-0 block sm:inline-block"
              to={`/columnas/${kebabCase(name)}/${kebabCase(slug)}/`}
            >
              {title}{" "}
            </Link>
            <Link
              className="title text-gray-400 block hover:text-gray-200 hover:underline text-sm md:text-base font-sans font-bold pr-2 sm:inline-block sm:pl-2 pl-0  "
              to={`/columnas/${kebabCase(name)}/`}
            >
              x {name}
            </Link>

            <p className="hidden">{description}</p>

            <div className="listen absolute  h-auto flex justify-start md:justify-end items-center bottom-0 md:top-0 right-0">
              {destacar ? (
                <span className="bg-red-500 px-3 py-0 text-xs inline-block uppercase rounded-full">
                  destacado
                </span>
              ) : (
                <span className="hidden"></span>
              )}
              <ReactTooltip
                place="left"
                type="dark"
                effect="solid"
                className="shadow bg-red-500"
              />
              <a
                href={`${spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                data-tip="¿Te vas para Spotify?"
                className=" block text-base p-3 md:text-2xl"
              >
                <FaSpotify className="text-white hover:text-green-700 transition duration-200 ease-in-out text-base" />
              </a>
              <a
                href={`${soundcloud}`}
                target="_blank"
                rel="noopener noreferrer"
                data-tip="¿Te vas para Soundcloud?"
                className=" block text-base p-3 md:text-2xl"
              >
                <FaSoundcloud className="text-white hover:text-orange-700 transition duration-200 ease-in-out text-base" />
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
    allContentfulColumnas(sort: { order: ASC, fields: [title] }) {
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

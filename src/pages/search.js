import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { FaSpotify, FaSoundcloud } from "react-icons/fa"
import ReactTooltip from "react-tooltip"

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
      <div className="searchBox text-center mb-0 max-w-6xl m-auto w-full pt-16 md:pt-6 p-6 md:p-0 md:pb-6 animated fadeIn slower">
        <h2 className="text-white text-left py-3 pb-6 text-2xl font-mono flex items-baseline flex-col md:flex-row">
          <span className="flex-1">Buscador de podcazt</span>
          <small className="text-gray-600">
            subidos{" "}
            <span className="text-gray-400" data-tip="Número Posta">
              {totales}
            </span>{" "}
            de{" "}
            <span className="text-gray-400" data-tip="Número random">
              3885
            </span>
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
        const { id, slug, title, publishDate } = node
        const { description } = node.description
        const { name } = node.author
        const { spotify } = node.spotify
        const { soundcloud } = node.soundcloud

        return (
          <article
            key={id}
            className="search-item max-w-6xl m-auto mb-2 p-4 pb-4 md:p-4 text-white relative border-b border-gray-800 bg-gray-800 animated fadeInUp"
          >
            <Link
              className="text-red-500 font-bold font-mono hover:text-white text-lg"
              to={`/columnas/${kebabCase(name)}/${kebabCase(slug)}/`}
            >
              {title}
            </Link>
            <Link
              className="title text-gray-500 hover:text-white text-md md:text-base font-mono pr-2 block md:w-2/12"
              to={`/columnas/${kebabCase(name)}/`}
            >
              x {name}
            </Link>
            <p className="hidden">{description}</p>

            <div className="listen md:absolute  h-auto flex justify-start md:justify-end items-center bottom-0 md:top-0 right-0">
              <b className="text-gray-500 text-sm w-full">{publishDate}</b>
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
                className=" block text-base p-3 md:text-2xl md:p-6"
              >
                <FaSpotify className="text-white hover:text-green-700 transition duration-200 ease-in-out" />
              </a>
              <a
                href={`${soundcloud}`}
                target="_blank"
                rel="noopener noreferrer"
                data-tip="¿Te vas para Soundcloud?"
                className=" block text-base p-3 md:text-2xl md:p-6"
              >
                <FaSoundcloud className="text-white hover:text-orange-700 transition duration-200 ease-in-out" />
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
    allContentfulColumnas(sort: { order: DESC, fields: [publishDate] }) {
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

import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { FaSpotify } from "react-icons/fa"
import ReactTooltip from "react-tooltip"

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allContentfulColumnas.edges

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
      const { name } = post.node.author

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        name.toLowerCase().includes(query.toLowerCase())
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
      <div className="searchBox text-center mb-2 max-w-6xl m-auto w-full pt-32 md:pt-6 p-6 md:p-0 md:pb-12">
        <input
          className="searchInput bg-gray-800 text-gray-100 p-3 w-full  border-b-2"
          type="text"
          aria-label="Search"
          autoFocus={true}
          placeholder="Filtrá"
          onChange={handleInputChange}
        />
      </div>

      {posts.map(({ node }) => {
        const { id, slug, title, publishDate } = node
        const { name } = node.author
        const { spotify } = node.spotify

        return (
          <article
            key={id}
            className="max-w-6xl m-auto mb-2 p-4 text-white relative border-b md:flex"
          >
            <Link
              className="title text-white hover:text-gray-500  font-mono pr-2 block md:w-2/12"
              to={`/columnas/${kebabCase(name)}/`}
            >
              {name}
            </Link>
            <Link
              className="text-red-600 font-bold font-mono hover:text-red-700 text-lg"
              to={`/columnas/${kebabCase(name)}/${kebabCase(slug)}/`}
            >
              {title}
            </Link>

            <div className="listen absolute flex justify-end items-center top-0 right-0">
              <b className="text-gray-500 text-sm">{publishDate}</b>
              <ReactTooltip
                place="left"
                type="success"
                effect="solid"
                className="shadow bg-red-500"
              />
              <a
                href={`${spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                data-tip="¿Te vas para Spotify?"
                className=" block text-2xl p-6"
              >
                <FaSpotify className="text-green-100 hover:text-green-700 transition duration-200 ease-in-out" />
              </a>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default BlogIndex

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
          description {
            description
          }
          author {
            name
          }
          publishDate(formatString: "Do MMM YYYY", locale: "es")
        }
      }
    }
  }
`

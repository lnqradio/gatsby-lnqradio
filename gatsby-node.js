const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const episodiosPost = path.resolve("./src/templates/episodios.js")
    const columnasPost = path.resolve("./src/templates/columna.js")

    resolve(
      graphql(
        `
          {
            allContentfulProgramas {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulColumnas {
              edges {
                node {
                  slug
                  title
                  author {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const columnas = result.data.allContentfulColumnas.edges
        columnas.forEach((columnas, index) => {
          createPage({
            path: `/columnas/${columnas.node.author.slug}/${columnas.node.slug}/`,
            component: columnasPost,
            context: {
              slug: columnas.node.slug,
            },
          })
        })

        const episodios = result.data.allContentfulProgramas.edges
        episodios.forEach((episodios, index) => {
          createPage({
            path: `/episodios/${episodios.node.slug}/`,
            component: episodiosPost,
            context: {
              slug: episodios.node.slug,
            },
          })
        })
      })
    )
  })
}

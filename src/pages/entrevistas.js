import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const EntrevistasPage = () => {
  const data = useStaticQuery(graphql`
    query EntrevistasQuery {
      contenful: allContentfulEntrevistas(
        sort: { fields: [createdAt], order: ASC }
      ) {
        edges {
          node {
            id
            title
            slug
            soundcloud {
              soundcloud
            }
            description {
              description
            }
            createdAt
            body {
              body
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Entrevistas" />
      <div className="h-24 md:sticky md:top-0 bg-gray-900 flex items-center justify-center hero z-10 px-6 m-0 mb-2">
        <h1 className="  text-xl text-white  text-center ">
          Todas entrevistas
        </h1>
      </div>
      <div className="posts animation flex flex-wrap w-full m-auto justify-center ">
        {data.contenful.edges.map((item, i) => (
          <div
            key={item.node.id}
            class="post mb-6 w-full md:w-1/3 m-6 bg-gray-800 animated fadeInUp slow border-red-500 border-t-4"
          >
            <div className="p-0 shadow-lg">
              <div className="heading flex  flex-col-reverse md:flex-row p-4 text-center">
                <div className="content w-full md:flex-1">
                  <h2 className="title text-white text-xl mb-3 px-4 pt-6 ">
                    {item.node.title}
                  </h2>
                  <p className="title text-base mb-3 px-1 pb-3">
                    {item.node.description.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default EntrevistasPage

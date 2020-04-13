import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./pereza.css"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="my-3 text-base">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: embedded => (
      <div dangerouslySetInnerHTML={{ __html: embedded }} />
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      }
      return (
        <img
          className="w-full"
          alt={node.data.target.fields.title["es-AR"]}
          src={node.data.target.fields.file["es-AR"].url}
        />
      )
    },

    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

class ArtisticaDoscharlasTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulArtisticas")

    return (
      <Layout>
        <SEO title="La pereza" />
        <div className="z-10 flex flex-col items-center justify-center px-6 m-0 mb-0 bg-gray-900 md:sticky md:top-0 hero">
          <h1 className="py-12 text-4xl text-left text-red-500">
            {post.title}
          </h1>
        </div>
        <div className="w-full py-4 m-auto bg-red-900"></div>

        <div className="w-full max-w-lg m-auto mt-12 text-white article">
          {documentToReactComponents(
            post.childContentfulArtisticasArticleRichTextNode.json,
            options
          )}
        </div>
      </Layout>
    )
  }
}

export default ArtisticaDoscharlasTemplate

export const pageQuery = graphql`
  query ArtisticaDoscharlasQuery {
    contentfulArtisticas(slug: { eq: "aradio-a-dos-charlas" }) {
      id
      title
      childContentfulArtisticasArticleRichTextNode {
        json
      }
    }
  }
`

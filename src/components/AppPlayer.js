import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Appplayer = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query Appplayer {
      allContentfulPlayer {
        edges {
          node {
            id
            title
            iframe {
              iframe
            }
          }
        }
      }
    }
  `)

  return (
    <div className="app-player">
      {data.allContentfulPlayer.edges.map((item, i) => (
        <h2 className="p-4 px-2 text-white bg-gray-800">{item.node.title}</h2>
      ))}

      {data.allContentfulPlayer.edges.map((item, i) => (
        <div
          key={item.node.id}
          className="post h-full"
          dangerouslySetInnerHTML={{
            __html: item.node.iframe.iframe,
          }}
        />
      ))}
    </div>
  )
}

export default Appplayer

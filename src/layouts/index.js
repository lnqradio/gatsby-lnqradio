import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Header from "../components/header"
import Sidebar from "../components/Sidebar"
const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <TransitionProvider location={location}>
      <div id="top"></div>

      <Sidebar />
      <Header siteTitle={data.site.siteMetadata.title} />

      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default Layout

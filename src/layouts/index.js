import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Helmet from "react-helmet"
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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossorigin="anonymous"
        />
      </Helmet>
      <div id="top"></div>
      <Sidebar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default Layout

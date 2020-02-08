import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./sidebar.css"
import Navigation from "../components/Navigation"

export default props => {
  return (
    <Menu>
      
      <Navigation />
    </Menu>
  )
}

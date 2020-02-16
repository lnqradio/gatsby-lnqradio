import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./sidebar.css"
import Navigation from "../components/Navigation"

// const Sidebar = props => {
//   return (
//     <Menu width={190} right>
//       <Navigation />
//     </Menu>
//   )
// }

class Sidebar extends Component {
  constructor () {
    super();
    this.state = {
      openMenu: false
    }
  }

  closeMenu = () => {
    this.setState({
      openMenu: false
    })
  }
  
  handleStateChange = (state) => {
    this.setState({
      openMenu: state.isOpen 
    });
  }
  
  render = () => {
    const { openMenu } = this.state
    return (
      <Menu 
        width={190} 
        right 
        isOpen={openMenu}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Navigation closeMenu={this.closeMenu} />
      </Menu>
    )
  }
}

export default Sidebar;
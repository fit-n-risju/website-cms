import React from 'react'
import logo from '../img/logo.png'
import "./Navbar.css"
import { Link } from "gatsby"

const Navbar = class extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content content">
        <Link className="clickable-logo" to="/"><img className="logo" src={logo} alt="fit.n.risju logo" /></Link>
          <div className="header-right">
            <Link to="/">Home</Link>
            <Link to="/lifestyle/">Lifestyle</Link>
            <Link to="/fitness/">Fitness</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/about">About us</Link>
            <Link to="#contact_area">Contact</Link>
          </div>
        </div>  
      </div>
    )
}
}

export default Navbar

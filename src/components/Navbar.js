import React from 'react'
import logo from '../img/logo.png'
import "./Navbar.css"

const Navbar = class extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
        <img className="logo" src={logo} alt="fit.n.risju logo" />
          <div className="header-right">
            <a className="active" href="./">Home</a>
            <a href="./lifestyle/">Lifestyle</a>
            <a href="./fitness/">Fitness</a>
            <a href="./recipes">Recipes</a>
            <a href="./about">About us</a>
            <a href="#contact_area">Contact</a>
          </div>
        </div>  
      </div>
    )
}
}

export default Navbar

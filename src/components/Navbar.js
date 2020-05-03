import React from 'react'
import logo from '../img/logo.png'
import de from "../img/de.png"
import en from "../img/en.png"
import "./Navbar.css"
import { Link } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'
import menu from "../img/menu.png"

const Navbar = () => {

  const { isEnglish, setLanguage } = useLanguage();
  const [isMenuExpanded, setMenuExpanded] = React.useState(false);

    return (
      <div className="header">
        <div className="header-content content">
        <Link className="clickable-logo" to="/"><img className="logo" src={logo} alt="fit.n.risju logo" /></Link>
        <img src={menu} className="hamburger" onClick={() => setMenuExpanded(!isMenuExpanded)}/>
          <div className={`header-right ${isMenuExpanded ? "open" : "closed"}`}>
            <Link to="/">{isEnglish ? "Home" : "Start"}</Link>
            <Link to="/lifestyle/">Lifestyle</Link>
            <Link to="/fitness/">Fitness</Link>
            <Link to="/recipes">{isEnglish ? "Recipes" : "Rezepte"}</Link>
            <Link to="/about">{isEnglish ? "About us" : "Über uns"}</Link>
            <Link to="#contact_area">{isEnglish ? "Contact" : "Kontakt"}</Link>
            <a className="language" onClick={(e) => {
              e.preventDefault();
              setLanguage('DE');
              setMenuExpanded(false)
              }}>
                <img src={de} />
              </a>
            <a className="language" onClick={(e) => {
              e.preventDefault();
              setLanguage('EN');
              setMenuExpanded(false)
              }}>
                <img src={en} />
              </a>
          </div>
        </div>  
      </div>
    )
}
export default Navbar

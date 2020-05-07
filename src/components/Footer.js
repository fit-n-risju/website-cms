import React from "react"
import "./Footer.css"
import { Link } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'

const Footer = () => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className="footer">
  <div className="icon-row">
 <div className="icon-column">
      <a href="https://instagram.com/fit.n.risju"><img className="footer-image" src="/img/instagram.png" alt="Visit our Instagram" _target="blank" /></a>
      <a href="https://www.facebook.com/fit.n.risju"><img className ="footer-image" src="/img/facebook.png" alt="Visit our Facebook page" _target="blank" /></a>
      <p>{isEnglish ? "Made with" : "Mit"}&nbsp;&hearts;&nbsp;{isEnglish ? "in Toronto by" : "erstellt von"}&nbsp;<a href="https://marcelthiemann.com" _target="blank">Marcel Thiemann</a>&nbsp;&#38;&nbsp;<a href="https://tannerfisc.us" _target="blank">Tanner Fiscus</a>&nbsp;{isEnglish ? "" : "in Toronto"}</p>
    </div>
    </div>
  <p>{isEnglish ? "Icons made by" : "Icons von"} <a href="https://www.flaticon.com/authors/freepik" _target="blank">Freepik</a> {isEnglish ? "from" : "von"} www.flaticon.com</p>
  <p><Link to="/imprint">{isEnglish ? "Imprint" : "Impressum"}</Link></p>
  <p><Link to="/privacy">{isEnglish ? "Privacy Policy" : "Datenschutzerklärung"}</Link></p>
</div>
)
}

export default Footer
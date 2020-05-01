import React from "react"
import "./Footer.css"
import { Link } from "gatsby"

const Footer = () => (
<div className="footer">
  <div className="icon-row">
 <div className="icon-column">
      <a href="https://instagram.com/fit.n.risju"><img className="footer-image" src="/img/instagram.png" alt="Visit our Instagram" _target="blank" /></a>
      <a href="https://www.facebook.com/fit.n.risju"><img className ="footer-image" src="/img/facebook.png" alt="Visit our Facebook page" _target="blank" /></a>
    </div>
    </div>
  <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" _target="blank">Freepik</a> from www.flaticon.com</p>
  <p><Link to="/imprint">Imprint</Link></p>
</div>
)

export default Footer
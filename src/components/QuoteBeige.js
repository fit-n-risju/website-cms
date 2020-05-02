import React from 'react'
import "./Quote.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'

const QuoteBeige = () => {

const { isEnglish, setLanguage } = useLanguage();

return(
<div className="quote-beige">
  <h3>{isEnglish ? "IF YOU HAVE ANY QUESTION OR WANT TO COLLABORATE WITH US, PLEASE GET IN TOUCH!" : "FALLS DU FRAGEN HAST ODER MIT UNS ARBEITEN MÖCHTEST, MELDE DICH BEI UNS!"}</h3>
  <a className="button select-button" id="contact-button" href="../#contact_area/">{isEnglish ? "CONTACT US" : "SCHREIB UNS"}</a>
</div>
)
}

export default QuoteBeige
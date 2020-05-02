import React from 'react'
import "./Quote.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'

const Quote = () => {

  const { isEnglish, setLanguage } = useLanguage();

return (
<div className="quote">
  <h3>{isEnglish ? "WE'RE MAKING IT SUPER EASY FOR YOU TO CREATE A HEALTHY AND FITNESS-FOCUSED LIFESTYLE." : "WIR WOLLEN ES EUCH SO EINFACH WIE MÖGLICH MACHEN, EINEN GESUNDEN UND FITNESS-ORIENTIERTEN LEBENSSTIL ZU FÜHREN"}</h3>
</div>
)
}

export default Quote
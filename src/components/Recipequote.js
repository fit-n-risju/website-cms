import React from 'react'
import "./Quote.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'

const Recipequote = () => {

  const { isEnglish, setLanguage } = useLanguage();

return (
<div className="quote">
  <h3>{isEnglish ? "GET INSPIRED BY OUR SUPER HEALTHY AND BALANCED MEAL-IDEAS THAT ARE SUPER EASY TO PREPARE!" : "LASST EUCH INSPIRIEREN! HIER FINDET IHR SCHNELLE, SUPER GESUNDE UND AUSGEWOGENE GERICHTE."}</h3>
</div>
)
}

export default Recipequote
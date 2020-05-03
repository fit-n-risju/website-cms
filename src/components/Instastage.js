import React from 'react'
import "./Instastage.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'


const Instastage = () => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className="insta-stage">
  <div className="insta-pic">
  </div>
  <div className="insta-content">
    <div>
    <h2>{isEnglish ? "FOLLOW US ON INSTAGRAM" : "FOLGE UNS AUF INSTAGRAM"}</h2>
    <br /><br />
    <p>{isEnglish ? "Check out our latest tips on fitness, a healthy lifestyle, and awesome vegan and gluten-free recipes!" : "Auf unsrer Instagram-Seite findest du die neuesten Fitness-Tips, Ideen für einen gesunden Lifestyle und die besten veganen und glutenfreien Rezepte!"}
      <br /><br />{isEnglish ? "We post new content regularly." : "Wir posten regelmäßig neuen Content."}</p>
      <a className="button insta-button-new" href="https://www.instagram.com/fit.n.risju/" _target="blank">{isEnglish ? "Follow us on Instagram!" : "Folge uns auf Instagram!"}</a>
    </div>
  </div>
</div>
)
}

export default Instastage
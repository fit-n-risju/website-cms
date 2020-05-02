import React from 'react'
import "./DetailSelector.css"
import { useLanguage } from '../components/LanguageProvider'

const DetailSelector = () => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className="detail-selector">
  <div className="content">
  <div className="detail-row">
    <div className="detail-column">
      <div className="column-left">
      <img className="select-icon" src="/img/apple.png" alt="t shirt icon" />
      <div className="mobile-column">
      <h1>{isEnglish ? "HEALTHY LIFESTYLE" : "LIFESTYLE TIPPS"}</h1>
      <p>{isEnglish ? "Learn more about why we love our vegan and fit lifestyle." : "Vegan und fitness-orientiert? Kein Problem!"}</p>
      </div>
      </div>
      <a className="button select-button" id="detail1" href="./lifestyle/">{isEnglish ? "Learn more" : "Mehr erfahren"}</a>
    </div>
    <div className="detail-column">
      <div className="column-left">
      <img className="select-icon" src="/img/fitness.png" alt="love icon" />
      <div className="mobile-column">
      <h1>{isEnglish ? "FITNESS FIRST" : "FITNESS FIRST"}</h1>
      <p>{isEnglish ? "Be your best self with our favorite exercises and the coolest gear!" : "Erfahre mehr über unsere effektivsten Übungen und besten Produkte!"}</p>
      </div>
      </div>
      <a className="button select-button" id="detail2" href="./fitness/">{isEnglish ? "Learn more" : "Mehr erfahren"}</a>
    </div>
    <div className="detail-column">
      <div className="column-left">
      <img className="select-icon" src="/img/food.png" alt="food icon" />
      <div className="mobile-column">
      <h1>{isEnglish ? "YUMMY RECIPES" : "LECKERE REZEPTE"}</h1>
      <p>{isEnglish ? "Make your own power food: vegan, gluten free, and yummy!" : "Mach dein eigenes Power-Food: vegan, glutenfrei und super lecker!"}</p>
      </div>
      </div>
      <a className="button select-button" id="detail3" href="./recipes/">{isEnglish ? "Learn more" : "Mehr erfahren"}</a>
    </div>
  </div>
</div>
</div>
)
}

export default DetailSelector
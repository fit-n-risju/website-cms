import React from 'react'
import "./DetailStage.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'


const DetailStage = () => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className="detail-stage">
  <div className="detail-pic">
  </div>
  <div className="detail-content">
    <div>
    <h2>{isEnglish ? "OUR MISSION" : "UNSERE MISSION"}</h2>
    <br /><br />
    <p>{isEnglish ? "How can you stay fit, build muscles, eat healthy, supply your body with all the necessary vitamins and nutrients, and all this with minimal effort?" : "Wie kann man fit bleiben, Muskeln aufbauen, sich gesund ernähren und den Körper mit allen wichtigen Vitaminen und Nährstoffen versorgen? Wir zeigen es euch, und das mit minimalem Aufwand für euch!"}
      <br /><br />{isEnglish ? "We want to answer this question together here, through mutual exchange with you." : "Im Austausch mit euch wollen wir uns mit diesen Fragen beschäftigen. Schickt uns eine Nachricht oder kommentiert unsere Artikel und schon wir sind im Gespräch!"}</p>
    </div>
  </div>
</div>
)
}

export default DetailStage
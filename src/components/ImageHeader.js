import React from "react"
import "./ImageHeader.css"
import { useLanguage } from '../components/LanguageProvider'

const ImageHeader = ({headerImage, headline, subhead}) => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className="lifestyle-stage" style={{ backgroundImage: `url(${headerImage})` }}>
    <div className="content">
      <h1>{headline}</h1>
      <p>{subhead}</p>
    </div>
  </div>
  )
}

export default ImageHeader
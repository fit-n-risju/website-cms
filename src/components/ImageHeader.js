import React from "react"
import "./ImageHeader.css"
import { useLanguage } from '../components/LanguageProvider'

const ImageHeader = ({headerImage, headline, subhead, isRecipePhoto}) => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className={isRecipePhoto ? "recipe-photo" : "lifestyle-stage"} style={{ backgroundImage: `url(${headerImage})` }}>
    <div className="content">
      <h1>{headline}</h1>
      <p>{subhead}</p>
    </div>
  </div>
  )
}

export default ImageHeader
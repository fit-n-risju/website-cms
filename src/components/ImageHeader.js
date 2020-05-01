import React from "react"
import "./ImageHeader.css"

const ImageHeader = ({headerImage, headline, subhead}) => (
<div className="lifestyle-stage" style={{ backgroundImage: `url(${headerImage})` }}>
    <div className="content">
      <h1>{headline}</h1>
      <p>{subhead}</p>
    </div>
  </div>
  )

export default ImageHeader
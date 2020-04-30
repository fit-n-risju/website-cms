import React from 'react'
import "./VideoStage.css"
import { withPrefix } from "gatsby"

const VideoStage = () => (
<div className="vidContainer">
  <video autoPlay muted loop id="video" className="vid">
    <source id="mp4" src={withPrefix("video/stage.mp4")} type="video/mp4" />
  </video>
  <div className='video-stage'>
    <div className="video-text">
    <h1>FIT, VEGAN,<br/>GLUTEN FREE</h1>
    <p>Learn more about super healthy performance food and the latest trends in fitness!</p>
    </div>
</div>
</div>
)

export default VideoStage
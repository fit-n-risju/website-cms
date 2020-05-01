import React from 'react'
import "./VideoStage.css"
import { withPrefix } from "gatsby"

const VideoStage = () => {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="vidContainer">
      {isMobile ? <img className="mobile-stage" src={withPrefix('img/mobile-home.jpg')} /> : (
        <video autoPlay muted loop id="video" className="vid">
          <source id="mp4" type="video/mp4" src={withPrefix('video/stage.mp4')} />
        </video>)}
      <div className='video-stage'>
        <div className="video-text">
        <h1>FIT, VEGAN,<br/>GLUTEN FREE</h1>
        <p>Learn more about super healthy performance food and the latest trends in fitness!</p>
        </div>
    </div>
    </div>
  )
}

export default VideoStage
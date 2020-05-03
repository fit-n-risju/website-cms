import React from 'react'
import "./VideoStage.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'

const VideoStage = () => {
  const [isMobile, setIsMobile] = React.useState(true);
  const { isEnglish, setLanguage } = useLanguage();

  React.useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="vidContainer">
      {isMobile ? <div className="mobile-stage" /> : (
        <video autoPlay muted loop id="video" className="vid">
          <source id="mp4" type="video/mp4" src={withPrefix('video/stage.mp4')} />
        </video>)}
      <div className='video-stage'>
        <div className="video-text">
        <h1>FIT, VEGAN,<br/>{isEnglish ? "GLUTEN FREE" : "GLUTENFREI"}</h1>
        <p>{isEnglish ? "Learn more about super healthy performance food and the latest trends in fitness!" : "Erfahre mehr über gesundes Performance-Food und die neuesten Fitness-Trends!"}</p>
        </div>
    </div>
    </div>
  )
}

export default VideoStage
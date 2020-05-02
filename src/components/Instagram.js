import React from "react"
import "./Instagram.css"
import { useLanguage } from '../components/LanguageProvider'


const Instagram = () => {

  const { isEnglish, setLanguage } = useLanguage();
   
    React.useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.defer = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    }, []);    

return(
<div className="content">
<div className="section-head">
  <h2>{isEnglish ? "CHECK OUT OUR INSTAGRAM" : "ENTDECKE UNSER INSTAGRAM"}</h2>
</div>
<div className="social">
  <div className="elfsight-app-6fb16cee-314e-4208-958d-a2c33dd0a18d"></div>
</div>

<a className="button insta-button" href="https://www.instagram.com/fit.n.risju/" _target="blank">{isEnglish ? "Follow us on Instagram!" : "Folge uns auf Instagram!"}</a>

</div>
)
}

export default Instagram
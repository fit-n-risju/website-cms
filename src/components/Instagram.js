import React from "react"
import "./Instagram.css"


const Instagram = () => {
   
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
  <h2>CHECK OUT OUR INSTAGRAM</h2>
</div>
<div className="social">
  <div className="elfsight-app-6fb16cee-314e-4208-958d-a2c33dd0a18d"></div>
</div>

<a className="button insta-button" href="https://www.instagram.com/fit.n.risju/" _target="blank">Follow us on Instagram!</a>

</div>
)
}

export default Instagram
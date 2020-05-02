import React from "react"
import "./ContactForm.css"
import { useLanguage } from '../components/LanguageProvider'

const ContactForm = () => {

  const { isEnglish, setLanguage } = useLanguage();

return(
<div className="contact-stage">
<div className="content">
  <div className="section-head">
    <a id="contact_area"><h2>{isEnglish ? "CONTACT US" : "MELDE DICH BEI UNS"}</h2></a>
    </div>
    <p>{isEnglish ? "Please leave a message below if you'd like to get in touch with us." : "Falls du eine Frage hast oder mit uns zusammenarbeiten möchtest, schick uns einfach eine Nachricht!"}</p>
    <form
    action="https://formspree.io/xdownejn"
    method="POST"
    target="_blank">
    <label>
      <span>{isEnglish ? "Your email" : "Deine E-Mail"}</span>
      <input type="text" name="_replyto" />
    </label>
    <label>
      <span>{isEnglish ? "Your message" : "Deine Nachricht"}</span>
      <textarea name="message"></textarea>
    </label>
  <button className="formbutton" type="submit">{isEnglish ? "Send" : "Nachricht senden"}</button>
  </form>
  </div>
</div>
)
}

export default ContactForm
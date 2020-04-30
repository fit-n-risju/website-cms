import React from "react"
import "./ContactForm.css"

const ContactForm = () => (
<div className="contact-stage">
<div className="content">
  <div className="section-head">
    <a id="contact_area"><h2>CONTACT US</h2></a>
    </div>
    <p>Please leave a message below if you'd like to get in touch with us.</p>
    <form
    action="https://formspree.io/xdownejn"
    method="POST"
    target="_blank">
    <label>
      <span>Your email</span>
      <input type="text" name="_replyto" />
    </label>
    <label>
      <span>Your message</span>
      <textarea name="message"></textarea>
    </label>
  <button className="formbutton" type="submit">Send</button>
  </form>
  </div>
</div>
)

export default ContactForm
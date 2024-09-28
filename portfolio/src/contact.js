import React from 'react';
import "./styles/contact.css"
import instagramIcon from "./images/instagramIcon.png"
import linkedinIcon from "./images/linkedinIcon.png"
import emailIcon from "./images/emailIconGrey.png"

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Have some questions? Contact me</h1>
      <div className='emailIconTextFormat'>
        <div>
            <img src={emailIcon} alt='Email-Icon' id='emailIcon'/>
        </div>
        <div>
          <div id='emailFormat'>
            <p>Feel free to reach out via email:</p>
            <p className="email">
              <a href="mailto:joel.starkov@web.de">joel.starkov@web.de</a>
            </p>

            <p>or connect with me on social media:</p>
            <div id="social-media-icons">
              <a href="https://www.instagram.com/joel.starkov/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/joel-starkov-71346b317/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
import React from 'react';
import './styles/aboutMe.css';
import Header from './header'; // Importiere den Header
import myImage from "./images/BildJoelDunkel.JPG"
import ContactButton from './buttons/ContactButton'; // Importiere die ContactButton-Komponente


function App() {
  return (
    <div>
      <Header /> {/* Verwende den Header hier */}
      <main>
        <section className="pictureName">
          <div className="hpText">
            <p className="hpSmallFont">Hi,</p>
            <h3 className="hpLargeFont">I AM JOEL</h3>
            <p className="hpSmallFont">a Computer scientist student</p>
            <ContactButton />
          </div>
          <div><img src={myImage} alt="Profilbild" id="firstHomePicture" /></div>
        </section>
        <section>
          <div className="aboutMe">
            <div className="aboutMeInnerText">
              <h3>Some words about me</h3>
              <p>My name is Joel Jeremy Starkov and I study Media Informatics at the Stuttgart Media University.
                I like to do sport in my free time. Among other things, I shoot air rifle in the second national league
                and also play volleyball in a club.<br />
                I also like fishing and anything to do with computers and technology.<br />
              </p>
            </div>
            <div className="aboutMeInnerText" data-aos="fade-up">
              <h3>Skills</h3>
              <p>
                During my studies, I have already become familiar with various programming languages, including Java, Kotlin, JavaScript, React, CSS and HTML.
                I also have practical experience with relational databases, especially PostgreSQL, as well as NoSQL databases such as MongoDB.
                I have also acquired knowledge of development with Node.js. <br/>
                My main area of interest is project planning and backend development.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        {/* Hier kannst du Footer-Inhalte hinzufügen */}
      </footer>
    </div>
  );
}

export default App;
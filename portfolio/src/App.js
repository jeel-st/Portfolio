import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/aboutMe.css';
import Header from './header'; 
import myImage from "./images/BildJoelDunkel.JPG";
import ContactButton from './buttons/contactButton';
import ContactPage from './contact'; 
import ProjectPage  from './projects'; 

function HomePage() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      offset: window.innerHeight * 0.2
    });
  }, []);

  return (
    <div>
      <main>
        <section >
          <div className="pictureName">
          <div className="hpText">
            <p className="hpSmallFont">Hi,</p>
            <h3 className="hpLargeFont">I AM JOEL</h3>
            <p className="hpSmallFont">a Computer scientist student</p>
            <ContactButton />
          </div>
          <div><img src={myImage} alt="Profilbild" id="firstHomePicture" /></div>
          </div>
        </section>
        <section>
          <div className="aboutMe">
            <div className="aboutMeInnerText" data-aos="fade-up">
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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Startseite */}
        <Route path="/contact" element={<ContactPage />} /> {/* Kontaktseite */}
        <Route path="/projects" element={<ProjectPage />} /> {/* Kontaktseite */}
      </Routes>
    </Router>
  );
}

export default App;
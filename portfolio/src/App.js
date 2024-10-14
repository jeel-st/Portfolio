import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/aboutMe.css';
import Header from './header'; 
import myImage from "./images/BildJoelDunkel.JPG";
//import ContactButton from './buttons/contactButton';
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
          {/* <ContactButton />*/ }
          </div>
          <div><img src={myImage} alt="Profilbild" id="firstHomePicture" /></div>
          </div>
        </section>
        <section>
          <div className="aboutMe">
            <div className="aboutMeInnerText" data-aos="fade-up">
              <h3>Some words about me</h3>
              <p>Hi, I’m Joel Jeremy Starkov, a 21-year-old from Stuttgart. 
                When I’m not studying Media Informatics at Stuttgart Media University, 
                I dedicate a lot of my time to sports. I’m a competitive marksman and shoot air rifle in the second Bundesliga,
                having already achieved several national successes. Besides that, I’m also active in a volleyball club, 
                which helps me stay fit and work as part of a team.
                <br/>
                In my free time, I love fishing and spending time outdoors, but my passion for computers and technology is just as important. 
                Whether it's programming, working with new tech, or solving complex problems, I'm always interested in learning and exploring more in the world of technology.
              </p>
            </div>
            <div className="aboutMeInnerText" data-aos="fade-up">
              <h3>Skills</h3>
              <p>
                During my studies, I have already become familiar with various programming languages, including Java, Kotlin, JavaScript, React, CSS and HTML.
                I also have practical experience with relational databases, especially PostgreSQL, as well as NoSQL databases such as MongoDB.
                I have also acquired knowledge of development with Node.js. <br/>
                My main area of interest is project planning and backend development.<br/>
                In addition to my technical skills, I am fluent in English, and German is my native language.
              </p>
            </div>
            <div className="aboutMeInnerText" data-aos="fade-up">
              <h3>Education and jobs</h3>
              <p>
              In 2022, I completed my Abitur at the Rolf-Benz-Schule Nagold. Following that, I gained some working experience for six months in production at Heim GmbH. In the summer semester of 2023, 
              I started my studies in Media Informatics at the Stuttgart Media University (Hochschule der Medien Stuttgart). 
              Since July 2024, I have been working part-time as a software developer at Arianim GmbH, where I continue to apply and expand my technical skills alongside my studies.
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
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/projects" element={<ProjectPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
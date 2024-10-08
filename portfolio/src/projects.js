import React, { useEffect } from 'react';
import SipsterLogo from "./images/SipsterLogo.jpg"
import PortfolioImg from "./images/PortfolioImg.jpg"
import BudgetBloomImg from "./images/BudgetBloomImg.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/projects.css"

function ProjectPage() {
    useEffect(() => {
        AOS.init({ 
          duration: 1000, 
          offset: window.innerHeight * 0.2
        });
      }, []);
    return (
        <div>
            <h3 id="projectHeader">My Projects</h3>
            <div id="projectPageLayout">
                <div className="projectStructure" data-aos="fade-up">
                    <div>
                        <img src={SipsterLogo} alt="Sipster Logo" />
                    </div>
                    <div className="projectDescription">
                        <h2>Sipster</h2>
                        <p>Sipster is a mobile app that combines social media and games. You can find and add friends, post your pictures and play various games.
                            You can also view upcoming events and react to other people's posts.</p>
                        <br />
                        <p>The frontend was developed using React Native (Expo) and Tailwind, which allowed for a fast, responsive, and visually appealing UI.<br />
                            On the backend, we used Node.js as the runtime environment, with Nginx as the web server and MongoDB for data storage.<br />
                            We also leveraged GitLab for version control and CI/CD pipelines.
                        </p>
                        <br />
                        <p><a href="https://gitlab.mi.hdm-stuttgart.de/lg107/sipster" target="_blank" rel="noopener noreferrer">Take a look at the code</a></p>
                    </div>
                </div>
                <div className="projectStructure" data-aos="fade-up">
                    <div>
                        <img src={PortfolioImg} alt="Portfolio"/>
                    </div>
                    <div className="projectDescription">
                        <h2>Portfolio</h2>
                        <p>This project is a simple website for my portfolio.<br/></p>
                        <br/>
                        <p>I created this website using React and CSS. The runtime environment was again node.js, with Nginx as the web server</p>
                        <br/>
                        <p><a href="https://gitlab.com/joel.starkov/portfoliofrontend" target="_blank" rel="noopener noreferrer">Take a look at the code</a></p>
                    </div>
                </div>
                <div className="projectStructure" data-aos="fade-up">
                    <div>
                        <img src={BudgetBloomImg} alt="BudgetBloom"/>
                    </div>
                    <div className="projectDescription">
                        <h2>Budget Bloom</h2>
                        <p>In this simple project, you can create an overview of your finances in a table using a simple UI. 
                            You can enter and delete your expenses and income here. 
                            The current account balance is always recalculated after each change.</p>
                        <br/>
                        <p>This project was developed exclusively with Java and PostgreSQL. JavaFX was used with the help of Scenebuilder.</p>
                        <br/>
                        <p><a href="https://gitlab.mi.hdm-stuttgart.de/js486/se2budgetboom" target="_blank" rel="noopener noreferrer">Take a look at the code</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

  export default ProjectPage;
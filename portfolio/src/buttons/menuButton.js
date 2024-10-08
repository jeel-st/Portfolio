import React from 'react';
import menuIcon from "../images/menuBar.jpg"; // Menü-Icon
import './buttonStyles/menuButton.css'; // Styles für den Menübutton
import { useNavigate } from 'react-router-dom'; // Importiere den Hook für Navigation

const MenuButton = ({ toggleDropdown }) => {
  const navigate = useNavigate(); // Verwende den Hook

  const handleContactClick = () => {
    navigate('/contact'); // Navigiere zur Kontaktseite
  };
  const handleHomepageClick = () => {
    navigate("/")
  }
  const handleProjectClick = () => {
    navigate("/projects")
  }
  const handleClickOutside = (event) => {
    if (!event.target.matches('.menuIcon')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <button className="menuIcon" onClick={toggleDropdown}>
        <img className="menuIcon" src={menuIcon} alt="Menu" />
      </button>
      <div className="dropdown-content" id="dropdownMenu">
        <ul>
          <li onClick={handleHomepageClick} >Homepage</li>
          <li>Education and jobs</li>
          <li onClick={handleProjectClick}>Projects</li>
          {/* Der Link führt zur Kontaktseite */}
          <li onClick={handleContactClick} className="menu-link">Contact</li>
        </ul>
      </div>
    </div>
  );
};


export default MenuButton;
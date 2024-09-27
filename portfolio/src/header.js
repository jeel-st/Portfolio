import React from 'react';
import './styles/header.css'; // Haupt-CSS für den Header
import MenuButton from './buttons/menuButton'; // Importiere den ausgelagerten Menübutton

function Header() {
  const toggleDropdown = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  };

  return (
    <header>
      <MenuButton toggleDropdown={toggleDropdown} /> {/* Benutze den ausgelagerten Button */}
      <div>
        <h1>Joel Jeremy Starkov</h1>
      </div>
    </header>
  );
}

export default Header;
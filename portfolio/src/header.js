import React from 'react';
import './styles/App.css'; // Du kannst auch eine separate CSS-Datei für den Header erstellen
import './styles/header.css';
import menuIcon from "./images/menuBar.jpg"

function Header() {
    const toggleDropdown = () => {
        const dropdownMenu = document.getElementById("dropdownMenu");
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    };

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
        <header>
            <div className="dropdown">
                <button className='menuIcon' onClick={toggleDropdown}><img className="menuIcon" src={menuIcon} alt='Menu' /></button>
                <div className="dropdown-content" id="dropdownMenu">
                    <ul>
                        <li>Homepage</li>
                        <li>Education and jobs</li>
                        <li>Projects</li>
                        <li>About me</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Joel Jeremy Starkov</h1>
            </div>
        </header>
    );
}

export default Header;
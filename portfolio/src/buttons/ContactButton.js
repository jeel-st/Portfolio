import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importiere den Hook für Navigation
import './buttonStyles/contactButton.css';

const ContactButton = () => {
  const navigate = useNavigate(); // Verwende den Hook

  const handleContactClick = () => {
    navigate('/contact'); // Navigiere zur Kontaktseite
  };

  return (
    <button id="aboutMeButton" onClick={handleContactClick}>
      Contact
    </button>
  );
};

export default ContactButton;
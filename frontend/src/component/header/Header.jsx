// src/components/Header.jsx
import React from 'react';
import './Header.css';
import TypingText from './TypingText'; 

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <TypingText words={['Order your favorite food']} />
        <p>
          Welcome to <span>B</span>lack<span>C</span>afe, where every cup tells a story.
          From hand-crafted coffee to fresh, soulful bites — step into a cozy corner made
          for conversations, comfort, and unforgettable flavors. Sit back, sip slow, and
          make every moment brew-tiful.
        </p>
      </div>
    </div>
  );
};

export default Header;

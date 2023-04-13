import React from 'react';
import './index.css';
import BatterySvg from '../icons/BatterySvg';

function Header() {
  return (
    <header className="header">
      <div className="header__connect">
        <span className="header__circle header__circle_full"></span>
        <span className="header__circle header__circle_full"></span>
        <span className="header__circle header__circle_full"></span>
        <span className="header__circle"></span>
        <span className="header__circle"></span>
        <span className="header__figma">Figma</span>
      </div>
      <div className="header__time">9:42 AM</div>
      <div className="header__charger">
        <span className="header__percentage">42%</span>
        <BatterySvg />
      </div>
    </header>
  );
}

export default Header;

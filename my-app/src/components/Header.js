import Vector_logo from '../images/Vector_logo.svg';
import React from 'react';


function Header() {
  return (
    <header className="header">
      <img src={Vector_logo} alt="Изображение логотипа в шапке" className="header__logo" />
    </header>
  );
}

export default Header;
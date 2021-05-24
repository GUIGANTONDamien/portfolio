/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import './header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <div className="header-top">
        <div className="dispoLogo">
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
          <img
            className="logo-voiture"
            src="/images/picto-voiture-removebg.png"
            alt="logo voiture"
          />
        </div>
        <img
          className="logo-marguerite"
          src="/images/logo_Marguerite-removebg.png"
          alt="Logo marguerite"
        />
        <ul
          className={click ? 'nav-options active' : 'nav-options'}
          onClick={handleClick}
        >
          <Link to="/">
            <li className="option">HOME</li>
          </Link>
          <Link to="/Manual">
            <li className="option">MODE D&apos;EMPLOI</li>
          </Link>
          <Link to="/Reservation">
            <li className="option">RESERVATION MARGUERITE</li>
          </Link>
          <Link to="/Contact">
            <li className="option">CONTACT</li>
          </Link>
        </ul>
        <Link to="/Login">
          <img
            className="logo-profil"
            src="/images/logo-profil-removebg.png"
            alt="logo-profil"
          />
        </Link>
      </div>
      <div className="header-bottom">
        <img
          className="devise"
          src="/images/devise-removebg.png"
          alt="devise"
        />
      </div>
    </div>
  );
};

export default Header;

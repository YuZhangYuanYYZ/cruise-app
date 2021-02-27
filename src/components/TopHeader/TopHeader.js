import React from 'react';
import avartaImg from './assets/avatar.jpg';
import './styles.scss';
import titleLogo from './assets/logo/logo.svg';

export function TopHeader() {
  return (
    <div className="topHeader">
      <div className="headerTitle">
        <img
          className="headerTitleLogo"
          alt="this is the titleLogo"
          src={titleLogo}
        ></img>
      </div>
      <img
        className="avtarImg"
        alt="this is the user avartar"
        src={avartaImg}
      ></img>
    </div>
  );
}

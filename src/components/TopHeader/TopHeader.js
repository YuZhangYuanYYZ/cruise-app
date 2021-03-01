import React from 'react';
import avartaImg from './assets/avatar.jpg';
import './styles.scss';
import titleLogo from './assets/logo/logo.svg';

export function TopHeader(props) {
  return (
    <div className="topHeader">
      <div
        className="icon-navicon"
        onClick={() => {
          props.setsideBarVisibility((sideBarVisibility) => !sideBarVisibility);
        }}
      ></div>
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

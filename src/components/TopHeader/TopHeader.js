import React, { useState } from 'react';
import avartaImg from './assets/avatar.jpg';
import './styles.scss';
import titleLogo from './assets/logo/logo.svg';

export function TopHeader() {
  let [logoClickStatus, setLogoClickStatus] = useState(false);
  return (
    <div className="topHeader">
      <div className="icon-navicon"></div>
      <div className="headerTitle">
        <img
          className="headerTitleLogo "
          alt="this is the titleLogo"
          src={titleLogo}
        ></img>

        <div className="userInformation">
          <img
            onClick={() =>
              setLogoClickStatus((logoClickStatus) => {
                return !logoClickStatus;
              })
            }
            className="avtarImg"
            alt="this is the user avartar"
            src={avartaImg}
          ></img>
          <div
            className={`${
              logoClickStatus ? 'showUserDetail' : 'hideUserDetail'
            }`}
          >
            <span className="icon-id-card"> Profile</span>
            <span className="icon-sign-in"> Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

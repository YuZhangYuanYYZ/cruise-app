import React, { useState } from 'react';
import avartaImg from './assets/avatar.jpg';
import './styles.scss';
import titleLogo from './assets/logo/logo.svg';
import { useTranslation } from 'react-i18next';
import { Button } from '../common/Button/Button.tsx';
export function TopHeader(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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
            <span className="icon-id-card"> {t('Profile')}</span>
            <span className="icon-sign-in"> {t('Sign Out')}</span>
          </div>
        </div>
        <div className="langauageChange">
          <Button onClick={() => changeLanguage('cn')}>cn</Button>
          <Button onClick={() => changeLanguage('en')}>en</Button>
        </div>
      </div>
    </div>
  );
}

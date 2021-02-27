import React from 'react';
import './styles.scss';

export function SideBar() {
  return (
    <div className="sideBarContainer">
      <ul className="sideBarItem">
        <li className="item">
          <span className="icon-dashboard"> </span> DASHBOARD
        </li>
        <li className="item">
          <span className="icon-info"> </span> AGENT
        </li>
        <li className="item">
          <span className="icon-cog"> </span> MYCRUISE
        </li>
        <li className="item">
          <span className="icon-navicon"> </span> HELP
        </li>
      </ul>
      <ul className="history">
        <span>History</span>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
        <li>bjst/mgnst</li>
      </ul>
    </div>
  );
}

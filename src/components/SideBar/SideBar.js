import React from 'react';
import './styles.scss';

export function SideBar(props) {
  return (
    <div
      className={`sideBarContainer ${
        props.sideBarVisibility ? 'showSideBar' : 'hideSideBar'
      }`}
    >
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
      <div className="historyInfo">
        <span>History</span>
        <ul className="testHistory">
          <li>bjstdmngbdr02/Acceptance_test</li>
          <li>bjstdmngbdr03/Acceptance_test</li>
          <li>bjstdmngbdr04/Acceptance_test</li>
          <li>bjstdmngbdr05/Acceptance_test</li>
          <li>bjstdmngbdr06/Acceptance_test</li>
          <li>bjstdmngbdr07/Acceptance_test</li>
          <li>bjstdmngbdr08/Acceptance_test</li>
          <li>bjstdmngbdr09/Acceptance_test</li>
          <li>bjstdmngbdr10/Acceptance_test</li>
          <li>bjstdmngbdr11/Acceptance_test</li>
          <li>bjstdmngbdr12/Acceptance_test</li>
          <li>bjstdmngbdr13/Acceptance_test</li>
        </ul>
      </div>
    </div>
  );
}

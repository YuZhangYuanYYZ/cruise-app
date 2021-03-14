import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export function SideBar(props) {
  return (
    <div
      className={`sideBarContainer ${
        props.sideBarVisibility ? 'showSideBar' : 'hideSideBar'
      }`}
    >
      <nav>
        <ul className="sideBarItem">
          <li className="item">
            <Link to="/dashboard" className="icon-dashboard">
              DASHBOARD
            </Link>
          </li>
          <li className="item">
            <Link to="/agent" className="icon-info">
              AGENT
            </Link>
          </li>
          <li className="item">
            <Link to="/mycruise" className="icon-cog">
              MYCRUISE
            </Link>
          </li>
          <li className="item">
            <Link to="/help" className="icon-navicon">
              HELP
            </Link>
          </li>
        </ul>
      </nav>
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

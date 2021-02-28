import React from 'react';
import './styles.scss';
import { AgentStatus } from './AgentStatus';
import { Button } from '../common/Button';
import { NaveSearch } from './NaveSearch';
import { AgentItem } from './AgentItem';
import img1logo from './os_icons/windows.png';
export function MainContent() {
  return (
    <div className="mainContent">
      <AgentStatus />
      <div className="agentResourceContainer">
        <div className="navigationSearch">
          <div className="navTabs">
            <Button text="All"></Button>
            <Button text="Physicalll"></Button>
            <Button text="Virtual"></Button>
          </div>
          <NaveSearch></NaveSearch>
        </div>
        <AgentItem
          imgSrc={img1logo}
          iconName={'icon-desktop'}
          name={'bjstdmngbdr10.thoughtworks.com'}
          status={'idle'}
          infoIcon={'icon-info'}
          ip={'192.168.1.102'}
          location={'/var/lib/cruise-agent'}
          resourceName={'Firefox'}
        ></AgentItem>
      </div>
    </div>
  );
}

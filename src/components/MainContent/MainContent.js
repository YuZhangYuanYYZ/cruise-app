import React from 'react';
import './styles.scss';
import { AgentStatus } from './AgentStatus';
import { Button } from '../common/Button';
import { NaveSearch } from './NaveSearch';
import { AgentList } from './AgentList';

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
        <AgentList></AgentList>
      </div>
    </div>
  );
}

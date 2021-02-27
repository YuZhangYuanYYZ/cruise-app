import React from 'react';
import './styles.scss';
import { AgentStatus } from './AgentStatus';
import { Button } from '../common/Button';
import { NaveSearch } from './NaveSearch';
import { AgentItem } from './AgentItem';

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
        <AgentItem></AgentItem>
      </div>
    </div>
  );
}

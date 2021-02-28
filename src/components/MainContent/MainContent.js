import React from 'react';
import './styles.scss';
import { AgentStatus } from './AgentStatus';
import { NaveSearch } from './NaveSearch';
import { AgentList } from './AgentList';
import { AgentFilter } from './AgentFilter/AgentFilter';

export function MainContent() {
  return (
    <div className="mainContent">
      <AgentStatus />
      <div className="agentResourceContainer">
        <div className="navigationSearch">
          <AgentFilter />
          <NaveSearch></NaveSearch>
        </div>
        <AgentList></AgentList>
      </div>
    </div>
  );
}

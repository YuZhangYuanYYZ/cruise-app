import React from 'react';
import { AgentFilter } from './AgentFilter/AgentFilter';
import { AgentList } from './AgentList';
import { AgentStatus } from './AgentStatus';
import { NaveSearch } from './NaveSearch';
import { AddAgent } from './AddAgent';
import './styles.scss';
// import { AddResourcePopup } from '../../AddResoucePopUp/AddResourcePopup';
export function MainContent() {
  // const agents = useSelector((state) => state.agents);
  return (
    <div className="mainContent">
      <AgentStatus />
      <div className="agentResourceContainer">
        <div className="navigationSearch">
          <AgentFilter />
          <AddAgent></AddAgent>
          <NaveSearch></NaveSearch>
        </div>
        <AgentList></AgentList>
      </div>
    </div>
  );
}

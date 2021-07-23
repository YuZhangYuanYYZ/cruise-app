import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AgentFilter } from './AgentFilter/AgentFilter';
import { AgentList } from './AgentList';
import { AgentStatus } from './AgentStatus';
import { NaveSearch } from './NaveSearch';
import { AddAgent } from './AddAgent';
import { Pagination } from '../common/Pagination/Pagination';
import './styles.scss';
export function MainContent() {
  let agentLists = useSelector((state) => {
    return state.agents.items;
  });
  const [currentPage, setCurrentPage] = useState(0);
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
        <Pagination
          pageSize={5}
          totalItemsCount={agentLists.length}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        ></Pagination>
      </div>
    </div>
  );
}

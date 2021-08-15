import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AgentFilter } from './AgentFilter/AgentFilter';
import { AgentList } from './AgentList';
import { AgentStatus } from './AgentStatus';
import { NaveSearch } from './NaveSearch';
import { AddAgent } from './AddAgent';
import { Pagination } from '../common/Pagination/Pagination';
import { filterAgents } from './AgentList/utils/filterAgents';

import './styles.scss';
export function MainContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;
  let agents = useSelector((state) => {
    return filterAgents(state.agents);
  });
  const currentAgentsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return agents.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, agents, pageSize]);
  return (
    <div className="mainContent">
      <AgentStatus />
      <div className="agentResourceContainer">
        <div className="navigationSearch">
          <AgentFilter />
          <AddAgent></AddAgent>
          <NaveSearch></NaveSearch>
        </div>
        <AgentList agents={currentAgentsData}></AgentList>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={agents.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      ></Pagination>
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { AgentCount } from './AgentCount';
import { StatusCard } from './StatusCard';
import './styles.scss';

export function AgentStatus() {
  let agents = useSelector((state) => {
    return state.agents.items;
  });
  const allAgentsNumber = agents.length;
  const physicalAgentsNumber = agents.filter((item) => item.type === 'physical')
    .length;
  const virtualAgentsNumber = agents.filter((item) => item.type === 'virtual')
    .length;

  const buildingAgents = agents.filter((item) => item.status === 'building')
    .length;

  const idleAgents = agents.filter((item) => item.status === 'idle').length;

  return (
    <div className="agentStatus">
      <StatusCard
        status="Building"
        count={buildingAgents}
        iconName="icon-cog"
        cardColor={'yellow'}
      ></StatusCard>
      <StatusCard
        status="Idle"
        count={idleAgents}
        iconName="icon-coffee"
        cardColor={'green'}
      ></StatusCard>
      <AgentCount
        allNumber={allAgentsNumber}
        physicalNumber={physicalAgentsNumber}
        virtualNumber={virtualAgentsNumber}
      ></AgentCount>
    </div>
  );
}

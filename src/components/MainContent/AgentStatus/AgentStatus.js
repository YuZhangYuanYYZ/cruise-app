import React from 'react';
import { useSelector } from 'react-redux';
import { AgentCount } from './AgentCount';
import { StatusCard } from './StatusCard';
import './styles.scss';

export function AgentStatus() {
  let agents = useSelector((state) => {
    return state.agents.items;
  });
  console.log(agents, 'agents');
  const allAgentsNumber = agents.length > 0 ? agents.length : 0;
  const physicalAgentsNumber =
    agents.length > 0
      ? agents.filter((item) => item.type === 'physical').length
      : 0;
  const virtualAgentsNumber =
    agents.length > 0
      ? agents.filter((item) => item.type === 'virtual').length
      : 0;

  const buildingAgents =
    agents.length > 0
      ? agents.filter((item) => item.status === 'building').length
      : 0;

  const idleAgents =
    agents.length > 0
      ? agents.filter((item) => item.status === 'idle').length
      : 0;

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

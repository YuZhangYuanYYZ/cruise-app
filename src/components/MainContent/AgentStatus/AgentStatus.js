import React from 'react';
import { StatusCard } from './StatusCard';
import { AgentCount } from './StatusCard/AgentCount';
import './styles.scss';

export function AgentStatus() {
  return (
    <div className="agentStatus">
      <StatusCard
        status="Building"
        count={3}
        iconName="icon-cog"
        cardColor={'yellow'}
      ></StatusCard>
      <StatusCard
        status="Idle"
        count={5}
        iconName="icon-coffee"
        cardColor={'green'}
      ></StatusCard>
      <AgentCount
        allNumber={8}
        physicalNumber={4}
        virtualNumber={4}
      ></AgentCount>
    </div>
  );
}

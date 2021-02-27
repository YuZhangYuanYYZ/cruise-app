import React from 'react';
import { StatusCard } from './StatusCard';
import './styles.scss';

export function AgentStatus() {
  return (
    <div className="agentStatus">
      <StatusCard status="Building" count={3} iconName="icon-cog"></StatusCard>
      <StatusCard status="Idle" count={5} iconName="icon-coffee"></StatusCard>
    </div>
  );
}

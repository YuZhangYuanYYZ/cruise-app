import React from 'react';
import './styles.scss';
import { AgentStatus } from './AgentStatus';

export function MainContent() {
  return (
    <div className="mainContent">
      <AgentStatus />
      <div className="agentResourceContainer"></div>
    </div>
  );
}

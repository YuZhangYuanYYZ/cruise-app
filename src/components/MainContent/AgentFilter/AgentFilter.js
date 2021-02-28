import React from 'react';
import './styles.scss';

export function AgentFilter(props) {
  return (
    <div className="navTabs">
      <span className="filter">All</span>
      <span className="filter">Physicalll</span>
      <span className="filter">Virtual</span>
    </div>
  );
}

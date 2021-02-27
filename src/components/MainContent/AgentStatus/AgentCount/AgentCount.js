import React from 'react';
import './styles.scss';

export function AgentCount({ allNumber, physicalNumber, virtualNumber }) {
  return (
    <div className="countContainer">
      <div className="all">
        <span>ALL</span>
        <span className="allNumber">{allNumber}</span>
      </div>
      <div className="physical">
        <span>PHYSICAL</span>
        <span className="physicalNumber">{physicalNumber}</span>
      </div>
      <div className="virtual">
        <span>VIRTUAL</span>
        <span className="virtualNumber">{virtualNumber}</span>
      </div>
    </div>
  );
}

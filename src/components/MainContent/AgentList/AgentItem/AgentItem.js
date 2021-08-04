import React from 'react';
import './styles.scss';
import { AgentResources } from './AgentResources/AgentResources';

export function AgentItem({
  agentId,
  imgSrc,
  name,
  status,
  ip,
  location,
  resources,
  setIsComponentVisible,
  agentIndex,
}) {
  console.log('here111111111');
  const colorName = status === 'idle' ? 'yellow' : 'green';
  console.log('agentId', 'agentId444');
  return (
    <div className="agentItem">
      <div className="itemlogo">
        <img src={imgSrc} alt="this is agent item logo" />
      </div>
      <div className="agentItemInfo">
        <div className="itemInfo">
          <div>
            <span className="icon icon-desktop"></span>
            <span className="urlAddress">{name}</span>
          </div>
          <span className={`agentStatus ${colorName}`}>{status}</span>
          <div>
            <span className="icon icon-info"></span>
            <span className="ipAddress">{ip}</span>
          </div>
          <div>
            <span className="icon icon-folder"></span>
            <span>{location}</span>
          </div>
        </div>
        <AgentResources
          agentId={agentId}
          agentIndex={agentIndex}
          resources={resources}
          status={status}
          setIsComponentVisible={setIsComponentVisible}
        />
      </div>
    </div>
  );
}

import React from 'react';

export function AgentItem({
  imgSrc,
  iconName,
  name,
  status,
  infoIcon,
  ip,
  location,
  resourceName,
}) {
  return (
    <div className="agentItem">
      <div className="itemlogo">
        <img src={imgSrc} alt="this is agent item logo" />
      </div>
      <div className="agentItemInfo">
        <div className="itemInfo">
          <span className={iconName}></span>
          <span className="urlAddress">{name}</span>
          <span className="agentStatus">{status}</span>
          <span className={infoIcon}></span>
          <span className="ipAddress">{ip}</span>
          <span className="icon-folder"></span>
          <span>{location}</span>
        </div>
        <div className="resources">
          <ul>
            <li>
              <span>{resourceName}</span>
              <span className="icon-trash"></span>
            </li>
          </ul>
          <div className="deny-button">
            <span className="icon-deny"></span>Deny
          </div>
        </div>
      </div>
    </div>
  );
}

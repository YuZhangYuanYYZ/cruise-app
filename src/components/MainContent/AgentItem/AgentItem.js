import React from 'react';
import './styles.scss';

const renderResources = (resources) => {
  return (
    resources &&
    resources.map((resourceName) => {
      return (
        <li key={resourceName}>
          <span>{resourceName}</span>
          <span className="icon-trash"></span>
        </li>
      );
    })
  );
};

export function AgentItem({
  imgSrc,
  iconName,
  name,
  status,
  infoIcon,
  ip,
  location,
  resources,
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
          <div className="resourceItems">
            <span className="icon-plus"></span>
            <ul className="resourceNameList">{renderResources(resources)}</ul>
          </div>
          {status === 'building' && (
            <div className="denyButton">
              <span className="icon-deny"></span>Deny
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

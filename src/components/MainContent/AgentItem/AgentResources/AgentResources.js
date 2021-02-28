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

export function AgentResources({ status, resources }) {
  return (
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
  );
}

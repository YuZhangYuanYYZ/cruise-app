import React from 'react';
import './styles.scss';
import { getAgentId } from '../../../../../store/actions/getAgentIdAction';
import { useDispatch } from 'react-redux';
export function AgentResources({ agentId, status, resources }) {
  const dispatch = useDispatch();
  return (
    <div className="resources">
      <div className="resourceItems">
        <span
          onClick={() => {
            dispatch(getAgentId({ agentId }));
          }}
          className="icon-plus"
        ></span>
        <ul className="resourceNameList">
          {resources &&
            resources.map((resourceName, resourceIndex) => {
              return (
                <li key={resourceName + resourceIndex}>
                  <span>{resourceName}</span>
                  <span className="icon-trash"></span>
                </li>
              );
            })}
        </ul>
      </div>
      {status === 'building' && (
        <button className="denyButton">
          <span className="icon-deny"></span>Deny
        </button>
      )}
    </div>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAgent } from '../../../../store/actions/updateResourceAction';
import './styles.scss';

function convertNewResource(itemId, resourceIndex, agents) {
  const newAgents = agents.map((agent) => {
    if (agent.id === itemId) {
      return agent.resources.filter(
        (resource, index) => index !== resourceIndex
      );
    } else {
      return agent;
    }
  });
  const newAgent = newAgents.filter((agent) => agent.id === itemId);
  return newAgent;
}
export function AgentResources({ itemId, status, resources }) {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents.items);
  return (
    <div className="resources">
      <div className="resourceItems">
        <span className="icon-plus"></span>
        <ul className="resourceNameList">
          {resources &&
            resources.map((resourceName, resourceIndex) => {
              return (
                <li
                  key={resourceName}
                  onClick={() => {
                    const newAgent = convertNewResource(
                      itemId,
                      resourceIndex,
                      agents
                    );
                    dispatch(updateAgent(newAgent, itemId));
                  }}
                >
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

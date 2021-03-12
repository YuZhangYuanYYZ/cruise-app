import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAgents } from '../../../store/actions/agentAction';
import { AgentItem } from './AgentItem';
import './styles.scss';
import { filterAgents } from './utils/filterAgents';
import { getLogo } from './utils/getLogo';
import { AddResourcePopup } from './AddResoucePopUp';

export function AgentList() {
  const dispatch = useDispatch();
  let agents = useSelector((state) => {
    return filterAgents(state.agents);
  });

  useEffect(() => {
    dispatch(requestAgents());
  }, [dispatch]);

  return (
    <>
      <AddResourcePopup agents={agents} />;
      <ul>
        {agents &&
          agents.map((agent) => {
            console.log('agent', agent);
            return (
              <li key={agent.id}>
                <AgentItem
                  agentId={agent.id}
                  imgSrc={getLogo(agent.os)}
                  name={agent.name}
                  status={agent.status}
                  ip={agent.ip}
                  location={agent.location}
                  resources={agent.resources}
                ></AgentItem>
              </li>
            );
          })}
      </ul>
    </>
  );
}

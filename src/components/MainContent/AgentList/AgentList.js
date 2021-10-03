import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestAgents } from '../../../store/actions/agentAction';
import { AgentItem } from './AgentItem';
import './styles.scss';

import { getLogo } from './utils/getLogo';
import { AddResourcePopup } from './AddResoucePopUp';
import { useComponentVisible } from './AgentItem/AgentResources/hooks/useComponentVisible';
export function AgentList({ agents }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestAgents());
  }, [dispatch]);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  return (
    <>
      <ul>
        {isComponentVisible && (
          <AddResourcePopup
            agents={agents}
            setIsComponentVisible={setIsComponentVisible}
            ref={ref}
          />
        )}
        {agents.length > 0 &&
          agents.map((agent, index) => {
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
                  setIsComponentVisible={setIsComponentVisible}
                  agentIndex={index}
                  isFavorite={agent.isFavorite}
                  agent={agent}
                ></AgentItem>
              </li>
            );
          })}
      </ul>
    </>
  );
}

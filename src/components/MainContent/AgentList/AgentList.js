import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { AgentItem } from '../AgentItem';
import { requestAgents } from '../../../store/actions/index';
import img1logo from './os_icons/windows.png';

export function AgentList() {
  const dispatch = useDispatch();
  let agents = useSelector((state) => {
    return state.agents.items;
  });
  useEffect(() => {
    dispatch(requestAgents());
  }, [dispatch]);
  return (
    <>
      <ul>
        {agents &&
          agents.map((agent, index) => {
            return (
              <li key={agent.id}>
                <AgentItem
                  imgSrc={img1logo}
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

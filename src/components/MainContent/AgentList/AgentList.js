import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { AgentItem } from '../AgentItem';
import { requestAgents } from '../../../store/actions/index';
import centos from './os_icons/centos.png';
import debin from './os_icons/debin.png';
import suse from './os_icons/suse.png';
import ubuntu from './os_icons/ubuntu.png';
import windows from './os_icons/windows.png';

function getLogo(os) {
  switch (os) {
    case 'centos':
      return centos;
    case 'debin':
      return debin;
    case 'suse':
      return suse;
    case 'ubuntu':
      return ubuntu;
    case 'windows':
      return windows;
    default:
      return windows;
  }
}
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

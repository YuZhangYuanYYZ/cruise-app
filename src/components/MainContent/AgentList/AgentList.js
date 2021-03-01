import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { AgentItem } from '../AgentItem';
import { requestAgents } from '../../../store/actions/agentAction';
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

const filterAgents = (agents) => {
  switch (agents.renderSelect) {
    case 'all':
      return agents.items;
    case 'physical':
      return agents.items.filter((item) => item.type === 'physical');
    case 'virtual':
      return agents.items.filter((item) => item.type === 'virtual');
    default:
      return agents.items;
  }
};
export function AgentList() {
  const dispatch = useDispatch();
  let agents = useSelector((state) => {
    return filterAgents(state.agents);
  });

  useEffect(() => {
    dispatch(requestAgents());
  }, [dispatch]);

  return (
    <ul>
      {agents &&
        agents.map((agent) => {
          return (
            <li key={agent.id}>
              <AgentItem
                itemId={agent.id}
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
  );
}

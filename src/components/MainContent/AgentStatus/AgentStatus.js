import React, { useEffect } from 'react';
import { StatusCard } from './StatusCard';
import { AgentCount } from './AgentCount';
import { requestAgents } from '../../../store/actions/agentAction';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

export function AgentStatus() {
  const dispatch = useDispatch();
  let agents = useSelector((state) => {
    return state.agents.items;
  });
  const allNumber = agents.length;
  const physicalNumber = agents.filter((item) => item.type === 'physical')
    .length;
  const virtualNumber = agents.filter((item) => item.type === 'virtual').length;

  useEffect(() => {
    dispatch(requestAgents());
  }, [dispatch]);
  return (
    <div className="agentStatus">
      <StatusCard
        status="Building"
        count={3}
        iconName="icon-cog"
        cardColor={'yellow'}
      ></StatusCard>
      <StatusCard
        status="Idle"
        count={5}
        iconName="icon-coffee"
        cardColor={'green'}
      ></StatusCard>
      <AgentCount
        allNumber={allNumber}
        physicalNumber={physicalNumber}
        virtualNumber={virtualNumber}
      ></AgentCount>
    </div>
  );
}

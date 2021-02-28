import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { AgentItem } from '../AgentItem';
import { requestAgents } from '../../../store/actions/index';
import img1logo from './os_icons/windows.png';

export function AgentList() {
  const dispatch = useDispatch();
  let dataResource = useSelector((state) => {
    return state.agents.items;
  });
  useEffect(() => {
    dispatch(requestAgents());
  }, [dispatch]);
  return (
    <>
      <ul>
        {dataResource &&
          dataResource.map((dataItem, index) => {
            return (
              <li key={index}>
                <AgentItem
                  imgSrc={img1logo}
                  iconName={'icon-desktop'}
                  name={dataItem.name}
                  status={dataItem.status}
                  infoIcon={'icon-info'}
                  ip={dataItem.ip}
                  location={dataItem.location}
                  resourceName={'Firefox'}
                ></AgentItem>
              </li>
            );
          })}
      </ul>
    </>
  );
}

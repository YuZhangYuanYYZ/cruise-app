import React from 'react';
import './styles.scss';
import { AgentItem } from '../AgentItem';
import img1logo from './os_icons/windows.png';

export function AgentList() {
  return (
    <ul>
      <li>
        <AgentItem
          imgSrc={img1logo}
          iconName={'icon-desktop'}
          name={'bjstdmngbdr10.thoughtworks.com'}
          status={'idle'}
          infoIcon={'icon-info'}
          ip={'192.168.1.102'}
          location={'/var/lib/cruise-agent'}
          resourceName={'Firefox'}
        ></AgentItem>
      </li>
    </ul>
  );
}

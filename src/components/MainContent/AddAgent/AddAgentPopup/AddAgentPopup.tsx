import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAgentInfo } from '../../../../store/actions/AddAgentInfoAction';
import { Agent } from '../../types';

type CombinedProps = {
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AddAgentPopup = React.forwardRef<HTMLFormElement, CombinedProps>(
  ({ setIsComponentVisible }, ref) => {
    const dispatch = useDispatch();
    const [agent, setAgent] = useState<Agent>({} as Agent);
    return (
      <form ref={ref}>
        <div className="agentName">
          name:
          <input
            value={agent.name}
            placeholder="e.g bjstdmngbdr08.thoughtworks.com"
            onChange={(e) =>
              setAgent((agent) => ({ ...agent, name: e.target.value }))
            }
          ></input>
        </div>
        <div className="agentOs">
          os:
          <select
            value={agent.os}
            onChange={(e) =>
              setAgent((agent) => ({ ...agent, os: e.target.value }))
            }
          >
            <option>Windows</option>
            <option>Ubuntu</option>
            <option>debian</option>
            <option>suse</option>
            <option>centos</option>
          </select>
        </div>
        <div className="agentStatus">
          <input
            type="radio"
            value="building"
            checked={agent.status === 'building'}
            onChange={(e) =>
              setAgent((agent) => ({ ...agent, status: e.target.value }))
            }
          />
          building
          <input
            type="radio"
            value="idle"
            checked={agent.status === 'idle'}
            onChange={(e) =>
              setAgent((agent) => ({ ...agent, status: e.target.value }))
            }
          />
          idle
        </div>
        <div className="agentType">
          type:
          <input
            value={agent.type}
            placeholder="e.g virtual/physical"
            onChange={(e) =>
              setAgent((agent) => ({ ...agent, type: e.target.value }))
            }
          ></input>
        </div>
        <div className="agentIp">
          ip:
          <input
            value={agent.ip}
            placeholder="e.g 192.168.1.80"
            onChange={(e) =>
              setAgent((agent) => ({ ...agent, ip: e.target.value }))
            }
          ></input>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const newAgent = agent;
            dispatch(addAgentInfo(newAgent));
          }}
        >
          提交
        </button>
        <button
          onClick={() => {
            setIsComponentVisible(false);
          }}
        >
          取消
        </button>
      </form>
    );
  }
);
AddAgentPopup.displayName = 'AddAgentPopup';

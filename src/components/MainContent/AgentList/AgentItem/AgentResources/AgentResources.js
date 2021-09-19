import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { setResourcePopupProps } from '../../../../../store/actions/setResourcePopupPropsAction';
import { toggleFavoriteAgentStatus } from '../../../../../store/actions/toggleFavoriteAction';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../common/Button/Button';
import { deleteAgent } from '../../../../../store/actions/deleteAgentAction';
import { PushSpinner } from 'react-spinners-kit';
export function AgentResources({
  agentId,
  agentIndex,
  status,
  resources,
  setIsComponentVisible,
  agent,
}) {
  const dispatch = useDispatch();
  let toggleFavoriteAgentInprogress = useSelector((state) => {
    return state.agents.toggleFavoriteAgentInprogress;
  });
  return (
    <div className="resources">
      <div className="resourceItems">
        <span
          onClick={() => {
            setIsComponentVisible(true);
            dispatch(setResourcePopupProps({ agentId, agentIndex }));
          }}
          className="icon-plus"
        ></span>
        <ul className="resourceNameList">
          {resources &&
            resources.map((resourceName, resourceIndex) => {
              return (
                <li key={resourceName + resourceIndex}>
                  <span>{resourceName}</span>
                  <span className="icon-trash"></span>
                </li>
              );
            })}
        </ul>
      </div>
      {status === 'building' && (
        <>
          <Button
            onClick={() => {
              dispatch(deleteAgent(agentId));
            }}
          >
            Delete Agent
          </Button>
          <Button className="denyButton">
            <span className="icon-deny"></span>Deny
          </Button>
          <Button
            className={`favorite 
            ${agent.isFavorite ? 'favoriteSelected' : 'favoriteDeSelected'}
            ${toggleFavoriteAgentInprogress ? 'favoriteHide' : null}`}
            onClick={() => {
              dispatch(toggleFavoriteAgentStatus(agent));
            }}
          >
            Favorite
          </Button>
          <PushSpinner
            size={20}
            color="#686769"
            loading={toggleFavoriteAgentInprogress}
          />
        </>
      )}
    </div>
  );
}

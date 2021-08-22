import React from 'react';
import './styles.scss';
import { setResourcePopupProps } from '../../../../../store/actions/setResourcePopupPropsAction';
import { addOrCancleFavoriteAgent } from '../../../../../store/actions/AddOrCancelFavoriteAction';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../common/Button/Button';
import { deleteAgent } from '../../../../../store/actions/deleteAgentAction';
export function AgentResources({
  agentId,
  agentIndex,
  status,
  resources,
  setIsComponentVisible,
  isFavorite,
}) {
  const dispatch = useDispatch();
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
            ${isFavorite ? 'favoriteSelected' : 'favoriteDeSelected'}`}
            onClick={() => {
              dispatch(addOrCancleFavoriteAgent(agentId));
            }}
          >
            Favorite
          </Button>
        </>
      )}
    </div>
  );
}

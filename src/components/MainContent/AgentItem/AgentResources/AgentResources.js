import React from 'react';
import { useDispatch } from 'react-redux';
import { deletResource } from '../../../../store/actions/updateResourceAction';
import './styles.scss';

export function AgentResources({ itemId, status, resources }) {
  const dispatch = useDispatch();
  return (
    <div className="resources">
      <div className="resourceItems">
        <span className="icon-plus"></span>
        <ul className="resourceNameList">
          {resources &&
            resources.map((resourceName, resourceIndex) => {
              return (
                <li
                  key={resourceName}
                  onClick={() => {
                    dispatch(deletResource(itemId, resourceIndex));
                  }}
                >
                  <span>{resourceName}</span>
                  <span className="icon-trash"></span>
                </li>
              );
            })}
        </ul>
      </div>
      {status === 'building' && (
        <button className="denyButton">
          <span className="icon-deny"></span>Deny
        </button>
      )}
    </div>
  );
}

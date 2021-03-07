import React from 'react';
import './styles.scss';
import { sentPopupInfoAction } from '../../../../../store/actions/sentPopupInfoAction';
import { useDispatch } from 'react-redux';
import { useComponentVisible } from './hooks/useComponentVisible';

export function AgentResources({ agentId, status, resources }) {
  const dispatch = useDispatch();
  return (
    <div className="resources">
      <DropDown />
      <div className="resourceItems">
        <span
          onClick={() => {
            dispatch(sentPopupInfoAction({ agentId }));
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
        <button className="denyButton">
          <span className="icon-deny"></span>Deny
        </button>
      )}
    </div>
  );
}

export const DropDown = () => {
  const { ref, isComponentVisible } = useComponentVisible(true);
  return <div ref={ref}>{isComponentVisible && <p>Dropdown Component</p>}</div>;
};

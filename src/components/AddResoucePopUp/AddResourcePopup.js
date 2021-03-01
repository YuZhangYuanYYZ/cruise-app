import React, { useState } from 'react';
import { updateAgent } from '../../store/actions/updateResourceAction';
import './styles.scss';
import { Button } from '../common/Button/Button';
import { useDispatch } from 'react-redux';
function convertNewResource(itemId, newResourceName, agents) {
  const newAgents = agents.map((agent) => {
    if (agent.id === itemId) {
      return { ...agent, resources: [...agent.resources, newResourceName] };
    } else {
      return agent;
    }
  });
  const newAgent = newAgents.filter((agent) => agent.id === itemId)[0];
  return newAgent;
}
export function AddResourcePopup(props) {
  const dispatch = useDispatch();
  const [resourceNames, setResourceNames] = useState('');
  return (
    <div className="resourcePopup">
      <div>Separate Multiple resources by comma</div>
      <span
        className="icon-close closeButton close"
        onClick={props.hidePopUp}
      ></span>
      <input
        maxLength="20"
        value={resourceNames}
        onChange={(e) => {
          setResourceNames(e.target.value);
        }}
      ></input>
      <div className="addAndCancelButtons">
        <Button
          onClick={() => {
            const newAgent = convertNewResource(
              props.itemId,
              resourceNames,
              props.agents
            );
            dispatch(updateAgent(newAgent, props.itemId));
          }}
        >
          Add Resources{' '}
        </Button>
        <Button
          id="cancelButton"
          onClick={() => {
            props.hidePopUp();
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

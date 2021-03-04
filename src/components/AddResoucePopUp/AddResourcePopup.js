import React, { useState } from 'react';
import { updateAgent } from '../../store/actions/updateResourceAction';
import './styles.scss';
import { Button } from '../common/Button/Button';
import { useDispatch } from 'react-redux';
import { convertNewResource } from './util';

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
        maxLength="28"
        placeholder="e.g.Chrome,Firefox"
        value={resourceNames}
        onChange={(e) => {
          setResourceNames(e.target.value);
        }}
      />
      <span className="upperTriangle"></span>
      <span className="upperTriangleCover"></span>
      <div className="addAndCancelButtons">
        <Button
          onClick={() => {
            const newAgent = convertNewResource(
              props.itemId,
              resourceNames,
              props.agents
            );
            dispatch(updateAgent(newAgent, props.itemId));
            setResourceNames('');
          }}
        >
          Add Resources
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

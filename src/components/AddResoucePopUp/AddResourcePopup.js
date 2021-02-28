import React, { useState } from 'react';
import './styles.scss';
import { Button } from '../common/Button/Button';

export function AddResourcePopup(props) {
  const [resourceNames, setResourceNames] = useState('');
  return (
    <div className="resourcePopup">
      <div>Separate Multiple resources by comma</div>
      <span
        className="closeButton close"
        onClick={() => {
          props.hidePopUp();
        }}
      >
        X
      </span>
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
            console.log(resourceNames);
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

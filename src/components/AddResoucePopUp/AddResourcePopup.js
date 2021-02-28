import React, { useState } from 'react';
import './styles.scss';
import { Button } from '../common/Button/Button';

export function AddResourcePopup(props) {
  const [resourceNames, setResourceNames] = useState('');
  return (
    <div className="resourcePopup">
      <div>Separate Multiple resources by comma</div>
      <input
        maxLength="20"
        value={resourceNames}
        onChange={(e) => {
          setResourceNames(e.target.value);
        }}
      ></input>
      <div>
        <Button
          onClick={() => {
            console.log(resourceNames);
          }}
        >
          Add Resources{' '}
        </Button>
        <Button
          onClick={() => {
            props.hidePopUp();
          }}
        >
          Cancel
        </Button>
      </div>
      <span
        onClick={() => {
          props.hidePopUp();
        }}
      >
        X
      </span>
    </div>
  );
}

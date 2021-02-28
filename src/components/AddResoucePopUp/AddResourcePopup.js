import React, { useState } from 'react';
import './styles.scss';

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
      <button
        onClick={() => {
          console.log(resourceNames);
        }}
      >
        Add Resources
      </button>
      <button
        onClick={() => {
          props.hidePopUp();
        }}
      >
        Cancel
      </button>
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

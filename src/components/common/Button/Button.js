import React from 'react';
import './styles.scss';

export function Button(props) {
  const renderIcon = (iconName) => {
    return <span className={`icon ${iconName}`}></span>;
  };

  return (
    <button className="customButton primary">
      {props.iconName && renderIcon(props.iconName)}
      {props.children}
    </button>
  );
}

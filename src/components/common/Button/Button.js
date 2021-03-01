import React from 'react';
import './styles.scss';

export function Button(props) {
  const { iconName, children, onClick, ...rest } = props;
  const renderIcon = (iconName) => {
    return <span className={`icon ${iconName}`}></span>;
  };

  return (
    <button className="customButton primary" onClick={onClick} {...rest}>
      {iconName && renderIcon(iconName)}
      {children}
    </button>
  );
}

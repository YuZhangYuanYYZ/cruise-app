import React from 'react';
import './styles.scss';

export function Button(props) {
  return <button className="customButton">{props.text}</button>;
}

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export function StatusCard({ status, count, iconName }) {
  return (
    <div className="statusCard">
      <div className="status">{status}</div>
      <div className={`icon ${iconName}`}></div>
      <div className="countNumber">{count}</div>
    </div>
  );
}

StatusCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

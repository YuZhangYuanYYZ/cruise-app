import React from 'react';
import './styles.scss';
export function NaveSearch() {
  return (
    <div className="searchPart">
      <div className="searchContainer">
        <input className="searchInput"></input>
        <span className="icon-search"></span>
      </div>
      <div className="displyStyles">
        <span className="icon-th-card "></span>
        <span className="icon-th-list active"></span>
      </div>
    </div>
  );
}

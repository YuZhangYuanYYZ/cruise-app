import React from 'react';
// import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAgentTypeAction } from '../../../store/actions/selectAgentTypeAction';
import './styles.scss';

const renderFilters = (dispatch, currentRenderSelect) => {
  const filters = ['All', 'Physical', 'Virtual'];
  return filters.map((filterName) => {
    const filterType = filterName.toLowerCase();
    return (
      <span
        key={filterName}
        onClick={() => {
          dispatch(selectAgentTypeAction(filterType));
        }}
        className={`filter ${
          currentRenderSelect === filterType ? 'active' : null
        }`}
      >
        {filterName}
      </span>
    );
  });
};

export function AgentFilter() {
  const dispatch = useDispatch();
  let currentRenderSelect = useSelector((state) => {
    return state.agents.renderSelect;
  });

  return (
    <div className="navTabs">
      {renderFilters(dispatch, currentRenderSelect)}
    </div>
  );
}

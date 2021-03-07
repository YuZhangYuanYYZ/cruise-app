import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAgentPopup } from '../../../store/actions/addAgentPopupAction';
import { AddAgentPopup } from './AddAgentPopup';
import './styles.scss';
export function AddAgent() {
  const dispatch = useDispatch();
  const { addAgentPopupVisibility } = useSelector((state) => state.agents);
  return (
    <>
      <span className="addAgent" onClick={() => dispatch(addAgentPopup())}>
        Add Agent
      </span>
      {addAgentPopupVisibility && <AddAgentPopup></AddAgentPopup>}
    </>
  );
}

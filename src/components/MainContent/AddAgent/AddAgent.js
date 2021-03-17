import React from 'react';
import { useDispatch } from 'react-redux';
import { addAgentPopup } from '../../../store/actions/addAgentPopupAction';
import { AddAgentPopup } from './AddAgentPopup';
import { useComponentVisible } from '../AgentList/AgentItem/AgentResources/hooks/useComponentVisible';
import './styles.scss';
export function AddAgent() {
  const dispatch = useDispatch();
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  return (
    <>
      <span
        className="addAgent"
        onClick={() => {
          setIsComponentVisible(true);
          dispatch(addAgentPopup());
        }}
      >
        Add Agent
      </span>
      {isComponentVisible && (
        <AddAgentPopup
          setIsComponentVisible={setIsComponentVisible}
          ref={ref}
        ></AddAgentPopup>
      )}
    </>
  );
}

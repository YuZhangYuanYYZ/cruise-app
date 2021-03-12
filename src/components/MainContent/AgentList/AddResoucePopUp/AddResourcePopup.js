import React, { useState } from 'react';
import { updateAgent } from '../../../../store/actions/updateResourceAction';
import './styles.scss';
import { Button } from '../../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { convertNewResource } from './util';
import { useComponentVisible } from '../AgentItem/AgentResources/hooks/useComponentVisible';
export function AddResourcePopup(props) {
  const dispatch = useDispatch();
  const [resourceNames, setResourceNames] = useState('');
  const { agentId } = useSelector((state) => state.popupInfo);
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false, 'icon-plus');
  return (
    <div className="popupContainer" ref={ref}>
      {isComponentVisible && (
        <div className="resourcePopup">
          <div>Separate Multiple resources by comma</div>
          <span
            className="icon-close closeButton close"
            onClick={() => setIsComponentVisible(false)}
          ></span>
          <input
            maxLength="28"
            placeholder="e.g.Chrome,Firefox"
            value={resourceNames}
            onChange={(e) => {
              setResourceNames(e.target.value);
            }}
          />
          <span className="upperTriangle"></span>
          <span className="upperTriangleCover"></span>
          <div className="addAndCancelButtons">
            <Button
              onClick={() => {
                const newAgent = convertNewResource(
                  agentId,
                  resourceNames,
                  props.agents
                );
                dispatch(updateAgent(newAgent, agentId));
                setResourceNames('');
              }}
            >
              Add Resources
            </Button>
            <Button
              id="cancelButton"
              onClick={() => setIsComponentVisible(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

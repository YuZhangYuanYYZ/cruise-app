import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAgent } from '../../../../store/actions/updateResourceAction';
import { Button } from '../../../common/Button/Button';
import './styles.scss';
import { convertNewResource } from './util';

export const AddResourcePopup = React.forwardRef(
  ({ setIsComponentVisible, agents }, ref) => {
    const dispatch = useDispatch();
    const [resourceNames, setResourceNames] = useState('');
    const { agentId } = useSelector((state) => state.agentId);

    return (
      <div ref={ref} className="popupContainer">
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
                  agents
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
      </div>
    );
  }
);

AddResourcePopup.displayName = 'AddResourcePopup';

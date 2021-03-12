import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export function getAgentsList() {
  return axios.get(`${API_BASE}/agents`).then(
    (response) => {
      return response.data;
    },
    (err) => {
      return err;
    }
  );
}

export function updateAgentInAPI(newAgent, itemId) {
  const options = {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(newAgent),
    url: `${API_BASE}/agents/${itemId}`,
  };
  return axios(options).then(
    (response) => {
      return response.data;
    },
    (err) => {
      return err;
    }
  );
}

export function postAgentToAPI(newAgent) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(newAgent),
    url: `${API_BASE}/agents`,
  };
  return axios(options).then(
    (response) => {
      return response.data;
    },
    (err) => {
      return err;
    }
  );
}

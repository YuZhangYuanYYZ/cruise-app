import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export function getAgentsList() {
  return axios.get(`${API_BASE}/agents`).then(
    (response) => {
      console.log(response.data);
    },
    (err) => {
      console.log(err);
    }
  );
}

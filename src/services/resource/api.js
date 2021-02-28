import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export function updateResource(itemId) {
  return axios.put(`${API_BASE}/agents/${itemId}`).then(
    (response) => {
      return response.data;
    },
    (err) => {
      return err;
    }
  );
}

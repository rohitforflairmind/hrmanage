import axios from 'axios';
import { getData } from '../utils/utils';

class ApiService {
  constructor(role) {
    this.api = axios.create({
      baseURL: 'https://api.example.com', // Replace with your actual API base URL
      timeout: 10000,
    });

    this.role = role;
  }

  async get(endpoint) {
    const headers = await this._getHeaders();
    return this.api.get(endpoint, { headers });
  }

  async post(endpoint, data) {
    const headers = await this._getHeaders();
    return this.api.post(endpoint, data, { headers });
  }

  async _getHeaders() {
    const token = await getData('authToken');
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }
}

export default ApiService;

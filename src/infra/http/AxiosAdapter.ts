import axios from 'axios';
import { HttpClient } from './HttpClient';

export default class AxiosAdapter implements HttpClient {
  constructor() {
    axios.defaults.validateStatus = function () {
      return true;
    };
  }
  async get(url: string): Promise<any> {
    const response = await axios.get(url);
    if (response.status === 422) throw new Error(response.data.message);
    return response.data;
  }
}

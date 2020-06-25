import axios from 'axios';
import { getCookie } from './cookie';

export const headers = {
  headers: {
    Authorization: `Bearer ${process.env.NODE_ENV === 'development' ? 'jwtToken' : getCookie('jwt')}`
  }
};

const filterFetch = (url, callback) => {
  axios.get(url, headers).then((res) => callback(res.data));
};

export default filterFetch;

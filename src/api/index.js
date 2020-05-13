import axios from 'axios';

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

export const getData = ({ data }) => data;

export default request;

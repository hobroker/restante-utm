import request, { getData } from './index';

export const getCountAll = () => request.get('/statistics').then(getData);

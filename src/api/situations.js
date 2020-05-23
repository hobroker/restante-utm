import request, { getData } from './index';

export const getSituations = () => request.get('/situations').then(getData);

export const getSituation = id =>
  request.get(`/situations/${id}`).then(getData);

export const createSituation = data =>
  request.post(`/situations`, data).then(getData);

export const updateSituation = (id, data) =>
  request.patch(`/situations/${id}`, data).then(getData);

export const deleteSituation = id =>
  request.delete(`/situations/${id}`).then(getData);

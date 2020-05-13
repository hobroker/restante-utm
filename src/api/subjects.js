import request, { getData } from './index';

export const getSubjects = () => request.get('/subjects').then(getData);

export const getSubject = id => request.get(`/subjects/${id}`).then(getData);

export const createSubject = data =>
  request.post(`/subjects`, data).then(getData);

export const updateSubject = (id, data) =>
  request.patch(`/subjects/${id}`, data).then(getData);

export const deleteSubject = id =>
  request.delete(`/subjects/${id}`).then(getData);

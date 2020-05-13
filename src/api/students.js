import request, { getData } from './index';

export const getStudents = () => request.get('/students').then(getData);

export const getStudent = id => request.get(`/students/${id}`).then(getData);

export const createStudent = data =>
  request.post(`/students`, data).then(getData);

export const updateStudent = (id, data) =>
  request.patch(`/students/${id}`, data).then(getData);

export const deleteStudent = id =>
  request.delete(`/students/${id}`).then(getData);

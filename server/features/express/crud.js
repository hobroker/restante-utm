import { applyTo, path } from 'ramda';
import { MONGO } from '../mongo/constants';

export const findAll = model => (oxi, { req }) => {
  const Model = path([MONGO, model], oxi);

  return Model.find();
};

export const findOne = model => (oxi, { req: { params } }) => {
  const Model = path([MONGO, model], oxi);

  return Model.findOne(params);
};

export const removeOne = model => (oxi, { req: { params } }) => {
  const Model = path([MONGO, model], oxi);

  return Model.remove(params);
};

export const createOne = model => (oxi, { req: { body } }) => {
  const Model = path([MONGO, model], oxi);

  return Model.create(body);
};

export const updateOne = model => (oxi, { req: { body, params } }) => {
  const Model = path([MONGO, model], oxi);

  return Model.findOneAndUpdate(params, body);
};

export const createCRUD = model =>
  [createOne, findOne, updateOne, removeOne, findAll].map(applyTo(model));

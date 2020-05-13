import { map, mergeAll, pipe, prop, set, view } from 'ramda';
import deepDestruct from '../../util/deepDestruct';
import lensPropM from '../../util/lensPropM';
import { getConfigFeatures } from '../../accessors/config';
import { MONGO } from './constants';

export const getMongoConfig = pipe(getConfigFeatures, prop(MONGO));

export const modelsLens = lensPropM('models');
export const setModels = set(modelsLens);
export const getModels = view(modelsLens);

export const getAllModels = pipe(map(pipe(getModels, deepDestruct)), mergeAll);

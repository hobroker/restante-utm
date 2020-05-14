import { pipe, prop } from 'ramda';
import { STUDENTS } from './constants';
import { getConfigFeatures } from '../../accessors/config';

export const getSpotify = prop(STUDENTS);

export const getSpotifyConfig = pipe(getConfigFeatures, getSpotify);

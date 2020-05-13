import { always } from 'ramda';
import { SPOTIFY } from '../constants';
import { get } from '../../express/methods';

const student = always('hello');

export default {
  [SPOTIFY]: {
    auth: {
      '/': get(student),
    },
  },
};

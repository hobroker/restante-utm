import { del, get, patch, post } from '../../express/methods';
import { createCRUD, findAll } from '../../express/crud';
import { compose } from 'ramda';

const { one, create, update, remove } = createCRUD('Situation');

const all = compose(
  promise => promise.populate(['studentId', 'subjectId']),
  findAll('Situation'),
);

export default {
  situations: {
    '/': [get(all), post(create)],
    '/:_id': [get(one), patch(update), del(remove)],
  },
};

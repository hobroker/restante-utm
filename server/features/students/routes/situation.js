import { del, get, patch, post } from '../../express/methods';
import { createCRUD } from '../../express/crud';

const { one, create, update, remove } = createCRUD('Situation');

const all = ({ mongo: { Situation } }) =>
  Situation.find()
    .populate('studentId')
    .populate('subjectId');

export default {
  situations: {
    '/': [get(all), post(create)],
    '/:_id': [get(one), patch(update), del(remove)],
  },
};

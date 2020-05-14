import { del, get, patch, post } from '../../express/methods';
import { createCRUD } from '../../express/crud';

const { all, one, create, update, remove } = createCRUD('Student');
export default {
  students: {
    '/': [get(all), post(create)],
    '/:_id': [get(one), patch(update), del(remove)],
  },
};

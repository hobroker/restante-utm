import { SPOTIFY } from '../constants';
import { del, get, patch, post } from '../../express/methods';
import {
  createCRUD,
  createOne,
  findAll,
  findOne,
  removeOne,
  updateOne,
} from '../../express/crud';

const STUDENT_MODEL_NAME = 'Student';

const allStudents = findAll(STUDENT_MODEL_NAME);

const oneStudent = findOne(STUDENT_MODEL_NAME);

const createStudent = createOne(STUDENT_MODEL_NAME);

const updateStudent = updateOne(STUDENT_MODEL_NAME);

const deleteStudent = removeOne(STUDENT_MODEL_NAME);

export default {
  [SPOTIFY]: {
    '/': [get(allStudents), post(createStudent)],
    '/:_id': [get(oneStudent), patch(updateStudent), del(deleteStudent)],
  },
};

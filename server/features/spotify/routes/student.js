import { always } from 'ramda';
import { SPOTIFY } from '../constants';
import { get, post } from '../../express/methods';

const studentList = ({ mongo: { Student } }) => Student.find();

const createStudent = ({ mongo: { Student } }, { req: { body } }) => {
  Student.create(body);
};

export default {
  [SPOTIFY]: {
    '/': [get(studentList), post(createStudent)],
  },
};

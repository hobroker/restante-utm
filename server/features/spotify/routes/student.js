import { SPOTIFY } from '../constants';
import { del, get, patch, post } from '../../express/methods';

const studentList = ({ mongo: { Student } }) => Student.find();

const studentOne = (
  { mongo: { Student } },
  {
    req: {
      params: { _id },
    },
  },
) => Student.findOne({ _id });

const createStudent = ({ mongo: { Student } }, { req: { body } }) => {
  Student.create(body);
};

const updateStudent = (
  { mongo: { Student } },
  {
    req: {
      body,
      params: { _id },
    },
  },
) => Student.findOneAndUpdate({ _id }, body);

const deleteStudent = (
  { mongo: { Student } },
  {
    req: {
      params: { _id },
    },
  },
) => Student.remove({ _id });

export default {
  [SPOTIFY]: {
    '/': [get(studentList), post(createStudent)],
    '/:_id': [get(studentOne), patch(updateStudent), del(deleteStudent)],
  },
};

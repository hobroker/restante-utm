import React from 'react';
import { createStudent } from '../api/students';
import { STUDENT_FIELDS } from '../constants/fields';
import CreatePageWrapper from '../components/CreatePageWrapper';
import { STUDENTS_CREATE_PAGE } from '../constants/pages';

const CreateStudent = () => (
  <CreatePageWrapper
    fields={STUDENT_FIELDS}
    apiCreate={createStudent}
    redirectTo="/"
    title={STUDENTS_CREATE_PAGE}
  />
);

export default CreateStudent;

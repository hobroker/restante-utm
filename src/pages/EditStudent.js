import React from 'react';
import { getStudent, updateStudent } from '../api/students';
import { STUDENT_FIELDS } from '../constants/fields';
import { STUDENTS_EDIT_PAGE } from '../constants/pages';
import EditPageWrapper from '../components/EditPageWrapper';

const EditStudent = () => (
  <EditPageWrapper
    redirectTo="/"
    apiGet={getStudent}
    apiUpdate={updateStudent}
    fields={STUDENT_FIELDS}
    title={STUDENTS_EDIT_PAGE}
  />
);

export default EditStudent;

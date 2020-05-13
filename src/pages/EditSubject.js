import React from 'react';
import { SUBJECT_FIELDS } from '../constants/fields';
import { SUBJECTS_EDIT_PAGE } from '../constants/pages';
import EditPageWrapper from '../components/EditPageWrapper';
import { getSubject, updateSubject } from '../api/subjects';

const EditSubject = () => (
  <EditPageWrapper
    redirectTo="/subjects"
    apiGet={getSubject}
    apiUpdate={updateSubject}
    fields={SUBJECT_FIELDS}
    title={SUBJECTS_EDIT_PAGE}
  />
);

export default EditSubject;

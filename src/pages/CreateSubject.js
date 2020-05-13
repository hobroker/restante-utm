import React from 'react';
import { SUBJECT_FIELDS } from '../constants/fields';
import CreatePageWrapper from '../components/CreatePageWrapper';
import { SUBJECTS_CREATE_PAGE } from '../constants/pages';
import { createSubject } from '../api/subjects';

const CreateSubject = () => (
  <CreatePageWrapper
    fields={SUBJECT_FIELDS}
    apiCreate={createSubject}
    redirectTo="/subjects"
    title={SUBJECTS_CREATE_PAGE}
  />
);

export default CreateSubject;

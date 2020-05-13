import React from 'react';
import { SITUATION_FIELDS } from '../constants/fields';
import CreatePageWrapper from '../components/CreatePageWrapper';
import { SITUATIONS_CREATE_PAGE } from '../constants/pages';
import { createSituation } from '../api/situations';
import useApiData from '../hooks/useApiData';
import { getStudents } from '../api/students';
import { getSubjects } from '../api/subjects';
import { applySpec, map, prop } from 'ramda';

const CreateSituation = () => {
  const modifier = map(applySpec({ value: prop('_id'), label: prop('name') }));
  const [students] = useApiData(getStudents(), [], modifier);
  const [subjects] = useApiData(getSubjects(), [], modifier);

  return (
    <CreatePageWrapper
      fields={SITUATION_FIELDS}
      apiCreate={createSituation}
      redirectTo="/situations"
      title={SITUATIONS_CREATE_PAGE}
      data={{ students, subjects }}
    />
  );
};

export default CreateSituation;

import React from 'react';
import { SITUATION_FIELDS } from '../constants/fields';
import CreatePageWrapper from '../components/CreatePageWrapper';
import { SITUATIONS_CREATE_PAGE } from '../constants/pages';
import { createSituation } from '../api/situations';
import useSituationData from '../hooks/useSituationData';

const CreateSituation = () => {
  const data = useSituationData();

  return (
    <CreatePageWrapper
      fields={SITUATION_FIELDS}
      apiCreate={createSituation}
      redirectTo="/situations"
      title={SITUATIONS_CREATE_PAGE}
      data={data}
    />
  );
};

export default CreateSituation;

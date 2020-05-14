import React from 'react';
import { SITUATION_FIELDS } from '../constants/fields';
import { SITUATIONS_EDIT_PAGE } from '../constants/pages';
import EditPageWrapper from '../components/EditPageWrapper';
import { getSituation, updateSituation } from '../api/situations';
import useSituationData from '../hooks/useSituationData';

const EditSituation = () => {
  const data = useSituationData();

  return (
    <EditPageWrapper
      redirectTo="/situations"
      apiGet={getSituation}
      apiUpdate={updateSituation}
      fields={SITUATION_FIELDS}
      title={SITUATIONS_EDIT_PAGE}
      data={data}
    />
  );
};

export default EditSituation;

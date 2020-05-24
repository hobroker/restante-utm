import { applySpec, map, prop } from 'ramda';
import useApiData from './useApiData';
import { getStudents } from '../api/students';
import { getSubjects } from '../api/subjects';

const useSituationData = () => {
  const modifier = map(applySpec({ value: prop('_id'), label: prop('name') }));
  const [students] = useApiData(getStudents, [], [], modifier);
  const [subjects] = useApiData(getSubjects, [], [], modifier);

  return { students, subjects };
};

export default useSituationData;

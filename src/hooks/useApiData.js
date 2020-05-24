import { useState } from 'react';
import { identity } from 'ramda';
import useMountEffect from './useMountEffect';

const useApiData = (
  promiseFn,
  args = [],
  initialState = null,
  modify = identity,
) => {
  const [data, setData] = useState(initialState);

  useMountEffect(() => {
    promiseFn(...args)
      .then(modify)
      .then(response => {
        setData(response);
      });
  });

  return [data, setData];
};

export default useApiData;

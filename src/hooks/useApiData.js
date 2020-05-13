import { useState } from 'react';
import useMountEffect from './useMountEffect';
import { identity } from 'ramda';

const useApiData = (promise, initialState = null, modify = identity) => {
  const [data, setData] = useState(initialState);

  useMountEffect(() => {
    promise.then(modify).then(data => {
      setData(data);
    });
  });

  return [data, setData];
};

export default useApiData;

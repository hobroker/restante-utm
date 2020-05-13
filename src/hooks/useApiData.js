import { useState } from 'react';
import useMountEffect from './useMountEffect';

const useApiData = (promise, initialState = null) => {
  const [data, setData] = useState(initialState);

  useMountEffect(() => {
    promise.then(data => {
      setData(data);
    });
  });

  return [data, setData];
};

export default useApiData;

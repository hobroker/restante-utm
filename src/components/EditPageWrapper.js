import { useHistory, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import React from 'react';
import useApiData from '../hooks/useApiData';

const EditPageWrapper = ({
  title,
  fields,
  apiGet,
  apiUpdate,
  redirectTo,
  data,
}) => {
  const history = useHistory();
  const { id } = useParams();
  const [initialValues] = useApiData(apiGet(id), null);
  const onSubmit = values => {
    apiUpdate(id, values).then(() => {
      history.push(redirectTo);
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {initialValues && (
        <Form
          fields={fields}
          values={initialValues}
          onSubmit={onSubmit}
          data={data}
        />
      )}
    </Container>
  );
};

export default EditPageWrapper;

import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Form from './Form';

const CreatePageWrapper = ({ title, fields, apiCreate, redirectTo, data }) => {
  const history = useHistory();
  const onSubmit = values => {
    apiCreate(values).then(() => {
      history.push(redirectTo);
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Form fields={fields} onSubmit={onSubmit} data={data} />
    </Container>
  );
};

export default CreatePageWrapper;

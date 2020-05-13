import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import React from 'react';

const CreatePageWrapper = ({ title, fields, apiCreate, redirectTo }) => {
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
      <Form fields={fields} onSubmit={onSubmit} />
    </Container>
  );
};

export default CreatePageWrapper;

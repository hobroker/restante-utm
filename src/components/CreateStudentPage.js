import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { createStudent } from '../api/students';
import { STUDENT_FIELDS } from '../constants/fields';

const CreateStudentPage = () => {
  const history = useHistory();
  const onSubmit = values => {
    createStudent(values).then(() => {
      history.push('/');
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Creare student
      </Typography>
      <Form fields={STUDENT_FIELDS} onSubmit={onSubmit} />
    </Container>
  );
};

export default CreateStudentPage;

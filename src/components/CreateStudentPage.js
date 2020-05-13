import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { createStudent } from '../api/students';

const CreateStudentPage = () => {
  const history = useHistory();
  const onSubmit = values => {
    createStudent(values).then(() => {
      history.push('/');
    });
  };
  const fields = [
    { name: 'name', label: 'Nume', type: 'text' },
    { name: 'group', label: 'Grupa', type: 'text' },
    { name: 'year', label: 'Anul', type: 'text' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Creare student
      </Typography>
      <Form fields={fields} onSubmit={onSubmit} />
    </Container>
  );
};

export default CreateStudentPage;

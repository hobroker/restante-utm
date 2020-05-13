import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Form from './Form';
import { useHistory, useParams } from 'react-router-dom';
import { updateStudent, getStudent } from '../api/students';
import useApiData from '../hooks/useApiData';
import { STUDENT_FIELDS } from '../constants/fields';

const EditStudentPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [data] = useApiData(getStudent(id), null);
  const onSubmit = values => {
    updateStudent(id, values).then(() => {
      history.push('/');
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Editare student
      </Typography>
      {data && (
        <Form fields={STUDENT_FIELDS} values={data} onSubmit={onSubmit} />
      )}
    </Container>
  );
};

export default EditStudentPage;

import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { SUBJECTS_LIST_PAGE } from '../constants/pages';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useApiData from '../hooks/useApiData';
import { deleteSubject, getSubjects } from '../api/subjects';

const SubjectsList = () => {
  const [data, setData] = useApiData(getSubjects(), []);

  const onRemoveSubject = id => () => {
    if (!window.confirm('Șterge subiectul?')) {
      return;
    }

    deleteSubject(id).then(() => {
      setData(data.filter(({ _id }) => _id !== id));
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {SUBJECTS_LIST_PAGE}
      </Typography>
      <Box mb={1}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/subject"
        >
          Adaugă subiect
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nume</TableCell>
              <TableCell align="right">Puncte</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.points}</TableCell>
                <TableCell align="right">
                  <IconButton component={Link} to={`/subject/${row._id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={onRemoveSubject(row._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SubjectsList;

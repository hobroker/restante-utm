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
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { SITUATIONS_LIST_PAGE } from '../constants/pages';
import useApiData from '../hooks/useApiData';
import { deleteSituation, getSituations } from '../api/situations';

const SituationsList = () => {
  const [data, setData] = useApiData(getSituations(), []);

  const onRemoveSituation = id => () => {
    if (!window.confirm('Șterge restanța?')) {
      return;
    }

    deleteSituation(id).then(() => {
      setData(data.filter(({ _id }) => _id !== id));
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {SITUATIONS_LIST_PAGE}
      </Typography>
      <Box mb={1}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/situation"
        >
          Adaugă restanță
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Subiect</TableCell>
              <TableCell>Stare</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row._id}>
                <TableCell>{row.studentId.name}</TableCell>
                <TableCell>{row.subjectId.name}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>
                  <IconButton component={Link} to={`/situation/${row._id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={onRemoveSituation(row._id)}>
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

export default SituationsList;

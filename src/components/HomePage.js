import React, { useEffect, useState } from 'react';
import { getStudents } from '../api/students';
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
import { STUDENTS_LIST } from '../constants/pages';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStudents().then(setData);
  }, [setData]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {STUDENTS_LIST}
      </Typography>
      <Box mb={1}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/student"
        >
          Adaugă student
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nume</TableCell>
              <TableCell>Grupa</TableCell>
              <TableCell align="right">Anul</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.group}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HomePage;

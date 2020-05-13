import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateStudentPage from './components/CreateStudentPage';
import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/student">
            <CreateStudentPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';
import Subjects from './pages/Subjects';
import CreateSubject from './pages/CreateSubject';
import EditSubject from './pages/EditSubject';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/student/:id">
            <EditStudent />
          </Route>
          <Route path="/student">
            <CreateStudent />
          </Route>
          <Route path="/subjects">
            <Subjects />
          </Route>
          <Route path="/subject/:id">
            <EditSubject />
          </Route>
          <Route path="/subject">
            <CreateSubject />
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

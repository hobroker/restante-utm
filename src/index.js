import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Students from './pages/StudentsList';
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';
import Subjects from './pages/Subjects';
import CreateSubject from './pages/CreateSubject';
import EditSubject from './pages/EditSubject';
import CreateSituation from './pages/CreateSituation';

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
          <Route path="/students">
            <Students />
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

          <Route path="/situation">
            <CreateSituation />
          </Route>

          <Route path="/">
            <Redirect to="/students" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

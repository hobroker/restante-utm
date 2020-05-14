import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Layout from './components/Layout';
import Students from './pages/StudentsList';
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';
import SubjectsList from './pages/SubjectsList';
import CreateSubject from './pages/CreateSubject';
import EditSubject from './pages/EditSubject';
import CreateSituation from './pages/CreateSituation';
import SituationsList from './pages/SituationsList';
import EditSituation from './pages/EditSituation';

ReactDOM.render(
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
          <SubjectsList />
        </Route>
        <Route path="/subject/:id">
          <EditSubject />
        </Route>
        <Route path="/subject">
          <CreateSubject />
        </Route>

        <Route path="/situations">
          <SituationsList />
        </Route>
        <Route path="/situation/:id">
          <EditSituation />
        </Route>
        <Route path="/situation">
          <CreateSituation />
        </Route>

        <Route path="/">
          <Redirect to="/students" />
        </Route>
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root'),
);

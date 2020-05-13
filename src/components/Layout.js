import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { STUDENTS_LIST_PAGE, TITLE } from '../constants/pages';

const appBarStyle = css`
  left: 240px;
`;

const drawerStyle = css`
  width: 240px;
`;

const mainStyle = css`
  padding-left: 255px;
  padding-right: 15px;
  padding-top: 79px;
  margin-bottom: 200px;
`;

const titleStyle = css`
  color: white;
  text-decoration: none;
`;

const Layout = ({ children }) => (
  <StylesProvider injectFirst>
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={appBarStyle}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            className={titleStyle}
          >
            {TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
        <Drawer variant="permanent" open className={drawerStyle}>
          <div className={drawerStyle}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary={STUDENTS_LIST_PAGE} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </nav>
      <main className={mainStyle}>{children}</main>
    </div>
  </StylesProvider>
);

export default Layout;

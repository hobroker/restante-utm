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

const appBarStyle = css`
  left: 240px;
`;

const drawerStyle = css`
  width: 240px;
`;

const mainStyle = css`
  padding-left: 255px;
  padding-top: 79px;
`;

const Layout = ({ children }) => {
  const drawer = (
    <div className={drawerStyle}>
      <List>
        <ListItem button>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <StylesProvider injectFirst>
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={appBarStyle}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav aria-label="mailbox folders">
          <Drawer variant="permanent" open>
            {drawer}
          </Drawer>
        </nav>
        <main className={mainStyle}>{children}</main>
      </div>
    </StylesProvider>
  );
};

export default Layout;

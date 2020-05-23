import http from 'http';
import path from 'path';
import express from 'express';
import { call, pipe } from 'ramda';
import { debugIt } from '../../util/debug';
import { whenDying } from '../death/helpers';
import { ensureDependencies, isWebApp } from '../cli/accessors';
import useMiddlewares from './util/useMiddlewares';
import useRoutes from './util/useRoutes';
import startServer from './util/startServer';
import getRoutes from './helpers/getRoutes';
import { getExpressConfig } from './accessors';

const Express = async (oxi, features) => {
  const { port, baseURL } = getExpressConfig(oxi);
  const routes = oxi(getRoutes(features));

  const createApp = pipe(call, useMiddlewares([]), useRoutes(routes));

  const app = createApp(express);
  const publicPath = path.join(__dirname, '../../../build');
  app.use(express.static(publicPath)).get('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
  const server = http.createServer(app);

  await startServer(port, server);
  debugIt('baseURL', baseURL);

  oxi(
    whenDying(() => {
      debugIt('stopping');

      return new Promise(server.close.bind(server));
    }),
  );

  return {
    express: {
      baseURL,
    },
  };
};

export default pipe(ensureDependencies([isWebApp]))(Express);

import bodyParser from 'body-parser';
import cors from 'cors';
import { curry, map, pipe } from 'ramda';
import { debugIt } from '../../../util/debug';

// issue: https://github.com/expressjs/morgan/issues/190
const morgan = require('morgan');

const morganMiddleware = morgan((tokens, req, res) =>
  pipe(
    map(key => tokens[key](req, res)),
    args => debugIt(...args),
  )(['method', 'url', 'status']),
);

const defaultMiddlewares = [cors(), bodyParser.json(), morganMiddleware];

const useMiddlewares = curry((middlewares, app) => {
  defaultMiddlewares
    .concat(middlewares)
    .forEach(middleware => app.use(middleware));

  return app;
});

export default useMiddlewares;

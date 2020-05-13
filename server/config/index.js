import dotenv from 'dotenv';
import { MONGO } from '../features/mongo/constants';
import { EXPRESS } from '../features/express/constants';

const env = dotenv.config().parsed;

const config = {
  env: env.NODE_ENV,
  features: {
    [EXPRESS]: {
      baseURL: 'http://localhost:8081',
      port: 8081,
      prefix: '/api',
    },
    [MONGO]: {
      connectionString: 'mongodb://root:root@lucy.hobroker.com:27300/admin'
    }
  },
};

export default config;

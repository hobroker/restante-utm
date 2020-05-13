import { pipe } from 'ramda';
import { addRoutes } from '../express/accessors';
import { setModels } from '../mongo/accessors';
import * as models from './models';
import authRoutes from './routes/student';

const Spotify = async oxi => {
  return {};
};

export default pipe(setModels(models), addRoutes(authRoutes))(Spotify);

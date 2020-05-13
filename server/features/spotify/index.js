import { pipe } from 'ramda';
import { addRoutes } from '../express/accessors';
import { setModels } from '../mongo/accessors';
import * as models from './models';
import studentRoutes from './routes/student';
import situationRoutes from './routes/situation';
import subjectRoutes from './routes/subject';

const Spotify = async oxi => {
  return {};
};

export default pipe(
  setModels(models),
  addRoutes(studentRoutes),
  addRoutes(subjectRoutes),
  addRoutes(situationRoutes),
)(Spotify);

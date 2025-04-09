import { Express } from 'express';
import * as R from '../routers';

export const setupRouters = (app: Express, ...args: any[]) => {
  return app.use('/test', R.testRouter(...args)).use('/auth', R.authRouter(...args));
};

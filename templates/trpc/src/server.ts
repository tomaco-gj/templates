import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './context';
import { router } from './router';

const app = express();

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router,
    createContext,
  }),
);

export {
  app,
};

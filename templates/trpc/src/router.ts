import * as trpc from '@trpc/server';

const router = trpc.router().query('hello', {
  resolve() {
    return 'Hello world';
  },
});

export {
  router,
};

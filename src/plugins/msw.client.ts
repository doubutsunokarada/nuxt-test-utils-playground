import { worker } from '../mocks/browser';

export default defineNuxtPlugin(async () => {
  console.log('msw');
  worker.start();
});

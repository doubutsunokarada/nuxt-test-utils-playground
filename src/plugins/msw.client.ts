import { worker } from '../mocks/browser';

export default defineNuxtPlugin(async () => {
  worker.start();
});

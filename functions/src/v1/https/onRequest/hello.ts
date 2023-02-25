import functions from '../../../utils/firebase/baseFunction';
import { logger } from '../../../utils/firebase/logger';

export const hello = () =>
  functions().https.onRequest((request, response) => {
    const log = 'Hello from Firebase Functions';
    logger.debug('log', { log });
    response.json(log);
  });

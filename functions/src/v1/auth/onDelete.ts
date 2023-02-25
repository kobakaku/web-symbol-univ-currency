import functions from '../../utils/firebase/baseFunction';
import { logger } from '../../utils/firebase/logger';
import { triggerOnce } from '../../utils/firebase/triggerOnce';
import { deleteUser } from '../firestore/user/model';

export const onDelete = () =>
  functions()
    .auth.user()
    .onDelete(
      triggerOnce('v1-auth-onDelete', async (userRecord, context) => {
        logger.debug({
          userRecord,
        });
        const userId = userRecord.uid;
        logger.debug({ userId });
        await deleteUser(userId);
      })
    );

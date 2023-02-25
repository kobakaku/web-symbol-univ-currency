import functions from '../../../utils/firebase/baseFunction';
import { triggerOnce } from '../../../utils/firebase/triggerOnce';
import { snapshotToUser } from './model';
import { firestorePath } from '../path';

export const onDelete = () =>
  functions()
    .firestore.document(firestorePath.v1.users.path.docOnTrigger)
    .onDelete(
      triggerOnce('v1-firestore-user-onDelete', async (snapshot, context) => {
        console.log(`user ${context.params.userId} deleted.`);
        const deletedUser = await snapshotToUser(snapshot);
        console.log(deletedUser);
      })
    );

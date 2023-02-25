import functions from '../../../utils/firebase/baseFunction';
import { firestorePath } from '../path';
import { triggerOnce } from '../../../utils/firebase/triggerOnce';
import { snapshotToUser } from './model';

export const onCreate = () =>
  functions()
    .firestore.document(firestorePath.v1.users.path.docOnTrigger)
    .onCreate(
      triggerOnce('v1-firestore-user-onCreate', async (snapshot, context) => {
        console.log(`user ${context.params.userId} created.`);
        const user = await snapshotToUser(snapshot);
        console.log(user);
      })
    );

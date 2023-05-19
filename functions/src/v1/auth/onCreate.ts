import functions from '../../utils/firebase/baseFunction';
import { triggerOnce } from '../../utils/firebase/triggerOnce';
import { setUser, User } from '../firestore/user/model';

export const onCreate = () =>
  functions()
    .auth.user()
    .onCreate(
      triggerOnce('v1-auth-onCreate', async (userRecord, context) => {
        console.log(`user ${userRecord.uid} created.`);

        const now = new Date();
        const user: User = {
          id: userRecord.uid,
          name: userRecord.displayName ?? '',
          photoUrl: userRecord.photoURL ?? '',
          bio: '',
          provider:
            userRecord.providerData[0].providerId === 'google.com'
              ? 'google'
              : userRecord.providerData[0].providerId === 'twitter'
              ? 'twitter'
              : userRecord.providerData[0].providerId === 'github.com'
              ? 'github'
              : '',
          google: userRecord.providerData[0].providerId === 'google.com' ? userRecord.providerData[0].displayName : '',
          twitter: userRecord.providerData[0].providerId === 'twitter' ? userRecord.providerData[0].displayName : '',
          github: userRecord.providerData[0].providerId === 'github.com' ? userRecord.providerData[0].displayName : '',
          createdAt: now,
          updatedAt: now,
        };

        await setUser(user);
      })
    );

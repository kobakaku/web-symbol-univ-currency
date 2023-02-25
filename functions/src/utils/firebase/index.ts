import * as admin from 'firebase-admin';

export const app = admin.initializeApp();
export const db = app.firestore();
db.settings({ ignoreUndefinedProperties: true });

export const zfieldValue = admin.firestore.FieldValue;

export const Timestamp = admin.firestore.Timestamp;

import { EventContext } from 'firebase-functions';
import { db } from '.';
import { FieldValue } from '@google-cloud/firestore';

const hasAlreadyTriggered = (eventID: string, suffix: string): Promise<boolean> => {
  const id = [eventID, suffix].join('-');
  return db.runTransaction(async (t) => {
    const ref = db.collection('triggerEvents').doc(id);
    const doc = await t.get(ref);
    if (doc.exists) {
      return true;
    } else {
      t.set(ref, { createTime: FieldValue.serverTimestamp() });
      return false;
    }
  });
};

export const triggerOnce =
  <T>(
    suffix: string,
    handler: (data: T, context: EventContext) => PromiseLike<any> | any
  ): ((data: T, context: EventContext) => PromiseLike<any> | any) =>
  async (data, context) => {
    if (await hasAlreadyTriggered(context.eventId, suffix)) {
      return undefined;
    }
    return handler(data, context);
  };

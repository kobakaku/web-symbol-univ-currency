import functions from '../../../utils/firebase/baseFunction';

export const hello = () =>
  functions()
    .runWith({ memory: '1GB' })
    .pubsub.schedule('every 1 minutes')
    .timeZone('Asia/Tokyo')
    .onRun((context) => {
      console.log(context);
      console.log('Hello logs from pubsub schedule!');
    });

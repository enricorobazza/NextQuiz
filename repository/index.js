import * as admin from 'firebase-admin';
import serviceAccount from '../config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json';

let db = null;

const getInstance = () => {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://next-quiz.firebaseio.com',
    });
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error('Firebase admin initialization error', error.stack);
      return null;
    }
  }
  return admin.firestore();
};

export default getInstance;

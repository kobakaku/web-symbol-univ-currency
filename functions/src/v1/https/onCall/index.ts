import { HttpsFunction, Runnable } from 'firebase-functions';
import { exportFunction } from '../../../utils/firebase/deploy';
import { hello } from './hello';

const _exportFunction = (name: string, f: () => HttpsFunction & Runnable<any>) =>
  exportFunction(['v1', 'https', 'onCall', name], exports, f);

_exportFunction('hello', hello);

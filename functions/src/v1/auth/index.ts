import { HttpsFunction } from 'firebase-functions';
import { exportFunction } from '../../utils/firebase/deploy';
import { onDelete } from './onDelete';
import { onCreate } from './onCreate';

const _exportFunction = (name: string, f: () => HttpsFunction) => exportFunction(['v1', 'auth', name], exports, f);

_exportFunction('onCreate', onCreate);
_exportFunction('onDelete', onDelete);

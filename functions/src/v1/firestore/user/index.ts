import { exportFunction } from '../../../utils/firebase/deploy';
import { Change, CloudFunction } from 'firebase-functions';
import { QueryDocumentSnapshot } from 'firebase-functions/lib/v1/providers/firestore';
import { onCreate } from './onCreate';
import { onUpdate } from './onUpdate';
import { onDelete } from './onDelete';

const _exportFunction = (
  name: string,
  f: () => CloudFunction<QueryDocumentSnapshot> | CloudFunction<Change<QueryDocumentSnapshot>>
) => exportFunction(['v1', 'firestore', 'user', name], exports, f);

_exportFunction('onCreate', onCreate);
_exportFunction('onUpdate', onUpdate);
_exportFunction('onDelete', onDelete);

import { CloudFunction } from 'firebase-functions';
import { ObjectMetadata } from 'firebase-functions/v1/storage';
import { exportFunction } from '../../utils/firebase/deploy';
import { onArchive } from './onArchive';
import { onFinalize } from './onFinalize';
import { onMetadataUpdate } from './onMetadataUpdate';
import { onDelete } from './onDelete';

const _exportFunction = (name: string, f: () => CloudFunction<ObjectMetadata>) =>
  exportFunction(['v1', 'storage', name], exports, f);

_exportFunction('onArchive', onArchive);
_exportFunction('onFinalize', onFinalize);
_exportFunction('onMetadataUpdate', onMetadataUpdate);
_exportFunction('onDelete', onDelete);

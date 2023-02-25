import functions from '../../utils/firebase/baseFunction';

export const onMetadataUpdate = () =>
  functions()
    .storage.object()
    .onMetadataUpdate((_objectMetadata, _context) => {
      console.log(_objectMetadata, _context);
    });

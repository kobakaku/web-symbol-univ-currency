import functions from '../../utils/firebase/baseFunction';

export const onArchive = () =>
  functions()
    .storage.object()
    .onArchive((_objectMetadata, _context) => {
      console.log(_objectMetadata, _context);
    });

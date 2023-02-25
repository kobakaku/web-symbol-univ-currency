import functions from '../../utils/firebase/baseFunction';

export const onDelete = () =>
  functions()
    .storage.object()
    .onDelete((_objectMetadata, _context) => {
      console.log(_objectMetadata, _context);
    });

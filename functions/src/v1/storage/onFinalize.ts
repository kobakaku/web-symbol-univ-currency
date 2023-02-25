import functions from '../../utils/firebase/baseFunction';

export const onFinalize = () =>
  functions()
    .storage.object()
    .onFinalize((_objectMetadata, _context) => {
      console.log(_objectMetadata, _context);
    });

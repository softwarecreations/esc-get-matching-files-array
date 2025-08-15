import fs from 'node:fs';
import path from 'node:path';

export const getMatchingFilesA = (dirPath, filenameRegex = /\.m?js$/) => (fs.readdirSync( dirPath, { withFileTypes: true } ).flatMap( fileO => {
  const absPath = path.join( dirPath, fileO.name );
  return fileO.isDirectory() ? getFilesA( absPath ) : filenameRegex.test( fileO.name ) ? [ absPath ] : [];
} ));

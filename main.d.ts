/**
 * Recursively gets an array of files matching the provided regex in the given directory.
 * @param dirPath Absolute or relative directory path to search.
 * @param filenameRegex Optional. Regex to match filenames. Defaults to /\.m?js$/.
 * @returns Array of absolute file paths that match the pattern.
 */
export declare function getMatchingFilesA(
  dirPath: string, 
  filenameRegex?: RegExp
): string[];

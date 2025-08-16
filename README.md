# esc-get-matching-files-array

A synchronous function that returns an array of files matching a regex pattern, recursively in a specified directory.

## Want async version?

[esc-get-matching-files-array-async](https://www.npmjs.com/package/esc-get-matching-files-array-async)

## Features

- **No dependencies**
- **Stable API**
- **Simple**
- **Small: 367 bytes, 3 lines of code**
- **Easy to audit**

No breaking changes. If something radically different is needed, a new package will be made instead.

## Inspired by

- `glob`

The problems with glob are (as of 2025-08-15)

* 6 Dependencies
* 475KiB of code. What the actual fuck?
* Slow in some situations
* Hard to audit and trust
* Over-complicated
* Subject to change: 11 major versions thus far

## Installation

```bash
npm install esc-get-matching-files-array
```

## Usage

```js
import { getMatchingFilesA } from 'esc-get-matching-files-array';

const filesA = getMatchingFilesA('/some/path', /\.js$/);
console.log(filesA);
```

## API

### `getMatchingFilesA(dirPath: string, filenameRegex?: RegExp): string[]`

- **dirPath**: Directory to start searching from (string).
- **filenameRegex**: Optional. Regex to match file names. Defaults to `/\.m?js$/`.

Returns an array of absolute file paths matching the pattern.

## License

MIT

---

:star: Star the repo:  
https://github.com/softwarecreations/esc-get-matching-files-array

PRs and issues are welcome!

Have fun!

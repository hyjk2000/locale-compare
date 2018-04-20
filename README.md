# locale-compare

[![npm](https://img.shields.io/npm/v/locale-compare.svg?style=flat-square)](https://www.npmjs.com/package/locale-compare)

Locale-aware string comparison with [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator) and [`localeCompare`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) fallback.

## Usage

```javascript
// ES6 Modules (Babel)

import localeCompare from "locale-compare";

const compare = localeCompare();
const compareInSwedish = localeCompare("sv");

// CommonJS (Node.js):

var compare = require("locale-compare")();
var compareInSwedish = require("locale-compare")("sv");

// Use with Array.sort

["ä", "z"].sort(compare);
["ä", "z"].sort(compareInSwedish);
```

## License

[MIT](https://github.com/hyjk2000/locale-compare/blob/master/LICENSE)

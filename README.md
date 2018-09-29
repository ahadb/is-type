# is-type
Small type checking library for Node and the browser.

## Overview

Use this module when you need to determine what type a value is. Works in the browser, Node and AMD.

##Installation

```javascript
npm i is-type --save-dev
```

## Usage

Simply require the `is-type` module. The export function can be used in any module you desire:

```javascript
const is = require('is-type');
is.undefined(undefined);
is.null(null);
is.nan(90);
is.number(10.2343);
is.infinite([]);
is.object(Object.create(null));
is.string(`helloworld`);
is.func(1);
is.number(1e10);
is.promise(p)
is.regex(true);
is.integer(3.1112);
is.symbol(sym);
```

## Tests

This module uses gulp for eslint, mocha, and code coverage tools.

Run `gulp init`

## Related Modules

* [node-range](https://github.com/ahadb/node-range)
* [first-of-array](https://github.com/ahadb/first-of-array)
* [last-of-array](https://github.com/ahadb/last-of-array)
* [node-camel-case](https://github.com/ahadb/node-camel-case)

## Contributing

Feel free to file an issue or bug.




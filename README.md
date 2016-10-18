# is-type
Small type checking library for Node and the browser.

##Overview

Use this module when you need to determine what type a value is. Works in the browser, Node and AMD.

##Installing 

```javascript
npm i is-type --save-dev
```

##Usage

Simply require the `is-type` module. The export function can be used in any module you desire:

```javascript
const is = require('is-type');
console.log(is.undefined(undefined));
console.log(is.null(null));
console.log(is.nan(90));
console.log(is.number(10.2343));
console.log(is.infinite([]));
console.log(is.object(Object.create(null)));
console.log(is.string(`helloworld`));
console.log(is.func(1));
console.log(is.number(1e10));
console.log(is.promise(p));
console.log(is.regex(true));
console.log(is.integer(3.1112));
console.log(is.symbol(sym));
```

##TODO

Add tests..

##Tests

This module uses gulp for eslint, mocha, and code coverage tools.

Run `gulp init`


```javascript
// wip
```

##Related Modules

* [node-range](https://github.com/ahadb/node-range)
* [first-of-array](https://github.com/ahadb/first-of-array)
* [last-of-array](https://github.com/ahadb/last-of-array)
* [node-camel-case](https://github.com/ahadb/node-camel-case)

##Contributing

Feel free to file an issue or bug.




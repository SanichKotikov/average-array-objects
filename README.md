Simple calculation of average values for an array of objects.   
Note:
used [Array.prototype.includes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
and [Number.isFinite()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite).

## Install

```
$ npm i average-array-objects --save
```

## Usage

```js
import getAverages from 'average-array-objects';

const rows = [
    { id: 1, a: 456, b: 635, c: 682 },
    { id: 2, a: 100, b: 99, c: 33 },
    { id: 3, a: 283, b: 238, c: 123 },
];

const skip = ['id'];

const result = getAverages(rows, skip);
// ==> {"a":279.6666666666667,"b":324,"c":279.3333333333333}
```

## License

MIT

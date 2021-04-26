[@aureooms/js-fliplist](https://make-github-pseudonymous-again.github.io/js-fliplist)
==

Flip list data structure for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-fliplist/index.html).

```js
const a = new FlipList( range(10000) );
const b = new FlipList( range(1, 20001) );
b.reverse();
a.extend(b);
a.reverse();
a.reversebetween(a.begin().next(), a.end().prev());
[...a]; 1, 1, 2, ..., 9999, 20000, ..., 3, 2, 0
```

[![License](https://img.shields.io/github/license/aureooms/js-fliplist.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-fliplist/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-fliplist.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-fliplist)
[![Build status](https://img.shields.io/travis/aureooms/js-fliplist.svg?style=flat)](https://travis-ci.org/aureooms/js-fliplist)
[![Coverage status](https://img.shields.io/coveralls/aureooms/js-fliplist.svg?style=flat)](https://coveralls.io/r/aureooms/js-fliplist)
[![Dependencies status](https://img.shields.io/david/aureooms/js-fliplist.svg?style=flat)](https://david-dm.org/aureooms/js-fliplist#info=dependencies)
[![Dev dependencies status](https://img.shields.io/david/dev/aureooms/js-fliplist.svg?style=flat)](https://david-dm.org/aureooms/js-fliplist#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-fliplist.svg?style=flat)](https://codeclimate.com/github/aureooms/js-fliplist)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-fliplist.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-fliplist)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-fliplist.svg?style=flat)](https://github.com/aureooms/js-fliplist/issues)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-fliplist/badge.svg)](https://make-github-pseudonymous-again.github.io/js-fliplist/source.html)

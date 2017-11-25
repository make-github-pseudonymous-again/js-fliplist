import test from 'ava';

import { range } from '@aureooms/js-itertools' ;

import FlipList from '../../src' ;

test( '[...FlipList]' , t => {

	const n = 100;
	const list = new FlipList(range(n));
	t.deepEqual( [...list] , [...range(n)] );

});

test( 'reverse' , t => {

	const n = 100;
	const list = new FlipList(range(1, n+1));
	list.reverse();
	t.deepEqual( [...list] , [...range(n,0,-1)] );

});

test( 'reverse reverse' , t => {

	const n = 100;
	const list = new FlipList(range(n));
	list.reverse();
	list.reverse();
	t.deepEqual( [...list] , [...range(n)] );

});

test( 'reverse sublist' , t => {

	const n = 100;
	const list = new FlipList(range(1, n+1));

	let left = list.begin();
	left = left.next();

	let right = list.end();
	right = right.prev();

	list.reversebetween(left, right);
	t.deepEqual( [...list] , [1, ...range(n-1,1,-1), n] );

});

test( 'extend' , t => {

	const m = 80;
	const n = 70;

	const a = new FlipList(range(m));
	const b = new FlipList(range(n));

	a.extend(b);

	t.deepEqual( [...a] , [ ...range(m) , ...range(n) ]);

});

test( 'reverse first and extend' , t => {

	const m = 80;
	const n = 70;

	const a = new FlipList(range(m));
	const b = new FlipList(range(n));

	a.reverse();

	a.extend(b);

	t.deepEqual( [...a] , [ ...range(m-1,-1,-1) , ...range(n) ]);

});


test( 'reverse second and extend' , t => {

	const m = 80;
	const n = 70;

	const a = new FlipList(range(m));
	const b = new FlipList(range(n));

	b.reverse();

	a.extend(b);

	t.deepEqual( [...a] , [ ...range(m) , ...range(n-1,-1,-1) ]);

});

test( 'extend and reverse' , t => {

	const m = 80;
	const n = 70;

	const a = new FlipList(range(m));
	const b = new FlipList(range(n));

	a.extend(b);

	a.reverse();

	t.deepEqual( [...a] , [ ...range(n-1,-1,-1) , ...range(m-1,-1,-1) ]);

});

test( 'reverse both, extend and reverse' , t => {

	const m = 80;
	const n = 70;

	const a = new FlipList(range(m));
	const b = new FlipList(range(n));

	a.reverse();
	b.reverse();

	a.extend(b);

	a.reverse();

	t.deepEqual( [...a] , [ ...range(n) , ...range(m) ]);

});

test( 'complex reverse pattern' , t => {

	const list = new FlipList('abcdef');

	let left = list.begin();
	let right = list.end();

	list.reversebetween(left.skip(2), right.rewind(2));

	t.deepEqual( [...list], [...'abdcef'] );

	list.reversebetween(left.next(), right.prev())

	t.deepEqual( [...list], [...'aecdbf'] );

	list.reversebetween(left, right.rewind(3));

	t.deepEqual( [...list], [...'ceadbf'] );

	list.reversebetween(left.reversed(), right); // is this what we want?

	t.deepEqual( [...list], [...'cefbda'] ); // is this what we want?

});

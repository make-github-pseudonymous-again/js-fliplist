// when traversing a node, make it valid again and update direction
// or use union find ds

import { Node } from './Node' ;
import { ValidityToken } from './ValidityToken' ;
import { Direction } from './Direction' ;

export class FlipList {

	constructor () {

		this.head = new Node(null, null, null);
		this.tail = new Node(this.head, null, null);
		this.head.fw = this.tail;

		this.fd = new Direction(false);
		this.bd = new Direction(true);
		this.validity = new ValidityToken(true);

	}

	first ( ) {
		return this.head.bw !== null ? this.head.bw : this.head.fw ;
	}

	last ( ) {
		return this.tail.bw !== null ? this.tail.bw : this.tail.fw ;
	}

	begin ( ) {
		return new Iterator(this, this.head, null, false);
	}

	end ( ) {
		return new Iterator(this, this.tail, null, false);
	}

	rbegin ( ) {
		return new ReverseIterator(this, this.tail, null, false);
	}

	rend ( ) {
		return new ReverseIterator(this, this.head, null, false);
	}

	// assert valid
	insert_before (node, value) {

	}

	// assert valid
	insert_after (node, value) {

	}

	append (value) {

		const last = this.last();
		const tail = this.tail;
		const node = new Node(last, tail, value);

		if (last.bw === tail) last.bw = node;
		else last.fw = node;

		if (tail.bw !== null) tail.bw = node;
		else tail.fw = node;

		return node;

	}

	prepend (value) {

		const first = this.first();
		const head = this.head;
		const node = new Node(head, first, value);

		if (first.bw === head) first.bw = node;
		else first.fw = node;

		if (head.bw !== null) head.bw = node;
		else head.fw = node;

		return node;

	}

	extend (other) {

		// invalidate all iterators to nodes in other list
		other.valid = false;

		// compute last element of this === previous of this.tail
		const thislast = this.last() ;
		// compute first element of other === next of other.head
		const otherfirst = other.first() ;
		// compute last element of other === previous of other.tail
		const otherlast = other.last() ;

		// make thislast next point to otherfirst
		if (thislast.bw === this.tail) thislast.bw = otherfirst;
		else thislast.fw = otherfirst;

		// make otherfirst prev point to thislast
		if (otherfirst.bw === other.head) otherfirst.bw = thislast;
		else otherfirst.fw = thislast;

		// make this.tail prev point to otherlast
		if (this.tail.bw !== null) this.tail.bw = otherlast;
		else this.tail.fw = otherlast;

		// make otherlast next point to this.tail
		if (otherlast.bw === other.tail) otherlast.bw = this.tail;
		else otherlast.fw = this.tail;

	}

	reverse () {

		// reverse head and tail pointers
		const head = this.head;
		this.head = this.tail;
		this.tail = head;

		// reverse iterator directions
		this.reversed = !this.reversed;

	}

}

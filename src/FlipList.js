import { Node } from './Node' ;
import { Iterator } from './Iterator' ;

export default class FlipList {

	constructor ( iterable = null ) {
		/**
		 *  head  -> tail
		 *    |        |
		 *  rtail <- rhead
		 */
		this.head = new Node(null);
		this.rtail = new Node(null);
		this.tail = new Node(null);
		this.rhead = new Node(null);
		this.head.sibling = this.rtail;
		this.rtail.sibling = this.head;
		this.rhead.sibling = this.tail;
		this.tail.sibling = this.rhead;
		this.head.next = this.tail;
		this.rhead.next = this.rtail;

		if ( iterable ) for ( const value of iterable ) this.append(value);
	}

	reverse ( ) {
		const head = this.head;
		const tail = this.tail;
		this.head = this.rhead;
		this.tail = this.rtail;
		this.rhead = head;
		this.rtail = tail;
	}

	reversebetween ( itleft , itright ) {

		const left = itleft.node;
		const right = itright.node;

		left.sibling.next.sibling.next = right.sibling.next;
		right.sibling.next.sibling.next = left.sibling.next;
		right.sibling.next = left;
		left.sibling.next = right;

	}

	*[Symbol.iterator] ( ) {
		let node = this.head;
		while (node.next !== this.tail) {
			node = node.next;
			yield node.value;
		}
	}

	prepend ( value ) {

		const forward = new Node(value);
		const backward = new Node(value);

		forward.next = this.head.next;
		backward.next = this.rtail;

		forward.sibling = backward;
		backward.sibling = forward;

		this.head.next = forward;
		forward.next.sibling.next = backward;

	}

	append ( value ) {

		const forward = new Node(value);
		const backward = new Node(value);

		forward.next = this.tail;
		backward.next = this.rhead.next;

		forward.sibling = backward;
		backward.sibling = forward;

		this.rhead.next = backward;
		backward.next.sibling.next = forward;

	}

	extend ( other ) {
		this.rhead.next.sibling.next = other.head.next;
		other.head.next.sibling.next = this.rhead.next;

		this.tail = other.tail;
		this.rhead = other.rhead;
	}

	begin ( ) {
		return new Iterator( this.head.next ) ;
	}

	rbegin ( ) {
		return new Iterator( this.rhead.next ) ;
	}

	end ( ) {
		return new Iterator( this.tail ) ;
	}

	rend ( ) {
		return new Iterator( this.rtail ) ;
	}

}

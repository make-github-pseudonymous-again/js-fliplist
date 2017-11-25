
export class Iterator {

	constructor ( node ) {
		this.node = node;
	}

	next ( ) {
		return new Iterator( this.node.next ) ;
	}

	prev ( ) {
		return new Iterator( this.node.sibling.next.sibling ) ;
	}

	value ( ) {
		return this.node.value ;
	}

	reversed ( ) {
		return new Iterator( this.node.sibling ) ;
	}

	skip ( n ) {

		let node = this.node;

		for ( let i = 0 ; i < n ; ++i ) node = node.next;

		return new Iterator( node ) ;

	}

	rewind ( n ) {

		let node = this.node.sibling;

		for ( let i = 0 ; i < n ; ++i ) node = node.next;

		return new Iterator( node.sibling ) ;

	}

}

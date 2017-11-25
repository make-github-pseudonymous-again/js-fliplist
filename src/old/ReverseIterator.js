
export class ReverseIterator {

	constructor (parent, node, value, done) {
		this.parent = parent;
		this.current = current;
		this.value = value;
		this.done = done;
	}

	valid (){
		return this.parent.valid;
	}

	next (){
		if (this.parent.reversed) {
			return new ReverseIterator(this.parent, this.node.yang, this.node.value, this.node.yang === null);
		}
		else {
			return new ReverseIterator(this.parent, this.node.ying, this.node.value, this.node.ying === null);
		}
	}

}

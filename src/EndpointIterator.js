
export class HeadIterator {

	constructor (direction, validity, node, value, done) {
		this.direction = direction;
		this.node = node;
		this.value = value;
		this.done = done;
		this.validity = validity;
	}

	valid () {
		return this.validity.valid;
	}

	next () {
		if (this.direction.reversed) {
			if (this.node.bw === null) {
				return { done : true } ;
			}
			else {
				return new InternalIterator(this.direction, this.previous)
			}
			if (this.node.fw === null) {
				return { done : true } ;
			}
			return new Iterator(this.direction, this.validity, this.node.fw, this.node.value, this.node.fw === null);
		}
		else {
			return new Iterator(this.direction, this.validity, this.node.bw, this.node.value, this.node.bw === null);
		}
	}

}
